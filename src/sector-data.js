window.CHINA_GAS_SECTOR_DATA = {
  "meta": {
    "generatedAt": "2026-07-07T09:28:58.548Z",
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
      "label": "Power / residual",
      "shortLabel": "Power / residual",
      "color": "#3268a8",
      "method": "Residual after source-visible IEA final-use sectors are converted to bcm and compared with JODI 2023 apparent demand; monthly shape from Carbon Monitor China power emissions."
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
      "method": "IEA residential plus commercial/public services gas final consumption; monthly shape from Carbon Monitor China residential emissions as a heating/cooking proxy."
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
    "totalUseBasis": "Source-visible 2023 China gas anchor. Final-use sectors come from the public IEA China page; the residual is calculated against JODI 2023 apparent demand.",
    "finalConsumptionSource": "IEA China natural gas country page, Final consumption of gas by sector, China, 2023.",
    "grossHeatValueTJPerBcm": 38930,
    "grossHeatValueSource": "IEA-reported China higher heating value of 38.93 MJ per standard cubic metre.",
    "residualSource": "JODI 2023 apparent demand minus source-visible IEA final-use sectors converted to bcm.",
    "finalConsumptionValuesTJ": {
      "industry": 6232455,
      "transport": 1276255,
      "residential": 2486965,
      "commercialPublicServices": 657877,
      "agricultureForestry": 9440,
      "nonEnergyUse": 589056
    }
  },
  "sectorMappings": [
    {
      "dashboardBucket": "Power / residual",
      "ieaAnchorInput": "Residual: JODI 2023 apparent demand minus Industrial / chemical, Buildings / city gas, and Transport.",
      "carbonMonitorProxy": "Power",
      "note": "Not an exact IEA category. It includes power plus anything left in apparent demand after visible IEA final-use buckets are deducted."
    },
    {
      "dashboardBucket": "Industrial / chemical",
      "ieaAnchorInput": "Industry + Non-energy use",
      "carbonMonitorProxy": "Industry",
      "note": "Non-energy use is included here because the dashboard has one broad industrial/chemical bucket."
    },
    {
      "dashboardBucket": "Buildings / city gas",
      "ieaAnchorInput": "Residential + Commercial and public services",
      "carbonMonitorProxy": "Residential",
      "note": "Carbon Monitor has no separate commercial/public-services gas proxy, so residential shapes the whole buildings bucket."
    },
    {
      "dashboardBucket": "Transport",
      "ieaAnchorInput": "Transport",
      "carbonMonitorProxy": "Ground Transport",
      "note": "Carbon Monitor Aviation is not used in the gas dashboard."
    }
  ],
  "annualAnchors": [
    {
      "sector": "power",
      "rawShare": 0.2418,
      "normalizedShare": 0.2418
    },
    {
      "sector": "industrial",
      "rawShare": 0.46,
      "normalizedShare": 0.46
    },
    {
      "sector": "buildings",
      "rawShare": 0.2121,
      "normalizedShare": 0.2121
    },
    {
      "sector": "transport",
      "rawShare": 0.0861,
      "normalizedShare": 0.0861
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
  "anchorCalculation": {
    "jodiApparentDemandBcm": 380.901,
    "grossHeatValueTJPerBcm": 38930,
    "agricultureBcm": 0.242,
    "rows": [
      {
        "bucket": "Power / residual",
        "valueBcm": 92.111,
        "share": 0.2418,
        "note": "Residual: JODI apparent demand minus visible IEA final-use buckets."
      },
      {
        "bucket": "Industrial / chemical",
        "valueBcm": 175.225,
        "share": 0.46,
        "note": "IEA industry plus non-energy use."
      },
      {
        "bucket": "Buildings / city gas",
        "valueBcm": 80.782,
        "share": 0.2121,
        "note": "IEA residential plus commercial/public services."
      },
      {
        "bucket": "Transport",
        "valueBcm": 32.783,
        "share": 0.0861,
        "note": "IEA transport."
      }
    ]
  },
  "monthly": [
    {
      "period": "2019-01",
      "gasYear": "2018/19",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 28.981,
      "sectors": {
        "power": 5.239,
        "industrial": 9.396,
        "buildings": 12.607,
        "transport": 1.74
      },
      "shares": {
        "power": 0.1808,
        "industrial": 0.3242,
        "buildings": 0.435,
        "transport": 0.06
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-02",
      "gasYear": "2018/19",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 23.512,
      "sectors": {
        "power": 4.652,
        "industrial": 7.508,
        "buildings": 9.724,
        "transport": 1.628
      },
      "shares": {
        "power": 0.1979,
        "industrial": 0.3193,
        "buildings": 0.4136,
        "transport": 0.0692
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-03",
      "gasYear": "2018/19",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 24.566,
      "sectors": {
        "power": 5.369,
        "industrial": 10.88,
        "buildings": 6.372,
        "transport": 1.945
      },
      "shares": {
        "power": 0.2186,
        "industrial": 0.4429,
        "buildings": 0.2594,
        "transport": 0.0792
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-04",
      "gasYear": "2018/19",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 24.566,
      "sectors": {
        "power": 5.853,
        "industrial": 13.334,
        "buildings": 3.091,
        "transport": 2.288
      },
      "shares": {
        "power": 0.2382,
        "industrial": 0.5428,
        "buildings": 0.1258,
        "transport": 0.0931
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-05",
      "gasYear": "2018/19",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 24.766,
      "sectors": {
        "power": 6.443,
        "industrial": 14.739,
        "buildings": 1.034,
        "transport": 2.55
      },
      "shares": {
        "power": 0.2602,
        "industrial": 0.5951,
        "buildings": 0.0417,
        "transport": 0.1029
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-06",
      "gasYear": "2018/19",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 24.126,
      "sectors": {
        "power": 7.018,
        "industrial": 14.369,
        "buildings": 0.205,
        "transport": 2.534
      },
      "shares": {
        "power": 0.2909,
        "industrial": 0.5956,
        "buildings": 0.0085,
        "transport": 0.105
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-07",
      "gasYear": "2018/19",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 24.568,
      "sectors": {
        "power": 8.108,
        "industrial": 13.825,
        "buildings": 0.081,
        "transport": 2.554
      },
      "shares": {
        "power": 0.33,
        "industrial": 0.5627,
        "buildings": 0.0033,
        "transport": 0.1039
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-08",
      "gasYear": "2018/19",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 25.164,
      "sectors": {
        "power": 8.452,
        "industrial": 13.982,
        "buildings": 0.138,
        "transport": 2.592
      },
      "shares": {
        "power": 0.3359,
        "industrial": 0.5556,
        "buildings": 0.0055,
        "transport": 0.103
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-09",
      "gasYear": "2018/19",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 24.496,
      "sectors": {
        "power": 7.195,
        "industrial": 14.037,
        "buildings": 0.586,
        "transport": 2.679
      },
      "shares": {
        "power": 0.2937,
        "industrial": 0.573,
        "buildings": 0.0239,
        "transport": 0.1093
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-10",
      "gasYear": "2019/20",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 23.352,
      "sectors": {
        "power": 5.603,
        "industrial": 11.713,
        "buildings": 3.858,
        "transport": 2.178
      },
      "shares": {
        "power": 0.2399,
        "industrial": 0.5016,
        "buildings": 0.1652,
        "transport": 0.0933
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-11",
      "gasYear": "2019/20",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 28.044,
      "sectors": {
        "power": 5.992,
        "industrial": 11.498,
        "buildings": 8.546,
        "transport": 2.008
      },
      "shares": {
        "power": 0.2137,
        "industrial": 0.41,
        "buildings": 0.3047,
        "transport": 0.0716
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2019-12",
      "gasYear": "2019/20",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 29.012,
      "sectors": {
        "power": 5.995,
        "industrial": 10.019,
        "buildings": 11.223,
        "transport": 1.776
      },
      "shares": {
        "power": 0.2066,
        "industrial": 0.3453,
        "buildings": 0.3868,
        "transport": 0.0612
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-01",
      "gasYear": "2019/20",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 28.657,
      "sectors": {
        "power": 4.56,
        "industrial": 9.601,
        "buildings": 12.978,
        "transport": 1.518
      },
      "shares": {
        "power": 0.1591,
        "industrial": 0.335,
        "buildings": 0.4529,
        "transport": 0.053
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-02",
      "gasYear": "2019/20",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 27.247,
      "sectors": {
        "power": 6.241,
        "industrial": 7.697,
        "buildings": 11.58,
        "transport": 1.728
      },
      "shares": {
        "power": 0.2291,
        "industrial": 0.2825,
        "buildings": 0.425,
        "transport": 0.0634
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-03",
      "gasYear": "2019/20",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 26.018,
      "sectors": {
        "power": 5.617,
        "industrial": 10.986,
        "buildings": 7.332,
        "transport": 2.083
      },
      "shares": {
        "power": 0.2159,
        "industrial": 0.4222,
        "buildings": 0.2818,
        "transport": 0.0801
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-04",
      "gasYear": "2019/20",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 26.572,
      "sectors": {
        "power": 6.273,
        "industrial": 13.764,
        "buildings": 4.312,
        "transport": 2.223
      },
      "shares": {
        "power": 0.2361,
        "industrial": 0.518,
        "buildings": 0.1623,
        "transport": 0.0837
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-05",
      "gasYear": "2019/20",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 26.571,
      "sectors": {
        "power": 7.165,
        "industrial": 15.846,
        "buildings": 0.934,
        "transport": 2.625
      },
      "shares": {
        "power": 0.2697,
        "industrial": 0.5964,
        "buildings": 0.0352,
        "transport": 0.0988
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-06",
      "gasYear": "2019/20",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 26.34,
      "sectors": {
        "power": 7.559,
        "industrial": 15.798,
        "buildings": 0.211,
        "transport": 2.771
      },
      "shares": {
        "power": 0.287,
        "industrial": 0.5998,
        "buildings": 0.008,
        "transport": 0.1052
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-07",
      "gasYear": "2019/20",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 24.007,
      "sectors": {
        "power": 7.249,
        "industrial": 13.987,
        "buildings": 0.098,
        "transport": 2.674
      },
      "shares": {
        "power": 0.3019,
        "industrial": 0.5826,
        "buildings": 0.0041,
        "transport": 0.1114
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-08",
      "gasYear": "2019/20",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 26.758,
      "sectors": {
        "power": 8.544,
        "industrial": 15.199,
        "buildings": 0.155,
        "transport": 2.86
      },
      "shares": {
        "power": 0.3193,
        "industrial": 0.568,
        "buildings": 0.0058,
        "transport": 0.1069
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-09",
      "gasYear": "2019/20",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 26.194,
      "sectors": {
        "power": 7.131,
        "industrial": 15.094,
        "buildings": 0.751,
        "transport": 3.218
      },
      "shares": {
        "power": 0.2722,
        "industrial": 0.5762,
        "buildings": 0.0287,
        "transport": 0.1229
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-10",
      "gasYear": "2020/21",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 26.235,
      "sectors": {
        "power": 6.131,
        "industrial": 13.739,
        "buildings": 4.058,
        "transport": 2.307
      },
      "shares": {
        "power": 0.2337,
        "industrial": 0.5237,
        "buildings": 0.1547,
        "transport": 0.0879
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-11",
      "gasYear": "2020/21",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 29.215,
      "sectors": {
        "power": 6.622,
        "industrial": 12.561,
        "buildings": 7.848,
        "transport": 2.184
      },
      "shares": {
        "power": 0.2267,
        "industrial": 0.43,
        "buildings": 0.2686,
        "transport": 0.0747
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2020-12",
      "gasYear": "2020/21",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 34.14,
      "sectors": {
        "power": 7.107,
        "industrial": 11.22,
        "buildings": 13.809,
        "transport": 2.003
      },
      "shares": {
        "power": 0.2082,
        "industrial": 0.3287,
        "buildings": 0.4045,
        "transport": 0.0587
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-01",
      "gasYear": "2020/21",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 27.289,
      "sectors": {
        "power": 4.361,
        "industrial": 9.465,
        "buildings": 11.827,
        "transport": 1.636
      },
      "shares": {
        "power": 0.1598,
        "industrial": 0.3468,
        "buildings": 0.4334,
        "transport": 0.06
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-02",
      "gasYear": "2020/21",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 23.008,
      "sectors": {
        "power": 4.535,
        "industrial": 7.971,
        "buildings": 8.616,
        "transport": 1.887
      },
      "shares": {
        "power": 0.1971,
        "industrial": 0.3464,
        "buildings": 0.3745,
        "transport": 0.082
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-03",
      "gasYear": "2020/21",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 30.4,
      "sectors": {
        "power": 6.411,
        "industrial": 13.556,
        "buildings": 8.024,
        "transport": 2.41
      },
      "shares": {
        "power": 0.2109,
        "industrial": 0.4459,
        "buildings": 0.2639,
        "transport": 0.0793
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-04",
      "gasYear": "2020/21",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 30.612,
      "sectors": {
        "power": 6.886,
        "industrial": 16.369,
        "buildings": 4.681,
        "transport": 2.675
      },
      "shares": {
        "power": 0.225,
        "industrial": 0.5347,
        "buildings": 0.1529,
        "transport": 0.0874
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-05",
      "gasYear": "2020/21",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 30.749,
      "sectors": {
        "power": 7.732,
        "industrial": 18.477,
        "buildings": 1.252,
        "transport": 3.289
      },
      "shares": {
        "power": 0.2514,
        "industrial": 0.6009,
        "buildings": 0.0407,
        "transport": 0.107
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-06",
      "gasYear": "2020/21",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 31.074,
      "sectors": {
        "power": 8.709,
        "industrial": 18.635,
        "buildings": 0.279,
        "transport": 3.451
      },
      "shares": {
        "power": 0.2803,
        "industrial": 0.5997,
        "buildings": 0.009,
        "transport": 0.111
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-07",
      "gasYear": "2020/21",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 28.313,
      "sectors": {
        "power": 8.673,
        "industrial": 16.125,
        "buildings": 0.097,
        "transport": 3.418
      },
      "shares": {
        "power": 0.3063,
        "industrial": 0.5695,
        "buildings": 0.0034,
        "transport": 0.1207
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-08",
      "gasYear": "2020/21",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 29.924,
      "sectors": {
        "power": 9.117,
        "industrial": 16.978,
        "buildings": 0.196,
        "transport": 3.633
      },
      "shares": {
        "power": 0.3047,
        "industrial": 0.5674,
        "buildings": 0.0065,
        "transport": 0.1214
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-09",
      "gasYear": "2020/21",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 29.894,
      "sectors": {
        "power": 8.493,
        "industrial": 17.052,
        "buildings": 0.674,
        "transport": 3.675
      },
      "shares": {
        "power": 0.2841,
        "industrial": 0.5704,
        "buildings": 0.0226,
        "transport": 0.1229
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-10",
      "gasYear": "2021/22",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 29.083,
      "sectors": {
        "power": 6.761,
        "industrial": 14.129,
        "buildings": 4.966,
        "transport": 3.227
      },
      "shares": {
        "power": 0.2325,
        "industrial": 0.4858,
        "buildings": 0.1707,
        "transport": 0.111
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-11",
      "gasYear": "2021/22",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 32.323,
      "sectors": {
        "power": 6.716,
        "industrial": 12.854,
        "buildings": 9.64,
        "transport": 3.113
      },
      "shares": {
        "power": 0.2078,
        "industrial": 0.3977,
        "buildings": 0.2982,
        "transport": 0.0963
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2021-12",
      "gasYear": "2021/22",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 35.117,
      "sectors": {
        "power": 6.899,
        "industrial": 11.808,
        "buildings": 13.746,
        "transport": 2.665
      },
      "shares": {
        "power": 0.1964,
        "industrial": 0.3362,
        "buildings": 0.3914,
        "transport": 0.0759
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-01",
      "gasYear": "2021/22",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 27.167,
      "sectors": {
        "power": 6.164,
        "industrial": 8.001,
        "buildings": 11.285,
        "transport": 1.717
      },
      "shares": {
        "power": 0.2269,
        "industrial": 0.2945,
        "buildings": 0.4154,
        "transport": 0.0632
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-02",
      "gasYear": "2021/22",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 23.907,
      "sectors": {
        "power": 5.028,
        "industrial": 6.758,
        "buildings": 10.28,
        "transport": 1.842
      },
      "shares": {
        "power": 0.2103,
        "industrial": 0.2827,
        "buildings": 0.43,
        "transport": 0.077
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-03",
      "gasYear": "2021/22",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 30.583,
      "sectors": {
        "power": 7.661,
        "industrial": 13.195,
        "buildings": 7.124,
        "transport": 2.603
      },
      "shares": {
        "power": 0.2505,
        "industrial": 0.4315,
        "buildings": 0.233,
        "transport": 0.0851
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-04",
      "gasYear": "2021/22",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 28.697,
      "sectors": {
        "power": 7.421,
        "industrial": 15.055,
        "buildings": 3.671,
        "transport": 2.551
      },
      "shares": {
        "power": 0.2586,
        "industrial": 0.5246,
        "buildings": 0.1279,
        "transport": 0.0889
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-05",
      "gasYear": "2021/22",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 29.979,
      "sectors": {
        "power": 8.228,
        "industrial": 17.263,
        "buildings": 1.547,
        "transport": 2.942
      },
      "shares": {
        "power": 0.2744,
        "industrial": 0.5758,
        "buildings": 0.0516,
        "transport": 0.0981
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-06",
      "gasYear": "2021/22",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 29.044,
      "sectors": {
        "power": 9.087,
        "industrial": 16.894,
        "buildings": 0.206,
        "transport": 2.857
      },
      "shares": {
        "power": 0.3129,
        "industrial": 0.5817,
        "buildings": 0.0071,
        "transport": 0.0984
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-07",
      "gasYear": "2021/22",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 28.659,
      "sectors": {
        "power": 10.286,
        "industrial": 15.575,
        "buildings": 0.092,
        "transport": 2.707
      },
      "shares": {
        "power": 0.3589,
        "industrial": 0.5435,
        "buildings": 0.0032,
        "transport": 0.0944
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-08",
      "gasYear": "2021/22",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 28.754,
      "sectors": {
        "power": 10.522,
        "industrial": 15.389,
        "buildings": 0.202,
        "transport": 2.642
      },
      "shares": {
        "power": 0.3659,
        "industrial": 0.5352,
        "buildings": 0.007,
        "transport": 0.0919
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-09",
      "gasYear": "2021/22",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 29.871,
      "sectors": {
        "power": 8.9,
        "industrial": 17.178,
        "buildings": 0.692,
        "transport": 3.101
      },
      "shares": {
        "power": 0.2979,
        "industrial": 0.5751,
        "buildings": 0.0232,
        "transport": 0.1038
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-10",
      "gasYear": "2022/23",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 28.469,
      "sectors": {
        "power": 6.956,
        "industrial": 14.378,
        "buildings": 4.275,
        "transport": 2.86
      },
      "shares": {
        "power": 0.2443,
        "industrial": 0.505,
        "buildings": 0.1502,
        "transport": 0.1005
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-11",
      "gasYear": "2022/23",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 32.804,
      "sectors": {
        "power": 7.477,
        "industrial": 14.329,
        "buildings": 8.246,
        "transport": 2.752
      },
      "shares": {
        "power": 0.2279,
        "industrial": 0.4368,
        "buildings": 0.2514,
        "transport": 0.0839
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2022-12",
      "gasYear": "2022/23",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 34.362,
      "sectors": {
        "power": 6.652,
        "industrial": 11.12,
        "buildings": 14.51,
        "transport": 2.08
      },
      "shares": {
        "power": 0.1936,
        "industrial": 0.3236,
        "buildings": 0.4223,
        "transport": 0.0605
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-01",
      "gasYear": "2022/23",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 26.056,
      "sectors": {
        "power": 4.592,
        "industrial": 8.282,
        "buildings": 11.498,
        "transport": 1.685
      },
      "shares": {
        "power": 0.1762,
        "industrial": 0.3178,
        "buildings": 0.4413,
        "transport": 0.0647
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-02",
      "gasYear": "2022/23",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 26.056,
      "sectors": {
        "power": 5.615,
        "industrial": 8.909,
        "buildings": 9.646,
        "transport": 1.886
      },
      "shares": {
        "power": 0.2155,
        "industrial": 0.3419,
        "buildings": 0.3702,
        "transport": 0.0724
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-03",
      "gasYear": "2022/23",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 32.224,
      "sectors": {
        "power": 7.337,
        "industrial": 14.689,
        "buildings": 7.339,
        "transport": 2.859
      },
      "shares": {
        "power": 0.2277,
        "industrial": 0.4558,
        "buildings": 0.2278,
        "transport": 0.0887
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-04",
      "gasYear": "2022/23",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 31.134,
      "sectors": {
        "power": 7.354,
        "industrial": 16.252,
        "buildings": 4.248,
        "transport": 3.28
      },
      "shares": {
        "power": 0.2362,
        "industrial": 0.522,
        "buildings": 0.1364,
        "transport": 0.1054
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-05",
      "gasYear": "2022/23",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 33.436,
      "sectors": {
        "power": 9.015,
        "industrial": 19.302,
        "buildings": 1.305,
        "transport": 3.814
      },
      "shares": {
        "power": 0.2696,
        "industrial": 0.5773,
        "buildings": 0.039,
        "transport": 0.1141
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-06",
      "gasYear": "2022/23",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 32.304,
      "sectors": {
        "power": 9.706,
        "industrial": 18.631,
        "buildings": 0.275,
        "transport": 3.692
      },
      "shares": {
        "power": 0.3005,
        "industrial": 0.5767,
        "buildings": 0.0085,
        "transport": 0.1143
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-07",
      "gasYear": "2022/23",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 32.221,
      "sectors": {
        "power": 10.72,
        "industrial": 17.875,
        "buildings": 0.114,
        "transport": 3.512
      },
      "shares": {
        "power": 0.3327,
        "industrial": 0.5548,
        "buildings": 0.0035,
        "transport": 0.109
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-08",
      "gasYear": "2022/23",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 32.709,
      "sectors": {
        "power": 10.804,
        "industrial": 18.186,
        "buildings": 0.169,
        "transport": 3.55
      },
      "shares": {
        "power": 0.3303,
        "industrial": 0.556,
        "buildings": 0.0052,
        "transport": 0.1085
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-09",
      "gasYear": "2022/23",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 31.558,
      "sectors": {
        "power": 9.169,
        "industrial": 18.151,
        "buildings": 0.685,
        "transport": 3.553
      },
      "shares": {
        "power": 0.2905,
        "industrial": 0.5751,
        "buildings": 0.0217,
        "transport": 0.1126
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-10",
      "gasYear": "2023/24",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 30.8,
      "sectors": {
        "power": 7.789,
        "industrial": 16.51,
        "buildings": 3.191,
        "transport": 3.309
      },
      "shares": {
        "power": 0.2529,
        "industrial": 0.536,
        "buildings": 0.1036,
        "transport": 0.1074
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-11",
      "gasYear": "2023/24",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 34.608,
      "sectors": {
        "power": 7.448,
        "industrial": 14.187,
        "buildings": 10.361,
        "transport": 2.612
      },
      "shares": {
        "power": 0.2152,
        "industrial": 0.4099,
        "buildings": 0.2994,
        "transport": 0.0755
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2023-12",
      "gasYear": "2023/24",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 37.795,
      "sectors": {
        "power": 7.673,
        "industrial": 11.752,
        "buildings": 16.019,
        "transport": 2.351
      },
      "shares": {
        "power": 0.203,
        "industrial": 0.3109,
        "buildings": 0.4239,
        "transport": 0.0622
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-01",
      "gasYear": "2023/24",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 31.697,
      "sectors": {
        "power": 5.991,
        "industrial": 10.151,
        "buildings": 13.589,
        "transport": 1.966
      },
      "shares": {
        "power": 0.189,
        "industrial": 0.3203,
        "buildings": 0.4287,
        "transport": 0.062
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-02",
      "gasYear": "2023/24",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 26.913,
      "sectors": {
        "power": 5.153,
        "industrial": 8.06,
        "buildings": 11.899,
        "transport": 1.801
      },
      "shares": {
        "power": 0.1915,
        "industrial": 0.2995,
        "buildings": 0.4421,
        "transport": 0.0669
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-03",
      "gasYear": "2023/24",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 36.312,
      "sectors": {
        "power": 7.966,
        "industrial": 15.732,
        "buildings": 9.661,
        "transport": 2.953
      },
      "shares": {
        "power": 0.2194,
        "industrial": 0.4332,
        "buildings": 0.266,
        "transport": 0.0813
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-04",
      "gasYear": "2023/24",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 33.705,
      "sectors": {
        "power": 8.401,
        "industrial": 18.619,
        "buildings": 3.257,
        "transport": 3.428
      },
      "shares": {
        "power": 0.2492,
        "industrial": 0.5524,
        "buildings": 0.0966,
        "transport": 0.1017
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-05",
      "gasYear": "2023/24",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 35.617,
      "sectors": {
        "power": 9.26,
        "industrial": 21.413,
        "buildings": 1.179,
        "transport": 3.765
      },
      "shares": {
        "power": 0.26,
        "industrial": 0.6012,
        "buildings": 0.0331,
        "transport": 0.1057
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-06",
      "gasYear": "2023/24",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 34.264,
      "sectors": {
        "power": 9.879,
        "industrial": 20.471,
        "buildings": 0.301,
        "transport": 3.613
      },
      "shares": {
        "power": 0.2883,
        "industrial": 0.5974,
        "buildings": 0.0088,
        "transport": 0.1054
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-07",
      "gasYear": "2023/24",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 34.61,
      "sectors": {
        "power": 11.339,
        "industrial": 19.577,
        "buildings": 0.11,
        "transport": 3.584
      },
      "shares": {
        "power": 0.3276,
        "industrial": 0.5657,
        "buildings": 0.0032,
        "transport": 0.1036
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-08",
      "gasYear": "2023/24",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 35.95,
      "sectors": {
        "power": 12.287,
        "industrial": 19.921,
        "buildings": 0.12,
        "transport": 3.622
      },
      "shares": {
        "power": 0.3418,
        "industrial": 0.5541,
        "buildings": 0.0033,
        "transport": 0.1008
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-09",
      "gasYear": "2023/24",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 35.586,
      "sectors": {
        "power": 10.755,
        "industrial": 20.135,
        "buildings": 0.932,
        "transport": 3.764
      },
      "shares": {
        "power": 0.3022,
        "industrial": 0.5658,
        "buildings": 0.0262,
        "transport": 0.1058
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-10",
      "gasYear": "2024/25",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 35.072,
      "sectors": {
        "power": 8.565,
        "industrial": 18.661,
        "buildings": 4.401,
        "transport": 3.445
      },
      "shares": {
        "power": 0.2442,
        "industrial": 0.5321,
        "buildings": 0.1255,
        "transport": 0.0982
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-11",
      "gasYear": "2024/25",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 34.954,
      "sectors": {
        "power": 7.796,
        "industrial": 15.417,
        "buildings": 9.027,
        "transport": 2.714
      },
      "shares": {
        "power": 0.223,
        "industrial": 0.4411,
        "buildings": 0.2583,
        "transport": 0.0776
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2024-12",
      "gasYear": "2024/25",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 37.549,
      "sectors": {
        "power": 7.313,
        "industrial": 12.543,
        "buildings": 15.375,
        "transport": 2.318
      },
      "shares": {
        "power": 0.1947,
        "industrial": 0.334,
        "buildings": 0.4095,
        "transport": 0.0617
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-01",
      "gasYear": "2024/25",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 28.835,
      "sectors": {
        "power": 4.957,
        "industrial": 9.626,
        "buildings": 12.442,
        "transport": 1.81
      },
      "shares": {
        "power": 0.1719,
        "industrial": 0.3338,
        "buildings": 0.4315,
        "transport": 0.0628
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-02",
      "gasYear": "2024/25",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 27.069,
      "sectors": {
        "power": 5.237,
        "industrial": 8.76,
        "buildings": 11.328,
        "transport": 1.744
      },
      "shares": {
        "power": 0.1935,
        "industrial": 0.3236,
        "buildings": 0.4185,
        "transport": 0.0644
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-03",
      "gasYear": "2024/25",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 34.666,
      "sectors": {
        "power": 7.126,
        "industrial": 14.961,
        "buildings": 9.972,
        "transport": 2.607
      },
      "shares": {
        "power": 0.2056,
        "industrial": 0.4316,
        "buildings": 0.2877,
        "transport": 0.0752
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-04",
      "gasYear": "2024/25",
      "gasYearMonth": 7,
      "monthLabel": "Apr",
      "totalDemand": 34.371,
      "sectors": {
        "power": 8.336,
        "industrial": 19.186,
        "buildings": 3.582,
        "transport": 3.267
      },
      "shares": {
        "power": 0.2425,
        "industrial": 0.5582,
        "buildings": 0.1042,
        "transport": 0.0951
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-05",
      "gasYear": "2024/25",
      "gasYearMonth": 8,
      "monthLabel": "May",
      "totalDemand": 35.915,
      "sectors": {
        "power": 9.429,
        "industrial": 21.334,
        "buildings": 1.456,
        "transport": 3.696
      },
      "shares": {
        "power": 0.2625,
        "industrial": 0.594,
        "buildings": 0.0405,
        "transport": 0.1029
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-06",
      "gasYear": "2024/25",
      "gasYearMonth": 9,
      "monthLabel": "Jun",
      "totalDemand": 35.313,
      "sectors": {
        "power": 10.18,
        "industrial": 21.047,
        "buildings": 0.304,
        "transport": 3.782
      },
      "shares": {
        "power": 0.2883,
        "industrial": 0.596,
        "buildings": 0.0086,
        "transport": 0.1071
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-07",
      "gasYear": "2024/25",
      "gasYearMonth": 10,
      "monthLabel": "Jul",
      "totalDemand": 35.843,
      "sectors": {
        "power": 11.943,
        "industrial": 20.072,
        "buildings": 0.106,
        "transport": 3.723
      },
      "shares": {
        "power": 0.3332,
        "industrial": 0.56,
        "buildings": 0.003,
        "transport": 0.1039
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-08",
      "gasYear": "2024/25",
      "gasYearMonth": 11,
      "monthLabel": "Aug",
      "totalDemand": 37.255,
      "sectors": {
        "power": 12.655,
        "industrial": 20.558,
        "buildings": 0.186,
        "transport": 3.857
      },
      "shares": {
        "power": 0.3397,
        "industrial": 0.5518,
        "buildings": 0.005,
        "transport": 0.1035
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-09",
      "gasYear": "2024/25",
      "gasYearMonth": 12,
      "monthLabel": "Sep",
      "totalDemand": 35.789,
      "sectors": {
        "power": 10.536,
        "industrial": 20.374,
        "buildings": 0.875,
        "transport": 4.005
      },
      "shares": {
        "power": 0.2944,
        "industrial": 0.5693,
        "buildings": 0.0244,
        "transport": 0.1119
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-10",
      "gasYear": "2025/26",
      "gasYearMonth": 1,
      "monthLabel": "Oct",
      "totalDemand": 35.338,
      "sectors": {
        "power": 8.948,
        "industrial": 17.297,
        "buildings": 5.661,
        "transport": 3.432
      },
      "shares": {
        "power": 0.2532,
        "industrial": 0.4895,
        "buildings": 0.1602,
        "transport": 0.0971
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-11",
      "gasYear": "2025/26",
      "gasYearMonth": 2,
      "monthLabel": "Nov",
      "totalDemand": 38.13,
      "sectors": {
        "power": 8.168,
        "industrial": 16.165,
        "buildings": 10.692,
        "transport": 3.105
      },
      "shares": {
        "power": 0.2142,
        "industrial": 0.4239,
        "buildings": 0.2804,
        "transport": 0.0814
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2025-12",
      "gasYear": "2025/26",
      "gasYearMonth": 3,
      "monthLabel": "Dec",
      "totalDemand": 39.944,
      "sectors": {
        "power": 8.231,
        "industrial": 14.067,
        "buildings": 14.902,
        "transport": 2.744
      },
      "shares": {
        "power": 0.2061,
        "industrial": 0.3522,
        "buildings": 0.3731,
        "transport": 0.0687
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2026-01",
      "gasYear": "2025/26",
      "gasYearMonth": 4,
      "monthLabel": "Jan",
      "totalDemand": 30.212,
      "sectors": {
        "power": 5.652,
        "industrial": 10.634,
        "buildings": 12.045,
        "transport": 1.881
      },
      "shares": {
        "power": 0.1871,
        "industrial": 0.352,
        "buildings": 0.3987,
        "transport": 0.0622
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2026-02",
      "gasYear": "2025/26",
      "gasYearMonth": 5,
      "monthLabel": "Feb",
      "totalDemand": 24.88,
      "sectors": {
        "power": 5.063,
        "industrial": 8.276,
        "buildings": 9.561,
        "transport": 1.979
      },
      "shares": {
        "power": 0.2035,
        "industrial": 0.3326,
        "buildings": 0.3843,
        "transport": 0.0795
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
      }
    },
    {
      "period": "2026-03",
      "gasYear": "2025/26",
      "gasYearMonth": 6,
      "monthLabel": "Mar",
      "totalDemand": 33.554,
      "sectors": {
        "power": 7.387,
        "industrial": 14.429,
        "buildings": 9.013,
        "transport": 2.725
      },
      "shares": {
        "power": 0.2201,
        "industrial": 0.43,
        "buildings": 0.2686,
        "transport": 0.0812
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
        "annualAnchor": "Source-visible IEA final-use rows plus JODI 2023 residual"
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
      "text": "The annual anchor now uses only visible data. Industrial, buildings, and transport come from the public IEA China final-consumption table. Those TJ values are converted to bcm using 38.93 MJ per standard cubic metre. The power bucket is the residual against JODI 2023 apparent demand, so it should be read as power plus unallocated system and storage effects, not pure power generation."
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
      "name": "IEA natural gas heat value for China",
      "url": "https://en.wikipedia.org/wiki/Heat_of_combustion#Higher_heating_values_of_natural_gases_from_various_sources",
      "note": "Visible reference for IEA-reported China higher heating value of 38.93 MJ per standard cubic metre, used to convert IEA TJ gross values to bcm."
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
