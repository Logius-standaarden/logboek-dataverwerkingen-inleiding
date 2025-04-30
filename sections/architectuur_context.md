## Context

De standaard Logboek dataverwerkingen levert geen kant-en-klare softwareoplossing. Wel biedt de standaard richtlijnen waar het Logboek dataverwerkingen van een applicatie aan moet voldoen. Dit document geeft aan hoe de standaard zich verhoudt tot de [Architectuur Digitale Overheid 2030](https://www.digitaleoverheid.nl/nieuws/architectuur-digitale-overheid-2030-vastgesteld-2/) en de *Domeinarchitectuur Gegevensuitwisseling*

### Bedrijfsarchitectuur

* *Diensten en producten*
  * De standaard Logboek dataverwerkingen is als product voornamelijk gericht op het verantwoorden van dataverwerkingen door overheden in het kader van hun taken (**Regie op Gegevens** en de **Transparante Overheid)**. Dit betekent dat het gebruik van deze standaard door overheidsorganisaties de informatiepositie van burgers en bedrijven ten opzichte van de overheid sterk verbetert zodat zij meer grip op en inzicht in hun persoonsgebonden data hebben (**inzicht in data over jezelf**). Daarnaast draagt deze standaard aan bij **Verantwoord datagebruik en ruimer meervoudig gebruik data**. Implementatie van deze standaard draagt bij aan de verantwoording over, en het doelmatig gebruik van data.
* *Kanalen*
  * Het Logboek dataverwerkingen is een service behorend bij een applicatie die specifieke data verwerkt waarover uiteindelijk verantwoording moet kunnen worden afgelegd (bijvoorbeeld persoonsdata of data over geografische objecten). De standaard geeft geen richtlijnen ten aanzien de ontsluiting van deze logdata richting belanghebbenden, wel geeft het een richting ten aanzien van de inrichting en het gedrag van het Logboek dataverwerkingen.
* *Organisatie*
  * De Overheid bestaat uit vele (semi)autonome organisaties. Door gezamenlijke afspraken te maken ten aanzien van logging van verwerkte data, ondersteunt de standaard het doel om naar de burger toe als één organisatie te kunnen verantwoorden.
* *Processen*
  * Voor het verwerken van data zijn vaak ook data nodig van andere (overheids)organisaties. De implementatie van de standaard Logboek dataverwerkingen zorgt er voor dat loggings tracing-metadata bevat zodat altijd kan worden nagegaan wat de bron van specifieke data was. De standaard ondersteunt hiermee het uitgangspunt dat (overheids)organisaties zorgen voor onderlinge samenhang van data.
* *Bedrijfsfuncties*
  * Overheidsfuncties moeten eenduidig een helder belegd zijn, het moet helder zijn welke (overheids)organisaties verantwoordelijk zijn voor het leveren van product of dienst. Door het gebruiken van de standaard Logboek datalogverwerkingen door alle dataverwerkende (overheids)organisaties op een soortgelijke manier wordt het duidelijk welke data gebruikt zijn en door wie.

### Informatie­architectuur (Information systems architecture)

* *Api’s / Services*
  * Naast richtlijnen voor de inrichting en het gedrag van het Logboek dataverwerkingen, biedt deze standaard ook een aantal voorbeeld API’s:
  * **Inzicht API:** deze service geeft de mogelijkheid een query uit te voeren op loggings van dataverwerkingen (nog niet beschikbaar).
  * **Register van de Verwerkingsactiviteiten:** deze service geeft de mogelijkheid de data van een Register van Verwerkingsactiviteiten te bekijken (nog niet beschikbaar).

> De API’s zijn ontworpen en ontwikkeld volgens de standaard [Rest-API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules).

* *Applicaties*
  * De standaard biedt geen applicatie aan, wel biedt het richtlijnen ten aanzien van het gedrag en invulling van het Logboek dataverwerkingen. Hiermee geeft de standaard de vrijheid aan organisaties om zelf op basis van de specifieke implementatie van een dataverwerkende Applicatie een Logboek te ontwikkelen wat qua gedrag en (meta)data gelijkvormig is over alle (overheids)organisaties heen.

* *Berichtenverkeer / datauitwisseling*
  * Het berichten verkeer met betrekking tot het Logboek dataverwerkingen heeft geen directe connectie met de burger. Wel is het van belang bij opvraag van data bij andere organisaties traceringsdata worden verstuurd en opgeslagen in het Logboek zodat altijd duidelijk wat de bron is van data die verwerkt zijn. Deze standaard biedt een traceringsmethodiek aan zodat de datauitwisseling tussen organisaties *vastgelegd en verantwoord* kan worden.

* *Data*
  * De Nederlandse Basisregistraties vervullen een essentiële rol in het vastleggen en gecontroleerd beheren van data. Organisaties kunnen aan elkaar data ter beschikking te stellen vanuit ‘kernregistraties’. De standaard Logboek dataverwerkingen biedt een richtlijn voor het loggen van verwerkte data van al deze basisregistraties.

Onderstaande stelselplaat geeft een globaal overzicht van de bronhouders, de aanbieders en afnemers van data.

![Architectuur Digitale Overheid 2030](./media/stelselplaat.png)

*[bron: Architectuur Digitale Overheid 2030]*

Een belangrijk kader voor de standaard Logboek dataverwerkingen is de uitwerking van het [GDI meerjarenvisie](https://github.com/minbzk/gdi-gegevensuitwisseling) op basis van de [Architectuur Digitale Overheid 2030](https://www.digitaleoverheid.nl/nieuws/architectuur-digitale-overheid-2030-vastgesteld-2/) met als specifiek onderwerp Gegevensuitwisseling. De standaard Logboek dataverwerking kan gepositioneerd worden in de GDI Gegevensuitwisseling als standaard waarin een 'Uitwisselingsafspraak' geformaliseerd wordt. Waarbij de daadwerkelijke logging betrekking heeft op de 'Operatie' in de modelplaat ‘[GDI-Gegevensuitwisseling’](https://minbzk.github.io/gdi-gegevensuitwisseling/?view=id-efc531031d114860a309f6eeacdad289).

![Bedrijfsobjectenmodel](./media/metadatamodel.png)

*[Bron: GDI – Gegevensuitwisseling]*

Onderstaand figuur geeft een overzicht van de architectuurprincipes uit het [GDI meerjarenvisie](https://github.com/minbzk/gdi-gegevensuitwisseling) en hun relatie met de belangrijkste functie voor data uitwisseling.

![architectuurprincipes ](./media/architectuurprincipes.png)

*[Bron: MIDO/GDI Domeinarchitectuur Gegevensuitwisseling]*

De relatie en invulling van de standaard Logboek dataverwerkingen staat uitgewerkt in de volgende paragraaf.

### Technische architectuur (Technical architecture)

#### Netwerken en slimme apparaten

De standaard Logboek dataverwerkingen kan ook worden toegepast in een middleware- of cloud-omgeving. Het netwerkcomponent logt binnenkomende en uitgaande berichten.

![technische architectuur](./media/technische_architectuur.png)

Ook voor mobiele Apps en IoT (Internet of Things) geldt dat het netwerkcomponent de databerichten logt.

### Software architectuur

Hoofdstuk [2.2 Componenten](https://logius-standaarden.github.io/logboek-dataverwerkingen/#componenten) geeft een globaal overzicht van de benodigde softwarecomponenten om de standaard te implementeren.

#### Platformen voor dagelijkse exploitatie en huisvesting

De standaard Logboek dataverwerkingen gaat er vanuit dat de het Logboekcomponent op een beveiligd platform in een beveiligd datacenter is geïnstalleerd.

#### Aspectgebieden

* *Informatiebeveiliging*
  * De standaard Logboek dataverwerkingen gaat er vanuit dat zowel het Logboekcomponent als de data in het Logboek beveiligd zijn volgens de BIO (=Baseline Informatiebeveiliging Overheid) – zie ook [Beleidskader](https://logius-standaarden.github.io/logboek-dataverwerkingen_Juridisch-beleidskader/#beleidskader).
* *Beheer en exploitatie*
  * Logius verzorgt het beheer en onderhoud van deze standaard volgens het [BOMOS](https://www.logius.nl/domeinen/infrastructuur/bomos)-model.

### Relaties GDI architectuurprincipes  en de standaard

| **Architectuurprincipe**                                     | **Relatie met de standaard**                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1.1. Data die kunnen worden gedeeld zijn vindbaar, toegankelijk,  interoperabel en herbruikbaar | - Logregels  zijn voorzien van metadata ten aanzien van tracering zodat gerelateerde  Logregels altijd gevonden kunnen worden.<br> - Identificatoren  worden aangemaakt zodat deze over de gehele wereld uniek zijn.<br> - Het processingActivityId is gerelateerd aan het  Register van Verwerkingsactiviteiten zodat per Logregel altijd verwezen kan  worden naar een activiteit van een (overheids)organisatie en daarmee de  context direct duidelijk wordt. |
| 1.2. Datauitwisseling is gebaseerd op open standaarden   | - API’s  gerelateerd aan deze standaard moeten worden ontworpen en gebouwd volgens de  standaarden [REST-API   Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules), [OpenAPI](https://www.openapis.org/) en [DigiKoppeling](https://www.logius.nl/domeinen/gegevensuitwisseling/digikoppeling).<br> - Het  metadatamodel van deze standaard is gebaseerd op [OpenTelemetry](https://opentelemetry.io/). Dit is een internationale  standaard voor het genereren, verzamelen en exporteren van telemetrie  data (metrieken, logging en tracering). |
| 1.3 De kwaliteit van data is afgestemd op het gebruik    | - Door de  registratie van verwerkte data in een Logboek kan er op een later moment  inzicht gegeven worden aan andere (overheids)organisaties en burgers.  Eventuele foutieve data komen dan direct aan het licht en kunnen hersteld  worden. |
| 1.4. Datadiensten zijn afgestemd op de behoeften van afnemers | - Data  die gelogd worden bij een dataverwerking zijn afgestemd op het doel  waarvoor er gelogd moet worden (bijvoorbeeld de data die gevraagd worden  op basis van de AVG-wetgeving). Er wordt niet minder opgeslagen, meer zeker  niet meer dan nodig is.<br> - Het ontwerp  van het datamodel van deze standaard is gebaseerd op OpenTelemetry,  vertaling van data is dus niet nodig. |
<!-- markdownlint-disable-next-line link-fragments -->
| 1.5. De bron van de data is leidend                      | - Overheidsapplicaties  moeten rekening houden met de onderhoud van data bij de [bron](https://www.digitaleoverheid.nl/data-bij-de-bron/). Dit  betekent dat data niet zonder meer gekopieerd opgeslagen mogen worden.  Bij sommige dataverwerkingen zijn data nodig van andere databronnen (in de  eigen organisatie of bij een andere organisatie). De standaard Logboek  Dataverwerkingen schrijft een traceringsmechanisme voor zodat kopiëren van  specifieke data naar het Logboek niet nodig is, er kan altijd nagegaan worden  waar data vandaan kwamen en welke data er gebruikt werden.<br> - De  standaard verwijst zo veel mogelijk naar bestaande databronnen elders in  plaats van de data te dupliceren (zie besluit [4.2](#logregels-bevatten-geen-gegevens-die-al-vastliggen-in-een-register)  en [4.4](#geen-data-over-gebruikers-in-logregels)) |
| 1.6. Burgers en organisaties hebben regie over hun eigen data | - Burgers,  (overheids)organisaties en parlement hebben recht om inzicht te krijgen in  verwerkte data. Door toepassing van deze standaard kan er een rapportage  gemaakt worden die voldoet aan die informatiebehoefte.<br> - De  standaard Logboek dataverwerkingen biedt geen handreiking ten aanzien van de manier  waarop datainzicht plaats moet vinden richting belanghebbende, wel op de  in de inhoud van het datainzicht. |
| 1.7. Persoonsdata zijn beschermd bij het uitwisselen van data | - Deze  standaard gaat er vanuit dat autorisatie- en beveiligingsmechanismen worden  toegepast rondom Applicatie en Logboek, daarom zijn er geen extra richtlijnen  op dit vlak. Zie ook [Beleidskader](https://logius-standaarden.github.io/logboek-dataverwerkingen_Juridisch-beleidskader/#beleidskader). |
| 1.8. Uitwisseling van data wordt gelogd als deze later  aantoonbaar moet   zijn | - Logging van  verwerkte data is de kern van deze standaard. Door gebruikt te maken van een  traceringsmechanisme en unieke identificatoren, kan er altijd worden voldaan  aan de eis dat ontvangen en verzonden data aan elkaar gerelateerd kunnen  worden. |
| 2.1. Datauitwisseling is federatief georganiseerd        | - Logboek  Dataverwerkingen maakt het mogelijk om in een gefedereerde omgeving en in  informatieketens verantwoording te kunnen afleggen over datauitwisseling.  Hiervoor wordt tracing ingezet, een concept dat gebaseerd op de open  standaard OpenTelemetry. Zie voor enkele juridische en beleidsmatige  uitgangspunten het Juridisch Beleidskader [hoofdstuk   6](https://logius-standaarden.github.io/logboek-dataverwerkingen_Juridisch-beleidskader/#een-standaard-opstellen-om-deze-kaders-te-faciliteren) en [hoofdstuk   8](https://logius-standaarden.github.io/logboek-dataverwerkingen_Juridisch-beleidskader/#beleidskader).<br> - Nadere  invulling t.a.v. datauitwisseling in het kader van inzage zal volgen als  de extensie voor inzage wordt gemaakt. |
| 2.2. Voorwaarden en afspraken zijn expliciet en inzichtelijk | - Afspraken  in het kader van deze standaard zullen vooral gemaakt worden op het gebied  van tracering van data binnen organisaties en over organisaties heen. |
<!-- markdownlint-disable-next-line link-fragments -->
| 3.1. Gemeenschappelijke begripsvorming is het startpunt      | - De data die  gebruikt worden in deze standaard, staan vermeld en uitgelegd in het [Canoniek datamodel](#canoniek-datamodel). Het is van belang dat alle (overheids)organisatie die  gebruik maken van de standaard hetzelfde beeld hebben ten aanzien specifieke data  en uitwisseling daarvan om foutsituaties en verwarring te voorkomen. |
| 3.2. Metadata zijn begrijpelijk voor mensen              | - De  metadata zijn veelal ontstaan op basis van de internationale standaard OpenTelemetry.  Daarnaast worden de begrippen ook uitgelegd in het Canoniek Datamodel. |
<!-- markdownlint-disable-next-line link-fragments -->
| 3.3. Data worden contextrijk vastgelegd                  | - Het gebruik  van metadata in deze standaard is essentieel. De context wordt uitgelegd in  het Canoniek Datamodel. Daarnaast zijn er verdiepingsdocumenten aanwezig  zoals het traceringsmechanisme [nog toe te voegen]  en concrete [voorbeelden](#voorbeelden)  van loggingssituaties. |
| 3.4. Metadata zijn aan elkaar verbonden                  | - Metadata  tussen de verschillende Logboeken zijn aan elkaar gerelateerd middels de  beschrijvingen en afspraken zoals gespecifieerd in de standaard . |
| 3.5. Metadata zijn beschikbaar als Linked Data           | - De  gedefinieerde metadata is gerelateerd aan de standaard [NL-SBB   – standaard voor het beschrijven van begrippen](https://docs.geostandaarden.nl/nl-sbb/nl-sbb/). |
| 4.1. Data worden geleverd vanuit herbruikbare datadiensten | - Nadere  invulling volgt bij het ontwerp van de Inzage extensie. |
| 4.2. Registraties bieden historische data aan            | - Data in het  Logboek mogen niet fysiek worden verwijderd; als ze niet meer geldig zijn dan  wordt alleen vastgelegd dat ze niet meer geldig zijn (tenzij ze om juridische  redenen vernietigd moeten worden).<br> - De  historische integriteit van Logboekdata is geborgd; oude data mogen niet worden  niet overschreven.  <br> - Nieuwe  formele overheidsregistraties die worden ontwikkeld, moeten de formele  historie van datawerking vastleggen  conform de standaard Logboek dataverwerking.  Ook de wijzigingen in Register van  Verwerkingsactiviteiten worden toevoegd als nieuwe verwerkingsactiviteiten  met een eigen unieke identificator. Bestaande verwerkingsactiviteiten mogen  niet wijzigen of verwijderd worden. Hierdoor blijven de oude verwijzingen uit  de Logboek Dataverwerking intact. |
| 4.3. Aanbieders kunnen notificeren over belangrijke gebeurtenissen | - N.v.t.  Standaard beschrijft geen notificatiemechanisme voor wijzigingen in de Log. |
| 5.1. Informatieproducten zijn herleidbaar naar de onderliggende  data en  regels | - Door  gebruikt te maken van een traceringsmechanisme en unieke identificatoren, kan  er altijd worden voldaan aan de eis dat ontvangen en verzonden data aan  elkaar gerelateerd kunnen worden. De bron, en daarmee de kwaliteit en  betrouwbaarheid van verwerkte data, kunnen snel en eenvoudig worden  opgehaald.  <br>- Wordt  eventueel nader ingevuld bij de ontwikkeling van een Inzage extensie. |
| 6.1. Data worden zo vroeg mogelijk gevalideerd           | - Validatie  van logdata is een taak van de Applicatie zelf, deze standaard geeft hiervoor  geen handreiking. |
