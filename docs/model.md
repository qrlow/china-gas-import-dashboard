# Model Notes

The dashboard starts from the monthly China natural gas balance in JODI and then adds a forecast layer.

## Historical Balance

The JODI rows used are:

- `REF_AREA = CN`
- `ENERGY_PRODUCT = NATGAS`
- `UNIT_MEASURE = M3` for bcm-converted volume fields
- `UNIT_MEASURE = KTONS` for LNG tonnes

The main flow codes are:

- `INDPROD`: domestic production
- `IMPLNG`: LNG imports
- `IMPPIP`: pipeline imports
- `TOTIMPSB`: total imports
- `TOTEXPSB`: total exports
- `TOTDEMC`: calculated gross inland deliveries
- `STOCKCH`: stock change, where reported

The balance identity used for checks is:

```text
domestic production
+ total imports
- total exports
- stock change
- calculated demand
= residual
```

## Forecast Structure

The model forecasts monthly import requirement as:

```text
demand
+ storage change
+ exports
- domestic production
= import requirement
```

Pipeline imports are split into Central Asia, Russia, and Myanmar using editable annual assumptions and the observed JODI pipeline seasonality. Contracted LNG is scheduled next. Any remaining LNG requirement becomes spot LNG need:

```text
spot LNG need = max(0, LNG requirement - contracted LNG available)
```

## Demand Detail

JODI does not publish monthly China gas demand by sector. The dashboard allocates total demand into:

- Power
- Industrial
- Buildings/city gas
- Transport

The sector split, seasonal shape, and scenario growth rates are assumptions in `scripts/build-dashboard-data.mjs`.

## Scenario Drivers

The scenario drivers are normalized indexes, not observed datasets:

- Weather
- Coal/gas switching
- Hydro/nuclear/renewables output gap
- Industrial activity
- Policy
- Price pressure
- Terminal outage loss
- Shipping adjustment

Positive demand-side drivers generally raise gas demand. Positive price pressure suppresses gas demand. Terminal outage loss reduces available contracted LNG.

