window.CHINA_GAS_SWITCHING_DATA = {
  "meta": {
    "generatedAt": "2026-07-07T12:18:58.140Z",
    "title": "China gas-to-coal switching model",
    "report": "IEA Gas Market Report, Q3-2026, pages 47-53",
    "latestActualPeriod": "2026-03",
    "units": "bcm, TWh, Mt, USD unless otherwise stated",
    "note": "Fuel-switching dashboard calibrated to the report's China discussion. It estimates gas-to-coal saving potential, not an official dispatch forecast."
  },
  "constants": {
    "gasTwhThermalPerBcm": 10.55,
    "mmbtuPerMwhThermal": 3.412142,
    "defaultCoalMwhThermalPerTonne": 6.392,
    "defaultCoalHeatContentKcalKg": 5500,
    "gasEmissionTco2PerMwhThermal": 0.181,
    "coalEmissionTco2PerMwhThermal": 0.341,
    "defaultGasVariableOMUsdMwh": 4,
    "defaultCoalVariableOMUsdMwh": 5,
    "fullSwitchCostGapUsdMwh": 45
  },
  "chinaEnvelope": {
    "globalLngImportMarketGasSavingLowBcm": 55,
    "globalLngImportMarketGasSavingHighBcm": 65,
    "chinaShareDescription": "The report says China accounts for almost half of the global LNG-import-market theoretical range.",
    "chinaLowBcm": 27.5,
    "chinaMidBcm": 30,
    "chinaHighBcm": 32.5
  },
  "context": {
    "latestActualPeriod": "2026-03",
    "latestGasYear": "2025/26",
    "latestMonthlyApparentDemandBcm": 33.554,
    "latestGasYearApparentDemandBcm": 202.058,
    "latestGasYearLNGImportsBcm": 45.073,
    "calendar2025ApparentDemandBcm": 418.468,
    "calendar2025LNGImportsBcm": 91.688,
    "calendar2023ApparentDemandBcm": 380.901
  },
  "scenarios": [
    {
      "key": "stress",
      "label": "Stress Case",
      "gasPriceUsdMmbtu": 16,
      "coalPriceUsdTonne": 105,
      "carbonPriceUsdTonne": 0,
      "gasEfficiency": 0.52,
      "coalEfficiency": 0.39,
      "operatingAvailability": 0.62,
      "peakGasReservation": 0.25,
      "renewableNuclearStress": 0.15,
      "policySupport": 0.85,
      "note": "Central case for an LNG-exposed coastal China stress period where gas is well above domestic coal on a short-run cost basis."
    },
    {
      "key": "high",
      "label": "High Switching",
      "gasPriceUsdMmbtu": 20,
      "coalPriceUsdTonne": 115,
      "carbonPriceUsdTonne": 0,
      "gasEfficiency": 0.52,
      "coalEfficiency": 0.4,
      "operatingAvailability": 0.78,
      "peakGasReservation": 0.18,
      "renewableNuclearStress": 0.05,
      "policySupport": 1,
      "note": "Administrative support is strong, coal flexibility is available, and power-system stress does not force much gas peaking."
    },
    {
      "key": "constrained",
      "label": "Constrained",
      "gasPriceUsdMmbtu": 12,
      "coalPriceUsdTonne": 110,
      "carbonPriceUsdTonne": 0,
      "gasEfficiency": 0.52,
      "coalEfficiency": 0.38,
      "operatingAvailability": 0.45,
      "peakGasReservation": 0.38,
      "renewableNuclearStress": 0.25,
      "policySupport": 0.55,
      "note": "Gas still screens above coal, but summer peak demand, plant availability, and administrative constraints leave little feasible switching."
    },
    {
      "key": "cheap-gas",
      "label": "Cheap Gas",
      "gasPriceUsdMmbtu": 6,
      "coalPriceUsdTonne": 115,
      "carbonPriceUsdTonne": 0,
      "gasEfficiency": 0.54,
      "coalEfficiency": 0.39,
      "operatingAvailability": 0.5,
      "peakGasReservation": 0.25,
      "renewableNuclearStress": 0.1,
      "policySupport": 0.5,
      "note": "A reverse-screening case. Gas can become cheaper than coal, so the gas-to-coal saving model intentionally returns zero activation."
    }
  ],
  "defaultScenarioKey": "stress",
  "regionalClusters": [
    {
      "key": "guangdong",
      "label": "Guangdong",
      "share": 0.42,
      "priceSensitivity": "Highest",
      "reportBasis": "Gas cap noted in the report policy map; major coastal LNG and gas-power cluster.",
      "envelopeLowBcm": 11.55,
      "envelopeMidBcm": 12.6,
      "envelopeHighBcm": 13.65
    },
    {
      "key": "yangtze",
      "label": "Shanghai / Zhejiang / Jiangsu",
      "share": 0.38,
      "priceSensitivity": "High",
      "reportBasis": "Shanghai area, reaching into Zhejiang and Jiangsu, identified by the report as a gas-power cluster.",
      "envelopeLowBcm": 10.45,
      "envelopeMidBcm": 11.4,
      "envelopeHighBcm": 12.35
    },
    {
      "key": "beijing",
      "label": "Beijing Area",
      "share": 0.2,
      "priceSensitivity": "Medium",
      "reportBasis": "Northern gas-power cluster with peak and air-quality constraints.",
      "envelopeLowBcm": 5.5,
      "envelopeMidBcm": 6,
      "envelopeHighBcm": 6.5
    }
  ],
  "monthlyShape": [
    {
      "index": 1,
      "label": "Oct",
      "month": 10,
      "averagePowerResidualBcm": 7.24,
      "feasibility": 0.95,
      "normalizedWeight": 0.08384,
      "note": "Intermediate switching month."
    },
    {
      "index": 2,
      "label": "Nov",
      "month": 11,
      "averagePowerResidualBcm": 7.212,
      "feasibility": 0.9,
      "normalizedWeight": 0.07912,
      "note": "Intermediate switching month."
    },
    {
      "index": 3,
      "label": "Dec",
      "month": 12,
      "averagePowerResidualBcm": 7.129,
      "feasibility": 0.82,
      "normalizedWeight": 0.07125,
      "note": "Intermediate switching month."
    },
    {
      "index": 4,
      "label": "Jan",
      "month": 1,
      "averagePowerResidualBcm": 5.213,
      "feasibility": 0.78,
      "normalizedWeight": 0.04956,
      "note": "Peak-demand season: gas plants are preserved for system balancing."
    },
    {
      "index": 5,
      "label": "Feb",
      "month": 2,
      "averagePowerResidualBcm": 5.114,
      "feasibility": 0.8,
      "normalizedWeight": 0.04987,
      "note": "Intermediate switching month."
    },
    {
      "index": 6,
      "label": "Mar",
      "month": 3,
      "averagePowerResidualBcm": 7.3,
      "feasibility": 0.92,
      "normalizedWeight": 0.08187,
      "note": "Intermediate switching month."
    },
    {
      "index": 7,
      "label": "Apr",
      "month": 4,
      "averagePowerResidualBcm": 7.68,
      "feasibility": 1,
      "normalizedWeight": 0.09361,
      "note": "Shoulder season: more thermal substitution is feasible if coal capacity is available."
    },
    {
      "index": 8,
      "label": "May",
      "month": 5,
      "averagePowerResidualBcm": 8.733,
      "feasibility": 0.96,
      "normalizedWeight": 0.10219,
      "note": "Shoulder season: more thermal substitution is feasible if coal capacity is available."
    },
    {
      "index": 9,
      "label": "Jun",
      "month": 6,
      "averagePowerResidualBcm": 9.512,
      "feasibility": 0.85,
      "normalizedWeight": 0.09856,
      "note": "Intermediate switching month."
    },
    {
      "index": 10,
      "label": "Jul",
      "month": 7,
      "averagePowerResidualBcm": 10.592,
      "feasibility": 0.72,
      "normalizedWeight": 0.09296,
      "note": "Peak-demand season: gas plants are preserved for system balancing."
    },
    {
      "index": 11,
      "label": "Aug",
      "month": 8,
      "averagePowerResidualBcm": 11.077,
      "feasibility": 0.7,
      "normalizedWeight": 0.09452,
      "note": "Peak-demand season: gas plants are preserved for system balancing."
    },
    {
      "index": 12,
      "label": "Sep",
      "month": 9,
      "averagePowerResidualBcm": 9.571,
      "feasibility": 0.88,
      "normalizedWeight": 0.10266,
      "note": "Intermediate switching month."
    }
  ],
  "reportFindings": [
    {
      "title": "China is a major theoretical switch source",
      "text": "The report estimates 55-65 bcm/yr of gas saving potential across key LNG import markets, with China accounting for almost half. The dashboard therefore uses 27.5-32.5 bcm/yr as the technical China envelope before price and operational constraints."
    },
    {
      "title": "Coastal clusters drive the China case",
      "text": "The report identifies Guangdong, the Shanghai/Zhejiang/Jiangsu area, and the Beijing area as the main gas-fired generation clusters. These areas also account for the vast majority of LNG imports, so global gas prices matter most there."
    },
    {
      "title": "Fuel costs are necessary but not sufficient",
      "text": "The report notes Guangdong wholesale gas prices were about 12% higher year on year by end-March 2026 and up about 60% from early March to early June, while coal prices moved more modestly. It also cautions that summer peak demand, coal utilisation, wind/nuclear underperformance, and operational factors cap feasible switching."
    },
    {
      "title": "Administrative measures matter",
      "text": "The policy map on page 53 notes a Guangdong gas-consumption cap. The model includes a policy-support factor because China fuel switching is not purely a merchant merit-order outcome."
    }
  ],
  "githubReview": [
    {
      "name": "nexteAMAI/nextE_Energy_Supply_Price_Model",
      "url": "https://github.com/nexteAMAI/nextE_Energy_Supply_Price_Model/blob/3420adc229afd91912c5ae897cf8e0ac9274d96f/processors/srmc.py",
      "note": "Uses transparent gas and coal short-run marginal cost formulas with efficiency and emissions factors."
    },
    {
      "name": "OTEO001/merit-order",
      "url": "https://github.com/OTEO001/merit-order/blob/5ea832c42abf5d648d4889c3e34f87bd15419a87/analytics/spreads.py",
      "note": "Implements clean spark/dark spreads and an explicit fuel-switching price formula."
    },
    {
      "name": "IrishRugbyman/european-energy-hub",
      "url": "https://github.com/IrishRugbyman/european-energy-hub/blob/d49fd339509d6a5e4ccc58f48ba4884ccb73f31a/frontend/src/routes/spreads.tsx",
      "note": "Dashboard pattern for showing clean spark/dark spreads, fuel-switching regimes, and gas disruption overlays."
    },
    {
      "name": "onismyh/CHNPowerSystem",
      "url": "https://github.com/onismyh/CHNPowerSystem",
      "note": "China single-region power-system learning model. It is broader than switching economics and does not provide a ready China gas-to-coal dashboard."
    }
  ],
  "sources": [
    {
      "name": "IEA Gas Market Report, Q3-2026",
      "url": "local:/Users/qiran/Downloads/GasMarketReport,Q3-2026.pdf",
      "note": "Pages 47-53 provide the gas-to-coal switching framework, China qualitative constraints, and the theoretical gas-saving envelope."
    },
    {
      "name": "JODI Gas World Database",
      "url": "https://www.jodidata.org/gas/database/data-downloads.aspx",
      "note": "Existing dashboard source for China monthly apparent gas demand and LNG imports."
    },
    {
      "name": "Carbon Monitor China",
      "url": "https://cn.carbonmonitor.org/",
      "note": "Existing sector dashboard source used here only to shape the monthly power/residual switching profile."
    }
  ]
};
