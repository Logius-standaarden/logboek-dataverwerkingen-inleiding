# Voorbeelden

In dit hoofdstuk worden er voorbeelden beschreven van hoe de standaard gebruikt kan worden in verschillende scenario's om de lezer een beter beeld te geven van de standaard in zijn echte werking. Hierbij zijn er vier voorbeelden met elk een schets van de situatie, de uitgangspunten, het globale proces, de relatie tussen data, de relatie met het Logboek Dataverwerkingen en het gedrag van de applicatie.

## Parkeervergunning - inzien

### Situatieschets (Parkeervergunning - inzien)

Een persoon heeft bij een gemeente een parkeervergunning in gebruik en wil de data van deze vergunning bekijken.

### Uitgangspunten (Parkeervergunning - inzien)

* Het beschreven proces is een voorbeeld, het werkelijke proces kan anders verlopen.
* Het proces is een 'happy flow', dit betekent dat validaties en eventuele foutsituaties in dit voorbeeld niet in ogenschouw worden genomen.
* Autorisatieprocessen zijn in dit voorbeeld niet meegenomen.
* Een Loggingsregel wordt toegevoegd aan het logboek per **geheel** afgeronde transactie. Er wordt dus **geen** aparte logregel aangemaakt per ontvangen of verstuurd bericht.
* Een aantal data staan nog ter discussie (vanuit juridisch oogpunt). Voor de volledigheid worden een aantal data in dit voorbeeld meegenomen. Het betreft de data:
  * resource/name/version
  * receiver
  * dataSubject

### Globaal proces (Parkeervergunning - inzien)

1. Een persoon vraagt in zijn 'MijnOmgeving' van de gemeente om de bestaande parkeervergunningdata.
2. De 'MijnOmgeving' van de gemeente verzoekt de parkeervergunningapplicatie om de actuele parkeervergunningdata van de persoon.
3. Het parkeervergunningsysteem voert dit verzoek uit. Daarna verzendt de parkeervergunningapplicatie de gevraagde data naar de gemeente. Het parkeervergunningensysteem logt dat er data verzonden is naar de gemeente.
4. De gemeente toont de data aan de persoon en logt dat deze data is getoond aan de persoon.

Schematisch ziet dit proces er als volgt uit:

<img src="media/parkeervergunning-inzien.svg" alt="Schematische weergave parkeervergunning inzien" />

### Logging van data  (Parkeervergunning - inzien)

De volgende data worden gelogd in de diverse logmomenten:

* **Log opvragenVergunningen (log vergunningenapplicatie)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |8451dcd9ede037cb|
  | `name` |opvragenVergunningen|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |ccf5064a324163ed939bfa09c2bcb210|
  | `start_time` |2024-05-30 08:40:37.000|
  | `end_time` |2024-05-30 08:40:37.000|
  | `status_code` |OK|
  |resource.name |Parkeeradmin|
  |resource.version |2.1.6|
  |receiver| `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |rva:12f2ec2a-0cc4-3541-9ae6-219a178fcfe4|
  |attributeKey | `<leeg>` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |c7a26dcd0bee0c8900e2174c43c3393c|
  | `foreign_operation.span_id` | 9f8971bfd093637d|

* **Log opvragenVergunningen (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |9f8971bfd093637d|
  | `name` |tonenVergunningen|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c7a26dcd0bee0c8900e2174c43c3393c|
  | `start_time` |2024-05-30 10:40:37.821|
  | `end_time` |2024-05-30 10:40:37.845|
  | `status_code` |OK|
  |resource.name |MijnOmgeving|
  |resource.version |1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |rva:11x2ec2a-0774-3541-9b16-21ba179fcf15|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |rva:13j2ec27-0cc4-3541-9av6-219a178fcfe5|

### Relatie tussen data  (Parkeervergunning - inzien)

Om uiteindelijk alle data te kunnen rapporteren, is het van belang dat data op een bepaalde manier aan elkaar gekoppeld is. In dit voorbeeld is de data op de volgende manier gekoppeld:
![Alt text](./media/relatie-tussen-gegevens-parkeervergunning-inzien.png)

### Relatie met de standaard Logboek dataverwerkingen  (Parkeervergunning - inzien)

De relatie met de doelstellingen die gesteld zijn in de standaard Logboek dataverwerkingen worden, op basis van dit voorbeeld, als volgt concreet gerealiseerd:

* **het wegschrijven van logs van dataverwerkingen:** In dit voorbeeld is het de betrokkene zelf die via een portaal zijn eigen data kan bekijken. Deze actie is een dataverwerking en wordt gelogd bij zowel de gemeenteapplicatie (data wordt getoond aan de betrokkene) als bij de vergunningenapplicatie (verstrekking specifieke informatie aan de gemeenteapplicatie).
* **het aan elkaar relateren van logs van dataverwerkingen:** Er zijn in dit voorbeeld twee applicaties nodig om het totaal aan gevraagde informatie te kunnen tonen aan de betrokkene. Beide applicaties hebben een logboek voor verwerkte data. Om een totaalbeeld van de gelogde data te kunnen construeren, is een relatie tussen de logs nodig. In dit voorbeeld wordt de koppeling gelegd door het `span_id`Id en `trace_id` (gemeentelogboek) te linken aan het `foreign_operation.span_id` en `foreign_operation.trace_id` (vergunningenlogboek).
* **het aan elkaar relateren van dataverwerkingen over de grenzen van systemen:** Naast het koppelen van logs van diverse applicaties, wordt ook een koppeling gelegd met het Register van verwerkingsactiviteiten. Dit gebeurt per applicatie op basis van het `processing_activity_id` (register) te koppelen aan `dpl.core.processing_activity_id` (logboek). De diverse registers hebben **geen** directe koppeling met elkaar.

Standaard Logverwerkingen: **paragraaf 3.3.1 Gedrag**

1. *De applicatie MOET een Trace starten voor iedere Dataverwerking waarvan nog geen Trace bekend is.* Bij elke start van een verwerking wordt een `trace_id` aangemaakt. Bijvoorbeeld: in het voorbeeld komt er een bericht binnen bij de 'MijnOmgeving' van de gemeente (opvragenVergunningenVraag). Er wordt direct een `trace_id` aangemaakt.
2. *De applicatie MOET voor iedere Dataverwerking een logregel wegschrijven in een Logboek. Log Sampling is niet toegestaan.* Een dataverwerking wordt opgeslagen als deze volledig is afgerond. In het voorbeeld is te zien dat een logregel wordt geschreven op het moment dat de vraag- en het antwoordbericht zijn afgerond.
3. *De applicatie MOET bijhouden of een Dataverwerking geslaagd of mislukt is en dit per Dataverwerking als status meegeven aan het Logboek.* Bij elke logregel in het voorbeeld staat de `status_code` vermeld ('OK').
4. *Als een Dataverwerking meerdere Betrokkenen heeft dan MOET de applicatie voor iedere betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 betrokkenen verwijzen.* In het voorbeeld gaat het om één betrokkene (`dpl.core.data_subject_id`), er wordt steeds één logregel aangemaakt.
5. *Als een applicatie aangeroepen kan worden vanuit een andere applicatie MOET de applicatie Trace Context metadata accepteren bij een dergelijke aanroepen deze metadata kunnen omzetten naar een foreign_operation bericht.* Bij een externe verwerking (bijvoorbeeld opvragenVergunningen) geeft de 'MijnOmgeving' de `trace_id` en `span_id` mee aan de Vergunningenapplicatie. De vergunningenapplicatie registreert de `trace_id` en `span_id` beide als `foreign_operation`.

## Parkeervergunning - wijzigen

### Situatieschets (Parkeervergunning - wijzigen)

Een persoon heeft bij een gemeente een parkeervergunning in gebruik en wil de data van het kenteken van deze vergunning wijzigen.

### Uitgangspunten (Parkeervergunning - wijzigen)

* Het beschreven proces is een voorbeeld, het werkelijke proces kan anders verlopen.
* Het proces is een 'happy flow', dit betekent dat validaties en eventuele foutsituaties in dit voorbeeld niet in ogenschouw worden genomen.
* Autorisatieprocessen zijn in dit voorbeeld niet meegenomen.
* Een Loggingsregel wordt toegevoegd aan het logboek per **geheel** afgeronde transactie. Er wordt dus **geen** aparte logregel aangemaakt per ontvangen of verstuurd bericht.
* Een aantal data staan nog ter discussie (vanuit juridisch oogpunt). Voor de volledigheid worden een aantal data in dit voorbeeld meegenomen. Het betreft de data:
  * resource/name/version
  * receiver
  * dataSubject

### Globaal proces (Parkeervergunning - wijzigen)

1. Een persoon vraagt in zijn 'MijnOmgeving' van de gemeente om de bestaande parkeervergunningdata.
2. De 'MijnOmgeving' van de gemeente verzoekt de parkeervergunningapplicatie om de actuele parkeervergunningdata van de persoon.
3. De parkeervergunningapplicatie voert dit verzoek uit. Daarna verzendt de parkeervergunningapplicatie de gevraagde data naar de gemeente. De parkeervergunningapplicatie logt dat er data verzonden is naar de gemeente.
4. De gemeente toont de data aan de persoon en logt dat deze data is getoond aan de persoon.
5. De persoon wijzigt het kenteken in de 'MijnOmgeving' van de gemeente.
6. De 'MijnOmgeving' van de gemeente verzoekt de parkeervergunningapplicatie om de wijziging af te handelen.
7. De parkeervergunningapplicatie verzoekt het RDW te controleren of het kenteken ook daadwerkelijk bij de persoon hoort.
8. Het RDW stuurt een antwoord terug naar de parkeervergunningapplicatie en logt de dataverwerking.
9. De parkeervergunningapplicatie logt het controleverzoek aan het RDW.
10. De parkeervergunningapplicatie wijzigt het kenteken van de persoon en logt het wijzigingsverzoek van de persoon.
11. Nadat de wijziging is gedaan in de parkeervergunningapplicatie, wordt het wijzigingsverzoek gelogd in de 'MijnOmgeving' van de gemeente.
12. De persoon vraagt in zijn 'MijnOmgeving' van de gemeente om de bestaande parkeervergunningdata.
13. De 'MijnOmgeving' van de gemeente verzoekt de parkeervergunningapplicatie om de actuele parkeervergunningdata van de persoon.
14. De parkeervergunningapplicatie voert dit verzoek uit. Daarna verzendt de parkeervergunningapplicatie de gevraagde data naar de gemeente. De parkeervergunningapplicatie logt dat er data verzonden zijn naar de gemeente.
15. De gemeente toont de data aan de persoon en logt dat deze data is getoond aan de persoon.

Schematisch ziet dit proces er als volgt uit:

<img src="media/parkeervergunning-wijzigen.svg" alt="Schematische weergave parkeervergunning wijzigen" />

### Logging van data (Parkeervergunning - wijzigen)

De volgende data worden gelogd in de diverse logmomenten:

* **Log opvragenVergunningen (log vergunningenapplicatie)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` | 8ee7b01aca8d01d9 |
  | `name` |  opvragenVergunningen|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` | c6adf4df949d03c662b53e95debdc411|
  | `start_time` | 2024-07-29 08:16:49.000|
  | `end_time` | 2024-07-29 08:16:49.000|
  | `status_code` | OK|
  | resource.name | Parkeeradmin|
  | resource.version | 2.1.6|
  | receiver | `<leeg>` |
  | attributeKey | `dpl.core.processing_activity_id` |
  | attributeValue | 12f2ec2a-0cc4-3541-9ae6-219a178fcfe4|
  | attributeKey    | `<leeg>` |
  | attributeValue  | `<leeg>` |
  | `foreign_operation.trace_id` | bc9126aaae813fd491ee10bf870db292|
  | `foreign_operation.span_id` | b2e339a595246e01|

* **Log tonenVergunningen (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` | b2e339a595246e01|
  | `name` | tonenVergunningen|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` | bc9126aaae813fd491ee10bf870db292|
  | `start_time` | 2024-07-29 10:16:49.690|
  | `end_time` | 2024-07-29 10:16:49.723|
  | `status_code` | OK|
  | resource.name | MijnOmgeving|
  | resource.version | 1.0.5|
  | receiver | 27fdey98605etc48|
  | attributeKey | `dpl.core.processing_activity_id` |
  | attributeValue | 11x2ec2a-0774-3541-9b16-21ba179fcf15|
  | attributeKey | `dpl.core.data_subject_id` |
  | attributeValue | 13j2ec27-0cc4-3541-9av6-219a178fcfe5|

* **Log controlerenKenteken (log RDW)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |433f276975204ccf|
  | `name` |controlerenKenteken|
  | `parent_span_id`controlerenKenteken| `<leeg>` |
  | `trace_id` |8ccfd3c567c51d68937c263e00a352be|
  | `start_time` |2024-07-29 08:17:02|
  | `end_time` |2024-07-29 08:17:02|
  | `status_code` |OK|
  |resource.name |BRV|
  |resource.version |2.0|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |8c714e4a-a538-36f7-8b1f-37a6884cc68c|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |f176a58de7fe249ea37ed4f5979da02b|
  | `foreign_operation.span_id` |414514cf1d40d6b2|

* **Log controlerenKenteken (log vergunningenapplicatie)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |414514cf1d40d6b2|
  | `name` |controlerenKenteken|
  | `parent_span_id` |7a95b6989d2b28c7|
  | `trace_id` |f176a58de7fe249ea37ed4f5979da02b|
  | `start_time` |2024-07-29 08:17:02.000|
  | `end_time` |2024-07-29 08:17:02.000|
  | `status_code` |OK|
  |resource.name |Parkeeradmin|
  |resource.version |2.1.6|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |19u2dd2a-0cb7-3541-9ae6-217a178fc9e6|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |8a1325a32aef8de4ffba7d7c931eeaec|
  | `foreign_operation.span_id` |ba7cac7ca0489e42|

* **Log wijzigenKenteken (log vergunningenapplicatie)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |7a95b6989d2b28c7|
  | `name` |wijzigenKenteken|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |f176a58de7fe249ea37ed4f5979da02b|
  | `start_time` |2024-07-29 08:17:02.000|
  | `end_time` |2024-07-29 08:17:02.000|
  | `status_code` |OK|
  |resource.name |Parkeeradmin|
  |resource.version |2.1.6|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |0b1ff20a-3ecb-34bf-8cf5-e4cbacb046ab|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |c0a7a38d56f3f16a2163ca0071d3779a|
  | `foreign_operation.span_id` |df524ee2a3fd5ddf|

* **Log wijzigenKenteken (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |df524ee2a3fd5ddf|
  | `name` |wijzigenKenteken|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c0a7a38d56f3f16a2163ca0071d3779a|
  | `start_time` |2024-07-29 10:17:02.010|
  | `end_time` |2024-07-29 10:17:02.039|
  | `status_code` |OK|
  |resource.name |MijnOmgeving|
  |resource.version |1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |12c21c2a-0875-3543-9b16-21ja179fcf16|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |13j2ec27-0cc4-3541-9av6-219a178fcfe5|
  | `foreign_operation.trace_id` | `<leeg>` |
  | `foreign_operation.span_id` | `<leeg>` |

* **Log opvragenVergunningen (log vergunningenapplicatie)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |6042d706f53fec76|
  | `name` |opvragenVergunningen|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c6c2d53a5762d47779c57057d7983311|
  | `start_time` |2024-07-29 08:17:02.000|
  | `end_time` |2024-07-29 08:17:02.000|
  | `status_code` |OK|
  |resource.name |Parkeeradmin|
  |resource.version |2.1.6|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |12f2ec2a-0cc4-3541-9ae6-219a178fcfe4|
  |attributeKey | `<leeg>` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |8a1325a32aef8de4ffba7d7c931eeaec|
  | `foreign_operation.span_id` |ba7cac7ca0489e42|

* **Log tonenVergunningen (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |ba7cac7ca0489e42|
  | `name` |tonenVergunningen|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |8a1325a32aef8de4ffba7d7c931eeaec|
  | `start_time` |2024-07-29 10:17:02.274|
  | `end_time` |2024-07-29 10:17:02.291|
  | `status_code` |OK|
  |resource.name |MijnOmgeving|
  |resource.version |1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |11x2ec2a-0774-3541-9b16-21ba179fcf15|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |13j2ec27-0cc4-3541-9av6-219a178fcfe5|

### Relatie tussen data (Parkeervergunning - wijzigen)

Om uiteindelijk alle data te kunnen rapporteren, is het van belang dat data op een bepaalde manier aan elkaar gekoppeld is. In dit voorbeeld zijn de data op de volgende manier gekoppeld:
![Alt text](./media/relatie-tussen-gegevens-parkeervergunning-wijzigen.png)

### Relatie met de standaard Logboek Dataverwerkingen (Parkeervergunning - wijzigen)

De relatie met de doelstellingen die gesteld zijn in de standaard Logboek dataverwerkingen worden, op basis van dit voorbeeld, als volgt concreet gerealiseerd:

* **het wegschrijven van logs van dataverwerkingen:** In dit voorbeeld is het de betrokkene zelf die via een portaal zijn eigen data kan bekijken en wijzigen. Deze acties zijn dataverwerkingen en worden gelogd bij zowel de gemeenteapplicatie (data wordt getoond aan de betrokkene) als bij de vergunningenapplicatie (verstrekking specifieke informatie aan de gemeenteapplicatie).

* **het aan elkaar relateren van logs van dataverwerkingen:** Er zijn in dit voorbeeld twee applicaties nodig om het totaal aan gevraagde informatie te kunnen tonen aan de betrokkene. Beide applicaties hebben een logboek voor verwerkte data. Om een totaalbeeld van de gelogde data te kunnen construeren, is een relatie tussen de logs nodig. In dit voorbeeld wordt de koppeling gelegd door het `span_id` en `trace_id` (gemeentelogboek) te linken aan het `foreign_operation.span_id` en `foreign_operation.trace_id` (vergunningenlogboek).

* **het aan elkaar relateren van dataverwerkingen over de grenzen van systemen:** Naast het koppelen van logs van diverse applicaties, wordt ook een koppeling gelegd met het Register van verwerkingsactiviteiten. Dit gebeurt per applicatie op basis van het `processing_activity_id` (register) te koppelen aan `dpl.core.processing_activity_id` (logboek). De diverse registers hebben **geen** directe koppeling met elkaar.

#### Standaard Logverwerkingen paragraaf 3.3.1 Gedrag

1. *De applicatie MOET een Trace starten voor iedere Dataverwerking waarvan nog geen Trace bekend is.* Bij elke start van een verwerking wordt een `trace_id` aangemaakt. Bijvoorbeeld: in het voorbeeld komt er een bericht binnen bij de 'MijnOmgeving' van de gemeente (opvragenVergunningenVraag). Er wordt direct een `trace_id` aangemaakt.
2. *De applicatie MOET voor iedere Dataverwerking een logregel wegschrijven in een Logboek. Log Sampling is niet toegestaan. Een dataverwerking wordt opgeslagen als deze volledig is afgerond.* In het voorbeeld is te zien dat een logregel wordt geschreven op het moment dat de vraag- en het antwoordbericht zijn afgerond.
3. *De applicatie MOET bijhouden of een Dataverwerking geslaagd of mislukt is en dit per Dataverwerking als status meegeven aan het Logboek.* Bij elke logregel in het voorbeeld staat de `status_code` vermeld ('OK').
4. *Als een Dataverwerking meerdere Betrokkenen heeft dan MOET de applicatie voor iedere betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 betrokkenen verwijzen.* In het voorbeeld gaat het om één betrokkene (`dpl.core.data_subject_id`), er wordt steeds één logregel aangemaakt.
5. *Als een applicatie aangeroepen kan worden vanuit een andere applicatie MOET de applicatie Trace Context metadata accepteren bij een dergelijke aanroepen deze metadata kunnen omzetten naar een foreign_operation bericht.* Bij een externe verwerking (bijvoorbeeld opvragenVergunningen) geeft de 'MijnOmgeving' de `trace_id` en `span_id` mee aan de Vergunningenapplicatie. De vergunningenapplicatie registreert de `trace_id` en `span_id` beide als `foreign_operation`.

## Registratie Verhuizing - Eenvoudig, traditioneel systeem

### Situatieschets (Registratie Verhuizing - Eenvoudig)

Deze case beschrijft de binnengemeentelijke verhuizing van een persoon. De beschrijving is functioneel zo eenvoudig mogelijk. De burger komt aan de balie en er is geen sprake van meeverhuizende gezinsleden.

### Uitgangspunten (Registratie Verhuizing - Eenvoudig)

* Het beschreven proces is een voorbeeld, het werkelijke proces kan anders verlopen.
* Het proces is een 'happy flow', dit betekent dat validaties en eventuele foutsituaties in dit voorbeeld niet in ogenschouw worden genomen.
* Autorisatieprocessen zijn in dit voorbeeld niet meegenomen.
* Een Loggingsregel wordt toegevoegd aan het logboek per **geheel** afgeronde transactie. Er wordt dus **geen** aparte logregel aangemaakt per ontvangen of verstuurd bericht.
* Een aantal data staan nog ter discussie (vanuit juridisch oogpunt). Voor de volledigheid worden een aantal data in dit voorbeeld meegenomen. Het betreft de data:
  * resource/name/version
  * receiver
  * dataSubject

### Globaal proces (Registratie Verhuizing - Eenvoudig)

Schematisch ziet dit proces er als volgt uit:

1. De Baliemedewerker voert BSN van de burger in.
2. De Browser vraagt om persoonsdata bij de gemeentelijke Balieapplicatie.
3. De gemeentelijke Balieapplicatie vraag persoonsdata bij het BRP-systeem.
4. Het BRP systeem stuurt gevraagde data naar de gemeentelijke Balieapplicatie en logt de aanvraag.
5. De gemeentelijke Balieapplicatie stuurt de data naar de Browser en worden getoond aan de Baliemedewerker. De aanvraag wordt gelogd door de Balieapplicatie.
6. De Baliemedewerker voert de wijziging in en de Browser verstuurt de data naar de gemeentelijke Balieapplicatie.
7. De gemeentelijke Balieapplicatie verstuurt de data naar het BRP-systeem.
8. Het BRP-systeem verwerkt de wijziging, stuurt bevestiging terug naar de gemeentelijke Balieapplicatie en logt de verwerkingsactie.
9. De Browser vraagt de actuele persoonsdata op de gemeentelijke Balieapplicatie.
10. De gemeentelijke Balieapplicatie vraagt de persoonsdata op bij het BRP-systeem.
11. Het BRP-systeem stuurt de persoonsdata naar de gemeentelijke Balieapplicatie en logt de aanvraag.
12. De gemeentelijke Balieapplicatie stuurt de persoonsdata naar de Browser en logt de aanvraag.

Schematisch ziet dit proces er als volgt uit:

<img src="media/verhuizing-eenvoudig.svg" alt="Schematische weergave verhuizing" />

### Logging van data (Registratie Verhuizing - Eenvoudig)

De volgende data worden gelogd in de diverse logmomenten:

* **Log opvragenPersoonsgegevens (log BRP)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |7a22eb38-bca6-463f-9955-54ab040287cb|
  | `name` |opvragenPersoonsgegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c6adf4df949d03c662b53e95debdc411|
  | `start_time` |2024-07-29 08:16:49.000|
  | `end_time` |2024-07-29 08:16:49.000|
  | `status_code` |OK|
  |resource.name |BRP|
  |resource.version| 2.0|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |12f2ec2a-0cc4-3541-9ae6-219a178fcfe4|
  |attributeKey | `<leeg>` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |bc9126aaae813fd491ee10bf870db292|
  | `foreign_operation.span_id` |b2e339a595246e01|

* **Log tonenNAWGegevens (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |b2e339a595246e01|
  | `name` |tonenNAWGegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |bc9126aaae813fd491ee10bf870db292|
  | `start_time` |2024-07-29 10:16:49.690|
  | `end_time` |2024-07-29 10:16:49.723|
  | `status_code` |OK|
  |resource.name |Balieapp|
  |resource.version |1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |11x2ec2a-0774-3541-9b16-21ba179fcf15|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |13j2ec27-0cc4-3541-9av6-219a178fcfe5|

* **Log wijzigenPersoonsgegevens (log BRP)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |433f276975204ccf|
  | `name` |wijzigenPersoonsgegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |8ccfd3c567c51d68937c263e00a352be|
  | `start_time` |2024-07-29 08:17:02|
  | `end_time` |2024-07-29 08:17:02|
  | `status_code` |OK|
  |resource.name |BRP|
  |resource.version |2.0|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |8c714e4a-a538-36f7-8b1f-37a6884cc68c|
  |attributeKey | `<leeg>` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |f176a58de7fe249ea37ed4f5979da02b|
  | `foreign_operation.span_id` | 414514cf1d40d6b2|

* **Log wijzigenPersoonsgegevens (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |414514cf1d40d6b2|
  | `name` |wijzigenPersoonsgegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |f176a58de7fe249ea37ed4f5979da02b|
  | `start_time` |2024-07-29 08:17:02.000|
  | `end_time` |2024-07-29 08:17:02.000|
  | `status_code` |OK|
  |resource.name |Balieapp|
  |resource.version |1.0.5|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |19u2dd2a-0cb7-3541-9ae6-217a178fc9e6|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |13j2ec27-0cc4-3541-9av6-219a178fcfe5|
  | `foreign_operation.trace_id` | `<leeg>` |
  | `foreign_operation.span_id` | `<leeg>` |

* **Log opvragenPersoonsgegevens (log BRP)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |7a95b6989d2b28c7|
  | `name` |opvragenPersoonsgegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |f176a58de7fe249ea37ed4f5979da03c|
  | `start_time` |2024-07-29 08:17:02.000|
  | `end_time` |2024-07-29 08:17:02.000|
  | `status_code` |OK|
  |resource.name |BRP|
  |resource.version |2.0|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |0b1ff20a-3ecb-34bf-8cf5-e4cbacb046ab|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue | `<leeg>` |
  | `foreign_operation.trace_id` |c0a7a38d56f3f16a2163ca0071d3779a|
  | `foreign_operation.span_id` |df524ee2a3fd5ddf|

* **Log tonenNAWGegevens (log gemeente)**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |df524ee2a3fd5ddf|
  | `name` |tonenNAWGegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c0a7a38d56f3f16a2163ca0071d3779a|
  | `start_time` |2024-07-29 10:17:02.010|
  | `end_time` |2024-07-29 10:17:02.039|
  | `status_code` | OK|
  |resource.name |Balieapp|
  |resource.version |1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |12c21c2a-0875-3543-9b16-21ja179fcf16|
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |13j2ec27-0cc4-3541-9av6-219a178fcfe5|
  | `foreign_operation.trace_id` | `<leeg>` |
  | `foreign_operation.span_id` | `<leeg>` |

### Relatie tussen data (Registratie Verhuizing - Eenvoudig)

Om uiteindelijk alle data te kunnen rapporteren, is het van belang dat data op een bepaalde manier aan elkaar gekoppeld zijn. In dit voorbeeld is de data op de volgende manier gekoppeld:
![Alt text](./media/relatie-tussen-gegevens-registratie-verhuizing-eenvoudig.png)

### Relatie met de standaard Logboek dataverwerkingen (Registratie Verhuizing - Eenvoudig)

De relatie met de doelstellingen die gesteld zijn in de standaard Logboek dataverwerkingen worden, op basis van dit voorbeeld, als volgt concreet gerealiseerd:

* **het wegschrijven van logs van dataverwerkingen:** In dit voorbeeld is het de Baliemedewerker die via een Balieapplicatie de data van een Betrokkene kan bekijken en wijzigen. Deze acties zijn dataverwerkingen en worden gelogd bij zowel de Balieapplicatie  als bij het BRP-systeem.
* **het aan elkaar relateren van logs van dataverwerkingen:** Er zijn in dit voorbeeld twee applicaties nodig om het totaal aan gevraagde informatie te kunnen tonen aan de betrokkene. Beide applicaties hebben een logboek voor verwerkte data. Om een totaalbeeld van de gelogde data te kunnen construeren, is een relatie tussen de logs nodig. In dit voorbeeld wordt de koppeling gelegd door het `span_id` en `trace_id` (gemeentelogboek) te linken aan het `foreign_operation.span_id` en `foreign_operation.trace_id` (BRP-logboek).
* **het aan elkaar relateren van dataverwerkingen over de grenzen van systemen:** Naast het koppelen van logs van diverse applicaties, wordt ook een koppeling gelegd met het Register van verwerkingsactiviteiten. Dit gebeurt per applicatie op basis van het `processing_activity_id` (register) te koppelen aan `dpl.core.processing_activity_id` (logboek). De diverse registers hebben **geen** directe koppeling met elkaar.

Standaard Logverwerkingen: **paragraaf 3.3.1 Gedrag**

1. *De applicatie MOET een Trace starten voor iedere Dataverwerking waarvan nog geen Trace bekend is.* Bij elke start van een verwerking wordt een `trace_id` aangemaakt. Bijvoorbeeld: in het voorbeeld komt er een bericht binnen bij de Balieapplicatie van de gemeente (tonenNAWGegevens). Er wordt direct een `trace_id` aangemaakt.
2. *De applicatie MOET voor iedere Dataverwerking een logregel wegschrijven in een Logboek. Log Sampling is niet toegestaan.* Een dataverwerking wordt opgeslagen als deze volledig is afgerond. In het voorbeeld is te zien dat een logregel wordt geschreven op het moment dat de vraag- en het antwoordbericht zijn afgerond.
3. *De applicatie MOET bijhouden of een Dataverwerking geslaagd of mislukt is en dit per Dataverwerking als status meegeven aan het Logboek.* Bij elke logregel in het voorbeeld staat de `status_code` vermeld ('OK').
4. *Als een Dataverwerking meerdere Betrokkenen heeft dan MOET de applicatie voor iedere betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 betrokkenen verwijzen.* In het voorbeeld gaat het om één betrokkene (`dpl.core.data_subject_id`), er wordt steeds één logregel aangemaakt.
5. *Als een applicatie aangeroepen kan worden vanuit een andere applicatie MOET de applicatie Trace Context metadata accepteren bij een dergelijke aanroepen deze metadata kunnen omzetten naar een foreign_operation bericht.* Bij een externe verwerking (bijvoorbeeld opvragenPersoonsgegevens) geeft de Balieapplicatie de `trace_id` en `span_id` mee aan het BRP-systeem. Het BRP-systeem registreert de `trace_id` en `span_id` beide als `foreign_operation`.

## Registratie verhuizing – Opvragen meerdere BSN's

### Situatieschets (Registratie verhuizing)

Deze case beschrijft de samenstelling van een huishouding op een bepaald adres. De beschrijving is functioneel zo eenvoudig mogelijk, een burger komt aan de balie en er is geen sprake van wijzigingen in de huishouding.

### Uitgangspunten (Registratie verhuizing)

* Het beschreven proces is een voorbeeld, het werkelijke proces kan anders verlopen.
* Het proces is een 'happy flow', dit betekent dat validaties en eventuele foutsituaties in dit voorbeeld niet in ogenschouw worden genomen.
* Autorisatieprocessen zijn in dit voorbeeld niet meegenomen.
* Een Loggingsregel wordt toegevoegd aan het logboek per **geheel** afgeronde transactie. Er wordt dus **geen** aparte logregel aangemaakt per ontvangen of verstuurd bericht.
* Een aantal data staan nog ter discussie (vanuit juridisch oogpunt). Voor de volledigheid worden een aantal data in dit voorbeeld meegenomen. Het betreft de data:
  * resource/name/version
  * receiver
  * dataSubject
* Het is optioneel om het BSN (`dpl.core.data_subject_id`) te versleutelen ten behoeve van extra databeveiliging. In dit voorbeeld wordt versleuteling van data toegepast.

### Globaal proces (Registratie verhuizing)

Schematisch ziet dit proces er als volgt uit:

1. De Baliemedewerker voert adres van de burger in.
2. De Browser vraagt om persoonsdata bij de gemeentelijke Balieapplicatie.
3. De gemeentelijke Balieapplicatie vraag persoonsdata bij het BRP-systeem.
4. Het BRP systeem stuurt gevraagde data naar de gemeentelijke Balieapplicatie en logt de aanvraag.
5. De gemeentelijke Balieapplicatie stuurt de data naar de Browser en worden getoond aan de Baliemedewerker. De aanvraag wordt gelogd door de Balieapplicatie.

Schematisch ziet dit proces er als volgt uit:

<img src="media/verhuizing-registratie.svg" alt="Schematische weergave verhuizing registeren" />

### Logging van data (Registratie verhuizing)

De volgende data worden gelogd in de diverse logmomenten:

* **Log opvragenPersoonsgegevens (log BRP) persoon 1**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |7a22eb38-bca6-463f-9955-54ab040287cb|
  | `name` |opvragenPersoonsgegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c6adf4df949d03c662b53e95debdc411|
  | `start_time` |2024-07-29 08:16:49.000|
  | `end_time` |2024-07-29 08:16:49.000|
  | `status_code` |OK|
  |resource.name |BRP|
  |resource.version| 2.0|
  |receiver | `<leeg>` |
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |12f2ec2a-0cc4-3541-9ae6-219a178fcfe4|
  | `foreign_operation.trace_id` |bc9126aaae813fd491ee10bf870db292|
  | `foreign_operation.span_id` |b2e339a595246e01|
  |<u>BSN 1</u>| `<leeg>` |
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |ddj2ey299-0cf4-3541-9ar6-21ia178fcfrr|
  | `span_id` |r2e3229059BG246e01|
  | `parent_span_id` |7a22eb38-bca6-463f-9955-54ab040287cb|

* **Log opvragenPersoonsgegevens (log BRP) persoon 2**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |7a22eb38-bca6-463f-9955-54ab040287cb|
  | `name` |opvragenPersoonsgegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |c6adf4df949d03c662b53e95debdc411|
  | `start_time` |2024-07-29 08:16:49.000|
  | `end_time` |2024-07-29 08:16:49.000|
  | `status_code` |OK|
  |resource.name |BRP|
  |resource.version |2.0|
  |receiver | `<leeg>` |
  |attributeKey| `dpl.core.processing_activity_id` |
  |attributeValue |12f2ec2a-0cc4-3541-9ae6-219a178fcfe4|
  | `foreign_operation.trace_id` |bc9126aaae813fd491ee10bf870db292|
  | `foreign_operation.span_id` |b2e339a595246e01|
  |<u>BSN 2</u> | `<leeg>` |
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |f4j2ey299-3er4-3aa41-9ar6-21ia178fc3tyy|
  | `span_id` |9as5y3t-3ca7-463f-wwt9a5-54ab0402rft|
  | `parent_span_id` |7a22eb38-bca6-463f-9955-54ab040287cb|

* **Log tonenNAWGegevens (log gemeente) persoon 1**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |b2e339a595246e01|
  | `name` |tonenNAWGegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |bc9126aaae813fd491ee10bf870db292|
  | `start_time` |2024-07-29 10:16:49.690|
  | `end_time` |2024-07-29 10:16:49.723|
  | `status_code` |OK|
  |resource.name |Balieapp|
  |resource.version |1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |11x2ec2a-0774-3541-9b16-21ba179fcf15|
  |<u>BSN 1</u>| `<leeg>` |
  |attributeKey| `dpl.core.data_subject_id` |
  |attributeValue |13j2ec27-0cc4-3541-9av6-219a178fcfe5|
  | `span_id` |42f33gfa595246ert|
  | `parent_span_id` |b2e339a595246e01|

* **Log tonenNAWGegevens (log gemeente) persoon 2**

  | Attribuut   | Waarde   |
  |-------------|----------|
  | `span_id` |b2e339a595246e01|
  | `name` |tonenNAWGegevens|
  | `parent_span_id` | `<leeg>` |
  | `trace_id` |bc9126aaae813fd491ee10bf870db292|
  | `start_time` |2024-07-29 10:16:49.690|
  | `end_time` |2024-07-29 10:16:49.723|
  | `status_code` |OK|
  |resource.name |Balieapp|
  |resource.version| 1.0.5|
  |receiver |27fdey98605etc48|
  |attributeKey | `dpl.core.processing_activity_id` |
  |attributeValue |11x2ec2a-0774-3541-9b16-21ba179fcf15|
  |<u>BSN 2</u>| `<leeg>` |
  |attributeKey | `dpl.core.data_subject_id` |
  |attributeValue |342ec27-aa41-dav6-219a178f5ty6|
  | `span_id` |aef53rfa59e240ert|
  | `parent_span_id` |b2e339a595246e01|

### Relatie tussen data (Registratie verhuizing)

Om uiteindelijk alle data te kunnen rapporteren, is het van belang dat data op een bepaalde manier aan elkaar gekoppeld zijn. In dit voorbeeld zijn de data op de volgende manier gekoppeld:
![Alt text](./media/relatie-tussen-gegevens-registratie-verhuizing.png)

### Relatie met de standaard Logboek dataverwerkingen (Registratie verhuizing)

De relatie met de doelstellingen die gesteld zijn in de standaard Logboek dataverwerkingen worden, op basis van dit voorbeeld, als volgt concreet gerealiseerd:

* **het wegschrijven van logs van dataverwerkingen:** In dit voorbeeld is het de Baliemedewerker die via een Balieapplicatie de data van een Betrokkene kan bekijken. Deze acties zijn dataverwerkingen en worden gelogd bij zowel de Balieapplicatie  als bij het BRP-systeem.

* **het aan elkaar relateren van logs van dataverwerkingen:** Er zijn in dit voorbeeld twee applicaties nodig om het totaal aan gevraagde informatie te kunnen tonen aan de betrokkene. Beide applicaties hebben een logboek voor verwerkte data. Om een totaalbeeld van de gelogde data te kunnen construeren, is een relatie tussen de logs nodig. In dit voorbeeld wordt de koppeling gelegd door het `span_id` en `trace_id` (gemeentelogboek) te linken aan het `foreign_operation.span_id` en `foreign_operation.trace_id` (BRP-logboek). De aanroep van de gemeente-applicatie naar het BRP betreft één opvraag op basis van één adres, één `span_id` en één `trace_id`. Het resultaat is meervoudig en moeten naar dezelfde `span_id` en `trace_id` leiden van de gemeente-applicatie. Het onderscheid zit in de verschillende BSN's van de personen die via een `parent_span_id` gekoppeld zijn.

* **het aan elkaar relateren van dataverwerkingen over de grenzen van systemen:** Naast het koppelen van logs van diverse applicaties, wordt ook een koppeling gelegd met het Register van verwerkingsactiviteiten. Dit gebeurt per applicatie op basis van het `processing_activity_id` (register) te koppelen aan `dpl.core.processing_activity_id` (logboek). De diverse registers hebben **geen** directe koppeling met elkaar.

#### Paragraaf 3.3.1 Gedrag

1. *De applicatie MOET een Trace starten voor iedere Dataverwerking waarvan nog geen Trace bekend is.* Bij elke start van een verwerking wordt een `trace_id` aangemaakt. Bijvoorbeeld: in het voorbeeld komt er een bericht binnen bij de Balieapplicatie van de gemeente (tonenNAWGegevens). Er wordt direct een `trace_id` aangemaakt.
2. *De applicatie MOET voor iedere Dataverwerking een logregel wegschrijven in een Logboek. Log Sampling is niet toegestaan.* Een dataverwerking wordt opgeslagen als deze volledig is afgerond. In het voorbeeld is te zien dat logregels worden geschreven op het moment dat de vraag- en het antwoordbericht zijn afgerond.
3. *De applicatie MOET bijhouden of een Dataverwerking geslaagd of mislukt is en dit per Dataverwerking als status meegeven aan het Logboek.* Bij elke logregel in het voorbeeld staat de `status_code` vermeld ('OK').
4. *Als een Dataverwerking meerdere Betrokkenen heeft dan MOET de applicatie voor iedere betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 betrokkenen verwijzen.* In het voorbeeld gaat het om twee betrokkenen (`dpl.core.data_subject_id`), er wordt één logregel aangemaakt per BSN.
5. *Als een applicatie aangeroepen kan worden vanuit een andere applicatie MOET de applicatie Trace Context metadata accepteren bij een dergelijke aanroepen deze metadata kunnen omzetten naar een foreign_operation bericht.* Bij een externe verwerking (bijvoorbeeld opvragenPersoonsgegevens) geeft de Balieapplicatie de `trace_id` en `span_id` mee aan het BRP-systeem. Het BRP-systeem registreert de `trace_id` en `span_id` beide als `foreign_operation`.

## Voorbeeldapplicaties

### Register van de verwerkingsactiviteiten (RvvA)

Dit project biedt een overzicht van dataverwerkingen binnen de overheid, waaronder het Register van de verwerkingsactiviteiten (RvvA). Dit register documenteert hoe data worden verwerkt, waarschijnlijk ter ondersteuning van transparantie en naleving van de Algemene Verordening Gegevensbescherming (AVG).

Je kunt de voorbeeldapplicatie van het logboek en de specifieke RvvA-sectie hier bekijken:

* [gitlab.com/digilab.overheid.nl/ecosystem/logboek-dataverwerkingen/rva](https://gitlab.com/digilab.overheid.nl/ecosystem/logboek-dataverwerkingen/rva)
* [gitlab.com/digilab.overheid.nl/ecosystem/logboek-dataverwerkingen](https://gitlab.com/digilab.overheid.nl/ecosystem/logboek-dataverwerkingen)

## Use Cases
Dit hoofdstuk bevat voorbeelden van use cases, gebaseerd op praktijkscenario's uit workshops. Ze illustreren hoe de standaard Logboek Dataverwerkingen kan worden toegepast in samenwerkingen tussen organisaties. De voorbeelden zijn niet-normatief en dienen ter verduidelijking voor organisaties met vergelijkbare processen.

## Use Case 01: Moet de retentieperiode (bewaartermijn) van de logging in de logregel staan?

In **AVG artikel 30-1f** wordt de volgende maatregel benoemd:
*Elke verantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden. Dat register bevat alle volgende gegevens: indien mogelijk, de beoogde termijnen waarbinnen de verschillende categorieën van gegevens moeten worden gewist.*

De concrete datum waarop een dataverwerking moet worden gewist uit het logboek, kan bepaald worden door middel van het bewaartermijn in het register en de eindtijd waarop een dataverwerking is gelogd in het logboek. Daardoor is het onnodig om de concrete verwijderdatum van een dataverwerking te registreren in het logboek.

Wanneer een logregel verwijderd moet worden, is afhankelijk van de situatie van een organisatie en het beleid van bewaarperiodes:

- **Gelijke bewaartermijn:** Als het beleid is dat alle logregels dezelfde bewaartijd hebben, kan er bijvoorbeeld elke dag een batch draaien die kijkt naar de eindtijd van een logregel en berekent of deze verwijderd kan worden.
- **Verschillende bewaartermijnen:** Als er per activiteit een andere bewaartermijn geldt, moet dat duidelijk worden aangegeven in het *Register van Verwerkingsactiviteiten* per activiteit in het veld `envisagedTimeLimit`.

**Voorbeelden van waarden van het veld `envisagedTimeLimit`**:
- **Datum (Date) of Datum/Tijd (DateTime):** `2025-02-23T00:00:00`
- **Geheel getal (Integer):** `15` (dagen/maanden/jaren)
- **Tekst (String):** `"20 jaar na onherroepelijk worden besluit"`

Het belangrijkste is dat de organisatie duidelijk kan aantonen (*verantwoordingsplicht*) waarom een bepaalde bewaartermijn is gekozen en dat deze termijn in lijn is met de AVG. Dit betekent dat de keuze van het datatype minder cruciaal is dan de heldere vastlegging en naleving van de bewaartermijn zelf.

Concreet zou de logverwijderingssituatie er als volgt uit kunnen zien:
![logverwijderingssituatie Use Case 01](./media/UseCase01_afbeelding1.png)

**Scenario 1**
Als het is toegestaan om een vaste retentieperiode voor alle logregels te hanteren, dan zou deze kunnen worden vastgelegd in de `envisedTimeLimit` in een profiel. Dagelijks wordt een batch gedraaid om te bepalen of een logregel mag worden verwijderd. Als `Huidige datum – envisedTimeLimit < end_time` dan mag de logregel worden verwijderd.

**Voorbeeld:**
- Huidige datum: 1-8-2025
- envisedTimeLimit: 6 maanden
- end_time: 1-1-2025

`1-8-2025 – 6 maanden = 1-2-2025`, de logregel mag dus verwijderd worden.

**Scenario 2**
Als het **niet** is toegestaan om een vaste retentieperiode voor alle logregels te hanteren, dan moet deze worden vastgelegd in de `envisedTimeLimit` in het *Register van Verwerkingsactiviteiten* per activiteit.
De batch moet nu op basis van `dpl.core.processing_activity_id` de `envisedTimeLimit` opzoeken in het *Register van Verwerkingsactiviteiten* en bepalen of de logregel verwijderd mag worden.
