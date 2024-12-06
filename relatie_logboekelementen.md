### De relatie tussen logboekelementen, waarom eigenlijk?
Logging van gegevensverwerkingen kunnen vaak en veelvuldig plaatsvinden. Het geheel kan groot en complex worden want sommige Logregels zijn aan elkaar gerelateerd. Deze relaties kunnen gelegd worden met Logregels met andere applicaties binnen dezelfde organisatie of met logregels van applicaties van andere organisaties. Maar ook zijn er relaties nodig met activiteiten in het Register van Verwerkingsactiviteiten.
Wat nu als alle Logregels zonder relaties worden opgeslagen? Bij een rapportage (bijvoorbeeld een verzoek tot inzage van een burger) moet nu handmatig worden uitgezocht welke gegevensverwerkingen bij elkaar horen en er moet, in het ernstigste geval, ook contact worden gezocht moet andere organisaties om te onderzoeken of daar ook de nodige gegevensverwerkingen zijn uitgevoerd. Als er bij elke Logregel de nodige relatiegegevens worden bijgevoegd, kan de rapportage snel en accuraat worden gegenereerd.

### Welke relatiegegevens moeten er dan worden opgeslagen per Logregel?

Om er zeker van te zijn dat de relatie tussen Logregels gelegd kan worden, moeten de volgende gegevens worden geregistreerd per Logregel:
•	**processingActivityId**: elke gegevensverwerking die een organisatie doet, moet bekend zijn in het Register van Verwerkingsactiviteiten. Het processingActivity legt de relatie tussen de gegevensverwerking door een applicatie, en de activiteit gedefinieerd in het Register.
•	**traceId**: alle logregels die voor een specifieke gegevensverwerking bij elkaar horen, krijgen een traceId. De traceId-waarde voor alle Logregels die bij elkaar horen is hetzelfde.
•	**operationId**: elke individuele Logregel (Operation) krijgt een eigen, unieke operationId (net zoals elk databaserecord dat ook krijgt).

In werkelijkheid worden alle relaties door de Applicatie in een fractie van een seconde (in parallel)  gelegd. Om het grote geheel beter te begrijpen, worden alle relaties hieronder stap voor stap uitgelegd.
