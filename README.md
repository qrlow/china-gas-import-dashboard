# China Gas Dashboards

China Gas Dashboards is a static analytics project for China natural gas balances.
It shows monthly JODI gas actuals and a separate historical sector-demand model for power, industrial, buildings/city gas, and transport.

## Use It

Open `index.html` in a browser for the JODI actuals page, or `sector.html` for the sector-demand model. The public GitHub Pages versions are:

- JODI actuals: https://qrlow.github.io/china-gas-import-dashboard/
- Sector model: https://qrlow.github.io/china-gas-import-dashboard/sector.html

To regenerate the data file from the public JODI gas CSV package:

```sh
node scripts/build-dashboard-data.mjs
```

The script downloads the JODI Gas World Database zip into `.cache/`, extracts China natural gas rows, and writes `src/data.js`.

To regenerate the sector model, first download the open Carbon Monitor China CSV into `.cache/carbon_china.csv`, then run the generator:

```sh
mkdir -p .cache
curl -L "https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=carbon_china" -o .cache/carbon_china.csv
node scripts/build-sector-data.mjs
```

## What It Shows

- China monthly natural gas actuals from JODI through the latest reported month.
- Gas-year view, where each gas year starts in October and ends in September.
- Rolling five-gas-year comparison charts for gross imports and calculated demand.
- Selected-gas-year import stack for LNG and pipeline imports, with prior-five-gas-year monthly average overlays for total imports and LNG imports.
- Total imports, LNG imports, pipeline imports, production, calculated demand, exports, net imports, and residual balance checks.
- JODI flow-code definitions and source links.
- Historical monthly allocation of JODI apparent demand, split into power/residual, industrial/chemical, buildings/city gas, and transport.
- Carbon Monitor China monthly proxy indexes and source-visible IEA/JODI annual anchors used by the sector model.

## Data Sources

The dashboard uses the JODI Gas World Database:

- JODI gas CSV package: https://www.jodidata.org/jodi-publisher/gas/23/GAS_world_NewFormat.zip
- JODI gas data downloads page: https://www.jodidata.org/gas/database/data-downloads.aspx
- JODI gas item names: https://www.jodidata.org/_resources/files/downloads/gas-data/jodi-gas-wdb-short--long-names-ver2025.pdf
- JODI gas manual: https://www.jodidata.org/_resources/files/downloads/manuals/jodi-gas-manual.pdf

JODI publishes country/economy data submitted through national administrations and JODI partner organizations. For China, the displayed rows are submitted balance data, not a market-estimate scrape.

The sector page adds free public sources:

- Carbon Monitor China: https://cn.carbonmonitor.org/
- Carbon Monitor China CSV endpoint: https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=carbon_china
- IEA China natural gas country page: https://www.iea.org/countries/china/natural-gas
- IEA-reported China gas heat value reference: https://en.wikipedia.org/wiki/Heat_of_combustion#Higher_heating_values_of_natural_gases_from_various_sources
- National Bureau of Statistics of China 2023 statistical communique: https://www.stats.gov.cn/sj/zxfb/202402/t20240228_1947915.html

## Boundaries

These dashboards do not forecast. The JODI page is actuals only.

The sector page is a model, not official monthly China gas demand by sector. It allocates JODI `TOTDEMC` apparent demand, derives final-consumption sector weights from the public IEA China natural gas country page, and treats the remaining 2023 apparent demand as a power/residual bucket. That residual bucket includes power, but can also include system own-use, statistical differences, and unobserved storage effects. Because JODI China stock change is reported as zero in this extract, storage is not separated. During storage builds, actual end-use demand from power, industrial, buildings, and transport would be lower than `TOTDEMC`; during storage withdrawals, actual end-use demand would be higher.

## License

[MIT](LICENSE)
