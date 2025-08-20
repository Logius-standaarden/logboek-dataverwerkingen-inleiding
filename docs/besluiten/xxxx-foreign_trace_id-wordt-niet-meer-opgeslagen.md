# `foreign_trace_id` wordt niet meer opgeslagen

- Status: draft
- Datum: 2025-08-15

## Context en probleemstelling

Tijdens de workshop casus met  RINIS is gebleken dat het veld `foreign_trace_id` overbodig is en geen praktische toepassing kent binnen de standaard. Dit inzicht heeft geleid tot heroverweging van de noodzaak ervan.

## Besluit

- `foreign_trace_id` wordt **niet** meer opgeslagen

## Gevolgen

- De aangeroepen organisatie (verwerker) krijg als `trace_id` de `trace_id` van de aanroepende organisatie (verantwoordelijke)
- `foreign_span_id` wordt wel opgeslagen
- De aangeroepen organisatie (verwerker) krijgt een eigen `span_id` per activiteit
