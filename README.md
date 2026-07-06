# China Gas Import Dashboard

China Gas Import Dashboard is a static analytics dashboard for China natural gas supply and demand.
It turns JODI monthly gas balance data into a sector-level import forecast with base, bull, and bear cases.

## Use It

Open `index.html` in a browser. The dashboard is self-contained and uses the generated data in `src/data.js`.

To regenerate the data file from the public JODI gas CSV package:

```sh
node scripts/build-dashboard-data.mjs
```

The script downloads the JODI Gas World Database zip into `.cache/`, extracts China natural gas rows, rebuilds the forecast, and writes `src/data.js`.

## What It Shows

- Monthly actual China gas balance from JODI through the latest reported month.
- Base, bull, and bear gross import forecasts for the next 12 months.
- Demand split into power, industrial, buildings/city gas, and transport.
- Supply split into domestic production, Central Asia pipeline, Russia pipeline, Myanmar pipeline, contracted LNG, and spot LNG need.
- Adjustment levers for weather, coal/gas switching, hydro/nuclear/renewables output, industrial activity, policy, prices, LNG terminal outages, and shipping flows.
- Month-by-month explanation of what changed versus the base case.

## Data Sources

The hard monthly history comes from the JODI Gas World Database:

- JODI gas CSV package: https://www.jodidata.org/jodi-publisher/gas/23/GAS_world_NewFormat.zip
- JODI gas data downloads page: https://www.jodidata.org/gas/database/data-downloads.aspx
- JODI gas item names: https://www.jodidata.org/_resources/files/downloads/gas-data/jodi-gas-wdb-short--long-names-ver2025.pdf
- JODI gas manual: https://www.jodidata.org/_resources/files/downloads/manuals/jodi-gas-manual.pdf

JODI publishes country/economy data submitted through national administrations and JODI partner organizations. For China, this means the JODI rows are official submitted balance data, not a market-estimate scrape.

## Model Boundaries

JODI reports China production, total imports, LNG imports, pipeline imports, exports, and calculated demand. It does not report China gas demand by sector, route-level pipeline imports, contracted-versus-spot LNG, weather anomalies, power dispatch, or terminal outages.

Those granular fields are explicit model assumptions in `src/data.js` and `scripts/build-dashboard-data.mjs`. The model uses JODI actuals as the balance anchor, then allocates demand and supply into editable components.

## License

[MIT](LICENSE)

