# Data Notes

The dashboard displays monthly China natural gas actuals from JODI. It does not forecast.

## JODI Rows Used

- `REF_AREA = CN`
- `ENERGY_PRODUCT = NATGAS`
- `UNIT_MEASURE = M3` for bcm-converted volume fields
- `UNIT_MEASURE = KTONS` for LNG tonnes

`M3` values in the JODI CSV are million cubic meters. The dashboard divides them by 1,000 to show bcm. `KTONS` values are thousand tonnes. The dashboard divides them by 1,000 to show million tonnes.

## Gas-Year View

Gas years run from October through September. For example, gas year `2025/26` starts in `2025-10` and ends in `2026-09`.

The dashboard defaults to the gas year containing the latest JODI actual month.

The KPI cards and monthly table show the selected gas year. The chart panels compare the selected gas year against the prior four gas years where available.

## Flow Codes

- `INDPROD`: domestic production
- `IMPLNG`: LNG imports
- `IMPPIP`: pipeline imports
- `TOTIMPSB`: total imports
- `EXPLNG`: LNG exports
- `EXPPIP`: pipeline exports
- `TOTEXPSB`: total exports
- `TOTDEMC`: calculated gross inland deliveries / calculated demand
- `STOCKCH`: stock change, where reported

## Balance Check

The residual shown in the table is:

```text
domestic production
+ total imports
- total exports
- stock change
- calculated demand
= residual
```

For recent China rows, `STOCKCH` is often not reported. In that case the residual calculation treats stock change as zero.

## What Is Not Included

JODI does not publish monthly China gas demand by sector, route-level pipeline imports, contracted-versus-spot LNG, or price/weather adjustments in this dataset. Those fields are intentionally not shown in this JODI-only dashboard.
