const rates = {
    "usd": {
        "code": "USD",
        "alphaCode": "USD",
        "name": "USD",
        "rate": 1,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1
    },
    "eur": {
        "code": "EUR",
        "alphaCode": "EUR",
        "numericCode": "978",
        "name": "Euro",
        "rate": 0.88435093153816,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.1307728237032
    },
    "gbp": {
        "code": "GBP",
        "alphaCode": "GBP",
        "numericCode": "826",
        "name": "U.K. Pound Sterling",
        "rate": 0.73891390712602,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.3533376356245
    },
    "cad": {
        "code": "CAD",
        "alphaCode": "CAD",
        "numericCode": "124",
        "name": "Canadian Dollar",
        "rate": 1.2746104446931,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.78455343290458
    },
    "jpy": {
        "code": "JPY",
        "alphaCode": "JPY",
        "numericCode": "392",
        "name": "Japanese Yen",
        "rate": 115.8194712948,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0086341267907765
    },
    "aud": {
        "code": "AUD",
        "alphaCode": "AUD",
        "numericCode": "036",
        "name": "Australian Dollar",
        "rate": 1.3949094574362,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.71689240808358
    },
    "chf": {
        "code": "CHF",
        "alphaCode": "CHF",
        "numericCode": "756",
        "name": "Swiss Franc",
        "rate": 0.91952008951809,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.0875238196526
    },
    "sek": {
        "code": "SEK",
        "alphaCode": "SEK",
        "numericCode": "752",
        "name": "Swedish Krona",
        "rate": 9.1253117145938,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.10958529760696
    },
    "mad": {
        "code": "MAD",
        "alphaCode": "MAD",
        "numericCode": "504",
        "name": "Moroccan Dirham",
        "rate": 9.3054046934623,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.10746442878541
    },
    "ron": {
        "code": "RON",
        "alphaCode": "RON",
        "numericCode": "946",
        "name": "Romanian New Leu",
        "rate": 4.36969685343,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.22884882717094
    },
    "byn": {
        "code": "BYN",
        "alphaCode": "BYN",
        "numericCode": "933",
        "name": "Belarussian Ruble",
        "rate": 2.5854510074082,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.38677971353341
    },
    "rsd": {
        "code": "RSD",
        "alphaCode": "RSD",
        "numericCode": "941",
        "name": "Serbian Dinar",
        "rate": 104.46385786955,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0095726887786277
    },
    "gmd": {
        "code": "GMD",
        "alphaCode": "GMD",
        "numericCode": "270",
        "name": "Gambian dalasi",
        "rate": 52.79030144168,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.018942873457632
    },
    "awg": {
        "code": "AWG",
        "alphaCode": "AWG",
        "numericCode": "533",
        "name": "Aruban florin",
        "rate": 1.8043721721991,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.55420938950817
    },
    "mmk": {
        "code": "MMK",
        "alphaCode": "MMK",
        "numericCode": "104",
        "name": "Myanma Kyat",
        "rate": 1772.0633523977,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00056431391047444
    },
    "mvr": {
        "code": "MVR",
        "alphaCode": "MVR",
        "numericCode": "462",
        "name": "Maldivian rufiyaa",
        "rate": 15.408951798011,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.064897341046202
    },
    "bhd": {
        "code": "BHD",
        "alphaCode": "BHD",
        "numericCode": "048",
        "name": "Bahrain Dinar",
        "rate": 0.37628813952813,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 2.6575379209507
    },
    "omr": {
        "code": "OMR",
        "alphaCode": "OMR",
        "numericCode": "512",
        "name": "Omani Rial",
        "rate": 0.3844269683687,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 2.6012743180934
    },
    "rub": {
        "code": "RUB",
        "alphaCode": "RUB",
        "numericCode": "643",
        "name": "Russian Rouble",
        "rate": 76.312318104729,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.013104044338263
    },
    "lyd": {
        "code": "LYD",
        "alphaCode": "LYD",
        "numericCode": "434",
        "name": "Libyan Dinar",
        "rate": 4.6255226685657,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.21619178450812
    },
    "clp": {
        "code": "CLP",
        "alphaCode": "CLP",
        "numericCode": "152",
        "name": "Chilean Peso",
        "rate": 837.5911085518,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0011938999707495
    },
    "bsd": {
        "code": "BSD",
        "alphaCode": "BSD",
        "numericCode": "044",
        "name": "Bahamian Dollar",
        "rate": 0.99710367363108,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.0029047394424
    },
    "djf": {
        "code": "DJF",
        "alphaCode": "DJF",
        "numericCode": "262",
        "name": "Djiboutian franc",
        "rate": 177.46398202406,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0056349462499068
    },
    "sll": {
        "code": "SLL",
        "alphaCode": "SLL",
        "numericCode": "694",
        "name": "Sierra Leonean leone",
        "rate": 11219.777158775,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 8.912832989895e-5
    },
    "kes": {
        "code": "KES",
        "alphaCode": "KES",
        "numericCode": "404",
        "name": "Kenyan shilling",
        "rate": 112.79157682507,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0088659102758259
    },
    "bdt": {
        "code": "BDT",
        "alphaCode": "BDT",
        "numericCode": "050",
        "name": "Bangladeshi taka",
        "rate": 86.31274449456,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.011585774567312
    },
    "qar": {
        "code": "QAR",
        "alphaCode": "QAR",
        "numericCode": "634",
        "name": "Qatari Rial",
        "rate": 3.6373510385846,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.27492534797772
    },
    "mxn": {
        "code": "MXN",
        "alphaCode": "MXN",
        "numericCode": "484",
        "name": "Mexican Peso",
        "rate": 20.537007214617,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.048692586487882
    },
    "amd": {
        "code": "AMD",
        "alphaCode": "AMD",
        "numericCode": "051",
        "name": "Armenia Dram",
        "rate": 483.31981856687,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0020690233704158
    },
    "htg": {
        "code": "HTG",
        "alphaCode": "HTG",
        "numericCode": "332",
        "name": "Haitian gourde",
        "rate": 99.590106792171,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.010041158024731
    },
    "fjd": {
        "code": "FJD",
        "alphaCode": "FJD",
        "numericCode": "242",
        "name": "Fiji Dollar",
        "rate": 2.1156048111771,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.47267807045854
    },
    "cdf": {
        "code": "CDF",
        "alphaCode": "CDF",
        "numericCode": "976",
        "name": "Congolese franc",
        "rate": 1994.0099009902,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00050150202338685
    },
    "mzn": {
        "code": "MZN",
        "alphaCode": "MZN",
        "numericCode": "943",
        "name": "Mozambican metical",
        "rate": 63.934920634922,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.015640904689788
    },
    "ugx": {
        "code": "UGX",
        "alphaCode": "UGX",
        "numericCode": "800",
        "name": "Ugandan shilling",
        "rate": 3530.1489921122,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00028327416271506
    },
    "hkd": {
        "code": "HKD",
        "alphaCode": "HKD",
        "numericCode": "344",
        "name": "Hong Kong Dollar",
        "rate": 7.8009613885417,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.12818932823701
    },
    "thb": {
        "code": "THB",
        "alphaCode": "THB",
        "numericCode": "764",
        "name": "Thai Baht",
        "rate": 33.595448619144,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.029765936789133
    },
    "xaf": {
        "code": "XAF",
        "alphaCode": "XAF",
        "numericCode": "950",
        "name": "Central African CFA Franc",
        "rate": 581.09099949384,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0017209008586797
    },
    "mdl": {
        "code": "MDL",
        "alphaCode": "MDL",
        "numericCode": "498",
        "name": "Moldova Lei",
        "rate": 17.852566775591,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.05601435427018
    },
    "uyu": {
        "code": "UYU",
        "alphaCode": "UYU",
        "numericCode": "858",
        "name": "Uruguayan Peso",
        "rate": 44.61926669491,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.022411843001312
    },
    "lrd": {
        "code": "LRD",
        "alphaCode": "LRD",
        "numericCode": "430",
        "name": "Liberian dollar",
        "rate": 145.41155234657,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0068770326969389
    },
    "sdg": {
        "code": "SDG",
        "alphaCode": "SDG",
        "numericCode": "938",
        "name": "Sudanese pound",
        "rate": 437.8152173913,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.002284068621366
    },
    "top": {
        "code": "TOP",
        "alphaCode": "TOP",
        "numericCode": "776",
        "name": "Tongan pa\u02bbanga",
        "rate": 2.26655787519,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.44119764641623
    },
    "vuv": {
        "code": "VUV",
        "alphaCode": "VUV",
        "numericCode": "548",
        "name": "Vanuatu vatu",
        "rate": 111.83330094122,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0089418803843195
    },
    "jod": {
        "code": "JOD",
        "alphaCode": "JOD",
        "numericCode": "400",
        "name": "Jordanian Dinar",
        "rate": 0.70846807432356,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.41149620744
    },
    "bgn": {
        "code": "BGN",
        "alphaCode": "BGN",
        "numericCode": "975",
        "name": "Bulgarian Lev",
        "rate": 1.7287654323838,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.57844747544558
    },
    "vnd": {
        "code": "VND",
        "alphaCode": "VND",
        "numericCode": "704",
        "name": "Vietnamese Dong",
        "rate": 22845.923559871,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 4.3771484981964e-5
    },
    "uzs": {
        "code": "UZS",
        "alphaCode": "UZS",
        "numericCode": "860",
        "name": "Uzbekistan Sum",
        "rate": 10907.019562531,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 9.1684075036897e-5
    },
    "mga": {
        "code": "MGA",
        "alphaCode": "MGA",
        "numericCode": "969",
        "name": "Malagasy ariary",
        "rate": 3960.5703048182,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0002524888899923
    },
    "ttd": {
        "code": "TTD",
        "alphaCode": "TTD",
        "numericCode": "780",
        "name": "Trinidad Tobago Dollar",
        "rate": 6.7729947872877,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.14764517490504
    },
    "lak": {
        "code": "LAK",
        "alphaCode": "LAK",
        "numericCode": "418",
        "name": "Lao kip",
        "rate": 11188.611111111,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 8.9376598227365e-5
    },
    "bwp": {
        "code": "BWP",
        "alphaCode": "BWP",
        "numericCode": "072",
        "name": "Botswana Pula",
        "rate": 11.726055312955,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.085280170808609
    },
    "nok": {
        "code": "NOK",
        "alphaCode": "NOK",
        "numericCode": "578",
        "name": "Norwegian Krone",
        "rate": 8.8739217439718,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.11268974742529
    },
    "lkr": {
        "code": "LKR",
        "alphaCode": "LKR",
        "numericCode": "144",
        "name": "Sri Lanka Rupee",
        "rate": 201.50840300229,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0049625722059275
    },
    "pln": {
        "code": "PLN",
        "alphaCode": "PLN",
        "numericCode": "985",
        "name": "Polish Zloty",
        "rate": 4.0329381433606,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.24795817948418
    },
    "pen": {
        "code": "PEN",
        "alphaCode": "PEN",
        "numericCode": "604",
        "name": "Peruvian Nuevo Sol",
        "rate": 3.9661846589081,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.25213147798199
    },
    "iqd": {
        "code": "IQD",
        "alphaCode": "IQD",
        "numericCode": "368",
        "name": "Iraqi dinar",
        "rate": 1470.1713968953,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.000680192800725
    },
    "nio": {
        "code": "NIO",
        "alphaCode": "NIO",
        "numericCode": "558",
        "name": "Nicaraguan C\u00f3rdoba",
        "rate": 35.301489921122,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.028327416271506
    },
    "cve": {
        "code": "CVE",
        "alphaCode": "CVE",
        "numericCode": "132",
        "name": "Cape Verde escudo",
        "rate": 97.764563106797,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.010228655130465
    },
    "aoa": {
        "code": "AOA",
        "alphaCode": "AOA",
        "numericCode": "973",
        "name": "Angolan kwanza",
        "rate": 559.43055555557,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0017875319645472
    },
    "khr": {
        "code": "KHR",
        "alphaCode": "KHR",
        "numericCode": "116",
        "name": "Cambodian riel",
        "rate": 4060.3830645161,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00024628218178207
    },
    "dop": {
        "code": "DOP",
        "alphaCode": "DOP",
        "numericCode": "214",
        "name": "Dominican Peso",
        "rate": 57.335755063268,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.017441123761195
    },
    "nzd": {
        "code": "NZD",
        "alphaCode": "NZD",
        "numericCode": "554",
        "name": "New Zealand Dollar",
        "rate": 1.480709385611,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.67535196961513
    },
    "hrk": {
        "code": "HRK",
        "alphaCode": "HRK",
        "numericCode": "191",
        "name": "Croatian Kuna",
        "rate": 6.6463360056842,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.15045883914758
    },
    "dzd": {
        "code": "DZD",
        "alphaCode": "DZD",
        "numericCode": "012",
        "name": "Algerian Dinar",
        "rate": 139.75770344396,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0071552406440406
    },
    "ars": {
        "code": "ARS",
        "alphaCode": "ARS",
        "numericCode": "032",
        "name": "Argentine Peso",
        "rate": 102.99403322277,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0097093003226416
    },
    "stn": {
        "code": "STN",
        "alphaCode": "STN",
        "numericCode": "930",
        "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
        "rate": 21.831436314364,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.045805506591522
    },
    "xpf": {
        "code": "XPF",
        "alphaCode": "XPF",
        "numericCode": "953",
        "name": "CFP Franc",
        "rate": 105.27154879515,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0094992427815983
    },
    "hnl": {
        "code": "HNL",
        "alphaCode": "HNL",
        "numericCode": "340",
        "name": "Honduran Lempira",
        "rate": 24.470838396112,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.040864966856178
    },
    "scr": {
        "code": "SCR",
        "alphaCode": "SCR",
        "numericCode": "690",
        "name": "Seychelles rupee",
        "rate": 13.245314041434,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.07549839866928
    },
    "ang": {
        "code": "ANG",
        "alphaCode": "ANG",
        "numericCode": "532",
        "name": "Neth. Antillean Guilder",
        "rate": 1.7888326740657,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.55902377818669
    },
    "pkr": {
        "code": "PKR",
        "alphaCode": "PKR",
        "numericCode": "586",
        "name": "Pakistani Rupee",
        "rate": 178.38711950006,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0056057859042881
    },
    "krw": {
        "code": "KRW",
        "alphaCode": "KRW",
        "numericCode": "410",
        "name": "South Korean Won",
        "rate": 1202.4604737269,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00083162816728653
    },
    "azn": {
        "code": "AZN",
        "alphaCode": "AZN",
        "numericCode": "944",
        "name": "Azerbaijan Manat",
        "rate": 1.7101070167995,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.58475872572672
    },
    "crc": {
        "code": "CRC",
        "alphaCode": "CRC",
        "numericCode": "188",
        "name": "Costa Rican Col\u00f3n",
        "rate": 641.7109256799,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0015583340722156
    },
    "bnd": {
        "code": "BND",
        "alphaCode": "BND",
        "numericCode": "096",
        "name": "Brunei Dollar",
        "rate": 1.3511908755452,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.74008788698821
    },
    "kmf": {
        "code": "KMF",
        "alphaCode": "KMF",
        "numericCode": "174",
        "name": "\tComoro franc",
        "rate": 435.49572926803,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.002296233769458
    },
    "lsl": {
        "code": "LSL",
        "alphaCode": "LSL",
        "numericCode": "426",
        "name": "Lesotho loti",
        "rate": 15.926848556742,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.062787060254722
    },
    "tzs": {
        "code": "TZS",
        "alphaCode": "TZS",
        "numericCode": "834",
        "name": "Tanzanian shilling",
        "rate": 2300.3426613364,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00043471784304476
    },
    "bbd": {
        "code": "BBD",
        "alphaCode": "BBD",
        "numericCode": "052",
        "name": "Barbadian Dollar",
        "rate": 2.0011583958716,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.49971056867013
    },
    "brl": {
        "code": "BRL",
        "alphaCode": "BRL",
        "numericCode": "986",
        "name": "Brazilian Real",
        "rate": 5.6858087112227,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.17587647611609
    },
    "egp": {
        "code": "EGP",
        "alphaCode": "EGP",
        "numericCode": "818",
        "name": "Egyptian Pound",
        "rate": 15.712005150049,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.063645600319631
    },
    "sgd": {
        "code": "SGD",
        "alphaCode": "SGD",
        "numericCode": "702",
        "name": "Singapore Dollar",
        "rate": 1.3599078889419,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.73534392154903
    },
    "zar": {
        "code": "ZAR",
        "alphaCode": "ZAR",
        "numericCode": "710",
        "name": "South African Rand",
        "rate": 15.736214143811,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.063547686302509
    },
    "kgs": {
        "code": "KGS",
        "alphaCode": "KGS",
        "numericCode": "417",
        "name": "Kyrgyzstan Som",
        "rate": 85.321223473012,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.011720413272277
    },
    "pyg": {
        "code": "PYG",
        "alphaCode": "PYG",
        "numericCode": "600",
        "name": "Paraguayan Guaran\u00ed",
        "rate": 6954.4596912522,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00014379262292049
    },
    "jmd": {
        "code": "JMD",
        "alphaCode": "JMD",
        "numericCode": "388",
        "name": "Jamaican Dollar",
        "rate": 153.15209125476,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0065294570371655
    },
    "ssp": {
        "code": "SSP",
        "alphaCode": "SSP",
        "numericCode": "728",
        "name": "South Sudanese pound",
        "rate": 430.65326633169,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0023220536756124
    },
    "mru": {
        "code": "MRU",
        "alphaCode": "MRU",
        "numericCode": "929",
        "name": "Mauritanian ouguiya",
        "rate": 36.18957771788,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.02763226495196
    },
    "mnt": {
        "code": "MNT",
        "alphaCode": "MNT",
        "numericCode": "496",
        "name": "Mongolian togrog",
        "rate": 2850.601556971,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0003508031480424
    },
    "dkk": {
        "code": "DKK",
        "alphaCode": "DKK",
        "numericCode": "208",
        "name": "Danish Krone",
        "rate": 6.5760266004137,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.15206751139618
    },
    "inr": {
        "code": "INR",
        "alphaCode": "INR",
        "numericCode": "356",
        "name": "Indian Rupee",
        "rate": 74.401122603108,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.013440657412315
    },
    "try": {
        "code": "TRY",
        "alphaCode": "TRY",
        "numericCode": "949",
        "name": "Turkish Lira",
        "rate": 13.747405237938,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.072740999679005
    },
    "twd": {
        "code": "TWD",
        "alphaCode": "TWD",
        "numericCode": "901",
        "name": "New Taiwan Dollar ",
        "rate": 27.662478532074,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.03615005064859
    },
    "tmt": {
        "code": "TMT",
        "alphaCode": "TMT",
        "numericCode": "934",
        "name": "New Turkmenistan Manat",
        "rate": 3.5216623598332,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.28395680727535
    },
    "afn": {
        "code": "AFN",
        "alphaCode": "AFN",
        "numericCode": "971",
        "name": "Afghan afghani",
        "rate": 104.55560170284,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0095642890836411
    },
    "srd": {
        "code": "SRD",
        "alphaCode": "SRD",
        "numericCode": "968",
        "name": "Surinamese dollar",
        "rate": 21.210637177462,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.047146155564934
    },
    "ghs": {
        "code": "GHS",
        "alphaCode": "GHS",
        "numericCode": "936",
        "name": "Ghanaian Cedi",
        "rate": 6.1307458143076,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.16311229176494
    },
    "cup": {
        "code": "CUP",
        "alphaCode": "CUP",
        "numericCode": "192",
        "name": "Cuban peso",
        "rate": 0.99710367363108,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.0029047394424
    },
    "lbp": {
        "code": "LBP",
        "alphaCode": "LBP",
        "numericCode": "422",
        "name": "Lebanese Pound",
        "rate": 1517.1795144085,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00065911778435123
    },
    "huf": {
        "code": "HUF",
        "alphaCode": "HUF",
        "numericCode": "348",
        "name": "Hungarian Forint",
        "rate": 318.5029643489,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0031396882036695
    },
    "ngn": {
        "code": "NGN",
        "alphaCode": "NGN",
        "numericCode": "566",
        "name": "Nigerian Naira",
        "rate": 412.44501532176,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0024245656095998
    },
    "irr": {
        "code": "IRR",
        "alphaCode": "IRR",
        "numericCode": "364",
        "name": "Iranian rial",
        "rate": 42303.412211121,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 2.3638755072744e-5
    },
    "svc": {
        "code": "SVC",
        "alphaCode": "SVC",
        "numericCode": "222",
        "name": "Salvadoran colon",
        "rate": 8.7259532062395,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.11460066039375
    },
    "sbd": {
        "code": "SBD",
        "alphaCode": "SBD",
        "numericCode": "090",
        "name": "Solomon Islands dollar",
        "rate": 8.0703265878582,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.1239107227091
    },
    "zmw": {
        "code": "ZMW",
        "alphaCode": "ZMW",
        "numericCode": "967",
        "name": "Zambian kwacha",
        "rate": 16.713278008299,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.059832667146651
    },
    "yer": {
        "code": "YER",
        "alphaCode": "YER",
        "numericCode": "886",
        "name": "Yemeni rial",
        "rate": 249.40557275542,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0040095335038109
    },
    "ves": {
        "code": "VES",
        "alphaCode": "VES",
        "numericCode": "928",
        "name": "Venezuelan Bolivar",
        "rate": 4.5903885881232,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.2178464809248
    },
    "npr": {
        "code": "NPR",
        "alphaCode": "NPR",
        "numericCode": "524",
        "name": "Nepalese Rupee",
        "rate": 118.77866345573,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0084190204781409
    },
    "isk": {
        "code": "ISK",
        "alphaCode": "ISK",
        "numericCode": "352",
        "name": "Icelandic Krona",
        "rate": 129.69156676739,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0077106015828582
    },
    "gip": {
        "code": "GIP",
        "alphaCode": "GIP",
        "numericCode": "292",
        "name": "Gibraltar pound",
        "rate": 0.73769650718764,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.3555710109193
    },
    "gel": {
        "code": "GEL",
        "alphaCode": "GEL",
        "numericCode": "981",
        "name": "Georgian lari",
        "rate": 3.1154861474243,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.32097719350373
    },
    "mkd": {
        "code": "MKD",
        "alphaCode": "MKD",
        "numericCode": "807",
        "name": "Macedonian denar",
        "rate": 54.330496243441,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.018405869063284
    },
    "bif": {
        "code": "BIF",
        "alphaCode": "BIF",
        "numericCode": "108",
        "name": "Burundian franc",
        "rate": 1988.1046396842,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00050299163335731
    },
    "all": {
        "code": "ALL",
        "alphaCode": "ALL",
        "numericCode": "008",
        "name": "Albanian lek",
        "rate": 106.56102013281,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0093842945455446
    },
    "mur": {
        "code": "MUR",
        "alphaCode": "MUR",
        "numericCode": "480",
        "name": "Mauritian Rupee",
        "rate": 43.264232008592,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.02311378137491
    },
    "aed": {
        "code": "AED",
        "alphaCode": "AED",
        "numericCode": "784",
        "name": "U.A.E Dirham",
        "rate": 3.6918904952101,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.27086393848827
    },
    "php": {
        "code": "PHP",
        "alphaCode": "PHP",
        "numericCode": "608",
        "name": "Philippine Peso",
        "rate": 51.196835970136,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0195324570562
    },
    "ils": {
        "code": "ILS",
        "alphaCode": "ILS",
        "numericCode": "376",
        "name": "Israeli New Sheqel",
        "rate": 3.1141099969903,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.32111903592566
    },
    "mro": {
        "code": "MRO",
        "alphaCode": "MRO",
        "numericCode": "478",
        "name": "Mauritanian Ouguiya",
        "rate": 36.309677419357,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.027540867093104
    },
    "cop": {
        "code": "COP",
        "alphaCode": "COP",
        "numericCode": "170",
        "name": "Colombian Peso",
        "rate": 4051.9399881164,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00024679536294536
    },
    "bzd": {
        "code": "BZD",
        "alphaCode": "BZD",
        "numericCode": "084",
        "name": "Belize dollar",
        "rate": 2.009328544348,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.49767869112937
    },
    "gnf": {
        "code": "GNF",
        "alphaCode": "GNF",
        "numericCode": "324",
        "name": "Guinean franc",
        "rate": 9196.1187214616,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00010874152784329
    },
    "szl": {
        "code": "SZL",
        "alphaCode": "SZL",
        "numericCode": "748",
        "name": "Swazi lilangeni",
        "rate": 15.926848556742,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.062787060254722
    },
    "sos": {
        "code": "SOS",
        "alphaCode": "SOS",
        "numericCode": "706",
        "name": "Somali shilling",
        "rate": 576.64996420902,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0017341542739393
    },
    "cny": {
        "code": "CNY",
        "alphaCode": "CNY",
        "numericCode": "156",
        "name": "Chinese Yuan",
        "rate": 6.3790727711572,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.15676259479614
    },
    "sar": {
        "code": "SAR",
        "alphaCode": "SAR",
        "numericCode": "682",
        "name": "Saudi Riyal",
        "rate": 3.7537104420983,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.26640307381861
    },
    "myr": {
        "code": "MYR",
        "alphaCode": "MYR",
        "numericCode": "458",
        "name": "Malaysian Ringgit",
        "rate": 4.2092404140579,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.23757255505298
    },
    "kzt": {
        "code": "KZT",
        "alphaCode": "KZT",
        "numericCode": "398",
        "name": "Kazakhstani Tenge",
        "rate": 435.29079931447,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0022973148101795
    },
    "pab": {
        "code": "PAB",
        "alphaCode": "PAB",
        "numericCode": "590",
        "name": "Panamanian Balboa",
        "rate": 0.99855183681554,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 1.0014502634025
    },
    "gyd": {
        "code": "GYD",
        "alphaCode": "GYD",
        "numericCode": "328",
        "name": "Guyanese dollar",
        "rate": 208.54820337579,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0047950544948981
    },
    "rwf": {
        "code": "RWF",
        "alphaCode": "RWF",
        "numericCode": "646",
        "name": "Rwandan franc",
        "rate": 1034.1206675225,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00096700513915436
    },
    "ern": {
        "code": "ERN",
        "alphaCode": "ERN",
        "numericCode": "232",
        "name": "Eritrean nakfa",
        "rate": 15.029477611941,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.066535912013701
    },
    "wst": {
        "code": "WST",
        "alphaCode": "WST",
        "numericCode": "882",
        "name": "Samoan tala",
        "rate": 2.5927904731253,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.3856848481839
    },
    "idr": {
        "code": "IDR",
        "alphaCode": "IDR",
        "numericCode": "360",
        "name": "Indonesian Rupiah",
        "rate": 14367.241265757,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 6.9602784661479e-5
    },
    "tnd": {
        "code": "TND",
        "alphaCode": "TND",
        "numericCode": "788",
        "name": "Tunisian Dinar",
        "rate": 2.8982057686237,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.3450410632765
    },
    "xof": {
        "code": "XOF",
        "alphaCode": "XOF",
        "numericCode": "952",
        "name": "West African CFA Franc",
        "rate": 580.49502354204,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0017226676533732
    },
    "tjs": {
        "code": "TJS",
        "alphaCode": "TJS",
        "numericCode": "972",
        "name": "Tajikistan Ruble",
        "rate": 11.371652689169,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0879379653366
    },
    "bob": {
        "code": "BOB",
        "alphaCode": "BOB",
        "numericCode": "068",
        "name": "Bolivian Boliviano",
        "rate": 6.8714730006835,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.14552920456801
    },
    "nad": {
        "code": "NAD",
        "alphaCode": "NAD",
        "numericCode": "516",
        "name": "Namibian dollar",
        "rate": 15.933148734177,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.062762233421883
    },
    "syp": {
        "code": "SYP",
        "alphaCode": "SYP",
        "numericCode": "760",
        "name": "Syrian pound",
        "rate": 2517.4375,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.00039722932545495
    },
    "mop": {
        "code": "MOP",
        "alphaCode": "MOP",
        "numericCode": "446",
        "name": "Macanese pataca",
        "rate": 8.0077534791252,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.1248789691899
    },
    "bam": {
        "code": "BAM",
        "alphaCode": "BAM",
        "numericCode": "977",
        "name": "Bosnia and Herzegovina convertible mark",
        "rate": 1.729231958099,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.57829141736389
    },
    "kwd": {
        "code": "KWD",
        "alphaCode": "KWD",
        "numericCode": "414",
        "name": "Kuwaiti Dinar",
        "rate": 0.3023640795071,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 3.3072711600867
    },
    "czk": {
        "code": "CZK",
        "alphaCode": "CZK",
        "numericCode": "203",
        "name": "Czech Koruna",
        "rate": 21.690864535104,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.046102357901946
    },
    "pgk": {
        "code": "PGK",
        "alphaCode": "PGK",
        "numericCode": "598",
        "name": "Papua New Guinean kina",
        "rate": 3.5120933404357,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.28473047355739
    },
    "uah": {
        "code": "UAH",
        "alphaCode": "UAH",
        "numericCode": "980",
        "name": "Ukrainian Hryvnia",
        "rate": 27.478691632732,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.036391834566418
    },
    "etb": {
        "code": "ETB",
        "alphaCode": "ETB",
        "numericCode": "230",
        "name": "Ethiopian birr",
        "rate": 49.422085889573,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.020233868765361
    },
    "xcd": {
        "code": "XCD",
        "alphaCode": "XCD",
        "numericCode": "951",
        "name": "East Caribbean Dollar",
        "rate": 2.6987604690118,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.37054048015094
    },
    "mwk": {
        "code": "MWK",
        "alphaCode": "MWK",
        "numericCode": "454",
        "name": "Malawian kwacha",
        "rate": 813.88159224086,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.0012286799572978
    },
    "gtq": {
        "code": "GTQ",
        "alphaCode": "GTQ",
        "numericCode": "320",
        "name": "Guatemalan Quetzal",
        "rate": 7.6956438670234,
        "date": "Fri, 7 Jan 2022 11:55:01 GMT",
        "inverseRate": 0.12994364308945
    }
};

var btn    = document.getElementById('btn');
var amount = document.getElementById('amount').value;

function clearBox(clear)
{
    document.getElementById('box').innerHTML = " ";
}

btn.addEventListener("click", function myCalc() {
    var box    = document.getElementById('box');
    var amount = document.getElementById('amount').value;
    var currA  = document.getElementById('currency1').value;
    var currB  = document.getElementById('currency2').value;
    var cur1   = currA.toLowerCase();
    var cur2   = currB.toLowerCase();

    var sum =  amount * (rates[cur2].rate / rates[cur1].rate);

    var newDiv = document.createElement("div");
    newDiv.className = "col-sm-2 newDiv bg-warning text-center";
    box.insertBefore(newDiv, box.firstChild);
    var h4tag = document.createElement("h4");
    newDiv.appendChild(h4tag);

    h4tag.innerHTML = amount +
                      "<br>" +
                     rates[cur1].code+
                      "<br>" +
                       " ??? " +
                      "<br>" +
                    sum.toFixed(2) +
                      "<br>" +
                     rates[cur2].name;

});























