window.CHINA_GAS_SWITCHING_DATA = {
  "meta": {
    "generatedAt": "2026-07-08T05:56:48.250Z",
    "title": "China gas-to-coal switching model",
    "report": "IEA Gas Market Report, Q3-2026, pages 47-53",
    "latestActualPeriod": "2026-03",
    "latestCarbonPowerPeriod": "2026-05",
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
    "calendar2023ApparentDemandBcm": 380.901,
    "carbonPowerLatestPeriod": "2026-05",
    "carbonPowerLatestTwelveMonths": {
      "startPeriod": "2025-06",
      "endPeriod": "2026-05",
      "coalGenerationTwh": 5439.5,
      "gasGenerationTwh": 382.4,
      "coalGasTotalTwh": 5821.9,
      "gasShareCoalGas": 0.0657,
      "gasToCoalRatio": 0.0703
    },
    "carbonPowerLatestCompleteYear": {
      "year": "2025",
      "complete": true,
      "months": 12,
      "coalGenerationTwh": 5382.8,
      "gasGenerationTwh": 384.3,
      "gasShareCoalGas": 0.0666
    }
  },
  "carbonPower": {
    "source": "Carbon Monitor-Power",
    "sourceUrl": "https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=energy_global",
    "unit": "TWh electric per month",
    "rowCount": 5416,
    "earliestPeriod": "2019-01",
    "latestPeriod": "2026-05",
    "latestTwelveMonths": {
      "startPeriod": "2025-06",
      "endPeriod": "2026-05",
      "coalGenerationTwh": 5439.5,
      "gasGenerationTwh": 382.4,
      "coalGasTotalTwh": 5821.9,
      "gasShareCoalGas": 0.0657,
      "gasToCoalRatio": 0.0703
    },
    "annual": [
      {
        "year": "2019",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 4550,
        "gasGenerationTwh": 231.9,
        "gasShareCoalGas": 0.0485
      },
      {
        "year": "2020",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 4620.9,
        "gasGenerationTwh": 252.4,
        "gasShareCoalGas": 0.0518
      },
      {
        "year": "2021",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 5049,
        "gasGenerationTwh": 285.7,
        "gasShareCoalGas": 0.0536
      },
      {
        "year": "2022",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 5184.7,
        "gasGenerationTwh": 309.3,
        "gasShareCoalGas": 0.0563
      },
      {
        "year": "2023",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 5428.1,
        "gasGenerationTwh": 337.3,
        "gasShareCoalGas": 0.0585
      },
      {
        "year": "2024",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 5518.6,
        "gasGenerationTwh": 361.4,
        "gasShareCoalGas": 0.0615
      },
      {
        "year": "2025",
        "complete": true,
        "months": 12,
        "coalGenerationTwh": 5382.8,
        "gasGenerationTwh": 384.3,
        "gasShareCoalGas": 0.0666
      },
      {
        "year": "2026",
        "complete": false,
        "months": 5,
        "coalGenerationTwh": 2160.6,
        "gasGenerationTwh": 140.8,
        "gasShareCoalGas": 0.0612
      }
    ],
    "monthly": [
      {
        "period": "2019-01",
        "label": "Jan",
        "gasYear": "2018/19",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 436.6,
        "gasGenerationTwh": 18.81,
        "coalGasTotalTwh": 455.4,
        "gasShareCoalGas": 0.0413
      },
      {
        "period": "2019-02",
        "label": "Feb",
        "gasYear": "2018/19",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 335.6,
        "gasGenerationTwh": 14.46,
        "coalGasTotalTwh": 350.1,
        "gasShareCoalGas": 0.0413
      },
      {
        "period": "2019-03",
        "label": "Mar",
        "gasYear": "2018/19",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 381.8,
        "gasGenerationTwh": 17.73,
        "coalGasTotalTwh": 399.5,
        "gasShareCoalGas": 0.0444
      },
      {
        "period": "2019-04",
        "label": "Apr",
        "gasYear": "2018/19",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 348.2,
        "gasGenerationTwh": 15.82,
        "coalGasTotalTwh": 364.1,
        "gasShareCoalGas": 0.0435
      },
      {
        "period": "2019-05",
        "label": "May",
        "gasYear": "2018/19",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 331.2,
        "gasGenerationTwh": 16.41,
        "coalGasTotalTwh": 347.6,
        "gasShareCoalGas": 0.0472
      },
      {
        "period": "2019-06",
        "label": "Jun",
        "gasYear": "2018/19",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 349.1,
        "gasGenerationTwh": 20.6,
        "coalGasTotalTwh": 369.7,
        "gasShareCoalGas": 0.0557
      },
      {
        "period": "2019-07",
        "label": "Jul",
        "gasYear": "2018/19",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 391,
        "gasGenerationTwh": 23.91,
        "coalGasTotalTwh": 414.9,
        "gasShareCoalGas": 0.0576
      },
      {
        "period": "2019-08",
        "label": "Aug",
        "gasYear": "2018/19",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 412.5,
        "gasGenerationTwh": 24.88,
        "coalGasTotalTwh": 437.4,
        "gasShareCoalGas": 0.0569
      },
      {
        "period": "2019-09",
        "label": "Sep",
        "gasYear": "2018/19",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 369.7,
        "gasGenerationTwh": 20.42,
        "coalGasTotalTwh": 390.1,
        "gasShareCoalGas": 0.0523
      },
      {
        "period": "2019-10",
        "label": "Oct",
        "gasYear": "2019/20",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 345.7,
        "gasGenerationTwh": 16.74,
        "coalGasTotalTwh": 362.4,
        "gasShareCoalGas": 0.0462
      },
      {
        "period": "2019-11",
        "label": "Nov",
        "gasYear": "2019/20",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 378,
        "gasGenerationTwh": 17.5,
        "coalGasTotalTwh": 395.5,
        "gasShareCoalGas": 0.0442
      },
      {
        "period": "2019-12",
        "label": "Dec",
        "gasYear": "2019/20",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 470.6,
        "gasGenerationTwh": 24.59,
        "coalGasTotalTwh": 495.2,
        "gasShareCoalGas": 0.0497
      },
      {
        "period": "2020-01",
        "label": "Jan",
        "gasYear": "2019/20",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 432.7,
        "gasGenerationTwh": 23.38,
        "coalGasTotalTwh": 456.1,
        "gasShareCoalGas": 0.0512
      },
      {
        "period": "2020-02",
        "label": "Feb",
        "gasYear": "2019/20",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 265.5,
        "gasGenerationTwh": 14.38,
        "coalGasTotalTwh": 279.9,
        "gasShareCoalGas": 0.0514
      },
      {
        "period": "2020-03",
        "label": "Mar",
        "gasYear": "2019/20",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 333.3,
        "gasGenerationTwh": 18.67,
        "coalGasTotalTwh": 351.9,
        "gasShareCoalGas": 0.0531
      },
      {
        "period": "2020-04",
        "label": "Apr",
        "gasYear": "2019/20",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 342.8,
        "gasGenerationTwh": 16.55,
        "coalGasTotalTwh": 359.3,
        "gasShareCoalGas": 0.0461
      },
      {
        "period": "2020-05",
        "label": "May",
        "gasYear": "2019/20",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 364.5,
        "gasGenerationTwh": 18.44,
        "coalGasTotalTwh": 382.9,
        "gasShareCoalGas": 0.0482
      },
      {
        "period": "2020-06",
        "label": "Jun",
        "gasYear": "2019/20",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 370.9,
        "gasGenerationTwh": 20.53,
        "coalGasTotalTwh": 391.4,
        "gasShareCoalGas": 0.0524
      },
      {
        "period": "2020-07",
        "label": "Jul",
        "gasYear": "2019/20",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 397.3,
        "gasGenerationTwh": 22.04,
        "coalGasTotalTwh": 419.3,
        "gasShareCoalGas": 0.0526
      },
      {
        "period": "2020-08",
        "label": "Aug",
        "gasYear": "2019/20",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 446,
        "gasGenerationTwh": 27.45,
        "coalGasTotalTwh": 473.4,
        "gasShareCoalGas": 0.058
      },
      {
        "period": "2020-09",
        "label": "Sep",
        "gasYear": "2019/20",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 368,
        "gasGenerationTwh": 22.28,
        "coalGasTotalTwh": 390.3,
        "gasShareCoalGas": 0.0571
      },
      {
        "period": "2020-10",
        "label": "Oct",
        "gasYear": "2020/21",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 338.6,
        "gasGenerationTwh": 18.67,
        "coalGasTotalTwh": 357.3,
        "gasShareCoalGas": 0.0522
      },
      {
        "period": "2020-11",
        "label": "Nov",
        "gasYear": "2020/21",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 397.7,
        "gasGenerationTwh": 23.14,
        "coalGasTotalTwh": 420.8,
        "gasShareCoalGas": 0.055
      },
      {
        "period": "2020-12",
        "label": "Dec",
        "gasYear": "2020/21",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 563.6,
        "gasGenerationTwh": 26.87,
        "coalGasTotalTwh": 590.5,
        "gasShareCoalGas": 0.0455
      },
      {
        "period": "2021-01",
        "label": "Jan",
        "gasYear": "2020/21",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 516.1,
        "gasGenerationTwh": 23.31,
        "coalGasTotalTwh": 539.5,
        "gasShareCoalGas": 0.0432
      },
      {
        "period": "2021-02",
        "label": "Feb",
        "gasYear": "2020/21",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 333.4,
        "gasGenerationTwh": 15,
        "coalGasTotalTwh": 348.4,
        "gasShareCoalGas": 0.043
      },
      {
        "period": "2021-03",
        "label": "Mar",
        "gasYear": "2020/21",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 432.3,
        "gasGenerationTwh": 23.58,
        "coalGasTotalTwh": 455.8,
        "gasShareCoalGas": 0.0517
      },
      {
        "period": "2021-04",
        "label": "Apr",
        "gasYear": "2020/21",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 392.6,
        "gasGenerationTwh": 24.18,
        "coalGasTotalTwh": 416.8,
        "gasShareCoalGas": 0.058
      },
      {
        "period": "2021-05",
        "label": "May",
        "gasYear": "2020/21",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 386,
        "gasGenerationTwh": 25.17,
        "coalGasTotalTwh": 411.2,
        "gasShareCoalGas": 0.0612
      },
      {
        "period": "2021-06",
        "label": "Jun",
        "gasYear": "2020/21",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 419.1,
        "gasGenerationTwh": 22.7,
        "coalGasTotalTwh": 441.8,
        "gasShareCoalGas": 0.0514
      },
      {
        "period": "2021-07",
        "label": "Jul",
        "gasYear": "2020/21",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 457.6,
        "gasGenerationTwh": 26.56,
        "coalGasTotalTwh": 484.2,
        "gasShareCoalGas": 0.0548
      },
      {
        "period": "2021-08",
        "label": "Aug",
        "gasYear": "2020/21",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 458.8,
        "gasGenerationTwh": 26.86,
        "coalGasTotalTwh": 485.6,
        "gasShareCoalGas": 0.0553
      },
      {
        "period": "2021-09",
        "label": "Sep",
        "gasYear": "2020/21",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 402.3,
        "gasGenerationTwh": 23.28,
        "coalGasTotalTwh": 425.6,
        "gasShareCoalGas": 0.0547
      },
      {
        "period": "2021-10",
        "label": "Oct",
        "gasYear": "2021/22",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 373,
        "gasGenerationTwh": 19.37,
        "coalGasTotalTwh": 392.4,
        "gasShareCoalGas": 0.0494
      },
      {
        "period": "2021-11",
        "label": "Nov",
        "gasYear": "2021/22",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 403.5,
        "gasGenerationTwh": 18.83,
        "coalGasTotalTwh": 422.3,
        "gasShareCoalGas": 0.0446
      },
      {
        "period": "2021-12",
        "label": "Dec",
        "gasYear": "2021/22",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 474.3,
        "gasGenerationTwh": 36.86,
        "coalGasTotalTwh": 511.2,
        "gasShareCoalGas": 0.0721
      },
      {
        "period": "2022-01",
        "label": "Jan",
        "gasYear": "2021/22",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 546.4,
        "gasGenerationTwh": 31.21,
        "coalGasTotalTwh": 577.6,
        "gasShareCoalGas": 0.054
      },
      {
        "period": "2022-02",
        "label": "Feb",
        "gasYear": "2021/22",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 361.9,
        "gasGenerationTwh": 19.81,
        "coalGasTotalTwh": 381.7,
        "gasShareCoalGas": 0.0519
      },
      {
        "period": "2022-03",
        "label": "Mar",
        "gasYear": "2021/22",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 419.9,
        "gasGenerationTwh": 22.2,
        "coalGasTotalTwh": 442.1,
        "gasShareCoalGas": 0.0502
      },
      {
        "period": "2022-04",
        "label": "Apr",
        "gasYear": "2021/22",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 354.4,
        "gasGenerationTwh": 20.33,
        "coalGasTotalTwh": 374.7,
        "gasShareCoalGas": 0.0543
      },
      {
        "period": "2022-05",
        "label": "May",
        "gasYear": "2021/22",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 351.6,
        "gasGenerationTwh": 19.8,
        "coalGasTotalTwh": 371.4,
        "gasShareCoalGas": 0.0533
      },
      {
        "period": "2022-06",
        "label": "Jun",
        "gasYear": "2021/22",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 383.5,
        "gasGenerationTwh": 23.53,
        "coalGasTotalTwh": 407,
        "gasShareCoalGas": 0.0578
      },
      {
        "period": "2022-07",
        "label": "Jul",
        "gasYear": "2021/22",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 484.7,
        "gasGenerationTwh": 35.82,
        "coalGasTotalTwh": 520.6,
        "gasShareCoalGas": 0.0688
      },
      {
        "period": "2022-08",
        "label": "Aug",
        "gasYear": "2021/22",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 537.4,
        "gasGenerationTwh": 39.84,
        "coalGasTotalTwh": 577.2,
        "gasShareCoalGas": 0.069
      },
      {
        "period": "2022-09",
        "label": "Sep",
        "gasYear": "2021/22",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 441.1,
        "gasGenerationTwh": 19.61,
        "coalGasTotalTwh": 460.8,
        "gasShareCoalGas": 0.0426
      },
      {
        "period": "2022-10",
        "label": "Oct",
        "gasYear": "2022/23",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 383.2,
        "gasGenerationTwh": 21.23,
        "coalGasTotalTwh": 404.4,
        "gasShareCoalGas": 0.0525
      },
      {
        "period": "2022-11",
        "label": "Nov",
        "gasYear": "2022/23",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 418.1,
        "gasGenerationTwh": 26.3,
        "coalGasTotalTwh": 444.4,
        "gasShareCoalGas": 0.0592
      },
      {
        "period": "2022-12",
        "label": "Dec",
        "gasYear": "2022/23",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 502.5,
        "gasGenerationTwh": 29.6,
        "coalGasTotalTwh": 532.1,
        "gasShareCoalGas": 0.0556
      },
      {
        "period": "2023-01",
        "label": "Jan",
        "gasYear": "2022/23",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 473.7,
        "gasGenerationTwh": 26.91,
        "coalGasTotalTwh": 500.6,
        "gasShareCoalGas": 0.0538
      },
      {
        "period": "2023-02",
        "label": "Feb",
        "gasYear": "2022/23",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 405.2,
        "gasGenerationTwh": 22.94,
        "coalGasTotalTwh": 428.1,
        "gasShareCoalGas": 0.0536
      },
      {
        "period": "2023-03",
        "label": "Mar",
        "gasYear": "2022/23",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 457,
        "gasGenerationTwh": 26.05,
        "coalGasTotalTwh": 483.1,
        "gasShareCoalGas": 0.0539
      },
      {
        "period": "2023-04",
        "label": "Apr",
        "gasYear": "2022/23",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 395.3,
        "gasGenerationTwh": 23.75,
        "coalGasTotalTwh": 419,
        "gasShareCoalGas": 0.0567
      },
      {
        "period": "2023-05",
        "label": "May",
        "gasYear": "2022/23",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 403.5,
        "gasGenerationTwh": 26.28,
        "coalGasTotalTwh": 429.7,
        "gasShareCoalGas": 0.0612
      },
      {
        "period": "2023-06",
        "label": "Jun",
        "gasYear": "2022/23",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 449.8,
        "gasGenerationTwh": 29.61,
        "coalGasTotalTwh": 479.4,
        "gasShareCoalGas": 0.0618
      },
      {
        "period": "2023-07",
        "label": "Jul",
        "gasYear": "2022/23",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 502.5,
        "gasGenerationTwh": 38.74,
        "coalGasTotalTwh": 541.2,
        "gasShareCoalGas": 0.0716
      },
      {
        "period": "2023-08",
        "label": "Aug",
        "gasYear": "2022/23",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 539.6,
        "gasGenerationTwh": 37.12,
        "coalGasTotalTwh": 576.7,
        "gasShareCoalGas": 0.0644
      },
      {
        "period": "2023-09",
        "label": "Sep",
        "gasYear": "2022/23",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 427.8,
        "gasGenerationTwh": 27.17,
        "coalGasTotalTwh": 455,
        "gasShareCoalGas": 0.0597
      },
      {
        "period": "2023-10",
        "label": "Oct",
        "gasYear": "2023/24",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 406.7,
        "gasGenerationTwh": 23.09,
        "coalGasTotalTwh": 429.8,
        "gasShareCoalGas": 0.0537
      },
      {
        "period": "2023-11",
        "label": "Nov",
        "gasYear": "2023/24",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 437.8,
        "gasGenerationTwh": 26.8,
        "coalGasTotalTwh": 464.6,
        "gasShareCoalGas": 0.0577
      },
      {
        "period": "2023-12",
        "label": "Dec",
        "gasYear": "2023/24",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 529.2,
        "gasGenerationTwh": 28.81,
        "coalGasTotalTwh": 558,
        "gasShareCoalGas": 0.0516
      },
      {
        "period": "2024-01",
        "label": "Jan",
        "gasYear": "2023/24",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 490.9,
        "gasGenerationTwh": 28.95,
        "coalGasTotalTwh": 519.8,
        "gasShareCoalGas": 0.0557
      },
      {
        "period": "2024-02",
        "label": "Feb",
        "gasYear": "2023/24",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 462.2,
        "gasGenerationTwh": 27.56,
        "coalGasTotalTwh": 489.8,
        "gasShareCoalGas": 0.0563
      },
      {
        "period": "2024-03",
        "label": "Mar",
        "gasYear": "2023/24",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 469,
        "gasGenerationTwh": 27.85,
        "coalGasTotalTwh": 496.8,
        "gasShareCoalGas": 0.056
      },
      {
        "period": "2024-04",
        "label": "Apr",
        "gasYear": "2023/24",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 396.2,
        "gasGenerationTwh": 26.18,
        "coalGasTotalTwh": 422.4,
        "gasShareCoalGas": 0.062
      },
      {
        "period": "2024-05",
        "label": "May",
        "gasYear": "2023/24",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 388.3,
        "gasGenerationTwh": 22.38,
        "coalGasTotalTwh": 410.7,
        "gasShareCoalGas": 0.0545
      },
      {
        "period": "2024-06",
        "label": "Jun",
        "gasYear": "2023/24",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 413.8,
        "gasGenerationTwh": 25.94,
        "coalGasTotalTwh": 439.8,
        "gasShareCoalGas": 0.059
      },
      {
        "period": "2024-07",
        "label": "Jul",
        "gasYear": "2023/24",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 489.1,
        "gasGenerationTwh": 39.82,
        "coalGasTotalTwh": 528.9,
        "gasShareCoalGas": 0.0753
      },
      {
        "period": "2024-08",
        "label": "Aug",
        "gasYear": "2023/24",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 536.6,
        "gasGenerationTwh": 42.89,
        "coalGasTotalTwh": 579.5,
        "gasShareCoalGas": 0.074
      },
      {
        "period": "2024-09",
        "label": "Sep",
        "gasYear": "2023/24",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 482.1,
        "gasGenerationTwh": 32.87,
        "coalGasTotalTwh": 515,
        "gasShareCoalGas": 0.0638
      },
      {
        "period": "2024-10",
        "label": "Oct",
        "gasYear": "2024/25",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 414.9,
        "gasGenerationTwh": 25.35,
        "coalGasTotalTwh": 440.3,
        "gasShareCoalGas": 0.0576
      },
      {
        "period": "2024-11",
        "label": "Nov",
        "gasYear": "2024/25",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 445.4,
        "gasGenerationTwh": 27.95,
        "coalGasTotalTwh": 473.3,
        "gasShareCoalGas": 0.059
      },
      {
        "period": "2024-12",
        "label": "Dec",
        "gasYear": "2024/25",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 530.1,
        "gasGenerationTwh": 33.64,
        "coalGasTotalTwh": 563.7,
        "gasShareCoalGas": 0.0597
      },
      {
        "period": "2025-01",
        "label": "Jan",
        "gasYear": "2024/25",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 490.5,
        "gasGenerationTwh": 32.23,
        "coalGasTotalTwh": 522.7,
        "gasShareCoalGas": 0.0617
      },
      {
        "period": "2025-02",
        "label": "Feb",
        "gasYear": "2024/25",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 401.7,
        "gasGenerationTwh": 26.5,
        "coalGasTotalTwh": 428.2,
        "gasShareCoalGas": 0.0619
      },
      {
        "period": "2025-03",
        "label": "Mar",
        "gasYear": "2024/25",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 441.4,
        "gasGenerationTwh": 30.13,
        "coalGasTotalTwh": 471.5,
        "gasShareCoalGas": 0.0639
      },
      {
        "period": "2025-04",
        "label": "Apr",
        "gasYear": "2024/25",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 381.6,
        "gasGenerationTwh": 26.63,
        "coalGasTotalTwh": 408.2,
        "gasShareCoalGas": 0.0652
      },
      {
        "period": "2025-05",
        "label": "May",
        "gasYear": "2024/25",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 388.7,
        "gasGenerationTwh": 27.3,
        "coalGasTotalTwh": 416,
        "gasShareCoalGas": 0.0656
      },
      {
        "period": "2025-06",
        "label": "Jun",
        "gasYear": "2024/25",
        "gasYearMonth": 9,
        "month": 6,
        "coalGenerationTwh": 411,
        "gasGenerationTwh": 27.48,
        "coalGasTotalTwh": 438.5,
        "gasShareCoalGas": 0.0627
      },
      {
        "period": "2025-07",
        "label": "Jul",
        "gasYear": "2024/25",
        "gasYearMonth": 10,
        "month": 7,
        "coalGenerationTwh": 510.3,
        "gasGenerationTwh": 40.52,
        "coalGasTotalTwh": 550.9,
        "gasShareCoalGas": 0.0736
      },
      {
        "period": "2025-08",
        "label": "Aug",
        "gasYear": "2024/25",
        "gasYearMonth": 11,
        "month": 8,
        "coalGenerationTwh": 546.7,
        "gasGenerationTwh": 45.36,
        "coalGasTotalTwh": 592.1,
        "gasShareCoalGas": 0.0766
      },
      {
        "period": "2025-09",
        "label": "Sep",
        "gasYear": "2024/25",
        "gasYearMonth": 12,
        "month": 9,
        "coalGenerationTwh": 450.7,
        "gasGenerationTwh": 34.03,
        "coalGasTotalTwh": 484.7,
        "gasShareCoalGas": 0.0702
      },
      {
        "period": "2025-10",
        "label": "Oct",
        "gasYear": "2025/26",
        "gasYearMonth": 1,
        "month": 10,
        "coalGenerationTwh": 443,
        "gasGenerationTwh": 32.51,
        "coalGasTotalTwh": 475.5,
        "gasShareCoalGas": 0.0684
      },
      {
        "period": "2025-11",
        "label": "Nov",
        "gasYear": "2025/26",
        "gasYearMonth": 2,
        "month": 11,
        "coalGenerationTwh": 421,
        "gasGenerationTwh": 27.95,
        "coalGasTotalTwh": 448.9,
        "gasShareCoalGas": 0.0622
      },
      {
        "period": "2025-12",
        "label": "Dec",
        "gasYear": "2025/26",
        "gasYearMonth": 3,
        "month": 12,
        "coalGenerationTwh": 496.2,
        "gasGenerationTwh": 33.67,
        "coalGasTotalTwh": 529.8,
        "gasShareCoalGas": 0.0636
      },
      {
        "period": "2026-01",
        "label": "Jan",
        "gasYear": "2025/26",
        "gasYearMonth": 4,
        "month": 1,
        "coalGenerationTwh": 470.8,
        "gasGenerationTwh": 32,
        "coalGasTotalTwh": 502.8,
        "gasShareCoalGas": 0.0637
      },
      {
        "period": "2026-02",
        "label": "Feb",
        "gasYear": "2025/26",
        "gasYearMonth": 5,
        "month": 2,
        "coalGenerationTwh": 439,
        "gasGenerationTwh": 29.84,
        "coalGasTotalTwh": 468.9,
        "gasShareCoalGas": 0.0636
      },
      {
        "period": "2026-03",
        "label": "Mar",
        "gasYear": "2025/26",
        "gasYearMonth": 6,
        "month": 3,
        "coalGenerationTwh": 460.8,
        "gasGenerationTwh": 28.59,
        "coalGasTotalTwh": 489.4,
        "gasShareCoalGas": 0.0584
      },
      {
        "period": "2026-04",
        "label": "Apr",
        "gasYear": "2025/26",
        "gasYearMonth": 7,
        "month": 4,
        "coalGenerationTwh": 395,
        "gasGenerationTwh": 25.69,
        "coalGasTotalTwh": 420.7,
        "gasShareCoalGas": 0.0611
      },
      {
        "period": "2026-05",
        "label": "May",
        "gasYear": "2025/26",
        "gasYearMonth": 8,
        "month": 5,
        "coalGenerationTwh": 395,
        "gasGenerationTwh": 24.72,
        "coalGasTotalTwh": 419.7,
        "gasShareCoalGas": 0.0589
      }
    ]
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
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 21.54,
      "averageCoalGenerationTwh": 383.3,
      "feasibility": 0.95,
      "normalizedWeight": 0.07343,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Intermediate switching month."
    },
    {
      "index": 2,
      "label": "Nov",
      "month": 11,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 24.6,
      "averageCoalGenerationTwh": 420.5,
      "feasibility": 0.9,
      "normalizedWeight": 0.07945,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Intermediate switching month."
    },
    {
      "index": 3,
      "label": "Dec",
      "month": 12,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 31.16,
      "averageCoalGenerationTwh": 519.9,
      "feasibility": 0.82,
      "normalizedWeight": 0.09166,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Intermediate switching month."
    },
    {
      "index": 4,
      "label": "Jan",
      "month": 1,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 28.52,
      "averageCoalGenerationTwh": 503.5,
      "feasibility": 0.78,
      "normalizedWeight": 0.07982,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Peak-demand season: gas plants are preserved for system balancing."
    },
    {
      "index": 5,
      "label": "Feb",
      "month": 2,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 22.36,
      "averageCoalGenerationTwh": 392.9,
      "feasibility": 0.8,
      "normalizedWeight": 0.06419,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Intermediate switching month."
    },
    {
      "index": 6,
      "label": "Mar",
      "month": 3,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 25.96,
      "averageCoalGenerationTwh": 443.9,
      "feasibility": 0.92,
      "normalizedWeight": 0.0857,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Intermediate switching month."
    },
    {
      "index": 7,
      "label": "Apr",
      "month": 4,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 24.21,
      "averageCoalGenerationTwh": 384,
      "feasibility": 1,
      "normalizedWeight": 0.08688,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Shoulder season: more thermal substitution is feasible if coal capacity is available."
    },
    {
      "index": 8,
      "label": "May",
      "month": 5,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 24.19,
      "averageCoalGenerationTwh": 383.6,
      "feasibility": 0.96,
      "normalizedWeight": 0.08331,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Shoulder season: more thermal substitution is feasible if coal capacity is available."
    },
    {
      "index": 9,
      "label": "Jun",
      "month": 6,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 25.85,
      "averageCoalGenerationTwh": 415.4,
      "feasibility": 0.85,
      "normalizedWeight": 0.07884,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Intermediate switching month."
    },
    {
      "index": 10,
      "label": "Jul",
      "month": 7,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 36.29,
      "averageCoalGenerationTwh": 488.8,
      "feasibility": 0.72,
      "normalizedWeight": 0.09375,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Peak-demand season: gas plants are preserved for system balancing."
    },
    {
      "index": 11,
      "label": "Aug",
      "month": 8,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 38.41,
      "averageCoalGenerationTwh": 523.8,
      "feasibility": 0.7,
      "normalizedWeight": 0.09648,
      "source": "Carbon Monitor-Power gas generation",
      "note": "Peak-demand season: gas plants are preserved for system balancing."
    },
    {
      "index": 12,
      "label": "Sep",
      "month": 9,
      "averagePowerResidualBcm": null,
      "averageGasGenerationTwh": 27.39,
      "averageCoalGenerationTwh": 440.8,
      "feasibility": 0.88,
      "normalizedWeight": 0.08649,
      "source": "Carbon Monitor-Power gas generation",
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
      "title": "Historical power data show the scale constraint",
      "text": "Carbon Monitor-Power shows China gas-fired generation was only 6.6% of coal-plus-gas generation in the latest twelve months (2025-06 to 2026-05). This is why the dashboard treats switching as a constrained gas-sector effect, not a large China power-mix displacement."
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
      "note": "Existing sector dashboard source retained as a fallback for the older Power / residual monthly proxy. The main switch model now uses Carbon Monitor-Power fuel generation for monthly gas-power shape."
    },
    {
      "name": "Carbon Monitor-Power",
      "url": "https://power.carbonmonitor.org/",
      "note": "Public daily power-generation dataset used to plot China's historical coal and gas generation and to shape monthly switching around observed gas-fired generation."
    },
    {
      "name": "Carbon Monitor-Power paper",
      "url": "https://arxiv.org/abs/2209.06086",
      "note": "Describes the near-real-time global power generation dataset, including coal and gas source groups at national resolution."
    }
  ]
};
