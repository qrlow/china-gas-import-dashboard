# China Gas-to-Coal Switching Model

This note documents `switching.html`, a static dashboard calibrated to pages 47-53 of the IEA `Gas Market Report, Q3-2026`.

## Report Inputs

The IEA section defines fuel switching as gas-fired power generation being displaced by coal-fired generation, or vice versa, depending on fuel economics and system constraints. It says the theoretical gas-saving potential across key LNG import markets is 55-65 bcm per year, with China accounting for almost half. The dashboard converts that into a China technical envelope of 27.5-32.5 bcm per year before constraints.

For China, the report highlights four constraints that are explicitly represented in the model:

- Gas-fired generation is concentrated in Guangdong, the Shanghai/Zhejiang/Jiangsu area, and the Beijing area.
- These coastal clusters are exposed to LNG and global gas pricing.
- Guangdong gas prices rose sharply through Q2 2026, while coal prices moved more modestly.
- Summer peak demand, wind/nuclear underperformance, coal utilisation, and administrative policy determine how much switching is feasible.

The model also adds a historical feasibility check from Carbon Monitor-Power. That dataset reports China daily generation by source. The dashboard aggregates the daily coal and gas rows to monthly TWh and plots them directly. This makes the main China constraint visible: gas generation is small beside coal generation, so switching is important for marginal gas demand but minor for the whole power mix.

## Fuel Cost Formula

The model computes short-run marginal cost in USD/MWh electric:

```text
gas SRMC =
  gas price USD/MBtu x 3.412142 MBtu/MWh thermal / gas efficiency
  + gas variable O&M
  + carbon price x gas emissions factor / gas efficiency

coal SRMC =
  coal price USD/t / coal MWh thermal per tonne / coal efficiency
  + coal variable O&M
  + carbon price x coal emissions factor / coal efficiency
```

Default conversion constants:

- Natural gas: 10.55 TWh thermal per bcm.
- Coal: 5,500 kcal/kg, equal to about 6.39 MWh thermal per tonne.
- Gas emissions factor: 0.181 tCO2/MWh thermal.
- Coal emissions factor: 0.341 tCO2/MWh thermal.

## Activation Formula

The model only counts gas-to-coal savings when gas SRMC is above coal SRMC:

```text
price activation =
  clamp((gas SRMC - coal SRMC) / 45 USD/MWh, 0, 1)

system factor =
  coal availability
  x (1 - peak gas reservation)
  x (1 - renewable/nuclear thermal stress)
  x policy support

feasible gas saving =
  China technical envelope midpoint
  x price activation
  x system factor
```

The low/high displayed range applies the same factor to the 27.5-32.5 bcm/year China envelope.

The dashboard also compares the scenario volume with recent observed gas-fired generation:

```text
observed gas-power burn =
  latest 12 months Carbon Monitor-Power gas generation
  / gas efficiency
  / 10.55 TWh thermal per bcm

scenario share of observed gas-power burn =
  feasible gas saving / observed gas-power burn
```

This check does not replace the IEA technical envelope. It tells the user whether the scenario is small or large relative to the historical gas-fired power base.

## Monthly Shape

The annual result is distributed by gas-year month using recent Carbon Monitor-Power gas-fired generation, then adjusted for seasonal feasibility.

The generator averages recent complete gas years by gas-year month. For each month, it takes:

```text
monthly weight =
  average Carbon Monitor-Power gas generation for that gas-year month
  x seasonal feasibility factor
```

The twelve monthly weights are then normalized to sum to 100%. This means the annual bcm result follows the observed gas-generation shape rather than apparent gas demand.

The older sector dashboard `Power / residual` bucket is still retained as a fallback if the Carbon Monitor-Power CSV is not available. That bucket is not metered plant-level gas burn. It is the leftover after visible industry, buildings, and transport buckets are separated from JODI apparent demand, so it can include small residual items.

Summer and winter peak months receive lower feasibility factors because the report says gas plants remain important for peak balancing.

## Carbon Monitor-Power Processing

The raw public export is downloaded from:

```text
https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=energy_global
```

The generator keeps only China `Coal` and `Gas` rows, converts daily GWh to monthly TWh, and stores the compact monthly series in `src/switching-data.js`.

The dashboard explicitly plots the monthly coal and gas generation history. Because coal generation is much larger than gas generation, the chart uses two y-axes: coal on the left and gas on the right. The values are still absolute monthly TWh, not indexes.

## GitHub Scan

I searched GitHub for similar fuel-switching and China power-system projects. I did not find a China-specific gas-to-coal switching dashboard. The most relevant public examples were:

- `nexteAMAI/nextE_Energy_Supply_Price_Model`: SRMC formulas for gas and coal generation.
- `OTEO001/merit-order`: clean spark spread, clean dark spread, and fuel-switching price formulas.
- `IrishRugbyman/european-energy-hub`: dashboard treatment of spread regimes and gas disruption overlays.
- `onismyh/CHNPowerSystem`: China single-region power-system learning model, not a switching dashboard.

The dashboard reimplements the formulas directly and does not import code from those repositories.
