window.CHINA_GAS_SECTOR_DATA = {
  "meta": {
    "generatedAt": "2026-07-07T06:26:12.083Z",
    "earliestModeledPeriod": "2019-01",
    "latestModeledPeriod": "2026-03",
    "currentGasYear": "2025/26",
    "units": "bcm unless otherwise stated",
    "note": "Historical top-down sector allocation. JODI calculated demand is the monthly control total; sector split is modeled, not official sector demand.",
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
    "totalUseBasis": "IEA 2023 China natural-gas balance percentages, normalized to the four dashboard sectors.",
    "energySectorShare": 0.243,
    "finalConsumptionShare": 0.751,
    "energySectorDetail": {
      "electricity": 0.41,
      "chp": 0.44
    },
    "finalConsumptionDetail": {
      "industry": 0.55,
      "nonEnergy": 0.05,
      "residential": 0.22,
      "tertiary": 0.06,
      "transport": 0.11
    }
  },
  "annualAnchors": [
    {
      "sector": "power",
      "rawShare": 0.2066,
      "normalizedShare": 0.2174
    },
    {
      "sector": "industrial",
      "rawShare": 0.4506,
      "normalizedShare": 0.4743
    },
    {
      "sector": "buildings",
      "rawShare": 0.2103,
      "normalizedShare": 0.2213
    },
    {
      "sector": "transport",
      "rawShare": 0.0826,
      "normalizedShare": 0.087
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
        "power": 4.657,
        "industrial": 9.578,
        "buildings": 13.008,
        "transport": 1.738
      },
      "shares": {
        "power": 0.1607,
        "industrial": 0.3305,
        "buildings": 0.4489,
        "transport": 0.06
      },
      "proxyIndex": {
        "power": 1.049,
        "industrial": 0.989,
        "buildings": 2.878,
        "transport": 0.979
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.146,
        "industrial": 7.674,
        "buildings": 10.061,
        "transport": 1.631
      },
      "shares": {
        "power": 0.1763,
        "industrial": 0.3264,
        "buildings": 0.4279,
        "transport": 0.0694
      },
      "proxyIndex": {
        "power": 0.944,
        "industrial": 0.801,
        "buildings": 2.25,
        "transport": 0.928
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.809,
        "industrial": 11.175,
        "buildings": 6.625,
        "transport": 1.958
      },
      "shares": {
        "power": 0.1957,
        "industrial": 0.4549,
        "buildings": 0.2697,
        "transport": 0.0797
      },
      "proxyIndex": {
        "power": 0.985,
        "industrial": 1.049,
        "buildings": 1.333,
        "transport": 1.003
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.266,
        "industrial": 13.758,
        "buildings": 3.228,
        "transport": 2.313
      },
      "shares": {
        "power": 0.2144,
        "industrial": 0.5601,
        "buildings": 0.1314,
        "transport": 0.0942
      },
      "proxyIndex": {
        "power": 0.865,
        "industrial": 1.036,
        "buildings": 0.521,
        "transport": 0.95
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.821,
        "industrial": 15.272,
        "buildings": 1.084,
        "transport": 2.589
      },
      "shares": {
        "power": 0.2351,
        "industrial": 0.6166,
        "buildings": 0.0438,
        "transport": 0.1045
      },
      "proxyIndex": {
        "power": 0.881,
        "industrial": 1.06,
        "buildings": 0.161,
        "transport": 0.98
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.37,
        "industrial": 14.956,
        "buildings": 0.216,
        "transport": 2.584
      },
      "shares": {
        "power": 0.264,
        "industrial": 0.6199,
        "buildings": 0.0089,
        "transport": 0.1071
      },
      "proxyIndex": {
        "power": 0.966,
        "industrial": 1.04,
        "buildings": 0.032,
        "transport": 0.98
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.398,
        "industrial": 14.466,
        "buildings": 0.086,
        "transport": 2.618
      },
      "shares": {
        "power": 0.3011,
        "industrial": 0.5888,
        "buildings": 0.0035,
        "transport": 0.1066
      },
      "proxyIndex": {
        "power": 1.128,
        "industrial": 1.011,
        "buildings": 0.013,
        "transport": 0.998
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.717,
        "industrial": 14.641,
        "buildings": 0.147,
        "transport": 2.659
      },
      "shares": {
        "power": 0.3067,
        "industrial": 0.5818,
        "buildings": 0.0058,
        "transport": 0.1057
      },
      "proxyIndex": {
        "power": 1.165,
        "industrial": 1.013,
        "buildings": 0.022,
        "transport": 1.003
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.532,
        "industrial": 14.614,
        "buildings": 0.617,
        "transport": 2.733
      },
      "shares": {
        "power": 0.2667,
        "industrial": 0.5966,
        "buildings": 0.0252,
        "transport": 0.1116
      },
      "proxyIndex": {
        "power": 0.982,
        "industrial": 1.007,
        "buildings": 0.091,
        "transport": 1.027
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.04,
        "industrial": 12.083,
        "buildings": 4.028,
        "transport": 2.202
      },
      "shares": {
        "power": 0.2158,
        "industrial": 0.5174,
        "buildings": 0.1725,
        "transport": 0.0943
      },
      "proxyIndex": {
        "power": 0.945,
        "industrial": 1.038,
        "buildings": 0.742,
        "transport": 1.032
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.359,
        "industrial": 11.794,
        "buildings": 8.873,
        "transport": 2.018
      },
      "shares": {
        "power": 0.1911,
        "industrial": 0.4205,
        "buildings": 0.3164,
        "transport": 0.072
      },
      "proxyIndex": {
        "power": 1.032,
        "industrial": 1.041,
        "buildings": 1.678,
        "transport": 0.972
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.35,
        "industrial": 10.254,
        "buildings": 11.627,
        "transport": 1.781
      },
      "shares": {
        "power": 0.1844,
        "industrial": 0.3534,
        "buildings": 0.4008,
        "transport": 0.0614
      },
      "proxyIndex": {
        "power": 1.187,
        "industrial": 1.043,
        "buildings": 2.534,
        "transport": 0.988
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.041,
        "industrial": 9.756,
        "buildings": 13.349,
        "transport": 1.511
      },
      "shares": {
        "power": 0.141,
        "industrial": 0.3404,
        "buildings": 0.4658,
        "transport": 0.0527
      },
      "proxyIndex": {
        "power": 0.854,
        "industrial": 0.946,
        "buildings": 2.773,
        "transport": 0.799
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.584,
        "industrial": 7.898,
        "buildings": 12.027,
        "transport": 1.738
      },
      "shares": {
        "power": 0.2049,
        "industrial": 0.2899,
        "buildings": 0.4414,
        "transport": 0.0638
      },
      "proxyIndex": {
        "power": 0.996,
        "industrial": 0.646,
        "buildings": 2.107,
        "transport": 0.775
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.028,
        "industrial": 11.277,
        "buildings": 7.619,
        "transport": 2.095
      },
      "shares": {
        "power": 0.1932,
        "industrial": 0.4334,
        "buildings": 0.2928,
        "transport": 0.0805
      },
      "proxyIndex": {
        "power": 0.916,
        "industrial": 0.941,
        "buildings": 1.363,
        "transport": 0.954
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.639,
        "industrial": 14.188,
        "buildings": 4.499,
        "transport": 2.245
      },
      "shares": {
        "power": 0.2122,
        "industrial": 0.534,
        "buildings": 0.1693,
        "transport": 0.0845
      },
      "proxyIndex": {
        "power": 0.927,
        "industrial": 1.069,
        "buildings": 0.726,
        "transport": 0.923
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.482,
        "industrial": 16.439,
        "buildings": 0.981,
        "transport": 2.668
      },
      "shares": {
        "power": 0.244,
        "industrial": 0.6187,
        "buildings": 0.0369,
        "transport": 0.1004
      },
      "proxyIndex": {
        "power": 0.973,
        "industrial": 1.131,
        "buildings": 0.145,
        "transport": 1.002
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.857,
        "industrial": 16.435,
        "buildings": 0.223,
        "transport": 2.825
      },
      "shares": {
        "power": 0.2603,
        "industrial": 0.6239,
        "buildings": 0.0084,
        "transport": 0.1073
      },
      "proxyIndex": {
        "power": 1.003,
        "industrial": 1.102,
        "buildings": 0.032,
        "transport": 1.033
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.59,
        "industrial": 14.582,
        "buildings": 0.103,
        "transport": 2.731
      },
      "shares": {
        "power": 0.2745,
        "industrial": 0.6074,
        "buildings": 0.0043,
        "transport": 0.1138
      },
      "proxyIndex": {
        "power": 1.069,
        "industrial": 1.084,
        "buildings": 0.016,
        "transport": 1.107
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.785,
        "industrial": 15.881,
        "buildings": 0.164,
        "transport": 2.928
      },
      "shares": {
        "power": 0.2909,
        "industrial": 0.5935,
        "buildings": 0.0061,
        "transport": 0.1094
      },
      "proxyIndex": {
        "power": 1.177,
        "industrial": 1.101,
        "buildings": 0.024,
        "transport": 1.107
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.457,
        "industrial": 15.673,
        "buildings": 0.789,
        "transport": 3.275
      },
      "shares": {
        "power": 0.2465,
        "industrial": 0.5984,
        "buildings": 0.0301,
        "transport": 0.125
      },
      "proxyIndex": {
        "power": 0.98,
        "industrial": 1.091,
        "buildings": 0.118,
        "transport": 1.243
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.511,
        "industrial": 14.161,
        "buildings": 4.234,
        "transport": 2.33
      },
      "shares": {
        "power": 0.21,
        "industrial": 0.5398,
        "buildings": 0.1614,
        "transport": 0.0888
      },
      "proxyIndex": {
        "power": 0.933,
        "industrial": 1.099,
        "buildings": 0.704,
        "transport": 0.986
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.936,
        "industrial": 12.913,
        "buildings": 8.167,
        "transport": 2.2
      },
      "shares": {
        "power": 0.2032,
        "industrial": 0.442,
        "buildings": 0.2795,
        "transport": 0.0753
      },
      "proxyIndex": {
        "power": 1.086,
        "industrial": 1.083,
        "buildings": 1.468,
        "transport": 1.006
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.342,
        "industrial": 11.483,
        "buildings": 14.306,
        "transport": 2.009
      },
      "shares": {
        "power": 0.1858,
        "industrial": 0.3364,
        "buildings": 0.419,
        "transport": 0.0588
      },
      "proxyIndex": {
        "power": 1.286,
        "industrial": 1.067,
        "buildings": 2.85,
        "transport": 1.019
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 3.866,
        "industrial": 9.622,
        "buildings": 12.171,
        "transport": 1.63
      },
      "shares": {
        "power": 0.1417,
        "industrial": 0.3526,
        "buildings": 0.446,
        "transport": 0.0597
      },
      "proxyIndex": {
        "power": 0.906,
        "industrial": 1.034,
        "buildings": 2.802,
        "transport": 0.955
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.045,
        "industrial": 8.152,
        "buildings": 8.92,
        "transport": 1.891
      },
      "shares": {
        "power": 0.1758,
        "industrial": 0.3543,
        "buildings": 0.3877,
        "transport": 0.0822
      },
      "proxyIndex": {
        "power": 0.783,
        "industrial": 0.724,
        "buildings": 1.697,
        "transport": 0.916
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.735,
        "industrial": 13.908,
        "buildings": 8.333,
        "transport": 2.423
      },
      "shares": {
        "power": 0.1887,
        "industrial": 0.4575,
        "buildings": 0.2741,
        "transport": 0.0797
      },
      "proxyIndex": {
        "power": 0.894,
        "industrial": 0.994,
        "buildings": 1.276,
        "transport": 0.944
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.182,
        "industrial": 16.852,
        "buildings": 4.878,
        "transport": 2.699
      },
      "shares": {
        "power": 0.202,
        "industrial": 0.5505,
        "buildings": 0.1594,
        "transport": 0.0882
      },
      "proxyIndex": {
        "power": 0.82,
        "industrial": 1.024,
        "buildings": 0.635,
        "transport": 0.895
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.978,
        "industrial": 19.124,
        "buildings": 1.311,
        "transport": 3.336
      },
      "shares": {
        "power": 0.2269,
        "industrial": 0.6219,
        "buildings": 0.0426,
        "transport": 0.1085
      },
      "proxyIndex": {
        "power": 0.83,
        "industrial": 1.043,
        "buildings": 0.153,
        "transport": 0.992
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.894,
        "industrial": 19.371,
        "buildings": 0.294,
        "transport": 3.515
      },
      "shares": {
        "power": 0.254,
        "industrial": 0.6234,
        "buildings": 0.0095,
        "transport": 0.1131
      },
      "proxyIndex": {
        "power": 0.904,
        "industrial": 1.016,
        "buildings": 0.033,
        "transport": 1.006
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.891,
        "industrial": 16.825,
        "buildings": 0.102,
        "transport": 3.495
      },
      "shares": {
        "power": 0.2787,
        "industrial": 0.5943,
        "buildings": 0.0036,
        "transport": 0.1234
      },
      "proxyIndex": {
        "power": 0.995,
        "industrial": 0.973,
        "buildings": 0.013,
        "transport": 1.102
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.293,
        "industrial": 17.711,
        "buildings": 0.207,
        "transport": 3.713
      },
      "shares": {
        "power": 0.2772,
        "industrial": 0.5919,
        "buildings": 0.0069,
        "transport": 0.1241
      },
      "proxyIndex": {
        "power": 1.004,
        "industrial": 0.983,
        "buildings": 0.025,
        "transport": 1.124
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.703,
        "industrial": 17.736,
        "buildings": 0.71,
        "transport": 3.745
      },
      "shares": {
        "power": 0.2577,
        "industrial": 0.5933,
        "buildings": 0.0237,
        "transport": 0.1253
      },
      "proxyIndex": {
        "power": 0.888,
        "industrial": 0.937,
        "buildings": 0.08,
        "transport": 1.08
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.078,
        "industrial": 14.565,
        "buildings": 5.181,
        "transport": 3.259
      },
      "shares": {
        "power": 0.209,
        "industrial": 0.5008,
        "buildings": 0.1782,
        "transport": 0.1121
      },
      "proxyIndex": {
        "power": 0.854,
        "industrial": 0.938,
        "buildings": 0.715,
        "transport": 1.145
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.006,
        "industrial": 13.182,
        "buildings": 10.007,
        "transport": 3.128
      },
      "shares": {
        "power": 0.1858,
        "industrial": 0.4078,
        "buildings": 0.3096,
        "transport": 0.0968
      },
      "proxyIndex": {
        "power": 0.943,
        "industrial": 0.948,
        "buildings": 1.543,
        "transport": 1.228
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.15,
        "industrial": 12.072,
        "buildings": 14.226,
        "transport": 2.67
      },
      "shares": {
        "power": 0.1751,
        "industrial": 0.3438,
        "buildings": 0.4051,
        "transport": 0.076
      },
      "proxyIndex": {
        "power": 1.125,
        "industrial": 1.012,
        "buildings": 2.555,
        "transport": 1.221
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.514,
        "industrial": 8.208,
        "buildings": 11.718,
        "transport": 1.726
      },
      "shares": {
        "power": 0.203,
        "industrial": 0.3021,
        "buildings": 0.4313,
        "transport": 0.0635
      },
      "proxyIndex": {
        "power": 1.404,
        "industrial": 0.958,
        "buildings": 2.931,
        "transport": 1.099
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.488,
        "industrial": 6.918,
        "buildings": 10.653,
        "transport": 1.848
      },
      "shares": {
        "power": 0.1877,
        "industrial": 0.2894,
        "buildings": 0.4456,
        "transport": 0.0773
      },
      "proxyIndex": {
        "power": 1.053,
        "industrial": 0.744,
        "buildings": 2.454,
        "transport": 1.083
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.893,
        "industrial": 13.616,
        "buildings": 7.442,
        "transport": 2.632
      },
      "shares": {
        "power": 0.2254,
        "industrial": 0.4452,
        "buildings": 0.2433,
        "transport": 0.0861
      },
      "proxyIndex": {
        "power": 1.132,
        "industrial": 1.025,
        "buildings": 1.2,
        "transport": 1.08
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.694,
        "industrial": 15.574,
        "buildings": 3.844,
        "transport": 2.586
      },
      "shares": {
        "power": 0.2333,
        "industrial": 0.5427,
        "buildings": 0.1339,
        "transport": 0.0901
      },
      "proxyIndex": {
        "power": 0.96,
        "industrial": 1.023,
        "buildings": 0.541,
        "transport": 0.927
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.446,
        "industrial": 17.916,
        "buildings": 1.625,
        "transport": 2.992
      },
      "shares": {
        "power": 0.2484,
        "industrial": 0.5976,
        "buildings": 0.0542,
        "transport": 0.0998
      },
      "proxyIndex": {
        "power": 0.971,
        "industrial": 1.071,
        "buildings": 0.208,
        "transport": 0.975
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.271,
        "industrial": 17.634,
        "buildings": 0.218,
        "transport": 2.922
      },
      "shares": {
        "power": 0.2848,
        "industrial": 0.6071,
        "buildings": 0.0075,
        "transport": 0.1006
      },
      "proxyIndex": {
        "power": 1.082,
        "industrial": 1.057,
        "buildings": 0.028,
        "transport": 0.956
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.419,
        "industrial": 16.357,
        "buildings": 0.098,
        "transport": 2.785
      },
      "shares": {
        "power": 0.3287,
        "industrial": 0.5707,
        "buildings": 0.0034,
        "transport": 0.0972
      },
      "proxyIndex": {
        "power": 1.266,
        "industrial": 1.008,
        "buildings": 0.013,
        "transport": 0.936
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.644,
        "industrial": 16.175,
        "buildings": 0.214,
        "transport": 2.721
      },
      "shares": {
        "power": 0.3354,
        "industrial": 0.5625,
        "buildings": 0.0075,
        "transport": 0.0946
      },
      "proxyIndex": {
        "power": 1.316,
        "industrial": 1.011,
        "buildings": 0.029,
        "transport": 0.928
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.084,
        "industrial": 17.893,
        "buildings": 0.73,
        "transport": 3.165
      },
      "shares": {
        "power": 0.2706,
        "industrial": 0.599,
        "buildings": 0.0244,
        "transport": 0.106
      },
      "proxyIndex": {
        "power": 1.041,
        "industrial": 1.057,
        "buildings": 0.092,
        "transport": 1.02
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.263,
        "industrial": 14.845,
        "buildings": 4.468,
        "transport": 2.894
      },
      "shares": {
        "power": 0.22,
        "industrial": 0.5214,
        "buildings": 0.1569,
        "transport": 0.1016
      },
      "proxyIndex": {
        "power": 0.952,
        "industrial": 1.035,
        "buildings": 0.667,
        "transport": 1.1
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.706,
        "industrial": 14.738,
        "buildings": 8.586,
        "transport": 2.774
      },
      "shares": {
        "power": 0.2044,
        "industrial": 0.4493,
        "buildings": 0.2617,
        "transport": 0.0846
      },
      "proxyIndex": {
        "power": 0.997,
        "industrial": 1.004,
        "buildings": 1.253,
        "transport": 1.031
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.924,
        "industrial": 11.357,
        "buildings": 15,
        "transport": 2.081
      },
      "shares": {
        "power": 0.1724,
        "industrial": 0.3305,
        "buildings": 0.4365,
        "transport": 0.0606
      },
      "proxyIndex": {
        "power": 1.142,
        "industrial": 1.003,
        "buildings": 2.839,
        "transport": 1.003
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.079,
        "industrial": 8.437,
        "buildings": 11.857,
        "transport": 1.682
      },
      "shares": {
        "power": 0.1566,
        "industrial": 0.3238,
        "buildings": 0.4551,
        "transport": 0.0646
      },
      "proxyIndex": {
        "power": 0.966,
        "industrial": 0.916,
        "buildings": 2.758,
        "transport": 0.996
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.019,
        "industrial": 9.132,
        "buildings": 10.01,
        "transport": 1.895
      },
      "shares": {
        "power": 0.1926,
        "industrial": 0.3505,
        "buildings": 0.3842,
        "transport": 0.0727
      },
      "proxyIndex": {
        "power": 1.058,
        "industrial": 0.882,
        "buildings": 2.073,
        "transport": 0.999
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.583,
        "industrial": 15.114,
        "buildings": 7.644,
        "transport": 2.883
      },
      "shares": {
        "power": 0.2043,
        "industrial": 0.469,
        "buildings": 0.2372,
        "transport": 0.0895
      },
      "proxyIndex": {
        "power": 1.036,
        "industrial": 1.091,
        "buildings": 1.182,
        "transport": 1.135
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.615,
        "industrial": 16.767,
        "buildings": 4.436,
        "transport": 3.316
      },
      "shares": {
        "power": 0.2125,
        "industrial": 0.5385,
        "buildings": 0.1425,
        "transport": 0.1065
      },
      "proxyIndex": {
        "power": 0.899,
        "industrial": 1.045,
        "buildings": 0.592,
        "transport": 1.127
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.158,
        "industrial": 20.029,
        "buildings": 1.371,
        "transport": 3.878
      },
      "shares": {
        "power": 0.244,
        "industrial": 0.599,
        "buildings": 0.041,
        "transport": 0.116
      },
      "proxyIndex": {
        "power": 0.932,
        "industrial": 1.049,
        "buildings": 0.154,
        "transport": 1.108
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.822,
        "industrial": 19.42,
        "buildings": 0.29,
        "transport": 3.771
      },
      "shares": {
        "power": 0.2731,
        "industrial": 0.6012,
        "buildings": 0.009,
        "transport": 0.1167
      },
      "proxyIndex": {
        "power": 1.027,
        "industrial": 1.036,
        "buildings": 0.033,
        "transport": 1.097
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.786,
        "industrial": 18.712,
        "buildings": 0.121,
        "transport": 3.602
      },
      "shares": {
        "power": 0.3037,
        "industrial": 0.5808,
        "buildings": 0.0037,
        "transport": 0.1118
      },
      "proxyIndex": {
        "power": 1.169,
        "industrial": 1.025,
        "buildings": 0.014,
        "transport": 1.076
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.859,
        "industrial": 19.03,
        "buildings": 0.179,
        "transport": 3.641
      },
      "shares": {
        "power": 0.3014,
        "industrial": 0.5818,
        "buildings": 0.0055,
        "transport": 0.1113
      },
      "proxyIndex": {
        "power": 1.157,
        "industrial": 1.024,
        "buildings": 0.021,
        "transport": 1.069
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.321,
        "industrial": 18.891,
        "buildings": 0.722,
        "transport": 3.624
      },
      "shares": {
        "power": 0.2637,
        "industrial": 0.5986,
        "buildings": 0.0229,
        "transport": 0.1148
      },
      "proxyIndex": {
        "power": 0.98,
        "industrial": 1.019,
        "buildings": 0.084,
        "transport": 1.067
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.026,
        "industrial": 17.078,
        "buildings": 3.341,
        "transport": 3.355
      },
      "shares": {
        "power": 0.2281,
        "industrial": 0.5545,
        "buildings": 0.1085,
        "transport": 0.1089
      },
      "proxyIndex": {
        "power": 0.914,
        "industrial": 1.019,
        "buildings": 0.427,
        "transport": 1.092
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.664,
        "industrial": 14.557,
        "buildings": 10.761,
        "transport": 2.626
      },
      "shares": {
        "power": 0.1926,
        "industrial": 0.4206,
        "buildings": 0.3109,
        "transport": 0.0759
      },
      "proxyIndex": {
        "power": 0.989,
        "industrial": 0.99,
        "buildings": 1.569,
        "transport": 0.974
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.841,
        "industrial": 12.016,
        "buildings": 16.581,
        "transport": 2.356
      },
      "shares": {
        "power": 0.181,
        "industrial": 0.3179,
        "buildings": 0.4387,
        "transport": 0.0623
      },
      "proxyIndex": {
        "power": 1.183,
        "industrial": 0.952,
        "buildings": 2.815,
        "transport": 1.018
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.332,
        "industrial": 10.361,
        "buildings": 14.039,
        "transport": 1.966
      },
      "shares": {
        "power": 0.1682,
        "industrial": 0.3269,
        "buildings": 0.4429,
        "transport": 0.062
      },
      "proxyIndex": {
        "power": 1.123,
        "industrial": 1.001,
        "buildings": 2.906,
        "transport": 1.036
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.587,
        "industrial": 8.228,
        "buildings": 12.296,
        "transport": 1.802
      },
      "shares": {
        "power": 0.1705,
        "industrial": 0.3057,
        "buildings": 0.4569,
        "transport": 0.0669
      },
      "proxyIndex": {
        "power": 0.924,
        "industrial": 0.76,
        "buildings": 2.433,
        "transport": 0.908
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.135,
        "industrial": 16.159,
        "buildings": 10.045,
        "transport": 2.973
      },
      "shares": {
        "power": 0.1965,
        "industrial": 0.445,
        "buildings": 0.2766,
        "transport": 0.0819
      },
      "proxyIndex": {
        "power": 0.974,
        "industrial": 1.011,
        "buildings": 1.347,
        "transport": 1.015
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.574,
        "industrial": 19.25,
        "buildings": 3.409,
        "transport": 3.473
      },
      "shares": {
        "power": 0.2247,
        "industrial": 0.5711,
        "buildings": 0.1011,
        "transport": 0.103
      },
      "proxyIndex": {
        "power": 0.858,
        "industrial": 1,
        "buildings": 0.379,
        "transport": 0.984
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.368,
        "industrial": 22.189,
        "buildings": 1.237,
        "transport": 3.823
      },
      "shares": {
        "power": 0.2349,
        "industrial": 0.623,
        "buildings": 0.0347,
        "transport": 0.1073
      },
      "proxyIndex": {
        "power": 0.857,
        "industrial": 1.042,
        "buildings": 0.124,
        "transport": 0.979
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.964,
        "industrial": 21.3,
        "buildings": 0.317,
        "transport": 3.684
      },
      "shares": {
        "power": 0.2616,
        "industrial": 0.6216,
        "buildings": 0.0093,
        "transport": 0.1075
      },
      "proxyIndex": {
        "power": 0.933,
        "industrial": 1.016,
        "buildings": 0.032,
        "transport": 0.959
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 10.342,
        "industrial": 20.478,
        "buildings": 0.117,
        "transport": 3.673
      },
      "shares": {
        "power": 0.2988,
        "industrial": 0.5917,
        "buildings": 0.0034,
        "transport": 0.1061
      },
      "proxyIndex": {
        "power": 1.096,
        "industrial": 0.994,
        "buildings": 0.012,
        "transport": 0.973
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 11.228,
        "industrial": 20.875,
        "buildings": 0.127,
        "transport": 3.72
      },
      "shares": {
        "power": 0.3123,
        "industrial": 0.5807,
        "buildings": 0.0035,
        "transport": 0.1035
      },
      "proxyIndex": {
        "power": 1.165,
        "industrial": 0.993,
        "buildings": 0.013,
        "transport": 0.965
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.774,
        "industrial": 20.985,
        "buildings": 0.983,
        "transport": 3.844
      },
      "shares": {
        "power": 0.2747,
        "industrial": 0.5897,
        "buildings": 0.0276,
        "transport": 0.108
      },
      "proxyIndex": {
        "power": 1.018,
        "industrial": 1.002,
        "buildings": 0.101,
        "transport": 1.001
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.713,
        "industrial": 19.272,
        "buildings": 4.601,
        "transport": 3.487
      },
      "shares": {
        "power": 0.2199,
        "industrial": 0.5495,
        "buildings": 0.1312,
        "transport": 0.0994
      },
      "proxyIndex": {
        "power": 0.901,
        "industrial": 1.032,
        "buildings": 0.528,
        "transport": 1.018
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.986,
        "industrial": 15.844,
        "buildings": 9.391,
        "transport": 2.733
      },
      "shares": {
        "power": 0.1999,
        "industrial": 0.4533,
        "buildings": 0.2687,
        "transport": 0.0782
      },
      "proxyIndex": {
        "power": 0.979,
        "industrial": 1.018,
        "buildings": 1.292,
        "transport": 0.957
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.514,
        "industrial": 12.814,
        "buildings": 15.9,
        "transport": 2.321
      },
      "shares": {
        "power": 0.1735,
        "industrial": 0.3413,
        "buildings": 0.4234,
        "transport": 0.0618
      },
      "proxyIndex": {
        "power": 1.133,
        "industrial": 1.021,
        "buildings": 2.715,
        "transport": 1.009
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.402,
        "industrial": 9.802,
        "buildings": 12.825,
        "transport": 1.806
      },
      "shares": {
        "power": 0.1527,
        "industrial": 0.3399,
        "buildings": 0.4448,
        "transport": 0.0626
      },
      "proxyIndex": {
        "power": 0.978,
        "industrial": 0.999,
        "buildings": 2.8,
        "transport": 1.004
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.664,
        "industrial": 8.947,
        "buildings": 11.712,
        "transport": 1.746
      },
      "shares": {
        "power": 0.1723,
        "industrial": 0.3305,
        "buildings": 0.4327,
        "transport": 0.0645
      },
      "proxyIndex": {
        "power": 0.976,
        "industrial": 0.858,
        "buildings": 2.406,
        "transport": 0.913
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.369,
        "industrial": 15.334,
        "buildings": 10.346,
        "transport": 2.618
      },
      "shares": {
        "power": 0.1837,
        "industrial": 0.4423,
        "buildings": 0.2984,
        "transport": 0.0755
      },
      "proxyIndex": {
        "power": 0.962,
        "industrial": 1.062,
        "buildings": 1.535,
        "transport": 0.988
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.507,
        "industrial": 19.813,
        "buildings": 3.745,
        "transport": 3.306
      },
      "shares": {
        "power": 0.2184,
        "industrial": 0.5764,
        "buildings": 0.109,
        "transport": 0.0962
      },
      "proxyIndex": {
        "power": 0.845,
        "industrial": 1.023,
        "buildings": 0.414,
        "transport": 0.931
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.522,
        "industrial": 22.112,
        "buildings": 1.528,
        "transport": 3.753
      },
      "shares": {
        "power": 0.2373,
        "industrial": 0.6157,
        "buildings": 0.0425,
        "transport": 0.1045
      },
      "proxyIndex": {
        "power": 0.871,
        "industrial": 1.036,
        "buildings": 0.153,
        "transport": 0.959
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.237,
        "industrial": 21.9,
        "buildings": 0.32,
        "transport": 3.856
      },
      "shares": {
        "power": 0.2616,
        "industrial": 0.6202,
        "buildings": 0.0091,
        "transport": 0.1092
      },
      "proxyIndex": {
        "power": 0.942,
        "industrial": 1.024,
        "buildings": 0.032,
        "transport": 0.984
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 10.901,
        "industrial": 21.011,
        "buildings": 0.112,
        "transport": 3.819
      },
      "shares": {
        "power": 0.3041,
        "industrial": 0.5862,
        "buildings": 0.0031,
        "transport": 0.1065
      },
      "proxyIndex": {
        "power": 1.144,
        "industrial": 1.011,
        "buildings": 0.012,
        "transport": 1.002
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 11.561,
        "industrial": 21.537,
        "buildings": 0.197,
        "transport": 3.96
      },
      "shares": {
        "power": 0.3103,
        "industrial": 0.5781,
        "buildings": 0.0053,
        "transport": 0.1063
      },
      "proxyIndex": {
        "power": 1.19,
        "industrial": 1.016,
        "buildings": 0.02,
        "transport": 1.019
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 9.566,
        "industrial": 21.215,
        "buildings": 0.922,
        "transport": 4.086
      },
      "shares": {
        "power": 0.2673,
        "industrial": 0.5928,
        "buildings": 0.0258,
        "transport": 0.1142
      },
      "proxyIndex": {
        "power": 0.98,
        "industrial": 0.996,
        "buildings": 0.093,
        "transport": 1.047
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 8.064,
        "industrial": 17.876,
        "buildings": 5.923,
        "transport": 3.476
      },
      "shares": {
        "power": 0.2282,
        "industrial": 0.5058,
        "buildings": 0.1676,
        "transport": 0.0984
      },
      "proxyIndex": {
        "power": 0.976,
        "industrial": 0.992,
        "buildings": 0.704,
        "transport": 1.052
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.31,
        "industrial": 16.59,
        "buildings": 11.107,
        "transport": 3.123
      },
      "shares": {
        "power": 0.1917,
        "industrial": 0.4351,
        "buildings": 0.2913,
        "transport": 0.0819
      },
      "proxyIndex": {
        "power": 0.949,
        "industrial": 0.987,
        "buildings": 1.416,
        "transport": 1.014
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 7.348,
        "industrial": 14.401,
        "buildings": 15.442,
        "transport": 2.753
      },
      "shares": {
        "power": 0.184,
        "industrial": 0.3605,
        "buildings": 0.3866,
        "transport": 0.0689
      },
      "proxyIndex": {
        "power": 1.115,
        "industrial": 1.001,
        "buildings": 2.301,
        "transport": 1.044
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 5.031,
        "industrial": 10.854,
        "buildings": 12.446,
        "transport": 1.881
      },
      "shares": {
        "power": 0.1665,
        "industrial": 0.3593,
        "buildings": 0.4119,
        "transport": 0.0623
      },
      "proxyIndex": {
        "power": 1.124,
        "industrial": 1.112,
        "buildings": 2.731,
        "transport": 1.051
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 4.519,
        "industrial": 8.471,
        "buildings": 9.906,
        "transport": 1.985
      },
      "shares": {
        "power": 0.1816,
        "industrial": 0.3405,
        "buildings": 0.3981,
        "transport": 0.0798
      },
      "proxyIndex": {
        "power": 0.865,
        "industrial": 0.743,
        "buildings": 1.862,
        "transport": 0.95
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
        "power": 6.617,
        "industrial": 14.822,
        "buildings": 9.372,
        "transport": 2.743
      },
      "shares": {
        "power": 0.1972,
        "industrial": 0.4417,
        "buildings": 0.2793,
        "transport": 0.0818
      },
      "proxyIndex": {
        "power": 0.999,
        "industrial": 1.026,
        "buildings": 1.39,
        "transport": 1.036
      },
      "source": {
        "controlTotal": "JODI TOTDEMC calculated demand",
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
      "text": "Each month sums exactly to JODI China TOTDEMC calculated demand. Because China stock change is reported as zero in the JODI extract, this is apparent demand and can include storage injection."
    },
    {
      "title": "Annual sector anchor",
      "text": "The four-sector annual split is derived from the IEA 2023 China natural-gas balance: power is electricity plus CHP transformation use; industrial includes industry final use and non-energy/chemical use; buildings include residential plus tertiary; transport is transport final gas use. The four buckets are normalized to 100%."
    },
    {
      "title": "Monthly shape",
      "text": "Carbon Monitor China daily provincial emissions are summed to national monthly sector totals. Each sector's monthly value is converted to an activity index against a trailing 12-month mean, with recent monthly climatology as the fallback for short history."
    },
    {
      "title": "Reconciliation",
      "text": "For each month, anchor share times proxy index creates preliminary sector weights. Those weights are normalized, then multiplied by the JODI control total."
    }
  ],
  "sources": [
    {
      "name": "JODI Gas World Database",
      "url": "https://www.jodidata.org/gas/database/data-downloads.aspx",
      "note": "Monthly China gas balance. The sector model uses JODI TOTDEMC calculated demand as the control total."
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
      "name": "IEA Energy Statistics Data Browser",
      "url": "https://www.iea.org/data-and-statistics/data-tools/energy-statistics-data-browser",
      "note": "Free browser for annual China gas balance and sector consumption structure; used for the 2023 sector anchor."
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
