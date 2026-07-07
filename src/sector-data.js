window.CHINA_GAS_SECTOR_DATA = {
  "meta": {
    "generatedAt": "2026-07-07T07:47:59.519Z",
    "earliestModeledPeriod": "2019-01",
    "latestModeledPeriod": "2026-03",
    "currentGasYear": "2025/26",
    "units": "bcm unless otherwise stated",
    "note": "Historical top-down allocation of JODI apparent demand. Because China stock change is not reported in this JODI extract, modeled sectors are not storage-adjusted end-use demand.",
    "carbonMonitorPeriod": {
      "earliest": "2019-01",
      "latest": "2026-03"
    }
  },
  "gasYears": [
    "2018/19",
    "2019/20",
    "2020/21",
    "2021/22",
    "2022/23",
    "2023/24",
    "2024/25",
    "2025/26"
  ],
  "gasYearMonths": [
    {
      "index": 1,
      "label": "Oct"
    },
    {
      "index": 2,
      "label": "Nov"
    },
    {
      "index": 3,
      "label": "Dec"
    },
    {
      "index": 4,
      "label": "Jan"
    },
    {
      "index": 5,
      "label": "Feb"
    },
    {
      "index": 6,
      "label": "Mar"
    },
    {
      "index": 7,
      "label": "Apr"
    },
    {
      "index": 8,
      "label": "May"
    },
    {
      "index": 9,
      "label": "Jun"
    },
    {
      "index": 10,
      "label": "Jul"
    },
    {
      "index": 11,
      "label": "Aug"
    },
    {
      "index": 12,
      "label": "Sep"
    }
  ],
  "sectorDefinitions": [
    {
      "key": "power",
      "label": "Power",
      "shortLabel": "Power",
      "color": "#3268a8",
      "method": "IEA gas-balance transformation use for electricity plus CHP; monthly shape from Carbon Monitor China power-sector emissions."
    },
    {
      "key": "industrial",
      "label": "Industrial / chemical",
      "shortLabel": "Industrial",
      "color": "#917338",
      "method": "IEA gas final consumption in industry plus non-energy use; monthly shape from Carbon Monitor China industry emissions."
    },
    {
      "key": "buildings",
      "label": "Buildings / city gas",
      "shortLabel": "Buildings",
      "color": "#16837a",
      "method": "IEA residential plus tertiary gas final consumption; monthly shape from Carbon Monitor China residential emissions as a heating/cooking proxy."
    },
    {
      "key": "transport",
      "label": "Transport",
      "shortLabel": "Transport",
      "color": "#b14b4b",
      "method": "IEA transport gas final consumption; monthly shape from Carbon Monitor China ground-transport emissions."
    }
  ],
  "iea2023GasBalance": {
    "totalUseBasis": "IEA 2023 China natural-gas balance, normalized to the four dashboard sectors.",
    "finalConsumptionSource": "IEA China natural gas country page, Final consumption of gas by sector, China, 2023.",
    "energySectorShare": 0.243,
    "finalConsumptionShare": 0.751,
    "energySectorDetail": {
      "electricity": 0.41,
      "chp": 0.44
    },
    "finalConsumptionValuesTJ": {
      "industry": 6232455,
      "transport": 1276255,
      "residential": 2486965,
      "commercialPublicServices": 657877,
      "agricultureForestry": 9440,
      "nonEnergyUse": 589056
    }
  },
  "annualAnchors": [
    {
      "sector": "power",
      "rawShare": 0.2066,
      "normalizedShare": 0.2158
    },
    {
      "sector": "industrial",
      "rawShare": 0.4553,
      "normalizedShare": 0.4758
    },
    {
      "sector": "buildings",
      "rawShare": 0.2099,
      "normalizedShare": 0.2193
    },
    {
      "sector": "transport",
      "rawShare": 0.0852,
      "normalizedShare": 0.089
    }
  ],
  "ieaFinalConsumptionRows": [
    {
      "sector": "Industry",
      "valueTJ": 6232455,
      "dashboardBucket": "Industrial / chemical",
      "shareOfFinalConsumption": 0.5539
    },
    {
      "sector": "Non-energy use",
      "valueTJ": 589056,
      "dashboardBucket": "Industrial / chemical",
      "shareOfFinalConsumption": 0.0524
    },
    {
      "sector": "Residential",
      "valueTJ": 2486965,
      "dashboardBucket": "Buildings / city gas",
      "shareOfFinalConsumption": 0.221
    },
    {
      "sector": "Commercial and public services",
      "valueTJ": 657877,
      "dashboardBucket": "Buildings / city gas",
      "shareOfFinalConsumption": 0.0585
    },
    {
      "sector": "Transport",
      "valueTJ": 1276255,
      "dashboardBucket": "Transport",
      "shareOfFinalConsumption": 0.1134
    },
    {
      "sector": "Agriculture and forestry",
      "valueTJ": 9440,
      "dashboardBucket": "Outside modeled buckets",
      "shareOfFinalConsumption": 0.0008
    }
  ],
  "monthly": [
    {
      "period": "2019-01",
      "gasYear": "2018/19",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 28.981,
      "sectors": {
        "power": 4.636,
        "industrial": 9.634,
        "buildings": 12.927,
        "transport": 1.784
      },
      "shares": {
        "power": 0.16,
        "industrial": 0.3324,
        "buildings": 0.446,
        "transport": 0.0616
      },
      "proxyIndex": {
        "power": 1.049,
        "industrial": 0.989,
        "buildings": 2.878,
        "transport": 0.979
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-02",
      "gasYear": "2018/19",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 23.512,
      "sectors": {
        "power": 4.127,
        "industrial": 7.717,
        "buildings": 9.995,
        "transport": 1.674
      },
      "shares": {
        "power": 0.1755,
        "industrial": 0.3282,
        "buildings": 0.4251,
        "transport": 0.0712
      },
      "proxyIndex": {
        "power": 0.944,
        "industrial": 0.801,
        "buildings": 2.25,
        "transport": 0.928
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-03",
      "gasYear": "2018/19",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 24.566,
      "sectors": {
        "power": 4.777,
        "industrial": 11.216,
        "buildings": 6.568,
        "transport": 2.005
      },
      "shares": {
        "power": 0.1944,
        "industrial": 0.4566,
        "buildings": 0.2674,
        "transport": 0.0816
      },
      "proxyIndex": {
        "power": 0.985,
        "industrial": 1.049,
        "buildings": 1.333,
        "transport": 1.003
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-04",
      "gasYear": "2018/19",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 24.566,
      "sectors": {
        "power": 5.221,
        "industrial": 13.784,
        "buildings": 3.195,
        "transport": 2.365
      },
      "shares": {
        "power": 0.2125,
        "industrial": 0.5611,
        "buildings": 0.1301,
        "transport": 0.0963
      },
      "proxyIndex": {
        "power": 0.865,
        "industrial": 1.036,
        "buildings": 0.521,
        "transport": 0.95
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-05",
      "gasYear": "2018/19",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 24.766,
      "sectors": {
        "power": 5.766,
        "industrial": 15.284,
        "buildings": 1.072,
        "transport": 2.644
      },
      "shares": {
        "power": 0.2328,
        "industrial": 0.6171,
        "buildings": 0.0433,
        "transport": 0.1067
      },
      "proxyIndex": {
        "power": 0.881,
        "industrial": 1.06,
        "buildings": 0.161,
        "transport": 0.98
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-06",
      "gasYear": "2018/19",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 24.126,
      "sectors": {
        "power": 6.308,
        "industrial": 14.965,
        "buildings": 0.213,
        "transport": 2.639
      },
      "shares": {
        "power": 0.2615,
        "industrial": 0.6203,
        "buildings": 0.0088,
        "transport": 0.1094
      },
      "proxyIndex": {
        "power": 0.966,
        "industrial": 1.04,
        "buildings": 0.032,
        "transport": 0.98
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-07",
      "gasYear": "2018/19",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 24.568,
      "sectors": {
        "power": 7.329,
        "industrial": 14.48,
        "buildings": 0.085,
        "transport": 2.675
      },
      "shares": {
        "power": 0.2983,
        "industrial": 0.5894,
        "buildings": 0.0035,
        "transport": 0.1089
      },
      "proxyIndex": {
        "power": 1.128,
        "industrial": 1.011,
        "buildings": 0.013,
        "transport": 0.998
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-08",
      "gasYear": "2018/19",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 25.164,
      "sectors": {
        "power": 7.646,
        "industrial": 14.656,
        "buildings": 0.145,
        "transport": 2.717
      },
      "shares": {
        "power": 0.3038,
        "industrial": 0.5824,
        "buildings": 0.0058,
        "transport": 0.108
      },
      "proxyIndex": {
        "power": 1.165,
        "industrial": 1.013,
        "buildings": 0.022,
        "transport": 1.003
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-09",
      "gasYear": "2018/19",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 24.496,
      "sectors": {
        "power": 6.47,
        "industrial": 14.625,
        "buildings": 0.61,
        "transport": 2.791
      },
      "shares": {
        "power": 0.2641,
        "industrial": 0.597,
        "buildings": 0.0249,
        "transport": 0.1139
      },
      "proxyIndex": {
        "power": 0.982,
        "industrial": 1.007,
        "buildings": 0.091,
        "transport": 1.027
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-10",
      "gasYear": "2019/20",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 23.352,
      "sectors": {
        "power": 5,
        "industrial": 12.111,
        "buildings": 3.989,
        "transport": 2.252
      },
      "shares": {
        "power": 0.2141,
        "industrial": 0.5186,
        "buildings": 0.1708,
        "transport": 0.0964
      },
      "proxyIndex": {
        "power": 0.945,
        "industrial": 1.038,
        "buildings": 0.742,
        "transport": 1.032
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-11",
      "gasYear": "2019/20",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 28.044,
      "sectors": {
        "power": 5.327,
        "industrial": 11.845,
        "buildings": 8.803,
        "transport": 2.069
      },
      "shares": {
        "power": 0.19,
        "industrial": 0.4224,
        "buildings": 0.3139,
        "transport": 0.0738
      },
      "proxyIndex": {
        "power": 1.032,
        "industrial": 1.041,
        "buildings": 1.678,
        "transport": 0.972
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2019-12",
      "gasYear": "2019/20",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 29.012,
      "sectors": {
        "power": 5.324,
        "industrial": 10.311,
        "buildings": 11.55,
        "transport": 1.827
      },
      "shares": {
        "power": 0.1835,
        "industrial": 0.3554,
        "buildings": 0.3981,
        "transport": 0.063
      },
      "proxyIndex": {
        "power": 1.187,
        "industrial": 1.043,
        "buildings": 2.534,
        "transport": 0.988
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-01",
      "gasYear": "2019/20",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 28.657,
      "sectors": {
        "power": 4.024,
        "industrial": 9.815,
        "buildings": 13.267,
        "transport": 1.552
      },
      "shares": {
        "power": 0.1404,
        "industrial": 0.3425,
        "buildings": 0.463,
        "transport": 0.0541
      },
      "proxyIndex": {
        "power": 0.854,
        "industrial": 0.946,
        "buildings": 2.773,
        "transport": 0.799
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-02",
      "gasYear": "2019/20",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 27.247,
      "sectors": {
        "power": 5.561,
        "industrial": 7.947,
        "buildings": 11.955,
        "transport": 1.784
      },
      "shares": {
        "power": 0.2041,
        "industrial": 0.2917,
        "buildings": 0.4388,
        "transport": 0.0655
      },
      "proxyIndex": {
        "power": 0.996,
        "industrial": 0.646,
        "buildings": 2.107,
        "transport": 0.775
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-03",
      "gasYear": "2019/20",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 26.018,
      "sectors": {
        "power": 4.995,
        "industrial": 11.32,
        "buildings": 7.556,
        "transport": 2.147
      },
      "shares": {
        "power": 0.192,
        "industrial": 0.4351,
        "buildings": 0.2904,
        "transport": 0.0825
      },
      "proxyIndex": {
        "power": 0.916,
        "industrial": 0.941,
        "buildings": 1.363,
        "transport": 0.954
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-04",
      "gasYear": "2019/20",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 26.572,
      "sectors": {
        "power": 5.595,
        "industrial": 14.224,
        "buildings": 4.456,
        "transport": 2.297
      },
      "shares": {
        "power": 0.2105,
        "industrial": 0.5353,
        "buildings": 0.1677,
        "transport": 0.0865
      },
      "proxyIndex": {
        "power": 0.927,
        "industrial": 1.069,
        "buildings": 0.726,
        "transport": 0.923
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-05",
      "gasYear": "2019/20",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 26.571,
      "sectors": {
        "power": 6.421,
        "industrial": 16.454,
        "buildings": 0.97,
        "transport": 2.726
      },
      "shares": {
        "power": 0.2417,
        "industrial": 0.6193,
        "buildings": 0.0365,
        "transport": 0.1026
      },
      "proxyIndex": {
        "power": 0.973,
        "industrial": 1.131,
        "buildings": 0.145,
        "transport": 1.002
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-06",
      "gasYear": "2019/20",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 26.34,
      "sectors": {
        "power": 6.791,
        "industrial": 16.444,
        "buildings": 0.22,
        "transport": 2.885
      },
      "shares": {
        "power": 0.2578,
        "industrial": 0.6243,
        "buildings": 0.0084,
        "transport": 0.1095
      },
      "proxyIndex": {
        "power": 1.003,
        "industrial": 1.102,
        "buildings": 0.032,
        "transport": 1.033
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-07",
      "gasYear": "2019/20",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 24.007,
      "sectors": {
        "power": 6.526,
        "industrial": 14.59,
        "buildings": 0.102,
        "transport": 2.789
      },
      "shares": {
        "power": 0.2718,
        "industrial": 0.6078,
        "buildings": 0.0043,
        "transport": 0.1162
      },
      "proxyIndex": {
        "power": 1.069,
        "industrial": 1.084,
        "buildings": 0.016,
        "transport": 1.107
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-08",
      "gasYear": "2019/20",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 26.758,
      "sectors": {
        "power": 7.711,
        "industrial": 15.895,
        "buildings": 0.162,
        "transport": 2.991
      },
      "shares": {
        "power": 0.2882,
        "industrial": 0.594,
        "buildings": 0.006,
        "transport": 0.1118
      },
      "proxyIndex": {
        "power": 1.177,
        "industrial": 1.101,
        "buildings": 0.024,
        "transport": 1.107
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-09",
      "gasYear": "2019/20",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 26.194,
      "sectors": {
        "power": 6.392,
        "industrial": 15.679,
        "buildings": 0.78,
        "transport": 3.343
      },
      "shares": {
        "power": 0.244,
        "industrial": 0.5986,
        "buildings": 0.0298,
        "transport": 0.1276
      },
      "proxyIndex": {
        "power": 0.98,
        "industrial": 1.091,
        "buildings": 0.118,
        "transport": 1.243
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-10",
      "gasYear": "2020/21",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 26.235,
      "sectors": {
        "power": 5.466,
        "industrial": 14.194,
        "buildings": 4.192,
        "transport": 2.383
      },
      "shares": {
        "power": 0.2084,
        "industrial": 0.541,
        "buildings": 0.1598,
        "transport": 0.0908
      },
      "proxyIndex": {
        "power": 0.933,
        "industrial": 1.099,
        "buildings": 0.704,
        "transport": 0.986
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-11",
      "gasYear": "2020/21",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 29.215,
      "sectors": {
        "power": 5.898,
        "industrial": 12.964,
        "buildings": 8.1,
        "transport": 2.254
      },
      "shares": {
        "power": 0.2019,
        "industrial": 0.4437,
        "buildings": 0.2772,
        "transport": 0.0771
      },
      "proxyIndex": {
        "power": 1.086,
        "industrial": 1.083,
        "buildings": 1.468,
        "transport": 1.006
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2020-12",
      "gasYear": "2020/21",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 34.14,
      "sectors": {
        "power": 6.314,
        "industrial": 11.55,
        "buildings": 14.215,
        "transport": 2.062
      },
      "shares": {
        "power": 0.1849,
        "industrial": 0.3383,
        "buildings": 0.4164,
        "transport": 0.0604
      },
      "proxyIndex": {
        "power": 1.286,
        "industrial": 1.067,
        "buildings": 2.85,
        "transport": 1.019
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-01",
      "gasYear": "2020/21",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 27.289,
      "sectors": {
        "power": 3.848,
        "industrial": 9.677,
        "buildings": 12.092,
        "transport": 1.673
      },
      "shares": {
        "power": 0.141,
        "industrial": 0.3546,
        "buildings": 0.4431,
        "transport": 0.0613
      },
      "proxyIndex": {
        "power": 0.906,
        "industrial": 1.034,
        "buildings": 2.802,
        "transport": 0.955
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-02",
      "gasYear": "2020/21",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 23.008,
      "sectors": {
        "power": 4.023,
        "industrial": 8.192,
        "buildings": 8.855,
        "transport": 1.939
      },
      "shares": {
        "power": 0.1748,
        "industrial": 0.356,
        "buildings": 0.3849,
        "transport": 0.0843
      },
      "proxyIndex": {
        "power": 0.783,
        "industrial": 0.724,
        "buildings": 1.697,
        "transport": 0.916
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-03",
      "gasYear": "2020/21",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 30.4,
      "sectors": {
        "power": 5.697,
        "industrial": 13.959,
        "buildings": 8.262,
        "transport": 2.482
      },
      "shares": {
        "power": 0.1874,
        "industrial": 0.4592,
        "buildings": 0.2718,
        "transport": 0.0816
      },
      "proxyIndex": {
        "power": 0.894,
        "industrial": 0.994,
        "buildings": 1.276,
        "transport": 0.944
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-04",
      "gasYear": "2020/21",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 30.612,
      "sectors": {
        "power": 6.132,
        "industrial": 16.889,
        "buildings": 4.83,
        "transport": 2.76
      },
      "shares": {
        "power": 0.2003,
        "industrial": 0.5517,
        "buildings": 0.1578,
        "transport": 0.0902
      },
      "proxyIndex": {
        "power": 0.82,
        "industrial": 1.024,
        "buildings": 0.635,
        "transport": 0.895
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-05",
      "gasYear": "2020/21",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 30.749,
      "sectors": {
        "power": 6.911,
        "industrial": 19.136,
        "buildings": 1.296,
        "transport": 3.406
      },
      "shares": {
        "power": 0.2247,
        "industrial": 0.6223,
        "buildings": 0.0422,
        "transport": 0.1108
      },
      "proxyIndex": {
        "power": 0.83,
        "industrial": 1.043,
        "buildings": 0.153,
        "transport": 0.992
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-06",
      "gasYear": "2020/21",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 31.074,
      "sectors": {
        "power": 7.816,
        "industrial": 19.379,
        "buildings": 0.29,
        "transport": 3.589
      },
      "shares": {
        "power": 0.2515,
        "industrial": 0.6237,
        "buildings": 0.0093,
        "transport": 0.1155
      },
      "proxyIndex": {
        "power": 0.904,
        "industrial": 1.016,
        "buildings": 0.033,
        "transport": 1.006
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-07",
      "gasYear": "2020/21",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 28.313,
      "sectors": {
        "power": 7.813,
        "industrial": 16.832,
        "buildings": 0.101,
        "transport": 3.568
      },
      "shares": {
        "power": 0.2759,
        "industrial": 0.5945,
        "buildings": 0.0036,
        "transport": 0.126
      },
      "proxyIndex": {
        "power": 0.995,
        "industrial": 0.973,
        "buildings": 0.013,
        "transport": 1.102
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-08",
      "gasYear": "2020/21",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 29.924,
      "sectors": {
        "power": 8.211,
        "industrial": 17.718,
        "buildings": 0.204,
        "transport": 3.791
      },
      "shares": {
        "power": 0.2744,
        "industrial": 0.5921,
        "buildings": 0.0068,
        "transport": 0.1267
      },
      "proxyIndex": {
        "power": 1.004,
        "industrial": 0.983,
        "buildings": 0.025,
        "transport": 1.124
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-09",
      "gasYear": "2020/21",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 29.894,
      "sectors": {
        "power": 7.626,
        "industrial": 17.743,
        "buildings": 0.702,
        "transport": 3.823
      },
      "shares": {
        "power": 0.2551,
        "industrial": 0.5935,
        "buildings": 0.0235,
        "transport": 0.1279
      },
      "proxyIndex": {
        "power": 0.888,
        "industrial": 0.937,
        "buildings": 0.08,
        "transport": 1.08
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-10",
      "gasYear": "2021/22",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 29.083,
      "sectors": {
        "power": 6.027,
        "industrial": 14.594,
        "buildings": 5.129,
        "transport": 3.333
      },
      "shares": {
        "power": 0.2072,
        "industrial": 0.5018,
        "buildings": 0.1764,
        "transport": 0.1146
      },
      "proxyIndex": {
        "power": 0.854,
        "industrial": 0.938,
        "buildings": 0.715,
        "transport": 1.145
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-11",
      "gasYear": "2021/22",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 32.323,
      "sectors": {
        "power": 5.966,
        "industrial": 13.231,
        "buildings": 9.922,
        "transport": 3.204
      },
      "shares": {
        "power": 0.1846,
        "industrial": 0.4093,
        "buildings": 0.307,
        "transport": 0.0991
      },
      "proxyIndex": {
        "power": 0.943,
        "industrial": 0.948,
        "buildings": 1.543,
        "transport": 1.228
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2021-12",
      "gasYear": "2021/22",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 35.117,
      "sectors": {
        "power": 6.118,
        "industrial": 12.134,
        "buildings": 14.126,
        "transport": 2.738
      },
      "shares": {
        "power": 0.1742,
        "industrial": 0.3455,
        "buildings": 0.4023,
        "transport": 0.078
      },
      "proxyIndex": {
        "power": 1.125,
        "industrial": 1.012,
        "buildings": 2.555,
        "transport": 1.221
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-01",
      "gasYear": "2021/22",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 27.167,
      "sectors": {
        "power": 5.491,
        "industrial": 8.258,
        "buildings": 11.647,
        "transport": 1.772
      },
      "shares": {
        "power": 0.2021,
        "industrial": 0.304,
        "buildings": 0.4287,
        "transport": 0.0652
      },
      "proxyIndex": {
        "power": 1.404,
        "industrial": 0.958,
        "buildings": 2.931,
        "transport": 1.099
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-02",
      "gasYear": "2021/22",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 23.907,
      "sectors": {
        "power": 4.468,
        "industrial": 6.958,
        "buildings": 10.585,
        "transport": 1.896
      },
      "shares": {
        "power": 0.1869,
        "industrial": 0.2911,
        "buildings": 0.4427,
        "transport": 0.0793
      },
      "proxyIndex": {
        "power": 1.053,
        "industrial": 0.744,
        "buildings": 2.454,
        "transport": 1.083
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-03",
      "gasYear": "2021/22",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 30.583,
      "sectors": {
        "power": 6.846,
        "industrial": 13.664,
        "buildings": 7.378,
        "transport": 2.695
      },
      "shares": {
        "power": 0.2239,
        "industrial": 0.4468,
        "buildings": 0.2412,
        "transport": 0.0881
      },
      "proxyIndex": {
        "power": 1.132,
        "industrial": 1.025,
        "buildings": 1.2,
        "transport": 1.08
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-04",
      "gasYear": "2021/22",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 28.697,
      "sectors": {
        "power": 6.639,
        "industrial": 15.608,
        "buildings": 3.805,
        "transport": 2.645
      },
      "shares": {
        "power": 0.2314,
        "industrial": 0.5439,
        "buildings": 0.1326,
        "transport": 0.0922
      },
      "proxyIndex": {
        "power": 0.96,
        "industrial": 1.023,
        "buildings": 0.541,
        "transport": 0.927
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-05",
      "gasYear": "2021/22",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 29.979,
      "sectors": {
        "power": 7.378,
        "industrial": 17.937,
        "buildings": 1.608,
        "transport": 3.057
      },
      "shares": {
        "power": 0.2461,
        "industrial": 0.5983,
        "buildings": 0.0536,
        "transport": 0.102
      },
      "proxyIndex": {
        "power": 0.971,
        "industrial": 1.071,
        "buildings": 0.208,
        "transport": 0.975
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-06",
      "gasYear": "2021/22",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 29.044,
      "sectors": {
        "power": 8.194,
        "industrial": 17.651,
        "buildings": 0.215,
        "transport": 2.985
      },
      "shares": {
        "power": 0.2821,
        "industrial": 0.6077,
        "buildings": 0.0074,
        "transport": 0.1028
      },
      "proxyIndex": {
        "power": 1.082,
        "industrial": 1.057,
        "buildings": 0.028,
        "transport": 0.956
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-07",
      "gasYear": "2021/22",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 28.659,
      "sectors": {
        "power": 9.336,
        "industrial": 16.38,
        "buildings": 0.097,
        "transport": 2.847
      },
      "shares": {
        "power": 0.3257,
        "industrial": 0.5716,
        "buildings": 0.0034,
        "transport": 0.0993
      },
      "proxyIndex": {
        "power": 1.266,
        "industrial": 1.008,
        "buildings": 0.013,
        "transport": 0.936
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-08",
      "gasYear": "2021/22",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 28.754,
      "sectors": {
        "power": 9.56,
        "industrial": 16.201,
        "buildings": 0.212,
        "transport": 2.781
      },
      "shares": {
        "power": 0.3325,
        "industrial": 0.5634,
        "buildings": 0.0074,
        "transport": 0.0967
      },
      "proxyIndex": {
        "power": 1.316,
        "industrial": 1.011,
        "buildings": 0.029,
        "transport": 0.928
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-09",
      "gasYear": "2021/22",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 29.871,
      "sectors": {
        "power": 8.008,
        "industrial": 17.909,
        "buildings": 0.721,
        "transport": 3.233
      },
      "shares": {
        "power": 0.2681,
        "industrial": 0.5996,
        "buildings": 0.0242,
        "transport": 0.1082
      },
      "proxyIndex": {
        "power": 1.041,
        "industrial": 1.057,
        "buildings": 0.092,
        "transport": 1.02
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-10",
      "gasYear": "2022/23",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 28.469,
      "sectors": {
        "power": 6.211,
        "industrial": 14.876,
        "buildings": 4.423,
        "transport": 2.959
      },
      "shares": {
        "power": 0.2182,
        "industrial": 0.5225,
        "buildings": 0.1554,
        "transport": 0.1039
      },
      "proxyIndex": {
        "power": 0.952,
        "industrial": 1.035,
        "buildings": 0.667,
        "transport": 1.1
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-11",
      "gasYear": "2022/23",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 32.804,
      "sectors": {
        "power": 6.661,
        "industrial": 14.791,
        "buildings": 8.512,
        "transport": 2.841
      },
      "shares": {
        "power": 0.203,
        "industrial": 0.4509,
        "buildings": 0.2595,
        "transport": 0.0866
      },
      "proxyIndex": {
        "power": 0.997,
        "industrial": 1.004,
        "buildings": 1.253,
        "transport": 1.031
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2022-12",
      "gasYear": "2022/23",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 34.362,
      "sectors": {
        "power": 5.898,
        "industrial": 11.423,
        "buildings": 14.905,
        "transport": 2.136
      },
      "shares": {
        "power": 0.1716,
        "industrial": 0.3324,
        "buildings": 0.4338,
        "transport": 0.0622
      },
      "proxyIndex": {
        "power": 1.142,
        "industrial": 1.003,
        "buildings": 2.839,
        "transport": 1.003
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-01",
      "gasYear": "2022/23",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 26.056,
      "sectors": {
        "power": 4.061,
        "industrial": 8.487,
        "buildings": 11.782,
        "transport": 1.727
      },
      "shares": {
        "power": 0.1558,
        "industrial": 0.3257,
        "buildings": 0.4522,
        "transport": 0.0663
      },
      "proxyIndex": {
        "power": 0.966,
        "industrial": 0.916,
        "buildings": 2.758,
        "transport": 0.996
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-02",
      "gasYear": "2022/23",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 26.056,
      "sectors": {
        "power": 4.993,
        "industrial": 9.18,
        "buildings": 9.94,
        "transport": 1.944
      },
      "shares": {
        "power": 0.1916,
        "industrial": 0.3523,
        "buildings": 0.3815,
        "transport": 0.0746
      },
      "proxyIndex": {
        "power": 1.058,
        "industrial": 0.882,
        "buildings": 2.073,
        "transport": 0.999
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-03",
      "gasYear": "2022/23",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 32.224,
      "sectors": {
        "power": 6.536,
        "industrial": 15.162,
        "buildings": 7.575,
        "transport": 2.951
      },
      "shares": {
        "power": 0.2028,
        "industrial": 0.4705,
        "buildings": 0.2351,
        "transport": 0.0916
      },
      "proxyIndex": {
        "power": 1.036,
        "industrial": 1.091,
        "buildings": 1.182,
        "transport": 1.135
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-04",
      "gasYear": "2022/23",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 31.134,
      "sectors": {
        "power": 6.558,
        "industrial": 16.796,
        "buildings": 4.39,
        "transport": 3.39
      },
      "shares": {
        "power": 0.2107,
        "industrial": 0.5395,
        "buildings": 0.141,
        "transport": 0.1089
      },
      "proxyIndex": {
        "power": 0.899,
        "industrial": 1.045,
        "buildings": 0.592,
        "transport": 1.127
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-05",
      "gasYear": "2022/23",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 33.436,
      "sectors": {
        "power": 8.079,
        "industrial": 20.042,
        "buildings": 1.355,
        "transport": 3.96
      },
      "shares": {
        "power": 0.2416,
        "industrial": 0.5994,
        "buildings": 0.0405,
        "transport": 0.1184
      },
      "proxyIndex": {
        "power": 0.932,
        "industrial": 1.049,
        "buildings": 0.154,
        "transport": 1.108
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-06",
      "gasYear": "2022/23",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 32.304,
      "sectors": {
        "power": 8.736,
        "industrial": 19.431,
        "buildings": 0.287,
        "transport": 3.85
      },
      "shares": {
        "power": 0.2704,
        "industrial": 0.6015,
        "buildings": 0.0089,
        "transport": 0.1192
      },
      "proxyIndex": {
        "power": 1.027,
        "industrial": 1.036,
        "buildings": 0.033,
        "transport": 1.097
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-07",
      "gasYear": "2022/23",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 32.221,
      "sectors": {
        "power": 9.694,
        "industrial": 18.729,
        "buildings": 0.119,
        "transport": 3.679
      },
      "shares": {
        "power": 0.3008,
        "industrial": 0.5813,
        "buildings": 0.0037,
        "transport": 0.1142
      },
      "proxyIndex": {
        "power": 1.169,
        "industrial": 1.025,
        "buildings": 0.014,
        "transport": 1.076
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-08",
      "gasYear": "2022/23",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 32.709,
      "sectors": {
        "power": 9.766,
        "industrial": 19.047,
        "buildings": 0.177,
        "transport": 3.719
      },
      "shares": {
        "power": 0.2986,
        "industrial": 0.5823,
        "buildings": 0.0054,
        "transport": 0.1137
      },
      "proxyIndex": {
        "power": 1.157,
        "industrial": 1.024,
        "buildings": 0.021,
        "transport": 1.069
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-09",
      "gasYear": "2022/23",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 31.558,
      "sectors": {
        "power": 8.241,
        "industrial": 18.903,
        "buildings": 0.714,
        "transport": 3.7
      },
      "shares": {
        "power": 0.2611,
        "industrial": 0.599,
        "buildings": 0.0226,
        "transport": 0.1173
      },
      "proxyIndex": {
        "power": 0.98,
        "industrial": 1.019,
        "buildings": 0.084,
        "transport": 1.067
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-10",
      "gasYear": "2023/24",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 30.8,
      "sectors": {
        "power": 6.963,
        "industrial": 17.103,
        "buildings": 3.306,
        "transport": 3.428
      },
      "shares": {
        "power": 0.2261,
        "industrial": 0.5553,
        "buildings": 0.1073,
        "transport": 0.1113
      },
      "proxyIndex": {
        "power": 0.914,
        "industrial": 1.019,
        "buildings": 0.427,
        "transport": 1.092
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-11",
      "gasYear": "2023/24",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 34.608,
      "sectors": {
        "power": 6.623,
        "industrial": 14.618,
        "buildings": 10.676,
        "transport": 2.691
      },
      "shares": {
        "power": 0.1914,
        "industrial": 0.4224,
        "buildings": 0.3085,
        "transport": 0.0778
      },
      "proxyIndex": {
        "power": 0.989,
        "industrial": 0.99,
        "buildings": 1.569,
        "transport": 0.974
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2023-12",
      "gasYear": "2023/24",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 37.795,
      "sectors": {
        "power": 6.811,
        "industrial": 12.088,
        "buildings": 16.478,
        "transport": 2.419
      },
      "shares": {
        "power": 0.1802,
        "industrial": 0.3198,
        "buildings": 0.436,
        "transport": 0.064
      },
      "proxyIndex": {
        "power": 1.183,
        "industrial": 0.952,
        "buildings": 2.815,
        "transport": 1.018
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-01",
      "gasYear": "2023/24",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 31.697,
      "sectors": {
        "power": 5.308,
        "industrial": 10.421,
        "buildings": 13.95,
        "transport": 2.018
      },
      "shares": {
        "power": 0.1675,
        "industrial": 0.3288,
        "buildings": 0.4401,
        "transport": 0.0637
      },
      "proxyIndex": {
        "power": 1.123,
        "industrial": 1.001,
        "buildings": 2.906,
        "transport": 1.036
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-02",
      "gasYear": "2023/24",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 26.913,
      "sectors": {
        "power": 4.567,
        "industrial": 8.277,
        "buildings": 12.219,
        "transport": 1.849
      },
      "shares": {
        "power": 0.1697,
        "industrial": 0.3076,
        "buildings": 0.454,
        "transport": 0.0687
      },
      "proxyIndex": {
        "power": 0.924,
        "industrial": 0.76,
        "buildings": 2.433,
        "transport": 0.908
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-03",
      "gasYear": "2023/24",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 36.312,
      "sectors": {
        "power": 7.088,
        "industrial": 16.219,
        "buildings": 9.96,
        "transport": 3.045
      },
      "shares": {
        "power": 0.1952,
        "industrial": 0.4467,
        "buildings": 0.2743,
        "transport": 0.0839
      },
      "proxyIndex": {
        "power": 0.974,
        "industrial": 1.011,
        "buildings": 1.347,
        "transport": 1.015
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-04",
      "gasYear": "2023/24",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 33.705,
      "sectors": {
        "power": 7.506,
        "industrial": 19.278,
        "buildings": 3.372,
        "transport": 3.549
      },
      "shares": {
        "power": 0.2227,
        "industrial": 0.5719,
        "buildings": 0.1001,
        "transport": 0.1053
      },
      "proxyIndex": {
        "power": 0.858,
        "industrial": 1,
        "buildings": 0.379,
        "transport": 0.984
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-05",
      "gasYear": "2023/24",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 35.617,
      "sectors": {
        "power": 8.287,
        "industrial": 22.204,
        "buildings": 1.222,
        "transport": 3.904
      },
      "shares": {
        "power": 0.2327,
        "industrial": 0.6234,
        "buildings": 0.0343,
        "transport": 0.1096
      },
      "proxyIndex": {
        "power": 0.857,
        "industrial": 1.042,
        "buildings": 0.124,
        "transport": 0.979
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-06",
      "gasYear": "2023/24",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 34.264,
      "sectors": {
        "power": 8.877,
        "industrial": 21.312,
        "buildings": 0.313,
        "transport": 3.762
      },
      "shares": {
        "power": 0.2591,
        "industrial": 0.622,
        "buildings": 0.0091,
        "transport": 0.1098
      },
      "proxyIndex": {
        "power": 0.933,
        "industrial": 1.016,
        "buildings": 0.032,
        "transport": 0.959
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-07",
      "gasYear": "2023/24",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 34.61,
      "sectors": {
        "power": 10.245,
        "industrial": 20.497,
        "buildings": 0.115,
        "transport": 3.752
      },
      "shares": {
        "power": 0.296,
        "industrial": 0.5922,
        "buildings": 0.0033,
        "transport": 0.1084
      },
      "proxyIndex": {
        "power": 1.096,
        "industrial": 0.994,
        "buildings": 0.012,
        "transport": 0.973
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-08",
      "gasYear": "2023/24",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 35.95,
      "sectors": {
        "power": 11.125,
        "industrial": 20.899,
        "buildings": 0.125,
        "transport": 3.8
      },
      "shares": {
        "power": 0.3095,
        "industrial": 0.5813,
        "buildings": 0.0035,
        "transport": 0.1057
      },
      "proxyIndex": {
        "power": 1.165,
        "industrial": 0.993,
        "buildings": 0.013,
        "transport": 0.965
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-09",
      "gasYear": "2023/24",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 35.586,
      "sectors": {
        "power": 9.683,
        "industrial": 21.005,
        "buildings": 0.972,
        "transport": 3.926
      },
      "shares": {
        "power": 0.2721,
        "industrial": 0.5903,
        "buildings": 0.0273,
        "transport": 0.1103
      },
      "proxyIndex": {
        "power": 1.018,
        "industrial": 1.002,
        "buildings": 0.101,
        "transport": 1.001
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-10",
      "gasYear": "2024/25",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 35.072,
      "sectors": {
        "power": 7.648,
        "industrial": 19.307,
        "buildings": 4.553,
        "transport": 3.565
      },
      "shares": {
        "power": 0.2181,
        "industrial": 0.5505,
        "buildings": 0.1298,
        "transport": 0.1016
      },
      "proxyIndex": {
        "power": 0.901,
        "industrial": 1.032,
        "buildings": 0.528,
        "transport": 1.018
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-11",
      "gasYear": "2024/25",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 34.954,
      "sectors": {
        "power": 6.94,
        "industrial": 15.903,
        "buildings": 9.312,
        "transport": 2.8
      },
      "shares": {
        "power": 0.1985,
        "industrial": 0.455,
        "buildings": 0.2664,
        "transport": 0.0801
      },
      "proxyIndex": {
        "power": 0.979,
        "industrial": 1.018,
        "buildings": 1.292,
        "transport": 0.957
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2024-12",
      "gasYear": "2024/25",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 37.549,
      "sectors": {
        "power": 6.484,
        "industrial": 12.887,
        "buildings": 15.797,
        "transport": 2.382
      },
      "shares": {
        "power": 0.1727,
        "industrial": 0.3432,
        "buildings": 0.4207,
        "transport": 0.0634
      },
      "proxyIndex": {
        "power": 1.133,
        "industrial": 1.021,
        "buildings": 2.715,
        "transport": 1.009
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-01",
      "gasYear": "2024/25",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 28.835,
      "sectors": {
        "power": 4.381,
        "industrial": 9.858,
        "buildings": 12.742,
        "transport": 1.854
      },
      "shares": {
        "power": 0.1519,
        "industrial": 0.3419,
        "buildings": 0.4419,
        "transport": 0.0643
      },
      "proxyIndex": {
        "power": 0.978,
        "industrial": 0.999,
        "buildings": 2.8,
        "transport": 1.004
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-02",
      "gasYear": "2024/25",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 27.069,
      "sectors": {
        "power": 4.642,
        "industrial": 8.998,
        "buildings": 11.637,
        "transport": 1.792
      },
      "shares": {
        "power": 0.1715,
        "industrial": 0.3324,
        "buildings": 0.4299,
        "transport": 0.0662
      },
      "proxyIndex": {
        "power": 0.976,
        "industrial": 0.858,
        "buildings": 2.406,
        "transport": 0.913
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-03",
      "gasYear": "2024/25",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 34.666,
      "sectors": {
        "power": 6.328,
        "industrial": 15.395,
        "buildings": 10.261,
        "transport": 2.682
      },
      "shares": {
        "power": 0.1826,
        "industrial": 0.4441,
        "buildings": 0.296,
        "transport": 0.0774
      },
      "proxyIndex": {
        "power": 0.962,
        "industrial": 1.062,
        "buildings": 1.535,
        "transport": 0.988
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-04",
      "gasYear": "2024/25",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 34.371,
      "sectors": {
        "power": 7.441,
        "industrial": 19.845,
        "buildings": 3.705,
        "transport": 3.379
      },
      "shares": {
        "power": 0.2165,
        "industrial": 0.5774,
        "buildings": 0.1078,
        "transport": 0.0983
      },
      "proxyIndex": {
        "power": 0.845,
        "industrial": 1.023,
        "buildings": 0.414,
        "transport": 0.931
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-05",
      "gasYear": "2024/25",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 35.915,
      "sectors": {
        "power": 8.441,
        "industrial": 22.13,
        "buildings": 1.511,
        "transport": 3.833
      },
      "shares": {
        "power": 0.235,
        "industrial": 0.6162,
        "buildings": 0.0421,
        "transport": 0.1067
      },
      "proxyIndex": {
        "power": 0.871,
        "industrial": 1.036,
        "buildings": 0.153,
        "transport": 0.959
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-06",
      "gasYear": "2024/25",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 35.313,
      "sectors": {
        "power": 9.147,
        "industrial": 21.913,
        "buildings": 0.316,
        "transport": 3.938
      },
      "shares": {
        "power": 0.259,
        "industrial": 0.6205,
        "buildings": 0.009,
        "transport": 0.1115
      },
      "proxyIndex": {
        "power": 0.942,
        "industrial": 1.024,
        "buildings": 0.032,
        "transport": 0.984
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-07",
      "gasYear": "2024/25",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 35.843,
      "sectors": {
        "power": 10.8,
        "industrial": 21.032,
        "buildings": 0.111,
        "transport": 3.901
      },
      "shares": {
        "power": 0.3013,
        "industrial": 0.5868,
        "buildings": 0.0031,
        "transport": 0.1088
      },
      "proxyIndex": {
        "power": 1.144,
        "industrial": 1.011,
        "buildings": 0.012,
        "transport": 1.002
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-08",
      "gasYear": "2024/25",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 37.255,
      "sectors": {
        "power": 11.454,
        "industrial": 21.561,
        "buildings": 0.195,
        "transport": 4.045
      },
      "shares": {
        "power": 0.3075,
        "industrial": 0.5787,
        "buildings": 0.0052,
        "transport": 0.1086
      },
      "proxyIndex": {
        "power": 1.19,
        "industrial": 1.016,
        "buildings": 0.02,
        "transport": 1.019
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-09",
      "gasYear": "2024/25",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 35.789,
      "sectors": {
        "power": 9.475,
        "industrial": 21.23,
        "buildings": 0.911,
        "transport": 4.173
      },
      "shares": {
        "power": 0.2647,
        "industrial": 0.5932,
        "buildings": 0.0255,
        "transport": 0.1166
      },
      "proxyIndex": {
        "power": 0.98,
        "industrial": 0.996,
        "buildings": 0.093,
        "transport": 1.047
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-10",
      "gasYear": "2025/26",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 35.338,
      "sectors": {
        "power": 8,
        "industrial": 17.918,
        "buildings": 5.865,
        "transport": 3.556
      },
      "shares": {
        "power": 0.2264,
        "industrial": 0.507,
        "buildings": 0.166,
        "transport": 0.1006
      },
      "proxyIndex": {
        "power": 0.976,
        "industrial": 0.992,
        "buildings": 0.704,
        "transport": 1.052
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-11",
      "gasYear": "2025/26",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 38.13,
      "sectors": {
        "power": 7.262,
        "industrial": 16.654,
        "buildings": 11.015,
        "transport": 3.199
      },
      "shares": {
        "power": 0.1905,
        "industrial": 0.4368,
        "buildings": 0.2889,
        "transport": 0.0839
      },
      "proxyIndex": {
        "power": 0.949,
        "industrial": 0.987,
        "buildings": 1.416,
        "transport": 1.014
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2025-12",
      "gasYear": "2025/26",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 39.944,
      "sectors": {
        "power": 7.31,
        "industrial": 14.476,
        "buildings": 15.335,
        "transport": 2.824
      },
      "shares": {
        "power": 0.183,
        "industrial": 0.3624,
        "buildings": 0.3839,
        "transport": 0.0707
      },
      "proxyIndex": {
        "power": 1.115,
        "industrial": 1.001,
        "buildings": 2.301,
        "transport": 1.044
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2026-01",
      "gasYear": "2025/26",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 30.212,
      "sectors": {
        "power": 5.006,
        "industrial": 10.913,
        "buildings": 12.362,
        "transport": 1.93
      },
      "shares": {
        "power": 0.1657,
        "industrial": 0.3612,
        "buildings": 0.4092,
        "transport": 0.0639
      },
      "proxyIndex": {
        "power": 1.124,
        "industrial": 1.112,
        "buildings": 2.731,
        "transport": 1.051
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2026-02",
      "gasYear": "2025/26",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 24.88,
      "sectors": {
        "power": 4.495,
        "industrial": 8.514,
        "buildings": 9.836,
        "transport": 2.036
      },
      "shares": {
        "power": 0.1807,
        "industrial": 0.3422,
        "buildings": 0.3953,
        "transport": 0.0818
      },
      "proxyIndex": {
        "power": 0.865,
        "industrial": 0.743,
        "buildings": 1.862,
        "transport": 0.95
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    },
    {
      "period": "2026-03",
      "gasYear": "2025/26",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 33.554,
      "sectors": {
        "power": 6.573,
        "industrial": 14.878,
        "buildings": 9.293,
        "transport": 2.81
      },
      "shares": {
        "power": 0.1959,
        "industrial": 0.4434,
        "buildings": 0.277,
        "transport": 0.0838
      },
      "proxyIndex": {
        "power": 0.999,
        "industrial": 1.026,
        "buildings": 1.39,
        "transport": 1.036
      },
      "source": {
        "controlTotal": "JODI TOTDEMC apparent demand; China stock change is not separated",
        "monthlyShape": "Carbon Monitor China sector proxy indexes",
        "annualAnchor": "IEA 2023 China gas-balance sector shares"
      }
    }
  ],
  "proxyMonthly": [
    {
      "period": "2019-01",
      "raw": {
        "power": 378.306,
        "industrial": 432.581,
        "buildings": 152.485,
        "transport": 81.397
      },
      "index": {
        "power": 1.049,
        "industrial": 0.989,
        "buildings": 2.878,
        "transport": 0.979
      }
    },
    {
      "period": "2019-02",
      "raw": {
        "power": 292.328,
        "industrial": 314.271,
        "buildings": 123.883,
        "transport": 72.354
      },
      "index": {
        "power": 0.944,
        "industrial": 0.801,
        "buildings": 2.25,
        "transport": 0.928
      }
    },
    {
      "period": "2019-03",
      "raw": {
        "power": 328.507,
        "industrial": 437.032,
        "buildings": 72.507,
        "transport": 73.276
      },
      "index": {
        "power": 0.985,
        "industrial": 1.049,
        "buildings": 1.333,
        "transport": 1.003
      }
    },
    {
      "period": "2019-04",
      "raw": {
        "power": 305.758,
        "industrial": 457.272,
        "buildings": 29.518,
        "transport": 69.319
      },
      "index": {
        "power": 0.865,
        "industrial": 1.036,
        "buildings": 0.521,
        "transport": 0.95
      }
    },
    {
      "period": "2019-05",
      "raw": {
        "power": 302.372,
        "industrial": 471.484,
        "buildings": 8.517,
        "transport": 78.108
      },
      "index": {
        "power": 0.881,
        "industrial": 1.06,
        "buildings": 0.161,
        "transport": 0.98
      }
    },
    {
      "period": "2019-06",
      "raw": {
        "power": 320.639,
        "industrial": 461.756,
        "buildings": 1.627,
        "transport": 75.873
      },
      "index": {
        "power": 0.966,
        "industrial": 1.04,
        "buildings": 0.032,
        "transport": 0.98
      }
    },
    {
      "period": "2019-07",
      "raw": {
        "power": 361.652,
        "industrial": 455.157,
        "buildings": 0.988,
        "transport": 71.933
      },
      "index": {
        "power": 1.128,
        "industrial": 1.011,
        "buildings": 0.013,
        "transport": 0.998
      }
    },
    {
      "period": "2019-08",
      "raw": {
        "power": 370.428,
        "industrial": 462.793,
        "buildings": 1.132,
        "transport": 75.982
      },
      "index": {
        "power": 1.165,
        "industrial": 1.013,
        "buildings": 0.022,
        "transport": 1.003
      }
    },
    {
      "period": "2019-09",
      "raw": {
        "power": 325.604,
        "industrial": 460.991,
        "buildings": 5.18,
        "transport": 76.317
      },
      "index": {
        "power": 0.982,
        "industrial": 1.007,
        "buildings": 0.091,
        "transport": 1.027
      }
    },
    {
      "period": "2019-10",
      "raw": {
        "power": 311.517,
        "industrial": 458.047,
        "buildings": 31.712,
        "transport": 77.627
      },
      "index": {
        "power": 0.945,
        "industrial": 1.038,
        "buildings": 0.742,
        "transport": 1.032
      }
    },
    {
      "period": "2019-11",
      "raw": {
        "power": 341.302,
        "industrial": 461.038,
        "buildings": 76.96,
        "transport": 72.871
      },
      "index": {
        "power": 1.032,
        "industrial": 1.041,
        "buildings": 1.678,
        "transport": 0.972
      }
    },
    {
      "period": "2019-12",
      "raw": {
        "power": 399.458,
        "industrial": 463.764,
        "buildings": 135.058,
        "transport": 74.02
      },
      "index": {
        "power": 1.187,
        "industrial": 1.043,
        "buildings": 2.534,
        "transport": 0.988
      }
    },
    {
      "period": "2020-01",
      "raw": {
        "power": 280.555,
        "industrial": 419.44,
        "buildings": 146.352,
        "transport": 58.331
      },
      "index": {
        "power": 0.854,
        "industrial": 0.946,
        "buildings": 2.773,
        "transport": 0.799
      }
    },
    {
      "period": "2020-02",
      "raw": {
        "power": 330.064,
        "industrial": 284.772,
        "buildings": 108.498,
        "transport": 55.46
      },
      "index": {
        "power": 0.996,
        "industrial": 0.646,
        "buildings": 2.107,
        "transport": 0.775
      }
    },
    {
      "period": "2020-03",
      "raw": {
        "power": 301.435,
        "industrial": 413.396,
        "buildings": 69.894,
        "transport": 67.874
      },
      "index": {
        "power": 0.916,
        "industrial": 0.941,
        "buildings": 1.363,
        "transport": 0.954
      }
    },
    {
      "period": "2020-04",
      "raw": {
        "power": 305.02,
        "industrial": 470.558,
        "buildings": 37.746,
        "transport": 65.333
      },
      "index": {
        "power": 0.927,
        "industrial": 1.069,
        "buildings": 0.726,
        "transport": 0.923
      }
    },
    {
      "period": "2020-05",
      "raw": {
        "power": 321.963,
        "industrial": 500.919,
        "buildings": 7.509,
        "transport": 70.28
      },
      "index": {
        "power": 0.973,
        "industrial": 1.131,
        "buildings": 0.145,
        "transport": 1.002
      }
    },
    {
      "period": "2020-06",
      "raw": {
        "power": 332.859,
        "industrial": 490.531,
        "buildings": 1.659,
        "transport": 72.18
      },
      "index": {
        "power": 1.003,
        "industrial": 1.102,
        "buildings": 0.032,
        "transport": 1.033
      }
    },
    {
      "period": "2020-07",
      "raw": {
        "power": 353.923,
        "industrial": 485.23,
        "buildings": 0.854,
        "transport": 77.911
      },
      "index": {
        "power": 1.069,
        "industrial": 1.084,
        "buildings": 0.016,
        "transport": 1.107
      }
    },
    {
      "period": "2020-08",
      "raw": {
        "power": 392.005,
        "industrial": 495.821,
        "buildings": 1.261,
        "transport": 78.082
      },
      "index": {
        "power": 1.177,
        "industrial": 1.101,
        "buildings": 0.024,
        "transport": 1.107
      }
    },
    {
      "period": "2020-09",
      "raw": {
        "power": 326.537,
        "industrial": 494.382,
        "buildings": 6.12,
        "transport": 89.001
      },
      "index": {
        "power": 0.98,
        "industrial": 1.091,
        "buildings": 0.118,
        "transport": 1.243
      }
    },
    {
      "period": "2020-10",
      "raw": {
        "power": 310.627,
        "industrial": 502.008,
        "buildings": 36.889,
        "transport": 69.954
      },
      "index": {
        "power": 0.933,
        "industrial": 1.099,
        "buildings": 0.704,
        "transport": 0.986
      }
    },
    {
      "period": "2020-11",
      "raw": {
        "power": 363.666,
        "industrial": 498.051,
        "buildings": 76.898,
        "transport": 71.245
      },
      "index": {
        "power": 1.086,
        "industrial": 1.083,
        "buildings": 1.468,
        "transport": 1.006
      }
    },
    {
      "period": "2020-12",
      "raw": {
        "power": 434.407,
        "industrial": 493.56,
        "buildings": 153.738,
        "transport": 71.946
      },
      "index": {
        "power": 1.286,
        "industrial": 1.067,
        "buildings": 2.85,
        "transport": 1.019
      }
    },
    {
      "period": "2021-01",
      "raw": {
        "power": 308.115,
        "industrial": 483.452,
        "buildings": 152.611,
        "transport": 68.238
      },
      "index": {
        "power": 0.906,
        "industrial": 1.034,
        "buildings": 2.802,
        "transport": 0.955
      }
    },
    {
      "period": "2021-02",
      "raw": {
        "power": 261.897,
        "industrial": 341.9,
        "buildings": 89.774,
        "transport": 66.246
      },
      "index": {
        "power": 0.783,
        "industrial": 0.724,
        "buildings": 1.697,
        "transport": 0.916
      }
    },
    {
      "period": "2021-03",
      "raw": {
        "power": 298.772,
        "industrial": 474.671,
        "buildings": 67.238,
        "transport": 68.38
      },
      "index": {
        "power": 0.894,
        "industrial": 0.994,
        "buildings": 1.276,
        "transport": 0.944
      }
    },
    {
      "period": "2021-04",
      "raw": {
        "power": 271.638,
        "industrial": 490.927,
        "buildings": 33.241,
        "transport": 64.739
      },
      "index": {
        "power": 0.82,
        "industrial": 1.024,
        "buildings": 0.635,
        "transport": 0.895
      }
    },
    {
      "period": "2021-05",
      "raw": {
        "power": 271.697,
        "industrial": 499.905,
        "buildings": 8.026,
        "transport": 71.943
      },
      "index": {
        "power": 0.83,
        "industrial": 1.043,
        "buildings": 0.153,
        "transport": 0.992
      }
    },
    {
      "period": "2021-06",
      "raw": {
        "power": 292.58,
        "industrial": 486.711,
        "buildings": 1.729,
        "transport": 72.985
      },
      "index": {
        "power": 0.904,
        "industrial": 1.016,
        "buildings": 0.033,
        "transport": 1.006
      }
    },
    {
      "period": "2021-07",
      "raw": {
        "power": 319.438,
        "industrial": 464.124,
        "buildings": 0.661,
        "transport": 80.166
      },
      "index": {
        "power": 0.995,
        "industrial": 0.973,
        "buildings": 0.013,
        "transport": 1.102
      }
    },
    {
      "period": "2021-08",
      "raw": {
        "power": 315.914,
        "industrial": 466.6,
        "buildings": 1.287,
        "transport": 82.152
      },
      "index": {
        "power": 1.004,
        "industrial": 0.983,
        "buildings": 0.025,
        "transport": 1.124
      }
    },
    {
      "period": "2021-09",
      "raw": {
        "power": 275.652,
        "industrial": 440.789,
        "buildings": 4.196,
        "transport": 77.911
      },
      "index": {
        "power": 0.888,
        "industrial": 0.937,
        "buildings": 0.08,
        "transport": 1.08
      }
    },
    {
      "period": "2021-10",
      "raw": {
        "power": 261.483,
        "industrial": 435.832,
        "buildings": 37.341,
        "transport": 83.945
      },
      "index": {
        "power": 0.854,
        "industrial": 0.938,
        "buildings": 0.715,
        "transport": 1.145
      }
    },
    {
      "period": "2021-11",
      "raw": {
        "power": 282.306,
        "industrial": 435.832,
        "buildings": 81.12,
        "transport": 92.165
      },
      "index": {
        "power": 0.943,
        "industrial": 0.948,
        "buildings": 1.543,
        "transport": 1.228
      }
    },
    {
      "period": "2021-12",
      "raw": {
        "power": 326.709,
        "industrial": 462.314,
        "buildings": 129.096,
        "transport": 93.849
      },
      "index": {
        "power": 1.125,
        "industrial": 1.012,
        "buildings": 2.555,
        "transport": 1.221
      }
    },
    {
      "period": "2022-01",
      "raw": {
        "power": 421.153,
        "industrial": 433.797,
        "buildings": 146.629,
        "transport": 86.127
      },
      "index": {
        "power": 1.404,
        "industrial": 0.958,
        "buildings": 2.931,
        "transport": 1.099
      }
    },
    {
      "period": "2022-02",
      "raw": {
        "power": 320.879,
        "industrial": 336.387,
        "buildings": 131.243,
        "transport": 86.763
      },
      "index": {
        "power": 1.053,
        "industrial": 0.744,
        "buildings": 2.454,
        "transport": 1.083
      }
    },
    {
      "period": "2022-03",
      "raw": {
        "power": 349.796,
        "industrial": 462.434,
        "buildings": 63.845,
        "transport": 88.325
      },
      "index": {
        "power": 1.132,
        "industrial": 1.025,
        "buildings": 1.2,
        "transport": 1.08
      }
    },
    {
      "period": "2022-04",
      "raw": {
        "power": 298.793,
        "industrial": 459.157,
        "buildings": 28.584,
        "transport": 76.706
      },
      "index": {
        "power": 0.96,
        "industrial": 1.023,
        "buildings": 0.541,
        "transport": 0.927
      }
    },
    {
      "period": "2022-05",
      "raw": {
        "power": 305.005,
        "industrial": 478.535,
        "buildings": 11.047,
        "transport": 81.487
      },
      "index": {
        "power": 0.971,
        "industrial": 1.071,
        "buildings": 0.208,
        "transport": 0.975
      }
    },
    {
      "period": "2022-06",
      "raw": {
        "power": 344.592,
        "industrial": 471.158,
        "buildings": 1.483,
        "transport": 80.436
      },
      "index": {
        "power": 1.082,
        "industrial": 1.057,
        "buildings": 0.028,
        "transport": 0.956
      }
    },
    {
      "period": "2022-07",
      "raw": {
        "power": 413.145,
        "industrial": 447.728,
        "buildings": 0.684,
        "transport": 78.682
      },
      "index": {
        "power": 1.266,
        "industrial": 1.008,
        "buildings": 0.013,
        "transport": 0.936
      }
    },
    {
      "period": "2022-08",
      "raw": {
        "power": 443.233,
        "industrial": 447.717,
        "buildings": 1.525,
        "transport": 77.663
      },
      "index": {
        "power": 1.316,
        "industrial": 1.011,
        "buildings": 0.029,
        "transport": 0.928
      }
    },
    {
      "period": "2022-09",
      "raw": {
        "power": 358.019,
        "industrial": 470.348,
        "buildings": 4.905,
        "transport": 85.992
      },
      "index": {
        "power": 1.041,
        "industrial": 1.057,
        "buildings": 0.092,
        "transport": 1.02
      }
    },
    {
      "period": "2022-10",
      "raw": {
        "power": 332.982,
        "industrial": 462.819,
        "buildings": 35.332,
        "transport": 93.669
      },
      "index": {
        "power": 0.952,
        "industrial": 1.035,
        "buildings": 0.667,
        "transport": 1.1
      }
    },
    {
      "period": "2022-11",
      "raw": {
        "power": 354.565,
        "industrial": 450.415,
        "buildings": 64.661,
        "transport": 87.358
      },
      "index": {
        "power": 0.997,
        "industrial": 1.004,
        "buildings": 1.253,
        "transport": 1.031
      }
    },
    {
      "period": "2022-12",
      "raw": {
        "power": 414.435,
        "industrial": 448.818,
        "buildings": 151.828,
        "transport": 84.17
      },
      "index": {
        "power": 1.142,
        "industrial": 1.003,
        "buildings": 2.839,
        "transport": 1.003
      }
    },
    {
      "period": "2023-01",
      "raw": {
        "power": 344.521,
        "industrial": 407.812,
        "buildings": 147.759,
        "transport": 83.383
      },
      "index": {
        "power": 0.966,
        "industrial": 0.916,
        "buildings": 2.758,
        "transport": 0.996
      }
    },
    {
      "period": "2023-02",
      "raw": {
        "power": 382.801,
        "industrial": 397.427,
        "buildings": 106.823,
        "transport": 83.328
      },
      "index": {
        "power": 1.058,
        "industrial": 0.882,
        "buildings": 2.073,
        "transport": 0.999
      }
    },
    {
      "period": "2023-03",
      "raw": {
        "power": 377.301,
        "industrial": 494.005,
        "buildings": 60.593,
        "transport": 95.32
      },
      "index": {
        "power": 1.036,
        "industrial": 1.091,
        "buildings": 1.182,
        "transport": 1.135
      }
    },
    {
      "period": "2023-04",
      "raw": {
        "power": 329.805,
        "industrial": 474.694,
        "buildings": 30.464,
        "transport": 96.574
      },
      "index": {
        "power": 0.899,
        "industrial": 1.045,
        "buildings": 0.592,
        "transport": 1.127
      }
    },
    {
      "period": "2023-05",
      "raw": {
        "power": 344.762,
        "industrial": 476.191,
        "buildings": 7.867,
        "transport": 96.249
      },
      "index": {
        "power": 0.932,
        "industrial": 1.049,
        "buildings": 0.154,
        "transport": 1.108
      }
    },
    {
      "period": "2023-06",
      "raw": {
        "power": 383.187,
        "industrial": 470.352,
        "buildings": 1.698,
        "transport": 96.856
      },
      "index": {
        "power": 1.027,
        "industrial": 1.036,
        "buildings": 0.033,
        "transport": 1.097
      }
    },
    {
      "period": "2023-07",
      "raw": {
        "power": 438.998,
        "industrial": 467.059,
        "buildings": 0.725,
        "transport": 96.615
      },
      "index": {
        "power": 1.169,
        "industrial": 1.025,
        "buildings": 0.014,
        "transport": 1.076
      }
    },
    {
      "period": "2023-08",
      "raw": {
        "power": 433.469,
        "industrial": 468.306,
        "buildings": 1.054,
        "transport": 97.698
      },
      "index": {
        "power": 1.157,
        "industrial": 1.024,
        "buildings": 0.021,
        "transport": 1.069
      }
    },
    {
      "period": "2023-09",
      "raw": {
        "power": 367.697,
        "industrial": 465.812,
        "buildings": 4.266,
        "transport": 98.646
      },
      "index": {
        "power": 0.98,
        "industrial": 1.019,
        "buildings": 0.084,
        "transport": 1.067
      }
    },
    {
      "period": "2023-10",
      "raw": {
        "power": 344.099,
        "industrial": 465.863,
        "buildings": 21.326,
        "transport": 101.693
      },
      "index": {
        "power": 0.914,
        "industrial": 1.019,
        "buildings": 0.427,
        "transport": 1.092
      }
    },
    {
      "period": "2023-11",
      "raw": {
        "power": 373.701,
        "industrial": 452.931,
        "buildings": 80.354,
        "transport": 91.063
      },
      "index": {
        "power": 0.989,
        "industrial": 0.99,
        "buildings": 1.569,
        "transport": 0.974
      }
    },
    {
      "period": "2023-12",
      "raw": {
        "power": 450.437,
        "industrial": 434.398,
        "buildings": 141.9,
        "transport": 96.198
      },
      "index": {
        "power": 1.183,
        "industrial": 0.952,
        "buildings": 2.815,
        "transport": 1.018
      }
    },
    {
      "period": "2024-01",
      "raw": {
        "power": 436.547,
        "industrial": 460.998,
        "buildings": 146.038,
        "transport": 99.202
      },
      "index": {
        "power": 1.123,
        "industrial": 1.001,
        "buildings": 2.906,
        "transport": 1.036
      }
    },
    {
      "period": "2024-02",
      "raw": {
        "power": 357.175,
        "industrial": 346.896,
        "buildings": 126.241,
        "transport": 87.229
      },
      "index": {
        "power": 0.924,
        "industrial": 0.76,
        "buildings": 2.433,
        "transport": 0.908
      }
    },
    {
      "period": "2024-03",
      "raw": {
        "power": 376.332,
        "industrial": 458.584,
        "buildings": 71.049,
        "transport": 97.724
      },
      "index": {
        "power": 0.974,
        "industrial": 1.011,
        "buildings": 1.347,
        "transport": 1.015
      }
    },
    {
      "period": "2024-04",
      "raw": {
        "power": 331.61,
        "industrial": 451.402,
        "buildings": 19.668,
        "transport": 94.569
      },
      "index": {
        "power": 0.858,
        "industrial": 1,
        "buildings": 0.379,
        "transport": 0.984
      }
    },
    {
      "period": "2024-05",
      "raw": {
        "power": 330.161,
        "industrial": 469.81,
        "buildings": 6.434,
        "transport": 93.936
      },
      "index": {
        "power": 0.857,
        "industrial": 1.042,
        "buildings": 0.124,
        "transport": 0.979
      }
    },
    {
      "period": "2024-06",
      "raw": {
        "power": 357.556,
        "industrial": 457.37,
        "buildings": 1.677,
        "transport": 91.593
      },
      "index": {
        "power": 0.933,
        "industrial": 1.016,
        "buildings": 0.032,
        "transport": 0.959
      }
    },
    {
      "period": "2024-07",
      "raw": {
        "power": 417.88,
        "industrial": 445.681,
        "buildings": 0.627,
        "transport": 92.615
      },
      "index": {
        "power": 1.096,
        "industrial": 0.994,
        "buildings": 0.012,
        "transport": 0.973
      }
    },
    {
      "period": "2024-08",
      "raw": {
        "power": 445.568,
        "industrial": 442.949,
        "buildings": 0.668,
        "transport": 91.355
      },
      "index": {
        "power": 1.165,
        "industrial": 0.993,
        "buildings": 0.013,
        "transport": 0.965
      }
    },
    {
      "period": "2024-09",
      "raw": {
        "power": 391.177,
        "industrial": 445.035,
        "buildings": 5.204,
        "transport": 94.363
      },
      "index": {
        "power": 1.018,
        "industrial": 1.002,
        "buildings": 0.101,
        "transport": 1.001
      }
    },
    {
      "period": "2024-10",
      "raw": {
        "power": 346.403,
        "industrial": 457.717,
        "buildings": 27.597,
        "transport": 95.475
      },
      "index": {
        "power": 0.901,
        "industrial": 1.032,
        "buildings": 0.528,
        "transport": 1.018
      }
    },
    {
      "period": "2024-11",
      "raw": {
        "power": 376.618,
        "industrial": 451.274,
        "buildings": 66.031,
        "transport": 89.671
      },
      "index": {
        "power": 0.979,
        "industrial": 1.018,
        "buildings": 1.292,
        "transport": 0.957
      }
    },
    {
      "period": "2024-12",
      "raw": {
        "power": 434.284,
        "industrial": 454.639,
        "buildings": 137.814,
        "transport": 94.337
      },
      "index": {
        "power": 1.133,
        "industrial": 1.021,
        "buildings": 2.715,
        "transport": 1.009
      }
    },
    {
      "period": "2025-01",
      "raw": {
        "power": 369.655,
        "industrial": 443.091,
        "buildings": 140.894,
        "transport": 93.376
      },
      "index": {
        "power": 0.978,
        "industrial": 0.999,
        "buildings": 2.8,
        "transport": 1.004
      }
    },
    {
      "period": "2025-02",
      "raw": {
        "power": 369.655,
        "industrial": 383.243,
        "buildings": 119.815,
        "transport": 84.729
      },
      "index": {
        "power": 0.976,
        "industrial": 0.858,
        "buildings": 2.406,
        "transport": 0.913
      }
    },
    {
      "period": "2025-03",
      "raw": {
        "power": 363.419,
        "industrial": 475.723,
        "buildings": 77.2,
        "transport": 91.204
      },
      "index": {
        "power": 0.962,
        "industrial": 1.062,
        "buildings": 1.535,
        "transport": 0.988
      }
    },
    {
      "period": "2025-04",
      "raw": {
        "power": 318.478,
        "industrial": 459.002,
        "buildings": 20.879,
        "transport": 85.16
      },
      "index": {
        "power": 0.845,
        "industrial": 1.023,
        "buildings": 0.414,
        "transport": 0.931
      }
    },
    {
      "period": "2025-05",
      "raw": {
        "power": 327.908,
        "industrial": 464.362,
        "buildings": 7.747,
        "transport": 87.191
      },
      "index": {
        "power": 0.871,
        "industrial": 1.036,
        "buildings": 0.153,
        "transport": 0.959
      }
    },
    {
      "period": "2025-06",
      "raw": {
        "power": 354.646,
        "industrial": 459.408,
        "buildings": 1.619,
        "transport": 89.26
      },
      "index": {
        "power": 0.942,
        "industrial": 1.024,
        "buildings": 0.032,
        "transport": 0.984
      }
    },
    {
      "period": "2025-07",
      "raw": {
        "power": 431.956,
        "industrial": 454.156,
        "buildings": 0.584,
        "transport": 90.777
      },
      "index": {
        "power": 1.144,
        "industrial": 1.011,
        "buildings": 0.012,
        "transport": 1.002
      }
    },
    {
      "period": "2025-08",
      "raw": {
        "power": 449.546,
        "industrial": 457.698,
        "buildings": 1.006,
        "transport": 92.38
      },
      "index": {
        "power": 1.19,
        "industrial": 1.016,
        "buildings": 0.02,
        "transport": 1.019
      }
    },
    {
      "period": "2025-09",
      "raw": {
        "power": 368.384,
        "industrial": 449.063,
        "buildings": 4.683,
        "transport": 94.935
      },
      "index": {
        "power": 0.98,
        "industrial": 0.996,
        "buildings": 0.093,
        "transport": 1.047
      }
    },
    {
      "period": "2025-10",
      "raw": {
        "power": 368.676,
        "industrial": 446.075,
        "buildings": 36.044,
        "transport": 95.404
      },
      "index": {
        "power": 0.976,
        "industrial": 0.992,
        "buildings": 0.704,
        "transport": 1.052
      }
    },
    {
      "period": "2025-11",
      "raw": {
        "power": 356.916,
        "industrial": 443.426,
        "buildings": 73.375,
        "transport": 92.152
      },
      "index": {
        "power": 0.949,
        "industrial": 0.987,
        "buildings": 1.416,
        "transport": 1.014
      }
    },
    {
      "period": "2025-12",
      "raw": {
        "power": 417.701,
        "industrial": 449.336,
        "buildings": 114.788,
        "transport": 94.973
      },
      "index": {
        "power": 1.115,
        "industrial": 1.001,
        "buildings": 2.301,
        "transport": 1.044
      }
    },
    {
      "period": "2026-01",
      "raw": {
        "power": 426.597,
        "industrial": 504.526,
        "buildings": 134.895,
        "transport": 95.799
      },
      "index": {
        "power": 1.124,
        "industrial": 1.112,
        "buildings": 2.731,
        "transport": 1.051
      }
    },
    {
      "period": "2026-02",
      "raw": {
        "power": 325.026,
        "industrial": 334.264,
        "buildings": 86.865,
        "transport": 86.76
      },
      "index": {
        "power": 0.865,
        "industrial": 0.743,
        "buildings": 1.862,
        "transport": 0.95
      }
    },
    {
      "period": "2026-03",
      "raw": {
        "power": 376.446,
        "industrial": 459.977,
        "buildings": 63.194,
        "transport": 94.9
      },
      "index": {
        "power": 0.999,
        "industrial": 1.026,
        "buildings": 1.39,
        "transport": 1.036
      }
    }
  ],
  "methodology": [
    {
      "title": "Control total",
      "text": "The model scales the four buckets to JODI China TOTDEMC apparent demand because no free monthly China stock-change series is included. Since China stock change is reported as zero in this JODI extract, unobserved storage builds would make actual power, industrial, buildings, and transport end-use demand lower than TOTDEMC; storage withdrawals would make actual end-use demand higher. Storage is not separated in this dashboard."
    },
    {
      "title": "Annual sector anchor",
      "text": "The final-consumption split uses the IEA China natural-gas country page for 2023 TJ gross values by sector. Industrial includes industry plus non-energy/chemical use; buildings include residential plus commercial/public services; transport is transport final gas use. Power uses IEA gas-balance transformation shares for electricity plus CHP. The four dashboard buckets are normalized to 100%."
    },
    {
      "title": "Monthly shape",
      "text": "Carbon Monitor China daily provincial emissions are summed to national monthly sector totals. Each sector's monthly value is converted to an activity index against a trailing 12-month mean, with recent monthly climatology as the fallback for short history."
    },
    {
      "title": "Reconciliation",
      "text": "For each month, anchor share times proxy index creates preliminary sector weights. Those weights are normalized, then multiplied by the JODI apparent-demand control total, not a storage-adjusted end-use total."
    }
  ],
  "sources": [
    {
      "name": "JODI Gas World Database",
      "url": "https://www.jodidata.org/gas/database/data-downloads.aspx",
      "note": "Monthly China gas balance. The sector model uses JODI TOTDEMC as an apparent-demand control total because China stock change is reported as zero in this extract."
    },
    {
      "name": "Carbon Monitor China",
      "url": "https://cn.carbonmonitor.org/",
      "note": "Open daily provincial CO2 dataset. The model uses Power, Industry, Residential, and Ground Transport as monthly shape proxies."
    },
    {
      "name": "Carbon Monitor full dataset endpoint",
      "url": "https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=carbon_china",
      "note": "Raw CSV download used locally to aggregate monthly sector proxy indexes. Raw data are not committed."
    },
    {
      "name": "IEA China natural gas country page",
      "url": "https://www.iea.org/countries/china/natural-gas",
      "note": "Public China country page. The model uses its 2023 final-consumption table by sector for industry, non-energy use, residential, commercial/public services, transport, and agriculture/forestry."
    },
    {
      "name": "IEA Energy Statistics Data Browser",
      "url": "https://www.iea.org/data-and-statistics/data-tools/energy-statistics-data-browser",
      "note": "Used for the 2023 power/CHP transformation layer that is not part of the final-consumption table."
    },
    {
      "name": "National Bureau of Statistics of China, 2023 Statistical Communique",
      "url": "https://www.stats.gov.cn/sj/zxfb/202402/t20240228_1947915.html",
      "note": "Chinese official cross-check for energy context including natural-gas production and power generation by source."
    },
    {
      "name": "Carbon Monitor methodology paper",
      "url": "https://arxiv.org/abs/2006.07690",
      "note": "Documents the near-real-time daily emissions framework and the activity-data approach used for power, industry, transport, and buildings."
    }
  ]
};
