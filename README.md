# China Gas JODI Dashboard

China Gas JODI Dashboard is a static analytics dashboard for China natural gas actuals.
It displays JODI monthly gas balance data by gas year, with months ordered from October through September.

## Use It

Open `index.html` in a browser. The dashboard is self-contained and uses the generated data in `src/data.js`.

To regenerate the data file from the public JODI gas CSV package:

```sh
node scripts/build-dashboard-data.mjs
```

The script downloads the JODI Gas World Database zip into `.cache/`, extracts China natural gas rows, and writes `src/data.js`.

## What It Shows

- China monthly natural gas actuals from JODI through the latest reported month.
- Gas-year view, where each gas year starts in October and ends in September.
- Rolling five-gas-year comparison charts for gross imports, calculated demand, production, and total imports.
- Selected-gas-year import stack for LNG and pipeline imports, with a prior-five-gas-year monthly average total-import overlay.
- Total imports, LNG imports, pipeline imports, production, calculated demand, exports, net imports, and residual balance checks.
- JODI flow-code definitions and source links.

## Data Sources

The dashboard uses the JODI Gas World Database:

- JODI gas CSV package: https://www.jodidata.org/jodi-publisher/gas/23/GAS_world_NewFormat.zip
- JODI gas data downloads page: https://www.jodidata.org/gas/database/data-downloads.aspx
- JODI gas item names: https://www.jodidata.org/_resources/files/downloads/gas-data/jodi-gas-wdb-short--long-names-ver2025.pdf
- JODI gas manual: https://www.jodidata.org/_resources/files/downloads/manuals/jodi-gas-manual.pdf

JODI publishes country/economy data submitted through national administrations and JODI partner organizations. For China, the displayed rows are submitted balance data, not a market-estimate scrape.

## Boundaries

This dashboard does not forecast. It does not split China gas demand into sectors, split pipeline imports by route, or split LNG into contracted and spot cargoes. JODI does not publish those fields in the monthly gas balance dataset used here.

## License

[MIT](LICENSE)
