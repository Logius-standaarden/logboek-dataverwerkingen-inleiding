## Foutafhandeling in het Logboek Dataverwerkingen

Zelfs in de meest eenvoudige applicaties kunnen fouten optreden. Fouten kunnen ontstaan door bijvoorbeeld verkeerde invoer door de gebruiker, een fout in de software van de applicatie of een connectie met een andere applicatie die niet werkt. Deze sectie geeft een handreiking ten aanzien van de afhandeling van foutsituaties met betrekking tot het gebruik van het Logboek Dataverwerkingen.

<div class="note">

Let op: wanneer een gebruiker een verwerking bewust afbreekt, wordt dit niet als een fout beschouwd. Het is aan te raden om dit als een expliciete stap in het proces op te nemen, zodat deze handeling ook kan worden gelogd. In zulke gevallen krijgt de verwerking statuscode `STATUS_CODE_OK`, omdat er sprake is van een bewuste en correcte actie van de gebruiker. Meer informatie over status codes staat in het [normatief document](https://logius-standaarden.github.io/logboek-dataverwerkingen/#interface).

</div>

### Uitgangspunten registratie foutsituaties

De volgende punten zijn belangrijk in het ontwerpen en implementeren van de registratie van foutsituaties in relatie tot het Logboek Dataverwerkingen:

* Gebruik zoveel mogelijk de standaardfoutmethodes van de gebruikte ontwikkeltaal. Bijvoorbeeld de Java SDK van OpenTelemetry gebruikt [RecordException](https://github.com/open-telemetry/opentelemetry-java/blob/cc2844d86745544f5076db72800f411fc4ee4fb0/api/all/src/main/java/io/opentelemetry/api/trace/Span.java#L338)

* Foutdata moeten worden gerelateerd aan een `trace_id` en `span_id`.

* Het is toegestaan de foutsituatie te registreren als transactie (Span) in het Logboek Dataverwerkingen **of** te integreren in een foutenlog **buiten** het Logboek Dataverwerkingen. Beiden hebben voor- en nadelen:
  
  * **In het Logboek Dataverwerkingen**:  
    **Voordeel:** Alle transacties staan bij elkaar en fouten zijn te herkennen door `name` (=exception) en `status_code` (=error).  
    **Nadeel:** Er moet een trigger zijn, zodat de beheerder ingelicht wordt dat er een foutsituatie is ontstaan. Als er een grote hoeveelheid logregels zijn, is het zoeken lastig.

  * **Buiten het Logboek Dataverwerkingen**:  
    **Voordeel:** Alle foutsituaties staan gecentraliseerd opgeslagen waardoor monitoring eenvoudiger is.  
    **Nadeel:** Foutsituaties moeten worden gekoppeld aan `trace_id` en `span_id`. Dit betekent een extra inspanning om de foutsituatie te registreren.

* Als er een foutsituatie optreedt, moeten de foutdata worden geregistreerd als een transactie als er voor gekozen wordt dat een foutsituatie in het Logboek Dataverwerkingen wordt opgeslagen.

* De software van de applicatie die de registratie van de logdata registreert, moet er voor zorgen dat er geen fout optreedt in 'run-time'.  Bijvoorbeeld als `name` leeg is, moet deze automatisch worden gevuld met een waarde zodat er in ieder geval op dit punt geen fout kan optreden.

* De software moet voorbereid zijn op fouten in binnenkomende berichten waarbij velden niet leeg mogen zijn.  Er moet een mechanisme zijn om de lege velden te vullen en een 'crash' te voorkomen.

### Header

Als een fout gerelateerd aan een Span wordt geregistreerd, dan moet er in de Header de volgende zaken worden opgeslagen:

<pre class="nohighlight"><code>name = "exception"
status_code = "error"
</code></pre>

De overige gegevens in de Header worden ingevuld zoals bij een reguliere verwerking.

### Attributes

Specifieke foutdata worden opgeslagen als velden in [`attributes`](https://logius-standaarden.github.io/logboek-dataverwerkingen/#interface):

| **Veld**              | **Type** | **Optioneel**                             | **Omschrijving**                                              | **Voorbeeld**                                             |
|-----------------------|----------|-------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------|
| exception.message     | String   | Verplicht als `exception.type` leeg is.   | Foutmelding                                                     | `Division by zero`|
| exception.type        | String   | Verplicht als `exception.message` leeg is.| Type foutmelding (idealiter een dynamische foutmelding)        | `java.net.ConnectException`|
| exception.stacktrace  | String   | Optioneel (gebruik is aan te raden)       | Volledige stacktrace (afhankelijk van programmeertaal)         |`Exception in thread "main" java.lang.RuntimeException...`|

### Datamodel in het geval van een fout

In geval van een fout gerelateerd aan een Span, ziet het datamodel er als volgt uit:

![Datamodel bij een foutgeval](./media/Datamodel_foutgeval.PNG)

### Voorbeeld registratie foutsituatie

Op basis van het bovenstaande datamodel, kan een foutregistratie er als volgt uitzien (in JSON):

```json
{
  "trace_id": "7bba9f33312b3dabc8f8e90c7c61f194",
  "span_id": "2a3f5c8d1e6b4a09",
  "status_code": "error",
  "name": "exception",
  "start_time": "2025-03-09T20:21:00Z",
  "end_time": "2025-03-09T20:23:00Z",
  "parent_span_id": "",
  "attributes": {
    "exception.type": "ValueError",
    "exception.message": "HTTP 500 error processing /api/v1/orders",
    "exception.stacktrace": "TimeoutException: Database connection failed"
  }
}
```
