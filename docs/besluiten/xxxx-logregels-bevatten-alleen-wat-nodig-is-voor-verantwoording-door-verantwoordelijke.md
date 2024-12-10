# Logregels bevatten alleen wat nodig is voor verantwoording door verantwoordelijke

- Status: draft
- Datum: 2024-06-24


## Context en probleemstelling

Vanuit de wens om zoveel mogelijk context vast te leggen om zo een compleet beeld te schetsen van wat er is gebeurd rond een [Dataverwerking](https://logius-standaarden.github.io/logboek-dataverwerkingen/#dfn-dataverwerkingen) kan  de neiging ontstaan om informatie uit andere organisaties vast te leggen in de logregels.

Hierdoor kom je al snel in lastig vaarwater, juridisch gezien. Er worden dan zaken vastgelegd die niet noodzakelijk zijn voor het verantwoorden van het handelen. Bovendien is het mogelijk om een compleet beeld te krijgen door de informatie te laten in de organisatie waar een dataverwerking is uitgevoerd. Dit is dan ook beter om te doen, vanuit het oogpunt van dataminimalisatie.

Voor de uitoefening van het Inzagerecht is de consequentie dat de Betrokkene informatie uit alle organisaties moet ophalen en deze volgens een paar relatief eenvoudige businessrules aan elkaar moet relateren voor het verkrijgen van een compleet beeld. Dit kan door alle organisaties te bevragen, of door gericht bij één organisatie te beginnen en vervolgens de [URI's](https://datatracker.ietf.org/doc/html/rfc3986) te volgen naar Logregels in andere organisaties.

Het kan zijn dat organisatie A de logs wel op orde heeft, en organisatie B (nog) niet. Dan is het resultaat dat geen compleet beeld kan worden gegeven. Daarmee komt de prikkel tot verbetering op de juiste plek, namelijk bij de organisatie die het Logboek nog niet op orde heeft.


## Besluit

Logregels bevatten alleen wat nodig is voor verantwoording door de Verantwoordelijke.


## Gevolgen

- In logregels wordt alleen een identifier vastgelegd van gerelateerde Dataverwerkingen in een andere context (bijv. een andere organisatie), geen inhoudelijke informatie
- Voor een analyse, bijvoorbeeld in het kader van een audit of uitoefening inzagerecht, is het nodig om op dat moment de URI's naar logs in andere organisaties te volgen

