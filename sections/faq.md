# FAQ

Dit hoofdstuk bevat veelgestelde vragen over de standaard Logboek Dataverwerking en in dit hoofdstuk worden deze veelgestelde vragen beantwoord en toegelicht.

## Wat is het doel van de standaard Logboek Dataverwerking?

De overheid moet zich verantwoorden over haar handelen. Daar valt ook onder het verantwoorden van het gebruik van data. Met het gebruik van de standaard Logboek Dataverwerking is een organisatie in staat de logging van de verwerking van data gestandaardiseerd uit te voeren. Dit geldt zowel voor verwerkingen binnen de eigen organisatie als voor verwerkingen die tussen organisaties plaatsvinden.

## Wie kan de standaard Logboek Dataverwerking gebruiken?

Elke organisatie die data verwerkt kan de standaard Logboek Dataverwerking inzetten bij processen waar logging en monitoring, bijvoorbeeld vanuit de wetgeving wenselijk is.

## Is de standaard Logboek Dataverwerking alleen bedoeld voor de verwerking van persoonsdata?

Nee, de standaard kan ook worden gebruikt voor verwerking van andere typen data, zoals bijvoorbeeld de registratie van (geografische) objecten.

## Is in de standaard Logboek Dataverwerking opgenomen hoe logging plaatsvinden ten aanzien van beveiligingsincidenten (denk ook aan technische systeemactiviteiten en toegangsbeheer)?

Nee, deze materie is buiten scope van de standaard Logboek Dataverwerkingen.

## Wie is eigenaar en beheerder van de standaard Logboek Dataverwerking?

Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties is verantwoordelijk voor deze standaard en de doorontwikkeling ervan. Het beheer wordt door Logius uitgevoerd.

## Is mijn organisatie verplicht de standaard Logboek Dataverwerking te implementeren?

Er zijn momenteel geen verplichtingen voor gebruik van de standaard. Indien de standaard ooit verplicht wordt zal dit worden gepubliceerd bij het Forum Standaardisatie op de Pas-toe-of-leg-uit-lijst. Hiervoor dient eerst de gehele procedure te worden doorlopen.

## Wat is de relatie van Audit Log met de standaard Logboek Dataverwerking?

In de standaard Logboek Dataverwerking wordt geen identificerende data opgeslagen over gebruiker van het systeem (bijv. de ambtenaar die het systeem gebruikt). We gaan ervan uit dat daar in de organisatie een Audit log voor is ingericht, aangezien dat verplicht is vanuit BIO.
Vanuit Audit Log kan wel een relatie gelegd worden met een verwerking in de standaard Logboek Dataverwerking door te verwijzen naar de `span_id` die de verwerking identificeert.

Voor redenatie hierachter, zie [besluit 4.4](https://logius-standaarden.github.io/logboek-dataverwerkingen_Inleiding/#geen-gegevens-over-gebruikers-in-logregels)

Daarnaast is het van belang om te beseffen dat het vastleggen van data over een gebruiker in de Audit Log, ook een dataverwerking is. Immers, de data van de gebruiker (bijv. de ambtenaar die het systeem heeft gebruikt) worden daarbij opgeslagen (verwerkt). Dat is dus een eigen, aparte, dataverwerking die gelogd dient te worden in de Logboek Dataverwerkingen van de verwerker.

## Zijn er dingen die je moet aanpassen aan je Audit Log als je de standaard Logboek Dataverwerking implementeert?

In de logging worden geen identificerende data opgeslagen over gebruiker van het systeem (bijv. de ambtenaar die het systeem gebruikt). Om de link tussen een gebruiker en de standaard Logboek Dataverwerking te maken, kan de Audit Log worden aangepast door te verwijzen naar de `span_id` die de dataverwerking identificeert die door de gebruiker is uitgevoerd.

## Kan je de standaard Logboek Dataverwerking implementeren als je een cloud (SaaS) applicatie gebruikt?

Ja dat kan. Het is wel van belang een duidelijk onderscheid te maken tussen verantwoordelijke en een verwerker van de data. Dit bepaalt bijvoorbeeld de Register van verwerkingsactiviteiten waarnaar u dient te verwijzen bij implementatie van de standaard Logboek Dataverwerking.

Voor meer informatie over de rol van een verantwoordelijke en een verwerker kunt u de de website van [Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/avg-algemeen/verantwoordelijke-en-verwerker) raadplegen.

## Is de performance van de standaard Logboek Dataverwerking getest? / Zal de standaard Logboek Dataverwerking de performance van mijn applicaties beperken?

Ja, de performance is getest met een aantal demo-applicaties. De testen toonden aan dat er weinig tot geen performanceverlies was op geraakte applicaties.

## Hoe werken het Register van verwerkingsactiviteiten (RvvA) en het Logboek Dataverwerkingen samen?

In het Register van verwerkingsactiviteiten (art 30 AVG) zijn de binnen de organisatie uit te voeren taken en processen waarin verwerkingen worden uitgevoerd benoemd. In de **Logboek Dataverwerkingen standaard** wordt de relatie gelegd tussen de beschreven processen in het register en de daadwerkelijk uitgevoerde activiteit waarbij **data** zijn verwerkt. **Door deze relatie ontstaat** inzicht in de taak en activiteit waarvoor de **data** verwerkt zijn.

## Moet ik mijn RvvA aanpassen als ik deze standaard Logboek Dataverwerking implementeer?

Voor de implementatie van deze standaard is het noodzakelijk dat iedere verwerkingsactiviteit in uw RvvA uniek te identificeren is. Mocht dat nog niet het geval zijn, voeg dan een unieke identificator toe aan alle dataverwerkingen.

Het is aanbevolen – maar niet verplicht – om de RvvA benaderbaar te maken met een API. Dat voorkomt dat de identificatoren van de verwerkingsactiviteiten “hardcoded” moeten  worden toegevoegd aan de logging en dat bij inzage, handmatig  data uit de RvvA moeten worden toegevoegd in de logging.

Het is van belang dat, als de  RvvA wordt aangepast,de wijzigingen toevoegd worden als nieuwe verwerkingsactiviteiten met een eigen unieke identificator. Bestaande verwerkingsactiviteiten mogen niet wijzigen of verwijderd worden. Hierdoor blijven de oude verwijzingen uit de Logboek Dataverwerking intact.

## Mijn organisatie heeft geen RvvA API. (Hoe) Kan ik dan nog steeds de standaard Logboek Dataverwerking implementeren?

Ja, dat kan nog steeds. Het is niet verplicht een RvvA API te implementeren, de RvvA is uiteraard wel verplicht in het geval van persoonsdataverwerking. Voor de implementatie van de Logboek Dataverwerkingen is het van belang dat iedere verwerkingsactiviteit te identificeren is met een unieke identificator.

Stel de RvvA is  uitgewerkt in een MS-Exceldocument en het systeem heeft daar geen API-toegang toe Daarnaast zijn de dataverwerkingenin de RvvA niet uniek te identificeren met een identificator.

In dat geval zal er een kolom moeten worden toegevoegd aan het MS-Exceldocument waariedere dataverwerkingeen unieke identificator krijgt.  Deze identificatoren van de dataverwerkingen in uw RvvA zullen dan 'hardcoded' moeten worden toegevoegd in de logging. Bij inzage zullen de data uit de RvvA, die horen bij een dataverwerking, handmatig moeten worden opgezocht.

## Hoe gedetailleerd moet mijn RvvA zijn om de standaard Logboek Dataverwerking te implementeren? / Heeft de detailniveau van mijn RvvA invloed op de werking van deze standaard?

De standaard Logboek Dataverwerking gaat er alleen vanuit dat er een RvvA is. Hoe gedetailleerd de RvvA is, is een beslissing van de organisatie zelf. Uiteraard is het wel zo dat hoe gedetailleerder de RvvA is opgezet, hoe transparanter er kan worden gerapporteerd naar burger en (overige) overheid.

## Wat gebeurt er als ik mijn RvvA wil wijzigen na de implementatie van de Logboek Dataverwerkingenstandaard?

Het is van belang dat als de RvvA aangepast moet worden,de wijzigingen toegevoegd worden als nieuwe verwerkingsactiviteit met een eigen unieke identificator. Bestaande verwerkingsactiviteiten mogen niet worden aangepast of verwijderd.

Hierdoor blijven de oude verwijzingen uit de Logboek Dataverwerking intact.

## De standaard leunt zwaar op OpenTelemetry, waarom wordt OpenTelemetry niet voorgeschreven?

De keuze om aan te sluiten bij OpenTelemetry betekent dat het voor veel organisaties eenvoudiger is om de standaard te implementeren. Als het echter niet mogelijk is om OpenTelemetry te gebruiken, bijvoorbeeld omdat men volledig gebruik maakt van proprietary log collectors die dat niet ondersteunen, kan men wel de kleine benodigde subset van de OpenTelemetry interfaces zelf implementeren zodat aan de standaard wordt voldaan.

Door OpenTelemetry aan te bevelen als een eenvoudige implementatie houdt men de vrijheid om daar waar dat nuttig is een andere oplossing te kiezen dan een OpenTelemetry collector.

## Hoe verhoudt de standaard zich tot andere logging standaarden zoals NEN7513?

De [NEN7513 norm](https://www.nen.nl/nen-7513-2024-nl-329182) legt vast welke data moet worden gelogd van acties op persoonlijke gezondheidsinformatie.
De norm beschrijft alle verschillende aspecten van gezondheidsinformatie die bij verschillende soorten activiteiten moet worden vastgelegd en verduidelijkt wat deze aspecten inhouden.
Hierbij legt de norm niet het formaat van logging vast, enkel de vereiste informatie.
Deze standaard is daarom inzetbaar in combinatie met de NEN7513 norm, door vast te leggen in welk formaat dat past.

Hiervoor is, als onderdeel van de totstandkoming van deze standaard, allereerst [een modelanalyse van de norm](./media/modelanalyse-nen-7513-extensie.pdf) gemaakt in relatie tot welke informatie de core standaard bevat.
Alle missende informatie is beschreven in [een potentiële extensie](https://logius-standaarden.github.io/logboek-extensie-nen7513/), om na te gaan of dit een haalbare aanpak is.
Deze extensie zal niet worden vastgesteld en is enkel bedoeld als proof-of-concept tijdens de totstandkoming.
Mocht in de toekomst er interesse zijn om de NEN7513 norm te implementeren op basis van deze standaard, dan kan deze extensie als startpunt van het traject gebruikt worden.

## Als mijn organisatie besluit de Logboek Dataverwerkingen-standaard te implementeren, moeten wij dan historische logregels aanpassen?

Nee, organisaties hoeven historische logregels niet aan te passen wanneer zij starten met het implementeren van deze standaard. De standaard is ontworpen zonder verplichting tot het herstructureren van bestaande data.

## Is er een risicoanalyse beschikbaar voor deze standaard?

Ja, deze is beschikbaar:

* [De tekstuele beschrijving](./media/risicoanalyse-logboek-dataverwerkingen.pdf)
* [De bijbehorende tabel met dreigingen en classificaties](./media/risicoanalyse-logboek-dataverwerkingen.xlsx)
