# Inleiding

Het idee is dat het Logboek Dataverwerkingen een basis biedt om te zorgen dat de overheid precies de data logt die zij nodig heeft om verantwoording af te leggen over haar taken. Niet meer, maar ook niet minder. En om te zorgen dat organisaties data zodanig loggen dat zij zich niet alleen over een eigen handelen kunnen verantwoorden, maar ook over hun gezamenlijk handelen als “de overheid”.

## Aanleiding en context van Logboek dataverwerkingen

*Informatiehuishouding van de overheid moet op orde worden gebracht.* De overheid werkt ten dienste van burgers en bedrijven. De overheid verwerkt daarvoor informatie van deze burgers en bedrijven. Het is belangrijk dat de informatiehuishouding van de overheid op orde is, zodat de overheid transparant en aanspreekbaar is, en zich daarover goed kan verantwoorden.

Dat werkt als een soort vliegwiel, omdat daardoor ook de kwaliteit van de informatie beter wordt. De overheid kan daarmee betere dienstverlening bieden en ook zorgen dat de burger minder met fouten wordt geconfronteerd, of dat overheden fouten beter en sneller kunnen herstellen als deze zich onverhoopt voordoen.

*Eenduidige en integrale verantwoording over dataverwerkingen door de overheid.* Belangrijk is dat overheidsorganisaties op een eenduidige manier met informatie omgaan en op een eenduidige manier informatie met elkaar uitwisselen.

Voorafgaand aan informatie-uitwisseling is het belangrijk dat transparant is waarom dat gebeurt en, achteraf moet de overheid verantwoording kunnen afleggen over de data en de wijze waarop de data is verwerkt. Zo kunnen eventuele fouten of onregelmatigheden worden hersteld en kunnen burgers hun rechten op grond van de AVG geldend maken (oa. inzage en correctie). Het gaat daarbij niet alleen om overheidsorganisaties afzonderlijk, maar het gaat er ook – juist - om dat “dé overheid” zich als geheel ten opzichte van de burger kan verantwoorden.

Een belangrijk instrument om verbetering van de informatiehuishouding te bereiken is standaardisatie. Op diverse aspecten is daarom standaardisatie nodig en worden deze ontwikkeld. Een van deze aspecten is de wijze waarop overheden zich verantwoorden. Standaardisatie daarvan vormt daarmee een puzzelstukje in het bredere geheel. Hiermee kunnen overheden hun dataverwerkingen op dezelfde wijze verantwoorden en deze verantwoording onderling relateren, zodat de keten van dataverwerkingen tussen organisaties compleet inzichtelijk kan worden gemaakt.

### Standaard als technisch middel

De standaard Logboek Dataverwerkingen is een technische randvoorwaarde (een enabler) die organisaties in staat stelt om hun bredere doelen op het gebied van verantwoording en transparantie te bereiken. De standaard is niet het doel op zich, maar een middel om de verantwoordingsplicht van de overheid waar te kunnen maken.

Het onderscheid tussen de beleidsmatige doelen van het bredere beleidsinstrument en de technische doelen van de standaard is als volgt:

**Beleidsmatige doelen** (het waarom):

* Het verbeteren van de transparantie en verantwoordelijkheid van de overheid ten opzichte van burgers en bedrijven
* Het faciliteren van inzagerechten en het nakomen van wettelijke verplichtingen
* Het mogelijk maken van auditing, toezicht en kwaliteitsverbetering van de informatiehuishouding
* Het herstellen van fouten en onregelmatigheden

Deze beleidsmatige doelen worden bereikt door middel van de technische mogelijkheden die de standaard biedt.
**Technische doelen** (beschreven in de [normatieve standaard](https://logius-standaarden.github.io/logboek-dataverwerkingen/)):

**Technische doelen** (beschreven in de [normatieve standaard](https://logius-standaarden.github.io/logboek-dataverwerkingen/)):
* Het bieden van interoperabele functionaliteit voor het loggen van dataverwerkingen
* Het aan elkaar relateren van logs binnen en tussen systemen
* Het specificeren van uniforme interfaces en gedrag voor logging-componenten

Deze technische doelen zijn gericht op het hoe: hoe organisaties dataverwerkingen kunnen loggen op een eenduidige en interoperabele manier.

De standaard vormt daarmee een bouwsteen binnen een groter geheel van wet- en regelgeving (zoals de AVG en AWB), organisatorische maatregelen en beleidsafspraken die samen de verantwoording van de overheid vormgeven.

## Scope van de Standaard Logboek dataverwerkingen

Dit beschrijft een overzicht van de scope van de standaard, inclusief de zaken die wel en niet binnen de scope van de standaard vallen.

### In scope van deze standaard

Logging over dataverwerkingen in overheidssystemen. Het uitgangspunt van deze standaard is de verantwoordingsplicht van de overheid over de uitvoering van haar taken en de wetten en kaders die daarbij horen.

### Buiten scope van deze standaard

De volgende zaken worden **niet** behandeld in deze standaard:

* **Toegangsbeheer**: Logging rondom toegang tot systemen en data, waarbij zowel succesvolle als mislukte pogingen om toegang te krijgen worden vastgelegd. Deze logs zijn bedoeld voor het controleren van wie toegang heeft tot gevoelige informatie en voor het detecteren van ongeautoriseerde toegang.
* **Toegangsverlening Logboek**: De standaard specificeert geen functionaliteit rondom het aanmaken en beheren van toegangs- en onderhoudsprofielen ten behoeve van het logboek. Voor meer informatie zie [Federatieve Toegangsverlening](https://digilab.overheid.nl/projecten/toegangsverleningmethodiek-api/).
* **Gebruikersactiviteiten**: Logging van namen van gebruikers die data gebruiken of verwerken.
* **Beveiligingsincidenten**: Specifieke logs voor incidenten die de beveiliging kunnen beïnvloeden, zoals malware-detectie, aanvallen of misbruik. Dit soort logging is van groot belang voor het identificeren van bedreigingen en het kunnen reageren op incidenten.
* **Technische en Systeemlogs**: Logging van systeemfouten, configuratiewijzigingen en technische problemen. Deze logs helpen bij het waarborgen van de stabiliteit en betrouwbaarheid van IT-systemen en ondersteunen het oplossen van technische problemen.
* **Logging ten behoeve van motivatie totstandkoming besluitvorming**: anders dan uitgevoerde  dataverwerkingen (niet: beslisregels, algoritmes, et cetera).
* **Correcties op- en verwijdering van verwerkte data**: dit wordt gezien als verwerking en volgt de gewone route van datalogging. Voor meer informatie zie [besluit 4.5](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/#standaard-beschrijft-geen-interface-voor-verwijderen-van-logs).
* **Beperkingen op informatieplichten (bijvoorbeeld indien er een strafrechtelijk onderzoek plaatsvindt)**: het is aan de organisatie zelf om procedures te implementeren om beperking van inzage uit te voeren. Voor meer informatie zie [besluit 4.6](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/#vertrouwelijkheid-wordt-vastgelegd-per-verwerkingsactiviteit).

## Totstandkoming van de standaard

### aanleiding en achtergrond

Het Logboek Dataverwerkingen is een doorontwikkeling van de conceptstandaard GEMMA Verwerkingenlogging, die door VNG Realisatie is gemaakt met als doel de naleving van AVG-verplichtingen rondom de verwerking van persoonsdata te verbeteren.

In 2023 heeft het Ministerie van Binnenlandse Zaken, in samenwerking met verschillende overheidspartijen, een project gestart om de GEMMA Verwerkingenlogging-standaard verder te ontwikkelen. Het uitgangspunt was het vergroten van de transparantie van de overheid en het verbeteren van de informatiepositie van de burger. Vanaf 2024 werd breder gekeken dan alleen de AVG; wettelijke kaders, zoals verantwoordingsverplichtingen, werden als uitgangspunt genomen voor het vormgeven van de standaard. Om aan deze eisen te voldoen, is de standaard aangepast en hernoemd tot Logboek Dataverwerkingen.

### Interdisciplinaire aanpak

Voor de ontwikkeling van de standaard Logboek Dataverwerkingen was het essentieel dat de verschillende aspecten (juridische beleidskaders, techniek, inhoud en beheer) goed op elkaar werden afgestemd. Daartoe werkte het project met een interdisciplinair team: juristen, beleidsmakers en adviseurs van BZK werkten nauw samen met technische experts van Digilab en medewerkers van Logius, de beoogde beheerder. Deze interdisciplinaire aanpak zorgde ervoor dat de standaard aansluit op juridische randvoorwaarden, eenvoudig te beheren en te implementeren is, én effectief functioneert in de praktijk. Dit laatste aspect werd getest in Digilab, waar de standaard in verschillende simulatieomgevingen (Fieldlabs) werd ingebouwd en beproefd op praktische toepasbaarheid.

### Beheer en doorontwikkeling

Om de overgang tussen ontwikkeling en beheer soepel te laten verlopen, was Logius vanaf een vroeg stadium betrokken bij het project. De inzet van Logius is in de loop van de tijd uitgebreid, zodat in 2025 het beheer van de standaard volledig kan worden overgedragen. Dit beheer wordt ingericht volgens de BOMOS-methodologie (Beheer- en OntwikkelModel voor Open Standaarden). Het opzetten van een goede governance-structuur is een integraal onderdeel van het beheer. Hierbij zullen, naast de gebruikers van de standaard, belangrijke rollen zijn weggelegd voor MIDO (Meerjarenprogramma Infrastructuur Digitale Overheid) en het Forum Standaardisatie. Deze gremia zullen naar verwachting respectievelijk de standaard vaststellen en deze opnemen op de Pas-Toe-Of-Leg-Uit-lijst. Het Ministerie van Binnenlandse Zaken blijft opdrachtgever voor het beheer van de standaard.
