// data is from https://github.com/gavinr/world-countries-centroids/blob/master/dist/countries.geojson - MIT Licence, Copyright (c) 2021 Gavin Rehkemper

const dataToTransform = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-170.7007316174498, -14.305711987770538]
        },
        "properties": {
            "COUNTRY": "American Samoa",
            "ISO": "AS",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [166.63800339749642, 19.302045812215958]
        },
        "properties": {
            "COUNTRY": "United States Minor Outlying Islands",
            "ISO": "UM",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-159.78768870952257, -21.222613253399842]
        },
        "properties": {
            "COUNTRY": "Cook Islands",
            "ISO": "CK",
            "COUNTRYAFF": "New Zealand",
            "AFF_ISO": "NZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-149.40041671099763, -17.674684080120677]
        },
        "properties": {
            "COUNTRY": "French Polynesia",
            "ISO": "PF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-169.86878106699083, -19.05230921680393]
        },
        "properties": {
            "COUNTRY": "Niue",
            "ISO": "NU",
            "COUNTRYAFF": "New Zealand",
            "AFF_ISO": "NZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-128.3149848627581, -24.366121747565458]
        },
        "properties": {
            "COUNTRY": "Pitcairn",
            "ISO": "PN",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-172.44107655740137, -13.634252953274622]
        },
        "properties": {
            "COUNTRY": "Samoa",
            "ISO": "WS",
            "COUNTRYAFF": "Samoa",
            "AFF_ISO": "WS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-171.85265950722743, -9.195174767256544]
        },
        "properties": {
            "COUNTRY": "Tokelau",
            "ISO": "TK",
            "COUNTRYAFF": "New Zealand",
            "AFF_ISO": "NZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-175.20415878511247, -21.15927212823853]
        },
        "properties": {
            "COUNTRY": "Tonga",
            "ISO": "TO",
            "COUNTRYAFF": "Tonga",
            "AFF_ISO": "TO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-178.12735555777184, -14.283442307826677]
        },
        "properties": {
            "COUNTRY": "Wallis and Futuna",
            "ISO": "WF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-88.85911489238985, 13.758041517055418]
        },
        "properties": {
            "COUNTRY": "El Salvador",
            "ISO": "SV",
            "COUNTRYAFF": "El Salvador",
            "AFF_ISO": "SV"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-90.31219349119617, 15.820878515352684]
        },
        "properties": {
            "COUNTRY": "Guatemala",
            "ISO": "GT",
            "COUNTRYAFF": "Guatemala",
            "AFF_ISO": "GT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-101.55399731630118, 23.87436068093592]
        },
        "properties": {
            "COUNTRY": "Mexico",
            "ISO": "MX",
            "COUNTRYAFF": "Mexico",
            "AFF_ISO": "MX"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-98.41680517868062, 57.550480044655636]
        },
        "properties": {
            "COUNTRY": "Canada",
            "ISO": "CA",
            "COUNTRYAFF": "Canada",
            "AFF_ISO": "CA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-64.53238503843076, -35.697270518120085]
        },
        "properties": {
            "COUNTRY": "Argentina",
            "ISO": "AR",
            "COUNTRYAFF": "Argentina",
            "AFF_ISO": "AR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-58.746646363799854, -51.75901312766726]
        },
        "properties": {
            "COUNTRY": "Falkland Islands",
            "ISO": "FK",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-70.76863431739216, -37.82938283049967]
        },
        "properties": {
            "COUNTRY": "Chile",
            "ISO": "CL",
            "COUNTRYAFF": "Chile",
            "AFF_ISO": "CL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-78.4630326109714, -1.5642721388853116]
        },
        "properties": {
            "COUNTRY": "Ecuador",
            "ISO": "EC",
            "COUNTRYAFF": "Ecuador",
            "AFF_ISO": "EC"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-74.11416196781884, -8.522717984240291]
        },
        "properties": {
            "COUNTRY": "Peru",
            "ISO": "PE",
            "COUNTRYAFF": "Peru",
            "AFF_ISO": "PE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-64.45209597511206, -16.7312488393574]
        },
        "properties": {
            "COUNTRY": "Bolivia",
            "ISO": "BO",
            "COUNTRYAFF": "Bolivia",
            "AFF_ISO": "BO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-54.355206608256424, -11.524630416426652]
        },
        "properties": {
            "COUNTRY": "Brazil",
            "ISO": "BR",
            "COUNTRYAFF": "Brazil",
            "AFF_ISO": "BR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-58.38906357428651, -23.42190559259428]
        },
        "properties": {
            "COUNTRY": "Paraguay",
            "ISO": "PY",
            "COUNTRYAFF": "Paraguay",
            "AFF_ISO": "PY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-56.01919523458085, -32.78195043831093]
        },
        "properties": {
            "COUNTRY": "Uruguay",
            "ISO": "UY",
            "COUNTRYAFF": "Uruguay",
            "AFF_ISO": "UY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-36.77509575898928, -54.37666443862139]
        },
        "properties": {
            "COUNTRY": "South Georgia and South Sandwich Islands",
            "ISO": "GS",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-177.56451613408842, -77.16987521415838]
        },
        "properties": {
            "COUNTRY": "Antarctica",
            "ISO": "AQ",
            "COUNTRYAFF": "Antarctica",
            "AFF_ISO": "AQ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [177.98144613732626, -17.822470952336204]
        },
        "properties": {
            "COUNTRY": "Fiji",
            "ISO": "FJ",
            "COUNTRYAFF": "Fiji",
            "AFF_ISO": "FJ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.717391620813109, -15.962963318340398]
        },
        "properties": {
            "COUNTRY": "Saint Helena",
            "ISO": "SH",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-63.06008343771806, 18.222874004219086]
        },
        "properties": {
            "COUNTRY": "Anguilla",
            "ISO": "AI",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.78530823226373, 17.07146759372967]
        },
        "properties": {
            "COUNTRY": "Antigua and Barbuda",
            "ISO": "AG",
            "COUNTRYAFF": "Antigua and Barbuda",
            "AFF_ISO": "AG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-69.97564014284046, 12.515625722992898]
        },
        "properties": {
            "COUNTRY": "Aruba",
            "ISO": "AW",
            "COUNTRYAFF": "Aruba",
            "AFF_ISO": "AW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-78.07275370060313, 24.72162633646784]
        },
        "properties": {
            "COUNTRY": "Bahamas",
            "ISO": "BS",
            "COUNTRYAFF": "Bahamas",
            "AFF_ISO": "BS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-59.557383949150285, 13.183219369337529]
        },
        "properties": {
            "COUNTRY": "Barbados",
            "ISO": "BB",
            "COUNTRYAFF": "Barbados",
            "AFF_ISO": "BB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-88.68273510023441, 17.24252476647155]
        },
        "properties": {
            "COUNTRY": "Belize",
            "ISO": "BZ",
            "COUNTRYAFF": "Belize",
            "AFF_ISO": "BZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-64.7458500599169, 32.315067430740726]
        },
        "properties": {
            "COUNTRY": "Bermuda",
            "ISO": "BM",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-68.29350445958761, 12.180844982440338]
        },
        "properties": {
            "COUNTRY": "Bonaire",
            "ISO": "BQ",
            "COUNTRYAFF": "Netherlands",
            "AFF_ISO": "NL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-64.62406519257699, 18.42195819619707]
        },
        "properties": {
            "COUNTRY": "British Virgin Islands",
            "ISO": "VG",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-81.25203208977878, 19.311231805620288]
        },
        "properties": {
            "COUNTRY": "Cayman Islands",
            "ISO": "KY",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-72.6445066243485, 4.187753877352739]
        },
        "properties": {
            "COUNTRY": "Colombia",
            "ISO": "CO",
            "COUNTRYAFF": "Colombia",
            "AFF_ISO": "CO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-84.14673625701816, 9.863467407406214]
        },
        "properties": {
            "COUNTRY": "Costa Rica",
            "ISO": "CR",
            "COUNTRYAFF": "Costa Rica",
            "AFF_ISO": "CR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-79.69817857618705, 21.476176522869448]
        },
        "properties": {
            "COUNTRY": "Cuba",
            "ISO": "CU",
            "COUNTRYAFF": "Cuba",
            "AFF_ISO": "CU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-68.96939768599042, 12.199996647939832]
        },
        "properties": {
            "COUNTRY": "Curacao",
            "ISO": "CW",
            "COUNTRYAFF": "Netherlands",
            "AFF_ISO": "NL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.360471946942994, 15.429269860940513]
        },
        "properties": {
            "COUNTRY": "Dominica",
            "ISO": "DM",
            "COUNTRYAFF": "Dominica",
            "AFF_ISO": "DM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-70.43495198520012, 18.77954818522993]
        },
        "properties": {
            "COUNTRY": "Dominican Republic",
            "ISO": "DO",
            "COUNTRYAFF": "Dominican Republic",
            "AFF_ISO": "DO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-53.32232307156624, 3.857429742497078]
        },
        "properties": {
            "COUNTRY": "French Guiana",
            "ISO": "GF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.67937937204098, 12.112926656338907]
        },
        "properties": {
            "COUNTRY": "Grenada",
            "ISO": "GD",
            "COUNTRYAFF": "Grenada",
            "AFF_ISO": "GD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.54382262282755, 16.24420002705553]
        },
        "properties": {
            "COUNTRY": "Guadeloupe",
            "ISO": "GP",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-58.91352612754667, 4.68211981385056]
        },
        "properties": {
            "COUNTRY": "Guyana",
            "ISO": "GY",
            "COUNTRYAFF": "Guyana",
            "AFF_ISO": "GY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-72.89291379842, 18.883520486983567]
        },
        "properties": {
            "COUNTRY": "Haiti",
            "ISO": "HT",
            "COUNTRYAFF": "Haiti",
            "AFF_ISO": "HT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-86.49251679006962, 14.740370695750006]
        },
        "properties": {
            "COUNTRY": "Honduras",
            "ISO": "HN",
            "COUNTRYAFF": "Honduras",
            "AFF_ISO": "HN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.30358894542778, 18.12207889341651]
        },
        "properties": {
            "COUNTRY": "Jamaica",
            "ISO": "JM",
            "COUNTRYAFF": "Jamaica",
            "AFF_ISO": "JM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.01432380875083, 14.642697353597645]
        },
        "properties": {
            "COUNTRY": "Martinique",
            "ISO": "MQ",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-62.18693281256255, 16.735363391460357]
        },
        "properties": {
            "COUNTRY": "Montserrat",
            "ISO": "MS",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-85.016088327669, 12.893566631930554]
        },
        "properties": {
            "COUNTRY": "Nicaragua",
            "ISO": "NI",
            "COUNTRYAFF": "Nicaragua",
            "AFF_ISO": "NI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-80.14428761482796, 8.439536749576892]
        },
        "properties": {
            "COUNTRY": "Panama",
            "ISO": "PA",
            "COUNTRYAFF": "Panama",
            "AFF_ISO": "PA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-66.49425339593509, 18.216224086610914]
        },
        "properties": {
            "COUNTRY": "Puerto Rico",
            "ISO": "PR",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-63.23739481909494, 17.632512616389718]
        },
        "properties": {
            "COUNTRY": "Saba",
            "ISO": "BQ",
            "COUNTRYAFF": "Netherlands",
            "AFF_ISO": "NL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-62.83051610005156, 17.90561691241738]
        },
        "properties": {
            "COUNTRY": "Saint Barthelemy",
            "ISO": "BL",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-62.978230589445026, 17.4919042294197]
        },
        "properties": {
            "COUNTRY": "Saint Eustatius",
            "ISO": "BQ",
            "COUNTRYAFF": "Netherlands",
            "AFF_ISO": "NL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-62.74560385895787, 17.314736299587768]
        },
        "properties": {
            "COUNTRY": "Saint Kitts and Nevis",
            "ISO": "KN",
            "COUNTRYAFF": "Saint Kitts and Nevis",
            "AFF_ISO": "KN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-60.9689510935251, 13.895749185129906]
        },
        "properties": {
            "COUNTRY": "Saint Lucia",
            "ISO": "LC",
            "COUNTRYAFF": "Saint Lucia",
            "AFF_ISO": "LC"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-63.06678525361946, 18.078012113224464]
        },
        "properties": {
            "COUNTRY": "Saint Martin",
            "ISO": "MF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-56.32465353437558, 46.95153913615198]
        },
        "properties": {
            "COUNTRY": "Saint Pierre and Miquelon",
            "ISO": "PM",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.193766354393034, 13.254808122970651]
        },
        "properties": {
            "COUNTRY": "Saint Vincent and the Grenadines",
            "ISO": "VC",
            "COUNTRYAFF": "Saint Vincent and the Grenadines",
            "AFF_ISO": "VC"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-63.06883135915303, 18.03942608463078]
        },
        "properties": {
            "COUNTRY": "Sint Maarten",
            "ISO": "SX",
            "COUNTRYAFF": "Netherlands",
            "AFF_ISO": "NL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-55.855514311561286, 4.098723595920171]
        },
        "properties": {
            "COUNTRY": "Suriname",
            "ISO": "SR",
            "COUNTRYAFF": "Suriname",
            "AFF_ISO": "SR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-61.37236579976247, 10.415515638298093]
        },
        "properties": {
            "COUNTRY": "Trinidad and Tobago",
            "ISO": "TT",
            "COUNTRYAFF": "Trinidad and Tobago",
            "AFF_ISO": "TT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-71.74058946811508, 21.799865427483745]
        },
        "properties": {
            "COUNTRY": "Turks and Caicos Islands",
            "ISO": "TC",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-64.76155341409797, 17.738009708772523]
        },
        "properties": {
            "COUNTRY": "US Virgin Islands",
            "ISO": "VI",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-66.36492135985132, 7.148324760507107]
        },
        "properties": {
            "COUNTRY": "Venezuela",
            "ISO": "VE",
            "COUNTRYAFF": "Venezuela",
            "AFF_ISO": "VE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.6932816211842325, 12.108709036312737]
        },
        "properties": {
            "COUNTRY": "Burkina Faso",
            "ISO": "BF",
            "COUNTRYAFF": "Burkina Faso",
            "AFF_ISO": "BF"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-23.63401005900474, 15.076411518651643]
        },
        "properties": {
            "COUNTRY": "Cabo Verde",
            "ISO": "CV",
            "COUNTRYAFF": "Cabo Verde",
            "AFF_ISO": "CV"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.571710194917734, 7.536779279421307]
        },
        "properties": {
            "COUNTRY": "Côte d'Ivoire",
            "ISO": "CI",
            "COUNTRYAFF": "Côte d'Ivoire",
            "AFF_ISO": "CI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-15.383380385869662, 13.428617959189328]
        },
        "properties": {
            "COUNTRY": "Gambia",
            "ISO": "GM",
            "COUNTRYAFF": "Gambia",
            "AFF_ISO": "GM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.219233362526581, 7.94530467243628]
        },
        "properties": {
            "COUNTRY": "Ghana",
            "ISO": "GH",
            "COUNTRYAFF": "Ghana",
            "AFF_ISO": "GH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-5.345549484594358, 36.14022671336082]
        },
        "properties": {
            "COUNTRY": "Gibraltar",
            "ISO": "GI",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10.986948848040218, 10.255986541378112]
        },
        "properties": {
            "COUNTRY": "Guinea",
            "ISO": "GN",
            "COUNTRYAFF": "Guinea",
            "AFF_ISO": "GN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-14.980186756910847, 11.980075324820504]
        },
        "properties": {
            "COUNTRY": "Guinea-Bissau",
            "ISO": "GW",
            "COUNTRYAFF": "Guinea-Bissau",
            "AFF_ISO": "GW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-9.258988935497618, 6.52012979398834]
        },
        "properties": {
            "COUNTRY": "Liberia",
            "ISO": "LR",
            "COUNTRYAFF": "Liberia",
            "AFF_ISO": "LR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.346399841781153, 17.168146208584837]
        },
        "properties": {
            "COUNTRY": "Mali",
            "ISO": "ML",
            "COUNTRYAFF": "Mali",
            "AFF_ISO": "ML"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-10.495079045035716, 20.466731212820022]
        },
        "properties": {
            "COUNTRY": "Mauritania",
            "ISO": "MR",
            "COUNTRYAFF": "Mauritania",
            "AFF_ISO": "MR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8.817212587250811, 28.687598134979325]
        },
        "properties": {
            "COUNTRY": "Morocco",
            "ISO": "MA",
            "COUNTRYAFF": "Morocco",
            "AFF_ISO": "MA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-7.933662183874006, 39.67529214702138]
        },
        "properties": {
            "COUNTRY": "Portugal",
            "ISO": "PT",
            "COUNTRYAFF": "Portugal",
            "AFF_ISO": "PT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-14.610875368352305, 14.228861491763402]
        },
        "properties": {
            "COUNTRY": "Senegal",
            "ISO": "SN",
            "COUNTRYAFF": "Senegal",
            "AFF_ISO": "SN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-11.78656695731115, 8.561330384750587]
        },
        "properties": {
            "COUNTRY": "Sierra Leone",
            "ISO": "SL",
            "COUNTRYAFF": "Sierra Leone",
            "AFF_ISO": "SL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-42.07567788066985, 74.16847218965994]
        },
        "properties": {
            "COUNTRY": "Greenland",
            "ISO": "GL",
            "COUNTRYAFF": "Denmark",
            "AFF_ISO": "DK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.576392582891568, 49.45870771378872]
        },
        "properties": {
            "COUNTRY": "Guernsey",
            "ISO": "GG",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-8.241128545554096, 53.30489539816495]
        },
        "properties": {
            "COUNTRY": "Ireland",
            "ISO": "IE",
            "COUNTRYAFF": "Ireland",
            "AFF_ISO": "IE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.532995055468449, 54.22855301008011]
        },
        "properties": {
            "COUNTRY": "Isle of Man",
            "ISO": "IM",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.1291601162653575, 49.215396925724306]
        },
        "properties": {
            "COUNTRY": "Jersey",
            "ISO": "JE",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-2.852943909329258, 53.97844735080214]
        },
        "properties": {
            "COUNTRY": "United Kingdom",
            "ISO": "GB",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-19.05682967106099, 65.12360920205514]
        },
        "properties": {
            "COUNTRY": "Iceland",
            "ISO": "IS",
            "COUNTRYAFF": "Iceland",
            "AFF_ISO": "IS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-6.9811060913122835, 62.130896281495346]
        },
        "properties": {
            "COUNTRY": "Faroe Islands",
            "ISO": "FO",
            "COUNTRYAFF": "Denmark",
            "AFF_ISO": "DK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [16.036378851505283, 78.57318936469626]
        },
        "properties": {
            "COUNTRY": "Svalbard",
            "ISO": "SJ",
            "COUNTRYAFF": "Norway",
            "AFF_ISO": "NO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [3.411969465057627, -54.42316679395248]
        },
        "properties": {
            "COUNTRY": "Bouvet Island",
            "ISO": "BV",
            "COUNTRYAFF": "Norway",
            "AFF_ISO": "NO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [170.69035541428696, -43.82765432544426]
        },
        "properties": {
            "COUNTRY": "New Zealand",
            "ISO": "NZ",
            "COUNTRYAFF": "New Zealand",
            "AFF_ISO": "NZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [17.651768783079, -12.167424062667942]
        },
        "properties": {
            "COUNTRY": "Angola",
            "ISO": "AO",
            "COUNTRYAFF": "Angola",
            "AFF_ISO": "AO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [23.85779956995608, -22.236609002062902]
        },
        "properties": {
            "COUNTRY": "Botswana",
            "ISO": "BW",
            "COUNTRYAFF": "Botswana",
            "AFF_ISO": "BW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [29.88518227845293, -3.261251993278643]
        },
        "properties": {
            "COUNTRY": "Burundi",
            "ISO": "BI",
            "COUNTRYAFF": "Burundi",
            "AFF_ISO": "BI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.34826587429403, -11.658861474508491]
        },
        "properties": {
            "COUNTRY": "Comoros",
            "ISO": "KM",
            "COUNTRYAFF": "Comoros",
            "AFF_ISO": "KM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [14.879732849491393, -0.7294391595233845]
        },
        "properties": {
            "COUNTRY": "Congo",
            "ISO": "CG",
            "COUNTRYAFF": "Congo",
            "AFF_ISO": "CG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [23.419827574282188, -3.338629596207896]
        },
        "properties": {
            "COUNTRY": "Congo DRC",
            "ISO": "CD",
            "COUNTRYAFF": "Congo DRC",
            "AFF_ISO": "CD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [11.839410898545754, -0.628448459921234]
        },
        "properties": {
            "COUNTRY": "Gabon",
            "ISO": "GA",
            "COUNTRYAFF": "Gabon",
            "AFF_ISO": "GA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [37.95309411262371, 0.6899182318376179]
        },
        "properties": {
            "COUNTRY": "Kenya",
            "ISO": "KE",
            "COUNTRYAFF": "Kenya",
            "AFF_ISO": "KE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [28.24475317864227, -29.60168116924817]
        },
        "properties": {
            "COUNTRY": "Lesotho",
            "ISO": "LS",
            "COUNTRYAFF": "Lesotho",
            "AFF_ISO": "LS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [34.23441182298881, -13.128986464184024]
        },
        "properties": {
            "COUNTRY": "Malawi",
            "ISO": "MW",
            "COUNTRYAFF": "Malawi",
            "AFF_ISO": "MW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [42.74374761089645, -17.06449193630804]
        },
        "properties": {
            "COUNTRY": "Juan De Nova Island",
            "ISO": "TF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.208577031290176, -17.525230309488748]
        },
        "properties": {
            "COUNTRY": "Mozambique",
            "ISO": "MZ",
            "COUNTRYAFF": "Mozambique",
            "AFF_ISO": "MZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [18.16451345845268, -21.90858163281473]
        },
        "properties": {
            "COUNTRY": "Namibia",
            "ISO": "NA",
            "COUNTRYAFF": "Namibia",
            "AFF_ISO": "NA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [29.919439681764082, -2.014687460047154]
        },
        "properties": {
            "COUNTRY": "Rwanda",
            "ISO": "RW",
            "COUNTRYAFF": "Rwanda",
            "AFF_ISO": "RW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [6.606158796857607, 0.22744704294793774]
        },
        "properties": {
            "COUNTRY": "Sao Tome and Principe",
            "ISO": "ST",
            "COUNTRYAFF": "Sao Tome and Principe",
            "AFF_ISO": "ST"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [24.75252746489084, -28.55361930679731]
        },
        "properties": {
            "COUNTRY": "South Africa",
            "ISO": "ZA",
            "COUNTRYAFF": "South Africa",
            "AFF_ISO": "ZA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [31.510685746082007, -26.562540935608702]
        },
        "properties": {
            "COUNTRY": "Eswatini",
            "ISO": "SZ",
            "COUNTRYAFF": "Eswatini",
            "AFF_ISO": "SZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [34.81832206060381, -6.355794440041147]
        },
        "properties": {
            "COUNTRY": "Tanzania",
            "ISO": "TZ",
            "COUNTRYAFF": "Tanzania",
            "AFF_ISO": "TZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [27.75521363430896, -13.162832953186246]
        },
        "properties": {
            "COUNTRY": "Zambia",
            "ISO": "ZM",
            "COUNTRYAFF": "Zambia",
            "AFF_ISO": "ZM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [29.717829640720844, -18.92700121981475]
        },
        "properties": {
            "COUNTRY": "Zimbabwe",
            "ISO": "ZW",
            "COUNTRYAFF": "Zimbabwe",
            "AFF_ISO": "ZW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [72.43501618476016, -7.323548444385743]
        },
        "properties": {
            "COUNTRY": "British Indian Ocean Territory",
            "ISO": "IO",
            "COUNTRYAFF": "United Kingdom",
            "AFF_ISO": "GB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [69.54686984724839, -49.26329687105643]
        },
        "properties": {
            "COUNTRY": "French Southern Territories",
            "ISO": "TF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.49298560844045, -53.084170035513736]
        },
        "properties": {
            "COUNTRY": "Heard Island and McDonald Islands",
            "ISO": "HM",
            "COUNTRYAFF": "Australia",
            "AFF_ISO": "AU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [46.68493466832544, -19.04163612493041]
        },
        "properties": {
            "COUNTRY": "Madagascar",
            "ISO": "MG",
            "COUNTRYAFF": "Madagascar",
            "AFF_ISO": "MG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [57.56415671066546, -20.28142317475198]
        },
        "properties": {
            "COUNTRY": "Mauritius",
            "ISO": "MU",
            "COUNTRYAFF": "Mauritius",
            "AFF_ISO": "MU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [45.128142327031064, -12.824468416301052]
        },
        "properties": {
            "COUNTRY": "Mayotte",
            "ISO": "YT",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [47.290948081543384, -11.566224871643417]
        },
        "properties": {
            "COUNTRY": "Glorioso Islands",
            "ISO": "TF",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [55.54393506194689, -21.119825460665105]
        },
        "properties": {
            "COUNTRY": "Réunion",
            "ISO": "RE",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [55.47250789595527, -4.660002318822744]
        },
        "properties": {
            "COUNTRY": "Seychelles",
            "ISO": "SC",
            "COUNTRYAFF": "Seychelles",
            "AFF_ISO": "SC"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2.6558464719769135, 28.350969744889056]
        },
        "properties": {
            "COUNTRY": "Algeria",
            "ISO": "DZ",
            "COUNTRYAFF": "Algeria",
            "AFF_ISO": "DZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2.305714528830206, 9.503013199615893]
        },
        "properties": {
            "COUNTRY": "Benin",
            "ISO": "BJ",
            "COUNTRYAFF": "Benin",
            "AFF_ISO": "BJ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [12.948474142398263, 6.294168487480992]
        },
        "properties": {
            "COUNTRY": "Cameroon",
            "ISO": "CM",
            "COUNTRYAFF": "Cameroon",
            "AFF_ISO": "CM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [20.520743419397256, 6.331390033944319]
        },
        "properties": {
            "COUNTRY": "Central African Republic",
            "ISO": "CF",
            "COUNTRYAFF": "Central African Republic",
            "AFF_ISO": "CF"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [18.427113900363025, 15.283493546654503]
        },
        "properties": {
            "COUNTRY": "Chad",
            "ISO": "TD",
            "COUNTRYAFF": "Chad",
            "AFF_ISO": "TD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [10.425456672353823, 1.5954643936590733]
        },
        "properties": {
            "COUNTRY": "Equatorial Guinea",
            "ISO": "GQ",
            "COUNTRYAFF": "Equatorial Guinea",
            "AFF_ISO": "GQ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-157.39024189323504, 1.8676673749241066]
        },
        "properties": {
            "COUNTRY": "Kiribati",
            "ISO": "KI",
            "COUNTRYAFF": "Kiribati",
            "AFF_ISO": "KI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [17.91133392454237, 27.202915771690794]
        },
        "properties": {
            "COUNTRY": "Libya",
            "ISO": "LY",
            "COUNTRYAFF": "Libya",
            "AFF_ISO": "LY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [14.441922442508494, 35.890522650899314]
        },
        "properties": {
            "COUNTRY": "Malta",
            "ISO": "MT",
            "COUNTRYAFF": "Malta",
            "AFF_ISO": "MT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8.86863247002646, 17.08105392407292]
        },
        "properties": {
            "COUNTRY": "Niger",
            "ISO": "NE",
            "COUNTRYAFF": "Niger",
            "AFF_ISO": "NE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8.147714845256194, 9.61029352034213]
        },
        "properties": {
            "COUNTRY": "Nigeria",
            "ISO": "NG",
            "COUNTRYAFF": "Nigeria",
            "AFF_ISO": "NG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0.8990857571109684, 8.660743037717811]
        },
        "properties": {
            "COUNTRY": "Togo",
            "ISO": "TG",
            "COUNTRYAFF": "Togo",
            "AFF_ISO": "TG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [9.65587551697984, 34.08636179565723]
        },
        "properties": {
            "COUNTRY": "Tunisia",
            "ISO": "TN",
            "COUNTRYAFF": "Tunisia",
            "AFF_ISO": "TN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [33.375346009199205, 35.11700416345239]
        },
        "properties": {
            "COUNTRY": "Cyprus",
            "ISO": "CY",
            "COUNTRYAFF": "Cyprus",
            "AFF_ISO": "CY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [42.613496898789506, 11.750235727618804]
        },
        "properties": {
            "COUNTRY": "Djibouti",
            "ISO": "DJ",
            "COUNTRYAFF": "Djibouti",
            "AFF_ISO": "DJ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [30.240135435012338, 26.60517034450628]
        },
        "properties": {
            "COUNTRY": "Egypt",
            "ISO": "EG",
            "COUNTRYAFF": "Egypt",
            "AFF_ISO": "EG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [39.2672401449901, 15.005533147667684]
        },
        "properties": {
            "COUNTRY": "Eritrea",
            "ISO": "ER",
            "COUNTRYAFF": "Eritrea",
            "AFF_ISO": "ER"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [39.914902886544276, 8.729389557048396]
        },
        "properties": {
            "COUNTRY": "Ethiopia",
            "ISO": "ET",
            "COUNTRYAFF": "Ethiopia",
            "AFF_ISO": "ET"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [23.110368936161876, 39.42012261727978]
        },
        "properties": {
            "COUNTRY": "Greece",
            "ISO": "GR",
            "COUNTRYAFF": "Greece",
            "AFF_ISO": "GR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.832529181056884, 33.105075667527906]
        },
        "properties": {
            "COUNTRY": "Iraq",
            "ISO": "IQ",
            "COUNTRYAFF": "Iraq",
            "AFF_ISO": "IQ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.027923472437024, 31.513542220043195]
        },
        "properties": {
            "COUNTRY": "Israel",
            "ISO": "IL",
            "COUNTRYAFF": "Israel",
            "AFF_ISO": "IL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [36.95728884547246, 31.387064884449156]
        },
        "properties": {
            "COUNTRY": "Jordan",
            "ISO": "JO",
            "COUNTRYAFF": "Jordan",
            "AFF_ISO": "JO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.89651946324749, 33.91160170722086]
        },
        "properties": {
            "COUNTRY": "Lebanon",
            "ISO": "LB",
            "COUNTRYAFF": "Lebanon",
            "AFF_ISO": "LB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.24251184154588, 31.930818736453883]
        },
        "properties": {
            "COUNTRY": "Palestinian Territory",
            "ISO": "PS",
            "COUNTRYAFF": "Palestinian Territory",
            "AFF_ISO": "PS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [30.3851856901788, 7.657782041763295]
        },
        "properties": {
            "COUNTRY": "South Sudan",
            "ISO": "SS",
            "COUNTRYAFF": "South Sudan",
            "AFF_ISO": "SS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [29.951458283594064, 15.67060230984256]
        },
        "properties": {
            "COUNTRY": "Sudan",
            "ISO": "SD",
            "COUNTRYAFF": "Sudan",
            "AFF_ISO": "SD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [38.5117323139514, 35.09751106058316]
        },
        "properties": {
            "COUNTRY": "Syria",
            "ISO": "SY",
            "COUNTRYAFF": "Syria",
            "AFF_ISO": "SY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [35.56886764076691, 38.93207363123396]
        },
        "properties": {
            "COUNTRY": "Turkey",
            "ISO": "TR",
            "COUNTRYAFF": "Turkey",
            "AFF_ISO": "TR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [32.34371768463123, 1.2821729218416205]
        },
        "properties": {
            "COUNTRY": "Uganda",
            "ISO": "UG",
            "COUNTRYAFF": "Uganda",
            "AFF_ISO": "UG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [1.5802243611232873, 42.54859834854764]
        },
        "properties": {
            "COUNTRY": "Andorra",
            "ISO": "AD",
            "COUNTRYAFF": "Andorra",
            "AFF_ISO": "AD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-96.33161660829639, 38.8208089190304]
        },
        "properties": {
            "COUNTRY": "United States",
            "ISO": "US",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2.1940236627886227, 46.6423682169416]
        },
        "properties": {
            "COUNTRY": "France",
            "ISO": "FR",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [9.547674672376376, 47.14627562133036]
        },
        "properties": {
            "COUNTRY": "Liechtenstein",
            "ISO": "LI",
            "COUNTRYAFF": "Liechtenstein",
            "AFF_ISO": "LI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [7.412820873271196, 43.74798224995656]
        },
        "properties": {
            "COUNTRY": "Monaco",
            "ISO": "MC",
            "COUNTRYAFF": "Monaco",
            "AFF_ISO": "MC"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [8.286928794895285, 46.73678128684938]
        },
        "properties": {
            "COUNTRY": "Switzerland",
            "ISO": "CH",
            "COUNTRYAFF": "Switzerland",
            "AFF_ISO": "CH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [4.675010154696485, 50.6182138854095]
        },
        "properties": {
            "COUNTRY": "Belgium",
            "ISO": "BE",
            "COUNTRYAFF": "Belgium",
            "AFF_ISO": "BE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [10.426171427430804, 51.08304539800482]
        },
        "properties": {
            "COUNTRY": "Germany",
            "ISO": "DE",
            "COUNTRYAFF": "Germany",
            "AFF_ISO": "DE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [6.103230338458876, 49.77523454542369]
        },
        "properties": {
            "COUNTRY": "Luxembourg",
            "ISO": "LU",
            "COUNTRYAFF": "Luxembourg",
            "AFF_ISO": "LU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [5.554136426128487, 52.134054128923886]
        },
        "properties": {
            "COUNTRY": "Netherlands",
            "ISO": "NL",
            "COUNTRYAFF": "Netherlands",
            "AFF_ISO": "NL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [20.061082767269493, 41.14165894891656]
        },
        "properties": {
            "COUNTRY": "Albania",
            "ISO": "AL",
            "COUNTRYAFF": "Albania",
            "AFF_ISO": "AL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [13.797778364631036, 47.631858269895794]
        },
        "properties": {
            "COUNTRY": "Austria",
            "ISO": "AT",
            "COUNTRYAFF": "Austria",
            "AFF_ISO": "AT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [17.83467240787538, 44.14415356126429]
        },
        "properties": {
            "COUNTRY": "Bosnia and Herzegovina",
            "ISO": "BA",
            "COUNTRYAFF": "Bosnia and Herzegovina",
            "AFF_ISO": "BA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [16.625761129583374, 44.91192100856702]
        },
        "properties": {
            "COUNTRY": "Croatia",
            "ISO": "HR",
            "COUNTRYAFF": "Croatia",
            "AFF_ISO": "HR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [15.383273292023533, 49.74917370930982]
        },
        "properties": {
            "COUNTRY": "Czech Republic",
            "ISO": "CZ",
            "COUNTRYAFF": "Czech Republic",
            "AFF_ISO": "CZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [9.378670542409406, 56.00118817971057]
        },
        "properties": {
            "COUNTRY": "Denmark",
            "ISO": "DK",
            "COUNTRYAFF": "Denmark",
            "AFF_ISO": "DK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19.39620048366142, 47.22527332486294]
        },
        "properties": {
            "COUNTRY": "Hungary",
            "ISO": "HU",
            "COUNTRYAFF": "Hungary",
            "AFF_ISO": "HU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [12.763657166123137, 42.98201127614267]
        },
        "properties": {
            "COUNTRY": "Italy",
            "ISO": "IT",
            "COUNTRYAFF": "Italy",
            "AFF_ISO": "IT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19.29505087156758, 42.73694835210454]
        },
        "properties": {
            "COUNTRY": "Montenegro",
            "ISO": "ME",
            "COUNTRYAFF": "Montenegro",
            "AFF_ISO": "ME"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19.43573279234468, 52.06848055692473]
        },
        "properties": {
            "COUNTRY": "Poland",
            "ISO": "PL",
            "COUNTRYAFF": "Poland",
            "AFF_ISO": "PL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [12.461278349581722, 43.942820729097896]
        },
        "properties": {
            "COUNTRY": "San Marino",
            "ISO": "SM",
            "COUNTRYAFF": "San Marino",
            "AFF_ISO": "SM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [20.85677444395745, 44.02679870131969]
        },
        "properties": {
            "COUNTRY": "Serbia",
            "ISO": "RS",
            "COUNTRYAFF": "Serbia",
            "AFF_ISO": "RS"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [19.581015362490966, 48.69808390520484]
        },
        "properties": {
            "COUNTRY": "Slovakia",
            "ISO": "SK",
            "COUNTRYAFF": "Slovakia",
            "AFF_ISO": "SK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [14.890636899973781, 46.13759229564504]
        },
        "properties": {
            "COUNTRY": "Slovenia",
            "ISO": "SI",
            "COUNTRYAFF": "Slovenia",
            "AFF_ISO": "SI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [21.70998923872772, 41.59402890143112]
        },
        "properties": {
            "COUNTRY": "North Macedonia",
            "ISO": "MK",
            "COUNTRYAFF": "North Macedonia",
            "AFF_ISO": "MK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [12.451312917026133, 41.90402351316735]
        },
        "properties": {
            "COUNTRY": "Vatican City",
            "ISO": "VA",
            "COUNTRYAFF": "Vatican City",
            "AFF_ISO": "VA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [16.670259272390894, 64.97775882947745]
        },
        "properties": {
            "COUNTRY": "Norway",
            "ISO": "NO",
            "COUNTRYAFF": "Norway",
            "AFF_ISO": "NO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [17.062431988004956, 62.73420986108448]
        },
        "properties": {
            "COUNTRY": "Sweden",
            "ISO": "SE",
            "COUNTRYAFF": "Sweden",
            "AFF_ISO": "SE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [27.964252054715104, 53.46791374543163]
        },
        "properties": {
            "COUNTRY": "Belarus",
            "ISO": "BY",
            "COUNTRYAFF": "Belarus",
            "AFF_ISO": "BY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.251739122561908, 42.82043677302438]
        },
        "properties": {
            "COUNTRY": "Bulgaria",
            "ISO": "BG",
            "COUNTRYAFF": "Bulgaria",
            "AFF_ISO": "BG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.916870250633806, 58.648108311231034]
        },
        "properties": {
            "COUNTRY": "Estonia",
            "ISO": "EE",
            "COUNTRYAFF": "Estonia",
            "AFF_ISO": "EE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.65738433454702, 65.01578959749911]
        },
        "properties": {
            "COUNTRY": "Finland",
            "ISO": "FI",
            "COUNTRYAFF": "Finland",
            "AFF_ISO": "FI"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [43.378866534112234, 42.17986277737226]
        },
        "properties": {
            "COUNTRY": "Georgia",
            "ISO": "GE",
            "COUNTRYAFF": "Georgia",
            "AFF_ISO": "GE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [24.693671325654403, 56.813853047554154]
        },
        "properties": {
            "COUNTRY": "Latvia",
            "ISO": "LV",
            "COUNTRYAFF": "Latvia",
            "AFF_ISO": "LV"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [23.946021605013534, 55.29437393417175]
        },
        "properties": {
            "COUNTRY": "Lithuania",
            "ISO": "LT",
            "COUNTRYAFF": "Lithuania",
            "AFF_ISO": "LT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [28.391111865941348, 47.0725674580696]
        },
        "properties": {
            "COUNTRY": "Moldova",
            "ISO": "MD",
            "COUNTRYAFF": "Moldova",
            "AFF_ISO": "MD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [25.094158201563292, 45.82454894397586]
        },
        "properties": {
            "COUNTRY": "Romania",
            "ISO": "RO",
            "COUNTRYAFF": "Romania",
            "AFF_ISO": "RO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [31.27377208442636, 48.657532515563794]
        },
        "properties": {
            "COUNTRY": "Ukraine",
            "ISO": "UA",
            "COUNTRYAFF": "Ukraine",
            "AFF_ISO": "UA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [66.59216131095278, 34.13402601376932]
        },
        "properties": {
            "COUNTRY": "Afghanistan",
            "ISO": "AF",
            "COUNTRYAFF": "Afghanistan",
            "AFF_ISO": "AF"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [50.540695402276775, 26.04798501537066]
        },
        "properties": {
            "COUNTRY": "Bahrain",
            "ISO": "BH",
            "COUNTRYAFF": "Bahrain",
            "AFF_ISO": "BH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.17300408530181, 23.586300567746722]
        },
        "properties": {
            "COUNTRY": "India",
            "ISO": "IN",
            "COUNTRYAFF": "India",
            "AFF_ISO": "IN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [54.237077001065444, 32.906023742890056]
        },
        "properties": {
            "COUNTRY": "Iran",
            "ISO": "IR",
            "COUNTRYAFF": "Iran",
            "AFF_ISO": "IR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [47.56311109320184, 29.281360965443092]
        },
        "properties": {
            "COUNTRY": "Kuwait",
            "ISO": "KW",
            "COUNTRYAFF": "Kuwait",
            "AFF_ISO": "KW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.10076245140479, -0.6065577168009924]
        },
        "properties": {
            "COUNTRY": "Maldives",
            "ISO": "MV",
            "COUNTRYAFF": "Maldives",
            "AFF_ISO": "MV"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [84.1338898313567, 28.300920699755657]
        },
        "properties": {
            "COUNTRY": "Nepal",
            "ISO": "NP",
            "COUNTRYAFF": "Nepal",
            "AFF_ISO": "NP"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [55.841088119829, 20.7242833183209]
        },
        "properties": {
            "COUNTRY": "Oman",
            "ISO": "OM",
            "COUNTRYAFF": "Oman",
            "AFF_ISO": "OM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [69.08835090769651, 30.116188371410882]
        },
        "properties": {
            "COUNTRY": "Pakistan",
            "ISO": "PK",
            "COUNTRYAFF": "Pakistan",
            "AFF_ISO": "PK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [51.19794918743203, 25.318528486425386]
        },
        "properties": {
            "COUNTRY": "Qatar",
            "ISO": "QA",
            "COUNTRYAFF": "Qatar",
            "AFF_ISO": "QA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [44.600958178225596, 24.136038144757897]
        },
        "properties": {
            "COUNTRY": "Saudi Arabia",
            "ISO": "SA",
            "COUNTRYAFF": "Saudi Arabia",
            "AFF_ISO": "SA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [45.40037867243972, 6.524534573103924]
        },
        "properties": {
            "COUNTRY": "Somalia",
            "ISO": "SO",
            "COUNTRYAFF": "Somalia",
            "AFF_ISO": "SO"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [80.66931169770622, 7.696630939329944]
        },
        "properties": {
            "COUNTRY": "Sri Lanka",
            "ISO": "LK",
            "COUNTRYAFF": "Sri Lanka",
            "AFF_ISO": "LK"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [70.94215281065698, 38.56933138382972]
        },
        "properties": {
            "COUNTRY": "Tajikistan",
            "ISO": "TJ",
            "COUNTRYAFF": "Tajikistan",
            "AFF_ISO": "TJ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [58.4577357627054, 39.06069118001429]
        },
        "properties": {
            "COUNTRY": "Turkmenistan",
            "ISO": "TM",
            "COUNTRYAFF": "Turkmenistan",
            "AFF_ISO": "TM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [54.27920525789581, 24.18250292309135]
        },
        "properties": {
            "COUNTRY": "United Arab Emirates",
            "ISO": "AE",
            "COUNTRYAFF": "United Arab Emirates",
            "AFF_ISO": "AE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [47.46815793206386, 16.001392616307445]
        },
        "properties": {
            "COUNTRY": "Yemen",
            "ISO": "YE",
            "COUNTRYAFF": "Yemen",
            "AFF_ISO": "YE"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [45.05490831965259, 40.17841274230679]
        },
        "properties": {
            "COUNTRY": "Armenia",
            "ISO": "AM",
            "COUNTRYAFF": "Armenia",
            "AFF_ISO": "AM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [48.634592670644324, 40.3920509942049]
        },
        "properties": {
            "COUNTRY": "Azerbaijan",
            "ISO": "AZ",
            "COUNTRYAFF": "Azerbaijan",
            "AFF_ISO": "AZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [66.3759193479301, 47.641465195176835]
        },
        "properties": {
            "COUNTRY": "Kazakhstan",
            "ISO": "KZ",
            "COUNTRYAFF": "Kazakhstan",
            "AFF_ISO": "KZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [74.17532903468319, 41.35698905438358]
        },
        "properties": {
            "COUNTRY": "Kyrgyzstan",
            "ISO": "KG",
            "COUNTRYAFF": "Kyrgyzstan",
            "AFF_ISO": "KG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [63.8548297593985, 41.4879065244633]
        },
        "properties": {
            "COUNTRY": "Uzbekistan",
            "ISO": "UZ",
            "COUNTRYAFF": "Uzbekistan",
            "AFF_ISO": "UZ"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [105.70209512200549, -10.446440802183416]
        },
        "properties": {
            "COUNTRY": "Christmas Island",
            "ISO": "CX",
            "COUNTRYAFF": "Australia",
            "AFF_ISO": "AU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [96.83688767323002, -12.171249450199545]
        },
        "properties": {
            "COUNTRY": "Cocos Islands",
            "ISO": "CC",
            "COUNTRYAFF": "Australia",
            "AFF_ISO": "AU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [113.96538246847302, 0.15591979959037652]
        },
        "properties": {
            "COUNTRY": "Indonesia",
            "ISO": "ID",
            "COUNTRYAFF": "Indonesia",
            "AFF_ISO": "ID"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [125.95024049562659, -8.809894630601962]
        },
        "properties": {
            "COUNTRY": "Timor-Leste",
            "ISO": "TL",
            "COUNTRYAFF": "Timor-Leste",
            "AFF_ISO": "TL"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [134.02277170916162, -25.697337673983082]
        },
        "properties": {
            "COUNTRY": "Australia",
            "ISO": "AU",
            "COUNTRYAFF": "Australia",
            "AFF_ISO": "AU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [166.92937633139178, -0.5221021440668993]
        },
        "properties": {
            "COUNTRY": "Nauru",
            "ISO": "NR",
            "COUNTRYAFF": "Nauru",
            "AFF_ISO": "NR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [165.50767040438612, -21.33003372660827]
        },
        "properties": {
            "COUNTRY": "New Caledonia",
            "ISO": "NC",
            "COUNTRYAFF": "France",
            "AFF_ISO": "FR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [167.95259597483337, -29.037654445046282]
        },
        "properties": {
            "COUNTRY": "Norfolk Island",
            "ISO": "NF",
            "COUNTRYAFF": "Australia",
            "AFF_ISO": "AU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [144.8348942994695, -7.156912819152135]
        },
        "properties": {
            "COUNTRY": "Papua New Guinea",
            "ISO": "PG",
            "COUNTRYAFF": "Papua New Guinea",
            "AFF_ISO": "PG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [160.16475795033884, -9.613104734596515]
        },
        "properties": {
            "COUNTRY": "Solomon Islands",
            "ISO": "SB",
            "COUNTRYAFF": "Solomon Islands",
            "AFF_ISO": "SB"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [179.217833977593, -8.514701506447222]
        },
        "properties": {
            "COUNTRY": "Tuvalu",
            "ISO": "TV",
            "COUNTRYAFF": "Tuvalu",
            "AFF_ISO": "TV"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [166.84912735669738, -15.189132121699332]
        },
        "properties": {
            "COUNTRY": "Vanuatu",
            "ISO": "VU",
            "COUNTRYAFF": "Vanuatu",
            "AFF_ISO": "VU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [105.03973078680701, 12.699186865507775]
        },
        "properties": {
            "COUNTRY": "Cambodia",
            "ISO": "KH",
            "COUNTRYAFF": "Cambodia",
            "AFF_ISO": "KH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [103.76375899026448, 18.117282736873282]
        },
        "properties": {
            "COUNTRY": "Laos",
            "ISO": "LA",
            "COUNTRYAFF": "Laos",
            "AFF_ISO": "LA"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [114.63330303992869, 3.6716608556387857]
        },
        "properties": {
            "COUNTRY": "Malaysia",
            "ISO": "MY",
            "COUNTRYAFF": "Malaysia",
            "AFF_ISO": "MY"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [97.08892285397344, 19.901227931399873]
        },
        "properties": {
            "COUNTRY": "Myanmar",
            "ISO": "MM",
            "COUNTRYAFF": "Myanmar",
            "AFF_ISO": "MM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [103.81025757634053, 1.3528251890006349]
        },
        "properties": {
            "COUNTRY": "Singapore",
            "ISO": "SG",
            "COUNTRYAFF": "Singapore",
            "AFF_ISO": "SG"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.08675116214552, 13.66222784745538]
        },
        "properties": {
            "COUNTRY": "Thailand",
            "ISO": "TH",
            "COUNTRYAFF": "Thailand",
            "AFF_ISO": "TH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [105.91338832758704, 16.517347170839393]
        },
        "properties": {
            "COUNTRY": "Vietnam",
            "ISO": "VN",
            "COUNTRYAFF": "Vietnam",
            "AFF_ISO": "VN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [90.43212562608613, 23.673728665121]
        },
        "properties": {
            "COUNTRY": "Bangladesh",
            "ISO": "BD",
            "COUNTRYAFF": "Bangladesh",
            "AFF_ISO": "BD"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [90.46716647173861, 27.42163933959824]
        },
        "properties": {
            "COUNTRY": "Bhutan",
            "ISO": "BT",
            "COUNTRYAFF": "Bhutan",
            "AFF_ISO": "BT"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [104.69113855849604, 38.07325481105728]
        },
        "properties": {
            "COUNTRY": "China",
            "ISO": "CN",
            "COUNTRYAFF": "China",
            "AFF_ISO": "CN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [114.6430958360464, 4.543205889917609]
        },
        "properties": {
            "COUNTRY": "Brunei Darussalam",
            "ISO": "BN",
            "COUNTRYAFF": "Brunei Darussalam",
            "AFF_ISO": "BN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [121.82208941416745, 15.586542251094242]
        },
        "properties": {
            "COUNTRY": "Philippines",
            "ISO": "PH",
            "COUNTRYAFF": "Philippines",
            "AFF_ISO": "PH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [127.76224551357649, 36.402386712544114]
        },
        "properties": {
            "COUNTRY": "South Korea",
            "ISO": "KR",
            "COUNTRYAFF": "South Korea",
            "AFF_ISO": "KR"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [103.3987360327455, 47.08644454604851]
        },
        "properties": {
            "COUNTRY": "Mongolia",
            "ISO": "MN",
            "COUNTRYAFF": "Mongolia",
            "AFF_ISO": "MN"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [127.3379805653744, 40.19198091470839]
        },
        "properties": {
            "COUNTRY": "North Korea",
            "ISO": "KP",
            "COUNTRYAFF": "North Korea",
            "AFF_ISO": "KP"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [144.78024458298802, 13.445430479945276]
        },
        "properties": {
            "COUNTRY": "Guam",
            "ISO": "GU",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [137.46934234351835, 36.76738832597829]
        },
        "properties": {
            "COUNTRY": "Japan",
            "ISO": "JP",
            "COUNTRYAFF": "Japan",
            "AFF_ISO": "JP"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [168.72016025351076, 7.307929900994344]
        },
        "properties": {
            "COUNTRY": "Marshall Islands",
            "ISO": "MH",
            "COUNTRYAFF": "Marshall Islands",
            "AFF_ISO": "MH"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [158.2291899444527, 6.8789448129255435]
        },
        "properties": {
            "COUNTRY": "Micronesia",
            "ISO": "FM",
            "COUNTRYAFF": "Micronesia",
            "AFF_ISO": "FM"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [145.74119737203134, 15.178063516432115]
        },
        "properties": {
            "COUNTRY": "Northern Mariana Islands",
            "ISO": "MP",
            "COUNTRYAFF": "United States",
            "AFF_ISO": "US"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [134.57965086721052, 7.534775852547396]
        },
        "properties": {
            "COUNTRY": "Palau",
            "ISO": "PW",
            "COUNTRYAFF": "Palau",
            "AFF_ISO": "PW"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [98.6704990698032, 59.039434214106194]
        },
        "properties": {
            "COUNTRY": "Russian Federation",
            "ISO": "RU",
            "COUNTRYAFF": "Russian Federation",
            "AFF_ISO": "RU"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.6516251409956983, 40.365008336683836]
        },
        "properties": {
            "COUNTRY": "Spain",
            "ISO": "ES",
            "COUNTRYAFF": "Spain",
            "AFF_ISO": "ES"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-16.53799441021647, 28.297665106525546]
        },
        "properties": {
            "COUNTRY": "Canarias",
            "ISO": "ES",
            "COUNTRYAFF": "Spain",
            "AFF_ISO": "ES"
        }
    }]
}

  const transformData = () => {
	
	const countriesObject = {};
	dataToTransform.features.map(feature => {
        countriesObject[feature['properties']['ISO']] = {
            countryName: feature['properties']['COUNTRY'],
            coordinates: feature['geometry']['coordinates']
        }
	});
	return countriesObject;
};

const transformedData = JSON.stringify(transformData());
const fs = require("fs");
fs.writeFile('./assets/data/world-countries-centroids.json', transformedData, (err) => {
	if (err) {
		console.err(err);
	} else {
		transformedData;
	}
});

// I created world-countries-centroids.json file by running this script in NodeJS.