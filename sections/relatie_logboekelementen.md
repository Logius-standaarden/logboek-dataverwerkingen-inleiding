# De relatie tussen logboekelementen, waarom eigenlijk?

Logging van dataverwerkingen kunnen vaak en veelvuldig plaatsvinden. Het geheel kan groot en complex worden want sommige Logregels zijn aan elkaar gerelateerd. Deze relaties kunnen gelegd worden met Logregels met andere applicaties binnen dezelfde organisatie of met logregels van applicaties van andere organisaties.

Maar ook zijn er relaties nodig met activiteiten in het Register van Verwerkingsactiviteiten.
Wat nu als alle Logregels zonder relaties worden opgeslagen? Bij een rapportage (bijvoorbeeld een verzoek tot inzage van een burger) moet nu handmatig worden uitgezocht welke dataverwerkingen bij elkaar horen en er moet, in het ernstigste geval, ook contact worden gezocht moet andere organisaties om te onderzoeken of daar ook de nodige dataverwerkingen zijn uitgevoerd. Als er bij elke Logregel de nodige relatiedata worden bijgevoegd, kan de rapportage snel en accuraat worden gegenereerd.

## Welke relatiedata moeten er dan worden opgeslagen per Logregel?

Om er zeker van te zijn dat de relatie tussen Logregels gelegd kan worden, moeten de volgende data worden geregistreerd per Logregel:

* `processing_activity_id`: elke dataverwerking die een organisatie doet, moet bekend zijn in het Register van Verwerkingsactiviteiten. Het processingActivity legt de relatie tussen de dataverwerking door een applicatie, en de activiteit gedefinieerd in het Register.

* `trace_id`: alle logregels die voor een specifieke dataverwerking bij elkaar horen, krijgen een `trace_id`. De `trace_id`-waarde voor alle Logregels die bij elkaar horen is hetzelfde.

* `span_id`: elke individuele Logregel (Operation) krijgt een eigen, unieke `span_id` (net zoals elk databaserecord dat ook krijgt).

In werkelijkheid worden alle relaties door de Applicatie in een fractie van een seconde (in parallel)  gelegd. Om het grote geheel beter te begrijpen, worden alle relaties hieronder stap voor stap uitgelegd.

## Het logboek en het Register van Verwerkingsactiviteiten

Als er een Dataverwerking plaatsvindt, moet dit altijd een relatie hebben met het Register van Verwerkingsactiviteiten. In dit Register staat informatie over de data die een organisatie verwerkt. Het Register is verplicht, een geautomatiseerde koppeling met het Logboek niet.

Bij elke Dataverwerking wordt door het Logboek een relatie gelegd met het Register door middel van het `processing_activity_id`.
Als er meerdere dezelfde Dataverwerkingen ('Operations') zijn, krijgen deze dus allemaal dezelfde `processing_activity_id`.

![Afbeelding relaties processing_activity_id](./media/relatie_logboekelementen_afbeelding1.svg)

In het geval er een Dataverwerking plaatsvindt ter ondersteuning van een andere Dataverwerking (suboperation), dan kan deze ondersteunende Dataverwerking een eigen `processing_activity_id` krijgen. Deze kan anders zijn dan het `processing_activity_id` van de 'hoofdprocessingActivity'.

![Afbeelding relaties processing_activity_id tussen Logboek en Register](./media/relatie_logboekelementen_afbeelding2.svg)

De subOperation heeft nu een eigen `processing_activity_id` gekregen, maar het is nog niet duidelijk aan welke hoofdprocessingActivityId deze gekoppeld is. Om dit op te lossen, wordt ook een 'parentProcessingActivityId' geregistreerd.

Bij de subOperation wordt in dit geval naast de `processing_activity_id` ook een parentProcessingActivityId geregistreerd. De waarde van deze parentProcessingActivityId is gelijk aan de waarde van het hoofdProcessingActivityId.

![Afbeelding relaties processing_activity_id tussen Logboek en Register met parent_processing_activity_id](./media/relatie_logboekelementen_afbeelding3.svg)

Bij een Dataverwerking kan het zijn dat data moeten worden opgevraagd bij een andere organisatie. Deze organisatie heeft zelf ook een Register van Verwerkingsactiviteiten. In dit Register staat beschreven dat een specifieke organisatie specifieke gegevens mag opvragen als aparte operation.

Bij het verstrekken van deze data aan de aanvragende organisatie, wordt het `processing_activity_id` van de gegevensverstrekkende organisatie geregistreerd. Er is dus GEEN rechtstreekse koppeling tussen het Register van de aanvragende en het Register van de verstrekkende organisatie.

![Afbeelding relaties processing_activity_id tussen Logboek en Register met parent_processing_activity_id en meerdere organisaties](./media/relatie_logboekelementen_afbeelding4.svg)

## trace_id als grootste gemene deler

Operations kunnen bestaan uit meerdere (sub)Operations binnen de eigen organisatie maar ook over organisaties heen. Het geheel kan een grote en ingewikkelde constructie worden. Om toch het overzicht te kunnen behouden, is het noodzakelijk een `trace_id` te introduceren per (sub)Operation.

Het `trace_id` is als het ware de 'lijm' tussen alle  (sub)Operations. Als er nog geen `trace_id` bekend is, wordt deze automatisch gegenereerd voor de eerste Operation.

![Afbeelding trace_id](./media/relatie_logboekelementen_afbeelding5.svg)

Alle bij elkaar horende (sub)Operations, krijgen vervolgens dezelfde `trace_id`-waarde.

![Afbeelding relaties trace_id](./media/relatie_logboekelementen_afbeelding6.svg)

In het geval er data wordt opgevraagd aan een andere organisatie, krijgt elke operation bij verstrekkende organisatie een `trace_id`. Om de relatie te leggen tussen de vragende en de verstrekkende organisatie, wordt bij elke Operation van de verstrekkende organisatie een `trace_id` geregistreerd. De waarde van de `trace_id` van de verstrekkende organisatie is gelijk aan de waarde van `trace_id` van de vragende organisatie.

![Afbeelding relaties trace_id en foreign_trace_id en meerdere organisaties ](./media/relatie_logboekelementen_afbeelding7.svg)

## Relatie tussen (sub)Operations

Elke (sub)Operation krijgt een eigen, unieke `span_id`. Hiermee zijn alle loggings altijd uniek traceerbeer. Ook subOperations krijgen een eigen, unieke `span_id`.

![Afbeelding span_id](./media/relatie_logboekelementen_afbeelding8.svg)

Als er ook subOperations plaatsvinden, moet er ook een `parent_span_id` worden geregistreerd om de koppeling met de hoofdOperation te realiseren.

![Afbeelding span_id en parent_span_id](./media/relatie_logboekelementen_afbeelding9.svg)

In het geval er data nodig is van een andere organisatie, krijgt de Operation van de verstrekkende organisatie ook een eigen, unieke `span_id`.

Daarnaast wordt bij deze Operation ook het `span_id` geregistreerd die het verzoek voor informatie geïnitieerd heeft (vanuit de vragende organisatie). Deze specifieke `span_id` wordt het `foreign_operation._span_id` genoemd en krijgt de waarde gelijk aan het `span_id` van de initiërende Operation van de vragende organisatie.

![Afbeelding span_id, parent_span_id en foreign_span_id](./media/relatie_logboekelementen_afbeelding10.svg)

## Voorbeeld van een traceringsconstructie

Het nu volgende voorbeeld is volledig fictief en is puur bedoeld om een beeld te schetsen ten behoeve van een traceringsconstructie in een logboek.

## Situatieschets

Een persoon heeft een parkeervergunning in een gemeente. Er is een nieuwe auto aangeschaft, het kenteken moet worden aangepast ten behoeve van de vergunning. De persoon kan het kenteken online wijzigen in de 'mijnGemeente' applicatie. Om het voorbeeld eenvoudig te houden, worden foutsituaties buiten beschouwing gelaten.

## Procesgang

  1. Persoon logt in gemeenteapplicatie.
  2. Gemeente toont huidige parkeervergunning.
  3. Persoon wijzigt kenteken in de gemeenteapplicatie.
  4. Gemeenteapplicatie vraagt het RDW om data op basis van de tenaamstelling.
  5. RDW geeft de gevraagde data terug aan de gemeenteapplicatie.
  6. Gemeenteapplicatie accepteert de wijziging van de persoon.

De traceringsdata worden als volgt vastgelegd:

## processing_activity_id

In de gemeenteapplicatie worden de volgende Operations uitgevoerd die een relatie hebben met het Register van Verwerkingsactiviteiten van de gemeente:

* **Toon alle vergunningen**: na het inloggen, worden de parkeervergunningen van de persoon getoond. Deze Operation is gerelateerd aan de processingActivity     **Parkeervergunningadministratie voeren**.

* **Wijzig kenteken**: het wijzigen van het kenteken valt ook onder de processingActivity **Parkeervergunningadministratie** voeren. Hierdoor is het `processing_activity_id` hetzelfde als die van de Operation **Toon alle vergunningen**.

* **Controleer tenaamstelling:** deze Operation zorgt voor de aanvraag van data richting het RDW en controle van de terugontvangen data. Deze Operation is een subOperation van **Wijzig kenteken** en krijgt een processingActivity wat hoort bij de processingActivity in het Register genaamd **Tenaamstelling controleren**. De processingActivity is op zijn beurt weer een subprocessingActivity van **Parkeeradministratie voeren**. Om deze relatie te leggen, moet ook een parentProcessingActivityId worden geregistreerd. De waarde hiervan is gelijk aan de waarde van het `processing_activity_id` van **Parkeervergunningadministratie voeren**.

In de RDW-applicatie wordt het verstrekken van data aan de gemeenteapplicatie ook geregistreerd. De Operation **Verstrek houdergegevens** is gerelateerd aan de processingActivity **Kentekenhoudergegevens verstrekken**. Merk op dat er hier dus GEEN directe relatie is tussen het Register van Verwerkingsactiviteiten van de gemeente en die van het RDW.

![Afbeelding voorbeeld processing_activity_id en parent_processing_activity_id bij Gemeente en RDW](./media/relatie_logboekelementen_afbeelding11.svg)

## trace_id

* De gemeenteOperations **Toon alle vergunningen, Wijzig kenteken en Controleer tenaamstelling** behoren tot dezelfde handeling (met als eindresultaat het wijzigingen van het kenteken op de vergunning). Deze Operations krijgen allemaal dezelfde `trace_id`.
* De RDW-Operation **Verstrek houdergegevens** krijgt een eigen `trace_id`.
* Om het geheel te koppelen over de organisaties heen, wordt bij het RDW ook een `trace_id` opgeslagen, de waarde hier van is gelijk aan de waarde van de `trace_id` van de Operation **Controleer tenaamstelling**.

![Afbeelding voorbeeld trace_id en foreign_trace_id bij Gemeente en RDW](./media/relatie_logboekelementen_afbeelding12.svg)

## span_id

In de gemeente-applicatie krijgt elke (sub)Operation een eigen, unieke `span_id`.

* De (sub)Operation **Controleer tenaamstelling** krijgt daarnaast ook nog een `parent_span_id` met de waarde van `span_id` van de **Operation Wijzig** kenteken om een relatie te leggen.
* Ook de RDW-Operation **Verstrek houdergegevens** krijgt een eigen unieke `span_id`.
* Om de relatie over de organisaties heen te leggen, wordt er bij de RDW-Operation **Verstrek houdergegevens** ook een `foreign_operation.span_id` moeten worden vastgelegd. De waarde van deze `foreign_operation.span_id` is gelijk aan de waarde van de `span_id` van de gemeente-Operation **Controleer tenaamstelling**.

![Afbeelding voorbeeld span_id, parent_span_id en foreign_span_id bij Gemeente en RDW](./media/relatie_logboekelementen_afbeelding13.svg)

## Totaalbeeld

Als alle relaties gelegd zijn, ziet de traceringsconstructie er als volgt uit:

![Afbeelding Voorbeeld met alle span, trace en processing elementen](./media/relatie_logboekelementen_afbeelding14.svg)

Meer gedetailleerde voorbeelden staan beschreven op [developer.overheid.nl](https://developer.overheid.nl/kennisbank/data/standaarden/logboek-dataverwerkingen/voorbeelden).
