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

The KPI cards, monthly table, and import stack show the selected gas year from the dashboard dropdown. The gross imports and calculated-demand chart panels compare the selected gas year against the prior four gas years where available.

The import stack overlays monthly average lines for total imports and LNG imports from the five gas years before the selected gas year. For example, gas year `2025/26` is shown against the average of `2020/21` through `2024/25` where data is available.

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

JODI does not publish monthly China gas demand by sector, route-level pipeline imports, contracted-versus-spot LNG, or price/weather adjustments in this dataset. Those fields are intentionally not shown in the JODI-only dashboard.

## Sector Demand Model

The sector dashboard is a historical allocation model for JODI calculated demand. It is not official monthly sector demand data.

The model covers months where both JODI China calculated demand and Carbon Monitor China proxy data are available. In the current generated file, that range is `2019-01` through `2026-03`.

### Sector Buckets

- Power: gas used for electricity generation and CHP transformation.
- Industrial / chemical: industrial final gas use plus non-energy gas use.
- Buildings / city gas: residential plus tertiary/commercial gas use.
- Transport: gas used in transport.

### Annual Anchor

The annual sector anchor is derived from the IEA 2023 China natural-gas balance:

- Power = energy-sector gas use × (electricity + CHP)
- Industrial / chemical = final gas consumption × (industry + non-energy use)
- Buildings / city gas = final gas consumption × (residential + tertiary)
- Transport = final gas consumption × transport

The raw buckets exclude own-use, losses, and statistical differences. The model normalizes the four requested sectors to 100% before allocating JODI demand. The normalized anchor shares in `src/sector-data.js` are:

- Power: 21.7%
- Industrial / chemical: 47.4%
- Buildings / city gas: 22.1%
- Transport: 8.7%

### Monthly Shape

Carbon Monitor China daily provincial rows are summed to national monthly sector totals:

- `Power` -> power
- `Industry` -> industrial / chemical
- `Residential` -> buildings / city gas
- `Ground Transport` -> transport

For each sector and month, the script converts the Carbon Monitor monthly total into an index against a trailing 12-month mean. If there is not enough trailing history, it falls back to recent month-of-year climatology. This makes Carbon Monitor a timing proxy, not an absolute gas-demand estimate.

### Reconciliation Formula

For each month:

```text
sector weight = annual anchor share × Carbon Monitor monthly proxy index
sector share = sector weight ÷ sum(all sector weights)
sector demand = JODI calculated demand × sector share
```

The four sector demands always sum to JODI calculated demand for the month.

### Caveats

- Carbon Monitor measures CO2 emissions/activity, not gas consumption by fuel.
- The buildings bucket uses Carbon Monitor residential emissions as the monthly proxy, while the annual anchor includes residential plus tertiary/commercial gas use.
- The industrial bucket includes non-energy/chemical gas use because the requested dashboard has one broad industrial category.
- JODI China stock change is reported as zero in this extract, so calculated demand is apparent demand and can include storage injection.
