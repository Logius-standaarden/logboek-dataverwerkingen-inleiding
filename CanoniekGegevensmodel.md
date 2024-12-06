<!-- markdownlint-disable first-line-heading -->
## Canoniek Gegevensmodel

Ter verduidelijking van de standaard is een Canoniek gegevensmodel uitgewerkt, dit gestandaardiseerd model voor datarepresentatie is  ontworpen om de attributen eenduidig en consistenter te maken. Het biedt een uniforme structuur en terminologie voor alle relevante gegevens in de standaard. Zie voor de definitie van de gebruikte terminologie ook [Paragraaf 1.2 van de standaard](https://logius-standaarden.github.io/logboek-dataverwerkingen/#terminologie).

### attribute

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `attribute`                                                  |
| **Definitie Engels**         | Attributes in the form of key value pairs.                   |
| **Attribuutnaam Nederlands** | attribuut                                                    |
| **Definitie Nederlands**     | Attributen in de vorm van key value pairs.                   |
| **Toelichting**              | Organisaties hebben de vrijheid om zelf key value pairs te bepalen als dit bijdraagt aan de inzichtelijkheid van een gegevensverwerkingsactie. |
| **Noodzakelijkheid**         | Vanuit de standaard is het onmogelijk om alle attribuutsoorten te definiëren die belangrijk zijn voor de inzichtelijkheid van een gegevensverwerkingsactie. Daarom is er in de standaard rekening gehouden met een mogelijkheid om per organisatie of per systeem eigen attribuutsoorten te bepalen. |
| **Datatype**                 | -                                                            |
| **Voorbeeld**                | -                                                            |
| **Verplicht**                | Nee                                                          |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | -                                                            |

### dplCoreDataSubjectId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `dplCoreDataSubjectId`                                       |
| **Definitie Engels**         | Refers to any individual person who can be identified, directly or indirectly, via an identifier such as a name, an ID number, location data, or via factors specific to the person's physical, physiological, genetic, mental, economic, cultural or social identity. |
| **Attribuutnaam Nederlands** | dplCorebetrokkeneId                                          |
| **Definitie Nederlands**     | De geïdentificeerde of identificeerbare natuurlijk persoon op wie de verwerkte en/of de te verwerken persoonsgegevens betrekking hebben. |
| **Toelichting**              | Bij het gebruik van dataSubject (betrokkene) moet rekening gehouden met artikel 32-1a: *Rekening houdend met de stand van de techniek, de uitvoeringskosten, alsook met de aard, de omvang, de context en de verwerkingsdoeleinden en de qua waarschijnlijkheid en ernst uiteenlopende risico's voor de rechten en vrijheden van personen, treffen de verantwoordelijke en de verwerker passende technische en organisatorische maatregelen om een op het risico afgestemd beveiligingsniveau te waarborgen, die, waar passend, onder meer het volgende omvatten:*  ***a) de pseudonimisering en versleuteling van persoonsgegevens.*** |
| **Noodzakelijkheid**         | Gegevensverwerkingsacties moeten per betrokkene worden opgeslagen. Indien er gevraagd wordt om de gegevensverwerkingsacties van een betrokkene kan er niet gerapporteerd worden zonder dit attribuutsoort. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### dataSubjectCategories

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `dataSubjectCategories`                                      |
| **Definitie Engels**         | A classification of data subjects relevant to an organization. Can be used to categorize business-specific and regulation-specific categories. Examples: Employees Customers Suppliers |
| **Attribuutnaam Nederlands** | categorieënBetrokkenen                                       |
| **Definitie Nederlands**     | Een beschrijving van de categorieën van personen van wie gegevens verwerkt worden. |
| **Toelichting**              | -                                                            |
| **Noodzakelijkheid**         | In AVG artikel 30-1c wordt de volgende maatregel benoemd: *Elke verantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden. Dat register bevat alle volgende gegevens: een beschrijving van de categorieën van betrokkenen en van de categorieën van persoonsgegevens.* |
| **Datatype**                 | Enumwaarde                                                   |
| **Voorbeeld**                | Burger                                                       |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden**        | Afhankelijk van het type systeem en betrokken actoren. Er kunnen meerdere categorieën van toepassing zijn. |

### dplCoreProcessingActivityId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `dplCoreProcessingActivityId`                                |
| **Definitie Engels**         | Reference to Register with more information about the processing activity. |
| **Attribuutnaam Nederlands** | dplCoreVerwerkingsactiviteitId                               |
| **Definitie Nederlands**     | Verwijzing naar Register met meer informatie over de verwerkingsactiviteit. |
| **Toelichting**              | -                                                            |
| **Noodzakelijkheid**         | Elke gegevensverwerking in het logboek moet in lijn zijn met de vooraf gedefinieerde verwerkingsactiviteiten in het register (zie AVG artikel 30). Om te voorkomen dat alle attribuutsoorten van het register gedupliceerd worden in het logboek, wordt in het logboek alleen verwezen naar het VerwerkingsactiviteitId van het register. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register en Logboek                                          |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### endTime

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `endTime`                                                    |
| **Definitie Engels**         | Timestamp representing the end of a data processing logging action. |
| **Attribuutnaam Nederlands** | eindTijd                                                     |
| **Definitie Nederlands**     | Tijdstempel die het einde van een logboekactie voor gegevensverwerking vertegenwoordigt. |
| **Toelichting**              | Een logboekregel wordt pas weggeschreven in het logboek als de volledige transactie (succesvol of niet succesvol) is afgerond. |
| **Noodzakelijkheid**         | Bij een inzageverzoek van de Betrokkene ten aanzien van gegevensverwerkingsacties, wordt ook een tijdsspanne gevraagd. Alleen de details van een gegevenswerkingsactie binnen opgegeven tijdsspanne worden gerapporteerd. Zonder begin- en eindtijd van een gegevensverwerkingsactie is het onmogelijk de juiste details op te leveren. |
| **Datatype**                 | DateTime                                                     |
| **Voorbeeld**                | 2025-02-23T00:00:00                                          |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing.                                         |

### envisagedTimeLimit

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `envisagedTimeLimit`                                         |
| **Definitie Engels**         | The maximum period for which the personal data is necessary to achieve the purpose of the processing or no longer than the period anchored in sector-specific legislation. |
| **Attribuutnaam Nederlands** | bewaarTermijn                                                |
| **Definitie Nederlands**     | De maximale periode waarin de persoonsgegevens noodzakelijk worden bewaard om het doel van de verwerking te bereiken of niet langer dan de termijn die verankerd is in sectorspecifieke wetgeving. |
| **Toelichting**              | Als het bewaartermijn van een bewaard gegeven verstreken is, dan moet het gegeven worden verwijderd uit het logboek. |
| **Noodzakelijkheid**         | In AVG artikel 30-1f wordt de volgende maatregel benoemd: *Elke verantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden. Dat register bevat alle volgende gegevens: indien mogelijk, de beoogde termijnen waarbinnen de verschillende categorieën van gegevens moeten worden gewist.* De concrete datum waarop een gegevensverwerking moet worden gewist uit het logboek, kan bepaald worden door middel van het bewaartermijn in het register en de eindtijd waarop een gegevensverwerking is gelogd in het logboek. Daardoor is het onnodig om de concrete verwijderdatum van een gegevensverwerking te registreren in het logboek. |
| **Datatype**                 | DateTime                                                     |
| **Voorbeeld**                | 2025-02-23T00:00:00                                          |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### foreignOperation.entity

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `foreignOperation.entity`                                    |
| **Definitie Engels**         | Reference to external entity.                                |
| **Attribuutnaam Nederlands** | entiteit                                                     |
| **Definitie Nederlands**     | Verwijzing naar externe entiteit.                            |
| **Toelichting**              | Indien er voor een verwerking ook een logging heeft plaatsgevonden door een externe informatiebron, dan wordt er een verwijzing aangemaakt om de gegevens van deze logging in te kunnen zien. |
| **Noodzakelijkheid**         | Indien het noodzakelijk is ook gegevensverwerkingsacties van een externe gegevensbron te gebruiken, dan wordt een unieke referentie naar deze externe gegevensverwerkingsactie geregistreerd in het logboek. Door alleen te verwijzen naar de externe gegevensverwerkingsactie, kan voorkomen worden dat gegevens gedupliceerd worden opgeslagen in het logboek. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | foo://techtarget.com:8042/over/there?name=parrot#beak        |
| **Verplicht**                | Nee                                                          |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### foreignOperation.operationId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `foreignOperation.operationId`                               |
| **Definitie Engels**         | Unique name given to a foreign processing operation.         |
| **Attribuutnaam Nederlands** | externeActie.actieId                                         |
| **Definitie Nederlands**     | Identificator die de externe verwerkingsactie uniek identificeert. |
| **Toelichting**              | Externe verwerkingsacties kunnen een onderdeel zijn van de totale verwerkingsactie. OperationId is in dit geval een attribuutsoort van het objecttype foreignOperation. |
| **Noodzakelijkheid**         | Indien het noodzakelijk is ook gegevensverwerkingsacties van een externe gegevensbron te gebruiken, dan wordt een unieke referentie naar deze externe gegevensverwerkingsactie geregistreerd in het logboek. Het foreignOperation.operationId refereert naar één specifieke gegevensverwerkingsactie door de externe gegevensbron.  Door alleen te verwijzen naar de externe gegevensverwerkingsactie, kan voorkomen worden dat gegevens gedupliceerd worden opgeslagen in het logboek. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Nee                                                          |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### LegalBasis

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `LegalBasis`                                                 |
| **Definitie Engels**         | The general conditions governing the lawfulness of processing by the controller. |
| **Attribuutnaam Nederlands** | grondslag                                                    |
| **Definitie Nederlands**     | Algemene voorwaarden inzake de rechtmatigheid van verwerking door de verantwoordelijke. |
| **Toelichting**              | De verwerking is alleen rechtmatig indien en voor zover aan ten minste één van de voorwaarden is voldaan. |
| **Noodzakelijkheid**         | In AVG artikel 6-1 worden de volgende maatregelen benoemd:   |
|                              |*De verwerking is alleen rechtmatig indien en voor zover aan ten minste één van de voorwaarden is voldaan.* |
|                              |*a) de betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer specifieke doeleinden;*|
|                              |*b) de verwerking is noodzakelijk voor de uitvoering van een overeenkomst waarbij de betrokkene partij is, of om op verzoek van de betrokkene vóór de sluiting van een overeenkomst maatregelen te nemen;*|
|                              | *c) de verwerking is noodzakelijk om te voldoen aan een wettelijke verplichting die op de verantwoordelijke rust;*|
|                              |*d) de verwerking is noodzakelijk om de vitale belangen van de betrokkene of van een andere natuurlijke persoon te beschermen;*|
|                              |*e) de verwerking is noodzakelijk voor de vervulling van een taak van algemeen belang of van een taak in het kader van de uitoefening van het openbaar gezag dat aan de verantwoordelijke is opgedragen;*|
|                              | *f) de verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van de verantwoordelijke of van een derde, behalve wanneer de belangen of de grondrechten en de fundamentele vrijheden van de betrokkene die tot bescherming van persoonsgegevens nopen, zwaarder wegen dan die belangen, met name wanneer de betrokkene een kind is.*|
|                              | Er moet worden aangetoond dat de verwerking rechtmatig is op basis van één of meer grondslagen. |
| **Datatype**                 | Enumwaarden                                                  |
| **Voorbeeld**                | Legal obligation                                             |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden EN**     | - Consent data subject (6-1a)                                |
|                              | - Necessary contract data subject (6-1b)                     |
|                              | - Legal obligation (6-1c)                                    |
|                              | - Protect vital interests (6-1d)                             |
|                              | - Performance task (6-1e)                                    |
|                              | - Legitimate interests (6-1f)                                |
| **Enumeratiewaarden NL**     | - Toestemming betrokkene (6-1a)                              |
|                              | - Uitvoering overeenkomst betrokkene (6-1b)                  |
|                              | - Wettelijke verplichting (6-1c)                             |
|                              | - Vitaal belang (6-1d)                                       |
|                              | - Algemeen belang (6-1e)                                     |
|                              | - Gerechtvaardigd belang (6-1f)                              |

### LegalBasisComment

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `LegalBasisComment`                                          |
| **Definitie Engels**         | More detailed explanation of the general conditions governing the lawfulness of processing by the controller. |
| **Attribuutnaam Nederlands** | grondslagUitleg                                              |
| **Definitie Nederlands**     | Uitleg bij de algemene voorwaarden inzake de rechtmatigheid van verwerking door de verantwoordelijke. |
| **Toelichting**              | -                                                            |
| **Noodzakelijkheid**         | Organisaties mogen persoonsgegevens alleen verzamelen met een gerechtvaardigd doel. Dat doel moet specifiek zijn en vooraf uitdrukkelijk zijn omschreven. Artikel 5-1 van de AVG benoemt (onder andere) de volgende maatregelen: |
|                              |*Persoonsgegevens moeten:* |
|                              | *a) worden verwerkt op een wijze die ten aanzien van de betrokkene rechtmatig, behoorlijk en transparant is ("rechtmatigheid, behoorlijkheid en transparantie");*|
|                              | *b) voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden worden verzameld en mogen vervolgens niet verder op een met die doeleinden onverenigbare wijze worden verwerkt; de verdere verwerking met het oog op archivering in het algemeen belang, wetenschappelijk of historisch onderzoek of statistische doeleinden wordt overeenkomstig artikel 89, lid 1, niet als onverenigbaar met de oorspronkelijke doeleinden beschouwd ("doelbinding");*|
|                              |*c) toereikend zijn, ter zake dienend en beperkt tot wat noodzakelijk is voor de doeleinden waarvoor zij worden verwerkt ("minimale gegevensverwerking").* |
| **Datatype**                 | CharacterString                                              |
| **Voorbeeld**                | Paspoortenregeling Nederland                                 |
| **Verplicht**                | Nee                                                          |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### operationId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `operationId`                                                |
| **Definitie Engels**         | Unique name given to a processing operation.                 |
| **Attribuutnaam Nederlands** | actieId                                                      |
| **Definitie Nederlands**     | Identificator die de gegevensverwerkingsactie uniek identificeert. |
| **Toelichting**              | Het iD is betekenisloos, kent geen volgorde en is uniek over alle systemen in de wereld. |
| **Noodzakelijkheid**         | Elke gegevensverwerkingsactie wordt uniek opgeslagen in het logboek. Indien een rapportage moet worden gemaakt voor de betrokkene, moet de unieke gegevensverwerkingsactie opgehaald kunnen worden uit het logboek. Het ophalen van de gegevens gaat op basis van het operationId, dus zonder dit gegeven is het aanmaken van een rapportage niet mogelijk. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### operationName

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `operationName`                                              |
| **Definitie Engels**         | Specific operation addressed or referred to.                 |
| **Attribuutnaam Nederlands** | actieNaam                                                    |
| **Definitie Nederlands**     | Naam van een specifieke gegevensverwerkingsactie.            |
| **Toelichting**              | Aanbevolen wordt om alle gegevensverwerkingsacties te beschrijven als een werkwoord (in de infinitief) gevolgd door een zelfstandig naamwoord. |
| **Noodzakelijkheid**         | Om duidelijk te maken aan de betrokkene (bij een verzoek om gegevensinzage) wat er concreet is gebeurd bij een gegevensverwerkingsactie, wordt een operationName gedefinieerd. Zie ook artikel 4 van de AVG, waarin de definitie van ‘verwerking’ wordt genoemd: |
|                              | *een bewerking of een geheel van bewerkingen met betrekking tot persoonsgegevens, al dan niet uitgevoerd via geautomatiseerde procedés, zoals het verzamelen, vastleggen, ordenen, structureren, opslaan, bijwerken of wijzigen, opvragen, raadplegen, gebruiken, verstrekken door middel van doorzending, verspreiden of op andere wijze ter beschikking stellen, aligneren of combineren, afschermen, wissen of vernietigen van gegevens.* |
| **Datatype**                 | CharacterString                                              |
| **Voorbeeld**                | Opslaan persoonsgegevens                                     |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### parentDplCoreProcessingActivityId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `parentDplCoreProcessingActivityId`                          |
| **Definitie Engels**         | A parent is one class, and a child is another class that inherits all of the attributes and functions assigned to the parent class. The parentId refers to the parent class. |
| **Attribuutnaam Nederlands** | parentDplCoreVerwerkingsactiviteitId                         |
| **Definitie Nederlands**     | Een parent is één klasse, en een child is een andere klasse die alle attributen en functies overerft die aan de bovenliggende klasse zijn toegewezen. De parentId verwijst naar de bovenliggende klasse. |
| **Toelichting**              | Een verwerkingsactiviteit kan onderdeel zijn een andere verwerkingsactiviteit. Op deze manier ontstaat er een hiërarchie van verwerkingsactiviteiten. |
| **Noodzakelijkheid**         | Een bepaalde verwerkingsactiviteit kan een onderdeel zijn van een andere verwerkingsactiviteit. Door gebruik te maken van een ‘parent/child’-structuur, hoeven er geen nieuwe attributen gedefinieerd te worden om een hiërarchie van verwerkingsactiviteiten te creëren. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register en Logboek                                          |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### parentOperationId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `parentOperationId`                                          |
| **Definitie Engels**         | A parent is one class, and a child is another class that inherits all of the attributes and functions assigned to the parent class. The parentId refers to the parent class. |
| **Attribuutnaam Nederlands** | parentActieId                                                |
| **Definitie Nederlands**     | Een parent is één klasse, en een child is een andere klasse die alle attributen en functies overerft die aan de bovenliggende klasse zijn toegewezen. De parentId verwijst naar de bovenliggende klasse. |
| **Toelichting**              | Een gegevensverwerkingsactie kan onderdeel zijn een andere verwerkingsactie. Op deze manier ontstaat er een hiërarchie van gegevensverwerkingsacties. |
| **Noodzakelijkheid**         | Een bepaalde verwerkingsactie kan een onderdeel zijn van een andere verwerkingsactie. Door gebruik te maken van een ‘parent/child’-structuur, hoeven er geen nieuwe attributen gedefinieerd te worden om een hiërarchie van gegevensverwerkingsacties te creëren. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### personalDataCategories

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `personalDataCategories`                                     |
| **Definitie Engels**         | Category of information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. |
| **Attribuutnaam Nederlands** | categorieënPersoonsgegevens                                  |
| **Definitie Nederlands**     | Categorieën van Persoonsgegevens zijn alle gegevens die betrekking hebben op een geïdentificeerde of identificeerbare levende natuurlijke persoon. Losse gegevens die samengevoegd kunnen leiden tot de identificatie van een bepaalde persoon vormen ook persoonsgegevens. |
| **Toelichting**              | Verwerking van persoonsgegevens waaruit ras of etnische afkomst, politieke opvattingen, religieuze of levensbeschouwelijke overtuigingen, of het lidmaatschap van een vakbond blijken, en verwerking van genetische gegevens, biometrische gegevens met het oog op de unieke identificatie van een persoon, of gegevens over gezondheid, of gegevens met betrekking tot iemands seksueel gedrag of seksuele gerichtheid zijn verboden. |
| **Noodzakelijkheid**         | In AVG artikel 30-1c wordt de volgende maatregel benoemd: *Elke verantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden. Dat register bevat alle volgende gegevens: een beschrijving van de categorieën van betrokkenen en van de categorieën van persoonsgegevens.* |
| **Datatype**                 | Enumwaarde                                                   |
| **Voorbeeld**                | Nummer van identiteitskaart                                  |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden**        | Afhankelijk van het type systeem en betrokken actoren. Er kunnen meerdere categorieën van toepassing zijn. |

### purpose

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `purpose`                                                    |
| **Definitie Engels**         | Personal data may only be processed for specified, explicit and legitimate purposes and may not be further processed in a manner incompatible with those purposes. |
| **Attribuutnaam Nederlands** | doelEinde                                                    |
| **Definitie Nederlands**     | Persoonsgegevens mogen slechts worden verwerkt voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden en mogen vervolgens niet verder op een met die doeleinden onverenigbare wijze worden verwerkt. |
| **Toelichting**              | Persoonsgegevens mogen alleen verwerken als je vóóraf de specifieke doeleinden voor de verwerking bepaald zijn. |
| **Noodzakelijkheid**         | In AVG artikel 5-1b wordt de volgende maatregel benoemd: *Persoonsgegevens moeten: voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden worden verzameld en mogen vervolgens niet verder op een met die doeleinden onverenigbare wijze worden verwerkt; de verdere verwerking met het oog op archivering in het algemeen belang, wetenschappelijk of historisch onderzoek of statistische doeleinden wordt overeenkomstig artikel 89, lid 1, niet als onverenigbaar met de oorspronkelijke doeleinden beschouwd („doelbinding”).* |
| **Datatype**                 | CharacterString                                              |
| **Voorbeeld**                | Het aanvragen, afgeven en innemen van reisdocumenten en het verwerken van kennisgevingen van het in het buitenland afgegeven reisdocumenten. |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### recipientsCategories

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `recipientsCategories`                                       |
| **Definitie Engels**         | Categories of natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. |
| **Attribuutnaam Nederlands** | categorieënOntvangers                                        |
| **Definitie Nederlands**     | Categorieën van natuurlijke of rechtspersonen, overheidsinstanties, agentschap of andere instanties waaraan de persoonsgegevens worden bekendgemaakt, al dan niet een derde partij. |
| **Toelichting**              | -                                                            |
| **Noodzakelijkheid**         | In AVG artikel 30-1d wordt de volgende maatregel benoemd: *Elke verantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden. Dat register bevat alle volgende gegevens: de categorieën van ontvangers aan wie de persoonsgegevens zijn of zullen worden verstrekt, onder meer ontvangers in derde landen of internationale organisaties.* |
| **Datatype**                 | Enumwaarde                                                   |
| **Voorbeeld**                | Aanvragers, rechthebbenden                                   |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Register                                                     |
| **Enumeratiewaarden**        | Afhankelijk van het type systeem en betrokken actoren. Er kunnen meerdere categorieën van toepassing zijn. |

### resource.attribute

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `resource.attribute`                                         |
| **Definitie Engels**         | Attributes in the form of key value pairs.                   |
| **Attribuutnaam Nederlands** | informatiebron.attribuut                                     |
| **Definitie Nederlands**     | Attribuutsoorten in de vorm van key value pairs.             |
| **Toelichting**              | Organisaties hebben de vrijheid om zelf key value pairs te bepalen als dit bijdraagt aan de inzichtelijkheid voor de logging van een gegevensverwerkingsactie. Naast naam en versie van de informatiebron, kan de organisatie andere attribuutsoorten definiëren ten aanzien van de informatiebron. |
| **Noodzakelijkheid**         | In AVG grond 61 wordt de volgende maatregel benoemd: *De informatie over de verwerking van persoonsgegevens betreffende de betrokkene dient hem te worden meegedeeld bij het verzamelen bij de betrokkene van de gegevens of, indien de gegevens uit een andere bron zijn verkregen, binnen een redelijke termijn, die afhangt van de omstandigheden van het geval. Wanneer de persoonsgegevens rechtmatig aan een andere ontvanger kunnen worden verstrekt, dient de betrokkene te worden meegedeeld wanneer de persoonsgegevens voor het eerst aan de ontvanger worden verstrekt. Wanneer de verantwoordelijke voornemens is de persoonsgegevens te verwerken met een ander doel dan dat waarvoor zij zijn verzameld, moet de verantwoordelijke de betrokkene vóór die verdere verwerking informatie over dat andere doel en andere noodzakelijke informatie verstrekken. Wanneer de oorsprong van de persoonsgegevens niet aan de betrokkene kan worden meegedeeld omdat verschillende bronnen zijn gebruikt, moet algemene informatie worden verstrekt.* De organisatie kan meerdere attribuutsoorten definiëren indien dit preciezere informatie oplevert ten aanzien van de gegevensbron. |
| **Datatype**                 | -                                                            |
| **Voorbeeld**                | -                                                            |
| **Verplicht**                | Nee                                                          |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | -                                                            |

### resource.name

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `resource.name`                                              |
| **Definitie Engels**         | Name of any tangible or intangible asset capable of generating, transmitting, receiving, processing, or representing data in electronic form, where the asset is owned, licensed, operated, managed, or made available by, or otherwise used by, a data processing organisation. |
| **Attribuutnaam Nederlands** | informatiebron.naam                                          |
| **Definitie Nederlands**     | Naam van een materieel of immaterieel bezit dat gegevens in elektronische vorm kan genereren, verzenden, ontvangen, verwerken of vertegenwoordigen, waarbij het actief eigendom is van, in licentie is gegeven, wordt geëxploiteerd, beheerd of beschikbaar wordt gesteld door, of anderszins wordt gebruikt door, een gegevensverwerkingsorganisatie. |
| **Toelichting**              | Naam (name) is een attribuutsoort van het objecttype Informatiebron (Resource). |
| **Noodzakelijkheid**         | In AVG grond 61 wordt de volgende maatregel benoemd: *De informatie over de verwerking van persoonsgegevens betreffende de betrokkene dient hem te worden meegedeeld bij het verzamelen bij de betrokkene van de gegevens of, indien de gegevens uit een andere bron zijn verkregen, binnen een redelijke termijn, die afhangt van de omstandigheden van het geval. Wanneer de persoonsgegevens rechtmatig aan een andere ontvanger kunnen worden verstrekt, dient de betrokkene te worden meegedeeld wanneer de persoonsgegevens voor het eerst aan de ontvanger worden verstrekt. Wanneer de verantwoordelijke voornemens is de persoonsgegevens te verwerken met een ander doel dan dat waarvoor zij zijn verzameld, moet de verantwoordelijke de betrokkene vóór die verdere verwerking informatie over dat andere doel en andere noodzakelijke informatie verstrekken. Wanneer de oorsprong van de persoonsgegevens niet aan de betrokkene kan worden meegedeeld omdat verschillende bronnen zijn gebruikt, moet algemene informatie worden verstrekt.* |
| **Datatype**                 | CharacterString                                              |
| **Voorbeeld**                | Vergunningenadministratie                                    |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### resource.version

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `resource.version`                                           |
| **Definitie Engels**         | Version of any tangible or intangible asset capable of generating, transmitting, receiving, processing, or representing data in electronic form, where the asset is owned, licensed, operated, managed, or made available by, or otherwise used by, a data processing organisation. |
| **Attribuutnaam Nederlands** | informatiebron.versie                                        |
| **Definitie Nederlands**     | Naam van een materieel of immaterieel bezit dat gegevens in elektronische vorm kan genereren, verzenden, ontvangen, verwerken of vertegenwoordigen, waarbij het actief eigendom is van, in licentie is gegeven, wordt geëxploiteerd, beheerd of beschikbaar wordt gesteld door, of anderszins wordt gebruikt door, een gegevensverwerkingsorganisatie. |
| **Toelichting**              | Versie (version) is een attribuutsoort van het objecttype Informatiebron (Resource). |
| **Noodzakelijkheid**         | In AVG grond 61 wordt de volgende maatregel benoemd: *De informatie over de verwerking van persoonsgegevens betreffende de betrokkene dient hem te worden meegedeeld bij het verzamelen bij de betrokkene van de gegevens of, indien de gegevens uit een andere bron zijn verkregen, binnen een redelijke termijn, die afhangt van de omstandigheden van het geval. Wanneer de persoonsgegevens rechtmatig aan een andere ontvanger kunnen worden verstrekt, dient de betrokkene te worden meegedeeld wanneer de persoonsgegevens voor het eerst aan de ontvanger worden verstrekt. Wanneer de verantwoordelijke voornemens is de persoonsgegevens te verwerken met een ander doel dan dat waarvoor zij zijn verzameld, moet de verantwoordelijke de betrokkene vóór die verdere verwerking informatie over dat andere doel en andere noodzakelijke informatie verstrekken. Wanneer de oorsprong van de persoonsgegevens niet aan de betrokkene kan worden meegedeeld omdat verschillende bronnen zijn gebruikt, moet algemene informatie worden verstrekt.* Van sommige informatiebronnen zijn meerdere versies aanwezig. In dit geval is de vermelding van de versie van deze informatiebron een preciezere definitie. |
| **Datatype**                 | CharacterString                                              |
| **Voorbeeld**                | 1.0.1.e                                                      |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### startTime

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `startTime`                                                  |
| **Definitie Engels**         | Timestamp representing the start of a data processing logging action. |
| **Attribuutnaam Nederlands** | startTijd                                                    |
| **Definitie Nederlands**     | Tijdstempel die het begin van een logboekactie voor gegevensverwerking vertegenwoordigt. |
| **Toelichting**              | Een logboekregel wordt pas weggeschreven in het logboek als de volledige transactie (succesvol of niet succesvol) is afgerond. |
| **Noodzakelijkheid**         | Bij een inzageverzoek van de Betrokkene ten aanzien van gegevensverwerkingsactie, wordt ook een tijdsspanne gevraagd. Alleen de details van gegevenswerkingactie binnen opgegeven tijdsspanne worden gerapporteerd. Zonder begin- en eindtijd van een gegevensverwerkingactie is het onmogelijk de juiste details op te leveren. |
| **Datatype**                 | DateTime                                                     |
| **Voorbeeld**                | 2025-02-23T00:00:00                                          |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |

### statusCode

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `statusCode`                                                 |
| **Definitie Engels**         | Indicates whether a request has been processed successfully or not by the server. |
| **Attribuutnaam Nederlands** | statusCode                                                   |
| **Definitie Nederlands**     | Geeft aan of een verzoek al dan niet met succes door de server is verwerkt. |
| **Toelichting**              | Als een geautomatiseerd verzoek correct wordt afgehandeld, dan zal de status 'OK' zijn. Bij een foutmelding (ongeacht het type foutmelding) zal de statusCode 'NOK' zijn. |
| **Noodzakelijkheid**         | Indien een gegevensverwerkingactie heeft plaatsgevonden, is het van belang te weten of deze verwerkingsactie gelukt is of niet. Zonder de statuscode kan er niet worden gerapporteerd aan een betrokkene of een wijziging daadwerkelijk heeft plaatsgevonden. |
| **Datatype**                 | Enumwaarde                                                   |
| **Voorbeeld**                | OK                                                           |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | 0: Unknown<br>1: OK<br>2: NOK                                |

### traceId

| **Attribuut**                | **Beschrijving**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| **Attribuutnaam**            | `traceId`                                                    |
| **Definitie Engels**         | Unique identifier of the request in the system, which adds the possibility of tracing the history of the request in detail. |
| **Attribuutnaam Nederlands** | traceerId                                                    |
| **Definitie Nederlands**     | Unieke identificatie van een bericht in het systeem, waarmee de mogelijkheid ontstaat om de geschiedenis van het bericht in detail te volgen. |
| **Toelichting**              | Een trace is het proces waarbij informatie wordt vastgelegd over de stroom van transacties of verzoeken van een applicatie of systeem. Logboekregistratie is doorgaans breder van opzet en legt een breder scala aan gebeurtenissen vast, terwijl tracering meer specifieke informatie biedt over het uitvoeringspad van individuele verzoeken. |
| **Noodzakelijkheid**         | De traceId is de unieke factor die alle (sub)gegevenswerkingsacties die betrekking hebben op een (hoofd)gegevensverwerkingactie aan elkaar verbindt. Zonder de traceId kan een totaal aan elkaar gelieerde gegevensverwerkingsacties niet worden gerapporteerd. |
| **Datatype**                 | URI                                                          |
| **Voorbeeld**                | 6e8bc430-9c3a-11d9-9669-0800200c9a66                         |
| **Verplicht**                | Ja                                                           |
| **Gebruikt in**              | Logboek                                                      |
| **Enumeratiewaarden**        | Niet van toepassing                                          |
