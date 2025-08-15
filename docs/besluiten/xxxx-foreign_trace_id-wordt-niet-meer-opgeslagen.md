# Foreign_TraceId wordt niet meer opgeslagen

- Status: draft
- Datum: 2025-08-15

## Context en probleemstelling

Uit de workshop casus met RINIS is naar voren gekomen dat `foreign_trace_id` overbodig is en niet gebruikt hoeft te worden.

## Besluit

- `foreign_trace_id` wordt **niet** meer opgeslagen

## Gevolgen

- De aangeroepen organisatie (verwerker) krijg als `trace_id` de `trace_id` van de aanroepende organisatie (verantwoordelijke)
- `foreign_span_id` wordt wel opgeslagen
- De aangeroepen organisatie (verwerker) krijgt een eigen `span_id` per activiteit
