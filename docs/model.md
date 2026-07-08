# Data Notes

The dashboard displays monthly China natural gas actuals from JODI. It does not forecast.

## JODI Rows Used

- `REF_AREA = CN`
- `ENERGY_PRODUCT = NATGAS`
- `UNIT_MEASURE = M3` for bcm-converted volume fields
- `UNIT_MEASURE = KTONS` for LNG tonnes

`M3` values in the JODI CSV are million cubic meters. The dashboard divides them by 1,000 to show bcm. `KTONS` values are thousand tonnes. The dashboard divides them by 1,000 to show million tonnes.

## Year View

Gas years run from October through September. For example, gas year `2025/26` starts in `2025-10` and ends in `2026-09`.

Calendar years run from January through December. The dashboard has a `Year basis` toggle that switches the JODI actuals and sector model pages between gas-year and calendar-year views.

The dashboard defaults to the selected basis containing the latest JODI actual month.

The KPI cards, monthly table, and import stack show the selected year from the dashboard dropdown. The gross imports and calculated-demand chart panels compare the selected year against the prior four years where available.

The import stack overlays monthly average lines for total imports and LNG imports from the five years before the selected year. For example, gas year `2025/26` is shown against the average of `2020/21` through `2024/25` where data is available. Calendar year `2025` is shown against the average of `2020` through `2024`.

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

## Apparent Sector Demand Model

The sector dashboard is a historical allocation model for JODI `TOTDEMC` apparent demand. It is not official monthly sector end-use demand data.

The model covers months where both JODI China calculated demand and Carbon Monitor China proxy data are available. In the current generated file, that range is `2019-01` through `2026-03`.

For China, stock change is reported as zero in this JODI extract. That means `TOTDEMC` is effectively:

```text
production + imports - exports
```

not a storage-adjusted end-use demand number. If China is injecting gas into storage, actual end-use demand from power, industrial, buildings, and transport is lower than `TOTDEMC`. If China is withdrawing from storage, actual end-use demand is higher than `TOTDEMC`. The dashboard does not estimate that storage adjustment.

### Sector Buckets

- Power / residual: the part of JODI apparent demand left after source-visible IEA final-use sectors are deducted. It includes power generation, but can also include energy-system own use, tiny agriculture/forestry use, statistical differences, and unobserved storage effects.
- Industrial / chemical: industrial final gas use plus non-energy gas use.
- Buildings / city gas: residential plus commercial/public services gas use.
- Transport: gas used in transport.

### Dashboard to IEA Mapping

The dashboard buckets do not exactly match Carbon Monitor categories. IEA is used for the 2023 annual anchor. Carbon Monitor is used only for monthly shape.

| Dashboard bucket | IEA annual anchor input | Carbon Monitor monthly proxy | Important caveat |
| --- | --- | --- | --- |
| Power / residual | Residual: JODI 2023 apparent demand minus Industrial / chemical, Buildings / city gas, and Transport | Power | Not an exact IEA category. It includes power plus anything left in apparent demand after visible IEA final-use buckets are deducted. |
| Industrial / chemical | Industry + Non-energy use | Industry | Non-energy use is included here because the dashboard has one broad industrial/chemical bucket. |
| Buildings / city gas | Residential + Commercial and public services | Residential | Carbon Monitor has no separate commercial/public-services gas proxy, so residential shapes the whole buildings bucket. |
| Transport | Transport | Ground Transport | Carbon Monitor Aviation is not used in the gas dashboard. |

### Annual Anchor

The annual sector anchor uses only source-visible data:

- Industrial / chemical = IEA industry plus non-energy use.
- Buildings / city gas = IEA residential plus commercial/public services.
- Transport = IEA transport.
- Power / residual = JODI 2023 apparent demand minus those three visible final-use buckets.

The IEA final-consumption input values are:

- Industry: 6,232,455 TJ gross
- Non-energy use: 589,056 TJ gross
- Residential: 2,486,965 TJ gross
- Commercial and public services: 657,877 TJ gross
- Transport: 1,276,255 TJ gross
- Agriculture and forestry: 9,440 TJ gross

The model converts IEA `TJ gross` values to bcm using 38,930 TJ per bcm, based on the IEA-reported China higher heating value of 38.93 MJ per standard cubic metre. JODI 2023 apparent demand is 380.9 bcm.

The resulting 2023 anchor is:

- Power / residual: 24.2%
- Industrial / chemical: 46.0%
- Buildings / city gas: 21.2%
- Transport: 8.6%

The power / residual bucket is not pure power gas demand. It is a balancing bucket created because the public IEA page does not show a clean gas-to-power value.

### Monthly Shape

Carbon Monitor China daily provincial rows are summed to national monthly sector totals:

- `Power` -> power / residual
- `Industry` -> industrial / chemical
- `Residential` -> buildings / city gas
- `Ground Transport` -> transport

For each sector and month, the script converts the Carbon Monitor monthly total into an index against a trailing 12-month mean. If there is not enough trailing history, it falls back to recent month-of-year climatology. This makes Carbon Monitor a timing proxy, not an absolute gas-demand estimate.

### Reconciliation Formula

For each month:

```text
sector weight = annual anchor share × Carbon Monitor monthly proxy index
sector share = sector weight ÷ sum(all sector weights)
apparent sector demand = JODI TOTDEMC apparent demand × sector share
```

The four modeled sector buckets sum to JODI `TOTDEMC` apparent demand for the month. They should not be read as storage-adjusted actual end-use demand.

### Numerical Example

For March 2026, JODI apparent demand is 33.554 bcm.

The 2023 annual anchor shares are:

- Power / residual: 24.18%
- Industrial / chemical: 46.00%
- Buildings / city gas: 21.21%
- Transport: 8.61%

The March 2026 Carbon Monitor indexes are:

- Power / residual: 0.999
- Industrial / chemical: 1.026
- Buildings / city gas: 1.390
- Transport: 1.036

First, the model multiplies each annual anchor share by its Carbon Monitor index:

```text
power / residual = 0.2418 × 0.999 = 0.2416
industrial / chemical = 0.4600 × 1.026 = 0.4720
buildings / city gas = 0.2121 × 1.390 = 0.2948
transport = 0.0861 × 1.036 = 0.0892
```

Those adjusted weights add to 1.0976, not 1.0000. The model normalizes them by dividing each adjusted weight by 1.0976:

```text
power / residual = 0.2416 ÷ 1.0976 = 22.0%
industrial / chemical = 0.4720 ÷ 1.0976 = 43.0%
buildings / city gas = 0.2948 ÷ 1.0976 = 26.9%
transport = 0.0892 ÷ 1.0976 = 8.1%
```

Finally, the model multiplies JODI apparent demand by those normalized shares:

```text
power / residual = 33.554 × 22.0% = 7.4 bcm
industrial / chemical = 33.554 × 43.0% = 14.4 bcm
buildings / city gas = 33.554 × 26.9% = 9.0 bcm
transport = 33.554 × 8.1% = 2.7 bcm
```

This is mathematically the same as multiplying JODI demand by each IEA anchor share and Carbon Monitor index, then scaling the four results so they add back to total JODI demand.

### Caveats

- Carbon Monitor measures CO2 emissions/activity, not gas consumption by fuel.
- The buildings bucket uses Carbon Monitor residential emissions as the monthly proxy, while the annual anchor includes residential plus commercial/public services gas use.
- The industrial bucket includes non-energy/chemical gas use because the requested dashboard has one broad industrial category.
- The power / residual bucket is not a clean power-sector estimate; it is the leftover after source-visible final-use sectors are deducted from JODI 2023 apparent demand.
- JODI China stock change is reported as zero in this extract, so calculated demand is apparent demand. Storage injection would make actual end-use demand lower than `TOTDEMC`; storage withdrawal would make actual end-use demand higher.
