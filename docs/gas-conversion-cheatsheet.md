# China Gas Conversion Cheatsheet

Use this as the quick reference for the China gas dashboards and related market analysis. The project-standard conversion is the IEA China gross heat value:

```text
1 standard cubic metre China gas = 38.93 MJ HHV
1 bcm = 38,930 TJ gross = 38.93 PJ gross
```

For the sector model, convert IEA `TJ gross` values with:

```text
bcm = TJ gross / 38,930
TJ gross = bcm * 38,930
```

## Core Factors

| From | To | Factor | Use |
| --- | ---: | ---: | --- |
| `1 bcm` | `TJ gross` | `38,930` | Project standard for IEA China gas rows |
| `1 bcm` | `PJ gross` | `38.93` | Same value in PJ |
| `1 bcm` | `TWh thermal` | `10.814` | Fuel heat input, HHV basis |
| `1 scm` | `kWh thermal` | `10.814` | Household/city-gas scale |
| `1 bcm` | `TBtu` | `36.899` | Gas and LNG price bridges |
| `1 thousand m3` | `MMBtu` | `36.899` | Price bridge for `USD/MMBtu` to `USD/kcm` |
| `1 bcm` | `Mtoe` | `0.9298` | Oil-equivalent comparisons |
| `1 Mtoe` | `bcm` | `1.0755` | Reverse oil-equivalent conversion |
| `1 bcm` | `Mtce` | `1.328` | China standard-coal equivalent, using 29.3076 GJ/tce |
| `1 Mtce` | `bcm` | `0.753` | Reverse coal-equivalent conversion |
| `1 bcm` | `Bcf` | `35.315` | Imperial volume bridge |

## Dataset Conventions

| Source/reporting unit | Convert to dashboard unit | Note |
| --- | ---: | --- |
| JODI `M3` | `bcm = value / 1,000` | JODI gas `M3` rows are million cubic metres in this project. |
| JODI `KTONS` | `Mt = value / 1,000` | Used for LNG tonne rows. |
| China table in 100 million m3 | `bcm = value / 10` | 100 million m3 = 0.1 bcm. |
| IEA `TJ gross` | `bcm = value / 38,930` | Use only for gross/HHV China gas values. |
| `MMscf/d` | `bcm/y = value * 0.01034` | Useful for pipeline/project capacities. |
| `bcm/y` | `MMscf/d = value * 96.75` | Uses 365 days/year. |
| `mcm/d` | `bcm/y = value * 0.365` | 1 million m3/day for a full year. |

## LNG Shortcuts

LNG cargoes vary by density and calorific value. Use cargo specs when available; otherwise keep these as market shortcuts.

| LNG quantity | Gas equivalent | Comment |
| --- | ---: | --- |
| `1 Mt LNG` | `about 1.36 bcm` | Common China/import-market rule of thumb. |
| `1 bcm gas` | `about 0.735 Mt LNG` | Reverse of the 1.36 rule. |
| `1 Mt LNG` | `about 50.2 TBtu` | Implied by 1.36 bcm/Mt and the project HHV. |
| `1 t LNG` | `about 50-52 MMBtu` | Contract/cargo quality often lands in this range. |
| `1 standard 70 kt cargo` | `about 0.095 bcm` | 70 kt * 1.36 bcm/Mt. |
| `1 mtpa LNG` | `about 1.36 bcm/y` | Capacity shorthand. |
| `10 bcm/y` | `about 7.35 mtpa LNG` | Reverse capacity shorthand. |

## Price Bridges

Use `FX` as RMB per USD.

```text
USD/MMBtu to USD/m3 = price * 0.0368985
USD/MMBtu to USD/kcm = price * 36.8985
USD/MMBtu to RMB/m3 = price * 0.0368985 * FX
RMB/m3 to USD/MMBtu = RMB/m3 / (0.0368985 * FX)
USD/MMBtu to USD/MWh thermal = price * 3.41214
```

At `FX = 7.20`:

| LNG/gas price | RMB/m3 |
| ---: | ---: |
| `USD 8/MMBtu` | `2.13` |
| `USD 10/MMBtu` | `2.66` |
| `USD 12/MMBtu` | `3.19` |

## Power-Sector Back-of-Envelope

The project HHV basis gives `1 bcm = 10.814 TWh thermal`. Electric output depends on the efficiency basis.

| Plant efficiency, HHV basis | TWh electric per bcm | Gas per TWh electric |
| ---: | ---: | ---: |
| `45%` | `4.87` | `0.205 bcm` |
| `50%` | `5.41` | `0.185 bcm` |
| `55%` | `5.95` | `0.168 bcm` |
| `60%` | `6.49` | `0.154 bcm` |

If an efficiency or heat-rate source is on an LHV/net basis, do not mix it directly with IEA `TJ gross`. Natural gas LHV is roughly 90% of HHV, so `1 bcm` is about `35.0 PJ` or `9.73 TWh thermal` on an LHV basis.

## Emissions Rules

| Quantity | CO2 combustion estimate | Note |
| --- | ---: | --- |
| `1 bcm gas` | `about 1.95 MtCO2` | Uses 52.91 kg CO2/MMBtu and project HHV. |
| `1 Mt LNG` | `about 2.65 MtCO2` | Uses 1.36 bcm/Mt. |
| `1 TWh electric at 50% HHV efficiency` | `about 0.36 MtCO2` | Equivalent to 0.185 bcm/TWh electric. |

These are combustion-only estimates. Upstream methane leakage, liquefaction power, shipping, regas, and distribution losses are outside this shortcut.

## Quick Examples

```text
IEA industry gas, 2023:
6,232,455 TJ gross / 38,930 = 160.1 bcm

China production table reports 229.7 in 100 million m3:
229.7 / 10 = 22.97 bcm

LNG imports of 6.0 Mt in a month:
6.0 * 1.36 = 8.16 bcm

USD 10/MMBtu at 7.20 RMB/USD:
10 * 0.0368985 * 7.20 = 2.66 RMB/m3
```

## Pitfalls

- State the heat basis: IEA `TJ gross` is HHV/GCV. Many plant efficiencies and some balances use LHV/NCV.
- Do not treat `bcm` as a fixed energy unit across countries. Gas quality changes the energy per cubic metre.
- Use the project factor for model consistency even if a market source uses a rounded `1 bcm = 36 TBtu`, `1 bcm = 0.9 Mtoe`, or `1 Mt LNG = 1.38 bcm`.
- For LNG, prefer cargo heat content over tonne-to-bcm shortcuts when pricing or reconciling customs data.
- JODI `TOTDEMC` is apparent demand. If stock change is missing or zero, storage injections/withdrawals can make end-use demand lower or higher than apparent demand.

## Sources

- Local model convention: `docs/model.md` and `scripts/build-sector-data.mjs`.
- IEA China natural gas country page: https://www.iea.org/countries/china/natural-gas
- IEA-reported China HHV reference used by the project: https://en.wikipedia.org/wiki/Heat_of_combustion#Higher_heating_values_of_natural_gases_from_various_sources
- EIA energy unit examples, including `1 kWh = 3,412 Btu` and natural gas Btu variability: https://www.eia.gov/energyexplained/units-and-calculators/
- EIA CO2 emissions coefficients: https://www.eia.gov/environment/emissions/co2_vol_mass.php
