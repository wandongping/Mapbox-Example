var config = {
  API_URL: "http://minedata.cn/minemapapi/v2.0.0/",
  DATA_URL: "http://datahive.minedata.cn/data/",
  MERGE_URL: "http://datahive.minedata.cn/mergeddata/",
  ACCESS_TOKEN: '<your access token here>',
  SOLUTION: 2365
};
var _style = {
  "version": 8,
  "glyphs": config.API_URL + "fonts/{fontstack}/{range}.pbf",
  "sprite": config.API_URL + "sprite/sprite",
  "layers": [{
    "id": "95630e77a2b746cd882cdc2cc348f1d1",
    "maxzoom": 22,
    "source": "",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "",
      "prefix": "",
      "describe": "背景",
      "name": "背景",
      "sourceminzoom": 0.0,
      "groupname": "",
      "groupid": "",
      "datatype": "background",
      "sourcemaxzoom": 22.0,
      "zindex": 0
    },
    "source-layer": "",
    "paint": {
      "background-color": "#ffffff"
    },
    "minzoom": 0,
    "type": "background"
  }, {
    "id": "71009a7b7c4643b9894c5332eaf70a2f",
    "maxzoom": 8.0,
    "source": "Worldwaterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Worldwaterface",
      "prefix": "",
      "describe": "世界地图水系面",
      "name": "世界地图水系面",
      "sourceminzoom": 3.0,
      "groupname": "轮廓面",
      "groupid": "6e03e6e4",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 1
    },
    "source-layer": "Worldwaterface",
    "paint": {
      "fill-color": "#a1cdfb"
    },
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "9fc5309915f44ae6846f2665ab5feec8",
    "maxzoom": 8.5,
    "source": "Worldcountries",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Worldcountries",
      "prefix": "",
      "describe": "世界地图",
      "name": "世界地图",
      "sourceminzoom": 3.0,
      "groupname": "轮廓面",
      "groupid": "6e03e6e4",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 2
    },
    "source-layer": "Worldcountries",
    "paint": {
      "fill-color": "#ffffff"
    },
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "1b316345c7b64e858298614c4abca946",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_海岸线",
      "sourceminzoom": 3.0,
      "groupname": "轮廓面",
      "groupid": "6e03e6e4",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 3
    },
    "paint": {
      "fill-color": "#a1cdfb"
    },
    "source-layer": "Waterface",
    "minzoom": 5.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "b958454e5b9f4475bd964794db7e9e5d",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_8-17",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 4
    },
    "paint": {
      "fill-color": "#a1cdfb"
    },
    "source-layer": "Waterface",
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 5, 1, 2]]
  }, {
    "id": "f55abf5c458748e982ad08607c002478",
    "maxzoom": 8.5,
    "source": "Worldislands",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Worldislands",
      "prefix": "",
      "describe": "世界地图岛屿",
      "name": "世界地图岛屿面",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 5
    },
    "source-layer": "Worldislands",
    "paint": {
      "fill-color": "#ffffff"
    },
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "e69bc5f51db64a9e8bd913e73e1b30f2",
    "maxzoom": 17.5,
    "source": "Waterline",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Waterline",
      "prefix": "",
      "describe": "单线河",
      "name": "单线河",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 6
    },
    "paint": {
      "line-color": "#a1cdfb",
      "line-opacity": 0.9,
      "line-width": 1.0
    },
    "source-layer": "Waterline",
    "minzoom": 3,
    "type": "line"
  }, {
    "id": "1570f902b53f40e586867e47db26f36b",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_湖_8",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 7
    },
    "paint": {
      "fill-color": "#a6cce6"
    },
    "source-layer": "Waterface",
    "minzoom": 4.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 3]]
  }, {
    "id": "475b1981035042c1a3052f803569803f",
    "maxzoom": 8,
    "source": "Waterface",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_湖_8_水纹",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 8
    },
    "paint": {
      "fill-color": "#a6cce6",
      // "fill-water": "water"
    },
    "source-layer": "Waterface",
    "minzoom": 3.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 3]]
  }, {
    "id": "0f636adcf25d475d8f4efac5378a851d",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "",
      "describe": "行政区划边界",
      "name": "边界_国界",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "89109adc",
      "datatype": "line",
      "sourcemaxzoom": 8.5,
      "zindex": 9
    },
    "source-layer": "Adminbound",
    "paint": {
      "line-color": "#8d8465",
      "line-width": {
        "stops": [
          [3, 0.5],
          [8, 2]
        ],
        "base": 1
      }
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["!in", "form", 8, 2],
      ["==", "kind", 1]
    ]
  }, {
    "id": "216274ced06948b3b17fb89dab797893",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "",
      "describe": "行政区划边界",
      "name": "边界_九段线",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "89109adc",
      "datatype": "line",
      "sourcemaxzoom": 8.5,
      "zindex": 10
    },
    "paint": {
      "line-color": "#8d8465",
      "line-width": {
        "stops": [
          [3, 0.5],
          [8, 2]
        ],
        "base": 1
      }
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["!in", "form", 8, 2],
      ["==", "kind", 3]
    ]
  }, {
    "id": "1fd39902bfb147f9b88a704779dc25ac",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "",
      "describe": "行政区划边界",
      "name": "边界_争议区域",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "89109adc",
      "datatype": "line",
      "sourcemaxzoom": 8.5,
      "zindex": 11
    },
    "paint": {
      "line-dasharray": [3, 3, 5, 5],
      "line-color": "#8d8465",
      "line-width": {
        "stops": [
          [3, 0.5],
          [8, 2]
        ],
        "base": 1
      }
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["!in", "form", 8, 2],
      ["==", "kind", 2]
    ]
  }, {
    "id": "85728b7b80ba4f67929387fd75f5a853",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "",
      "describe": "行政区划边界",
      "name": "边界_香港",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "89109adc",
      "datatype": "line",
      "sourcemaxzoom": 8.5,
      "zindex": 12
    },
    "paint": {
      "line-dasharray": [6, 3, 3, 4],
      "line-color": "#8d8465",
      "line-width": {
        "stops": [
          [3, 0.5],
          [8, 2]
        ],
        "base": 1
      }
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["!in", "form", 8, 2],
      ["==", "kind", 6]
    ]
  }, {
    "id": "48ecd5d336504f0cac46368af217830d",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "",
      "describe": "行政区划边界",
      "name": "边界_省会",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "89109adc",
      "datatype": "line",
      "sourcemaxzoom": 8.5,
      "zindex": 13
    },
    "source-layer": "Adminbound",
    "paint": {
      "line-color": "#b7b4af",
      "line-width": 0.5
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 5]]
  }, {
    "id": "9eb4ff9042904e62a40438e96672d569",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_湖_17",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 14
    },
    "paint": {
      "fill-color": "#a6cce6",
      "fill-opacity": 0.9
    },
    "source-layer": "Waterface",
    "minzoom": 9.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 3, 4, 2],
      ["==", "display_class", 5]
    ]
  }, {
    "id": "289309a40e374533944617947c765876",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_湖_17_水纹",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 15
    },
    "paint": {
      "fill-color": "#a6cce6",
      "fill-opacity": 0.9,
      // "fill-water": "water"
    },
    "source-layer": "Waterface",
    "minzoom": 9,
    "type": "fill",
    "filter": ["all", ["in", "kind", 3, 4, 2],
      ["==", "display_class", 5]
    ]
  }, {
    "id": "d48a01774a4044ab994020cd988516ac",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_医院",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 16
    },
    "paint": {
      "fill-color": "#faedf1"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "4bc17917284e42ec904bc19b29abee9f",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_公墓",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 17
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-color": "#e6e8cf"
    },
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["==", "kind", 5]]
  }, {
    "id": "34658e256060462cbc76382e0389afac",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_大学",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 18
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-color": "#e4e4e4"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "c132b8f964644dc09d416a8bd28aaacc",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_小区",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 19
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-color": "#decbbe"
    },
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["in", "kind", 37]]
  }, {
    "id": "24e92bd20d7a4dd8a76421199454b705",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_休闲娱乐",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 20
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-color": "#9ed951"
    },
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 30]]
  }, {
    "id": "fb4b3470ca0e40a6a6c724f2c4c159e5",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_景区",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 21
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-color": "#e2efe6"
    },
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 31]]
  }, {
    "id": "203be201befa492994fbf5e5bfd94f5b",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_商业区",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 22
    },
    "paint": {
      "fill-color": "#f8efe1"
    },
    "source-layer": "Landuse",
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["in", "kind", 36, 2]]
  }, {
    "id": "acab2a07de6f48febf3a847c8523d1db",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "",
      "describe": "土地利用",
      "name": "土地利用_体育场",
      "sourceminzoom": 12.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 23
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-color": "#edf6f6"
    },
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 4]]
  }, {
    "id": "5e5bc87a3c64477993bddda3be1337d5",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "",
      "describe": "水域面",
      "name": "水域面_17",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 24
    },
    "paint": {
      "fill-color": "#a1cdfb",
      "fill-antialias": true
    },
    "source-layer": "Waterface",
    "minzoom": 11.0,
    "type": "fill",
    "filter": ["all", ["in", "display_class", 3, 4, 1, 2]]
  }, {
    "id": "0b6f5c723145478597410179c2f8c6bd",
    "maxzoom": 17.5,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "",
      "describe": "绿地",
      "name": "绿地",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 25
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-color": "#d4e9be"
    },
    "minzoom": 8.0,
    "type": "fill"
  }, {
    "id": "19fcf25d0aa0461385dd1409077adef6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级5_边框",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 26
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [15, 2],
          [20, 5]
        ],
        "base": 1.2
      },
      "line-color": "#f9d195",
      "line-width": 0.6
    },
    "minzoom": 15.0,
    "type": "line",
    "filter": ["all", ["in", "functionclass", 5]]
  }, {
    "id": "f605ddaaca434d9c8868d5ad077161ae",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级5",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 27
    },
    "source-layer": "Road",
    "paint": {
      "line-color": "#bbc0cb",
      "line-opacity": 1.0,
      "line-width": {
        "stops": [
          [14, 2],
          [17, 3]
        ],
        "base": 1
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["in", "functionclass", 5]]
  }, {
    "id": "ddcf8da9e50f432c8c22e9bae928e33b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "miter",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级4",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 28
    },
    "source-layer": "Road",
    "paint": {
      "line-color": "#bbc0cb",
      "line-opacity": 0.9,
      "line-width": {
        "stops": [
          [11, 1],
          [12, 1.5],
          [17, 8]
        ],
        "base": 1.2
      }
    },
    "minzoom": 11.0,
    "type": "line",
    "filter": ["all", ["in", "functionclass", 4]]
  }, {
    "id": "a5212c68c69443e3a3c5948a8d28a1b4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级3_边框",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 29
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [9, 1],
          [20, 6]
        ],
        "base": 1
      },
      "line-color": "#819fac",
      "line-width": 0.8
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["in", "functionclass", 3]]
  }, {
    "id": "d35a63fce7b3491daed5ac5ce66537aa",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级3",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 30
    },
    "paint": {
      "line-opacity": 0.9,
      "line-color": "#bbc0cb",
      "line-width": {
        "stops": [
          [9, 1],
          [12, 2.5],
          [17, 12]
        ],
        "base": 1
      }
    },
    "source-layer": "Road",
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["in", "functionclass", 3]]
  }, {
    "id": "0697e96f9d7a4afb976d4543a4ed595a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级2_边框",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 31
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [7, 1.2],
          [9, 1.2],
          [20, 6]
        ],
        "base": 1
      },
      "line-color": "#819fac",
      "line-width": 0.8
    },
    "source-layer": "Road",
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["==", "functionclass", 2]]
  }, {
    "id": "b5c5b10b0bb94feda2d580588889f5a8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级2",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 32
    },
    "source-layer": "Road",
    "paint": {
      "line-opacity": 0.9,
      "line-color": "#bbc0cb",
      "line-width": {
        "stops": [
          [7, 1],
          [12, 3.5],
          [17, 15]
        ],
        "base": 1
      }
    },
    "minzoom": 7.0,
    "type": "line",
    "filter": ["all", ["==", "functionclass", 2]]
  }, {
    "id": "dcd54d7e47024551b3ff7b50f73b64c8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "miter",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级1_边框",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 33
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [12, 5],
          [17, 20]
        ],
        "base": 1
      },
      "line-color": "#819fac",
      "line-width": {
        "stops": [
          [5, 0.3],
          [12, 1],
          [17, 1.5]
        ],
        "base": 1
      }
    },
    "source-layer": "Road",
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["==", "functionclass", 1]]
  }, {
    "id": "f6d5a09f71ed476db12cd8ba6a40b055",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "miter",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路",
      "name": "道路__等级1",
      "sourceminzoom": 5.0,
      "groupname": "道路线",
      "groupid": "dbe09d54",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 34
    },
    "paint": {
      "line-color": "#bbc0cb",
      "line-opacity": 0.8,
      "line-width": {
        "stops": [
          [5, 1],
          [12, 5],
          [17, 20]
        ],
        "base": 1
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "functionclass", 1]]
  }, {
    "id": "416504959f6b4c9686998ca410889487",
    "maxzoom": 17.5,
    "source": "Subwaypolygon",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Subwaypolygon",
      "prefix": "",
      "describe": "地铁站点面",
      "name": "地铁站点面",
      "sourceminzoom": 10.0,
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 35
    },
    "source-layer": "Subwaypolygon",
    "paint": {
      "fill-color": {
        "property": "color",
        "type": "identity"
      },
      "fill-opacity": 0.6
    },
    "minzoom": 16.0,
    "type": "fill"
  }, {
    "id": "7bb303952ffc40e4bac2f43d779ad5ca",
    "maxzoom": 17.0,
    "source": "Buildingmore",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Buildingmore",
      "prefix": "",
      "describe": "建筑物（增）",
      "name": "建筑物（增）_16",
      "sourceminzoom": 14.0,
      "groupname": "",
      "groupid": "",
      "datatype": "extrusion",
      "sourcemaxzoom": 17.5,
      "zindex": 36
    },
    "source-layer": "Buildingmore",
    "paint": {
      "fill-color": "#eff0bb",
      "fill-opacity": 0.6
    },
    "minzoom": 16,
    "type": "fill"
  }, {
    "id": "62f951c477be4a65be2577180ca0f92a",
    "maxzoom": 17.5,
    "source": "Buildingmore",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Buildingmore",
      "prefix": "",
      "describe": "建筑物（增）",
      "name": "建筑物（增）_17",
      "sourceminzoom": 14.0,
      "groupname": "",
      "groupid": "",
      "datatype": "extrusion",
      "sourcemaxzoom": 17.5,
      "zindex": 37
    },
    "paint": {
      "fill-extrusion-color": "#dcdecd",
      "fill-extrusion-translate-anchor": "map",
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.6,
      "fill-extrusion-translate": [0, 0],
      "fill-extrusion-height": {
        "property": "levels",
        "type": "identity"
      }
    },
    "source-layer": "Buildingmore",
    "minzoom": 17,
    "type": "fill-extrusion"
  }, {
    "id": "60793e90aad24cb48b66765dc81ceafa",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "",
      "describe": "公共交通线路",
      "name": "地铁线路_边框",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 38
    },
    "paint": {
      "line-color": "#ffffff",
      "line-width": 3.6
    },
    "source-layer": "Ptline",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "line_type", 2],
      ["==", "status", 0]
    ]
  }, {
    "id": "3bc60c65cbba44a589f819b617d3bd5e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "",
      "describe": "公共交通线路",
      "name": "地铁线路",
      "sourceminzoom": 10.0,
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 39
    },
    "source-layer": "Ptline",
    "paint": {
      "line-color": {
        "property": "color",
        "type": "identity"
      },
      "line-opacity": 0.6,
      "line-width": {
        "stops": [
          [10, 1.8],
          [20, 4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line"
  }, {
    "id": "26e5497fea944d999f6b61ee776b5069",
    "maxzoom": 13.0,
    "source": "Ptstop",
    "layout": {
      "text-size": 12.0,
      "icon-image": "metro-station",
      "visibility": "visible",
      "text-anchor": "center"
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "",
      "describe": "公共交通站点",
      "name": "地铁站_12",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 40
    },
    "paint": {
      "icon-color": "#cccccc",
      "text-translate": [0, 10]
    },
    "source-layer": "Ptstop",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0],
      ["==", "stationtype", 1]
    ]
  }, {
    "id": "bd292e22cb90455f87a12b79e54ee776",
    "maxzoom": 17.5,
    "source": "Ptexit",
    "layout": {
      "text-size": 10.0,
      "icon-padding": 0.0,
      "icon-image": "Provincial-15-3",
      "text-padding": 0.0,
      "visibility": "visible",
      "text-field": "{code}",
      "icon-size": 1.0
    },
    "layerInfo": {
      "source": "Ptexit",
      "prefix": "",
      "describe": "公共交通出入口",
      "name": "地铁出入口",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 41
    },
    "source-layer": "Ptexit",
    "paint": {
      "text-color": "#092c10",
      "text-halo-width": 12.0,
      "icon-halo-width": 1.0,
      "icon-color": "#ead728",
      "text-translate": [0, 0]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "gatetype", 1]]
  }, {
    "id": "4c70ed03a4094df3915d2f2c041ab9a5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "",
      "describe": "乡镇点",
      "name": "乡镇点",
      "sourceminzoom": 10.0,
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 42
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#222222",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000"
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["in", "kind", "260000"],
      ["in", "name_tag", 2, 0, 1]
    ]
  }, {
    "id": "d9deefe8f0ba4f57be584e1834abb53b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230126_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_机场",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 43
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "icon-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "text-color": "#0053bb",
      "icon-color": "#544946",
      "text-opacity": 0.9
    },
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      ["==", "rank", 4]
    ]
  }, {
    "id": "d06d0b535a7f4e29afe33292169479e0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1.0,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_直辖市",
      "sourceminzoom": 3.0,
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 44
    },
    "source-layer": "Annotation",
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "text-color": "#544946",
      "icon-color": "#544946",
      "text-opacity": 0.9
    },
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190107"],
      ["==", "rank", 4]
    ]
  }, {
    "id": "f246bd1d7f59477f9ad44b4643923fc6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_省政府",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 45
    },
    "paint": {
      "icon-halo-color": "#ffffff",
      "text-halo-color": "#ffffff",
      "text-color": "#544946",
      "text-halo-width": 0.8,
      "icon-color": "#544946",
      "text-opacity": 0.9
    },
    "source-layer": "Annotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195125"],
      ["==", "rank", 3]
    ]
  }, {
    "id": "b89b1411e1a04444b86c9648a4be6e46",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_180304_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1.0,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_公园_10",
      "sourceminzoom": 3.0,
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 46
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#007300",
      "text-halo-width": 0.8,
      "icon-color": "#ff0000",
      "text-opacity": 0.9
    },
    "source-layer": "Annotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      ["==", "rank", 4]
    ]
  }, {
    "id": "adaa2e6821894fcfa61f1dc08cde85e8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1.0,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_火车站",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 47
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "text-color": "#544946",
      "icon-color": "#ff0000",
      "text-opacity": 0.9
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "c36e3ac7dd0841b8997204619465cad0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_180304_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1.0,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_公园_12",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 48
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#007300",
      "text-halo-width": 0.8,
      "icon-color": "#ff0000",
      "text-opacity": 0.9
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "56494096b0404efeb17aed1376b96a59",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 1,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_名胜古迹",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 49
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "text-color": "#544946",
      "icon-color": "#ff0000",
      "text-opacity": 0.9
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "63a0eea0b89944e7809bc8dac564938d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "Tiananmen",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "icon-size": 0.1,
      "text-offset": [0, 1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "显示文字_天安门_10",
      "sourceminzoom": 3.0,
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 50
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#544946",
      "text-halo-width": 0.8,
      "icon-color": "#ff0000",
      "text-opacity": 0.9
    },
    "source-layer": "Annotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "天安门"]]
  }, {
    "id": "86d474f63b964877a8bd78a4825fe952",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "text-size": 10.0,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-anchor": "center",
      "text-offset": [0, 1]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "",
      "describe": "公共交通站点",
      "name": "地铁站_站点_13",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 51
    },
    "source-layer": "Ptstop",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3,
      "icon-color": "#171bf0",
      "text-translate": [0, 10]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0],
      ["==", "stationtype", 1],
      ["==", "istransfer", 0]
    ]
  }, {
    "id": "9dfd70ff0ae9425b8411eaec42e895b3",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "text-size": 10.0,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-anchor": "center",
      "text-offset": [0, 1]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "",
      "describe": "公共交通站点",
      "name": "地铁站_换乘_13",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 52
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.3,
      "icon-color": "#171bf0",
      "text-translate": [0, 10]
    },
    "source-layer": "Ptstop",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0],
      ["==", "stationtype", 1],
      ["==", "istransfer", 1]
    ]
  }, {
    "id": "3a5a54b0385648fcae2f6e9793fd52f9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 11],
          [17, 13]
        ],
        "base": 1
      },
      "visibility": "none",
      "text-pitch-alignment": "map",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路名_等级4",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 53
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "text-color": "#000000",
      "icon-color": "#ff0000",
      "text-opacity": 0.8
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["in", "functionclass", 4]]
  }, {
    "id": "b8d94ef2af894180b6a767e51da430d5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [14, 8],
          [17, 10]
        ],
        "base": 1
      },
      "visibility": "none",
      "text-pitch-alignment": "map",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路名_等级5",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 54
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "icon-color": "#ff0000",
      "text-opacity": 0.8
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "functionclass", 5]]
  }, {
    "id": "70ebcfc9b7404c699ce8f6c593f082c5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [5, 9],
          [11, 12],
          [17, 15]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路名_高速国道",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 55
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#000000",
      "text-halo-width": 0.8,
      "icon-color": "#ff0000",
      "text-opacity": 0.9
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["in", "kind", 2, 1, 3, 4],
      ["in", "functionclass", 1, 2]
    ]
  }, {
    "id": "b0c50413265f48978c32cb0f9cdc85dc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9.0,
      "icon-image": "state-15-{brief_cnt}",
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "text-offset": [0, 0.2]
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路简称_国道",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 56
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ff1b00",
      "text-color": "#ffffff",
      "text-halo-width": 0.0,
      "icon-halo-width": 1,
      "icon-color": "#72ff1b"
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 3],
      ["in", "functionclass", 1, 2]
    ]
  }, {
    "id": "5e17cd66550d4c5090676bf99267122c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9.0,
      "icon-image": "Provincial-15-{brief_cnt}",
      "visibility": "visible",
      "text-pitch-alignment": "map",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "text-offset": [0, 0.2]
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路简称_省道",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 57
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#f98100",
      "text-color": "#ffffff",
      "text-halo-width": 0.0,
      "icon-halo-width": 1,
      "icon-color": "#3c8724"
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 4],
      ["in", "functionclass", 1, 2]
    ]
  }, {
    "id": "a9deacc7ad4f46c6a1fd679562a67a05",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [8, 9],
          [11, 11],
          [17, 14]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路名_等级3",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 58
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.8,
      "text-color": "#000000",
      "icon-color": "#ff0000",
      "text-opacity": 0.8
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["in", "functionclass", 3]]
  }, {
    "id": "10f9dd328a264d8fa8a59e605349f69d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [7, 9],
          [11, 12],
          [17, 14]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路名_高等级其余",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 59
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#000000",
      "text-halo-width": 0.8,
      "icon-color": "#ff0000",
      "text-opacity": 0.85
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["in", "functionclass", 1, 2],
      ["!in", "kind", 2, 1, 3, 4]
    ]
  }, {
    "id": "dc86f566cd164e52b4332236146985e0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-keep-upright": true,
      "text-size": 9.0,
      "icon-image": "expressway-15-{brief_cnt}",
      "text-pitch-alignment": "map",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "text-anchor": "center",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "text-offset": [0, 0.2]
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "道路简称_高速道路_文字填充",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "cda38ff0",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 60
    },
    "paint": {
      "text-halo-color": "#008100",
      "text-color": "#ffffff",
      "text-halo-width": 0.0,
      "icon-translate-anchor": "map",
      "icon-halo-width": 1.0,
      "icon-color": "#3c8724",
      "text-opacity": 1.0
    },
    "source-layer": "Road",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 1],
      ["in", "functionclass", 1, 2]
    ]
  }, {
    "id": "b9306ed87edf46bb9b0dbd6f189052dd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-offset": [-1, -1.3]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "文字_钓鱼岛",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 61
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.5,
      "text-color": "#222222",
      "icon-color": "#ff0000"
    },
    "source-layer": "Annotation",
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "钓鱼岛"]
    ]
  }, {
    "id": "f5a1aae74434434ba268102288ee5408",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "文字_敏感岛屿",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 62
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#222222",
      "text-halo-width": 0.5,
      "icon-color": "#ff0000"
    },
    "source-layer": "Annotation",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["!in", "name_zh", "钓鱼岛", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "d724d80e89944db58e4666916fe33c5d",
    "maxzoom": 6.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 10.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "文字_（台湾省详细资料暂缺）",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 63
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#222222",
      "text-halo-width": 0.5,
      "icon-color": "#ff0000"
    },
    "source-layer": "Annotation",
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "37f636d8af3246f3aa3041761b945ec0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 20.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "",
      "describe": "文字",
      "name": "文字_（台湾省详细资料暂缺）_6",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 64
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.5,
      "text-color": "#222222",
      "icon-color": "#ff0000"
    },
    "minzoom": 6.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "3c33f6e17e234e9c92f31c2fb26d4cd4",
    "maxzoom": 8.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 12.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-offset": [-1, 0]
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "",
      "describe": "世界地图代表点",
      "name": "世界代表点_海域名_台湾海峡",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 65
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#4b82c1",
      "text-halo-width": 0.1,
      "icon-color": "#ff0000"
    },
    "source-layer": "Worldannotation",
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "275008"],
      ["==", "name_zh", "台湾海峡"]
    ]
  }, {
    "id": "a97168a8fb884cfa833d7cde380a2733",
    "maxzoom": 11.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 13.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_区/自治县_11",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 66
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.0,
      "text-color": "#222222",
      "icon-color": "#ff0000",
      "text-translate-anchor": "map",
      "text-opacity": 1.0
    },
    "source-layer": "Adminflag",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4]]
  }, {
    "id": "d5656fd2097b4d11be9bf405cbe1c457",
    "maxzoom": 11.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "circle-brown-11",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "map",
      "text-anchor": "bottom",
      "text-allow-overlap": false,
      "icon-size": 0.5,
      "text-offset": [0, -0.3]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_地级市",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 67
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.5,
      "text-color": "#222222",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 6.0,
    "type": "symbol",
    "filter": ["all", ["==", "type", 3]]
  }, {
    "id": "7c0f1519357f4a6fbbd35dfe815e7ece",
    "maxzoom": 11.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "text-anchor": "bottom",
      "icon-size": 0.5,
      "text-offset": [0, -0.3]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_省会/直辖市",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 68
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#222222",
      "text-halo-width": 0.5,
      "icon-color": "#ff0000"
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["!in", "name_zh", "香港", "澳門", "天津"]
    ]
  }, {
    "id": "d1937e37ff634991924b827181ade36e",
    "maxzoom": 11.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "map",
      "text-anchor": "left",
      "text-allow-overlap": false,
      "icon-size": 0.5,
      "text-offset": [-2.5, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_天津",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 69
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.5,
      "text-color": "#222222",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["==", "name_zh", "天津"]
    ]
  }, {
    "id": "8e75cdeb089246a49f4144849f168594",
    "maxzoom": 11.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "map",
      "text-anchor": "right",
      "text-allow-overlap": false,
      "icon-size": 0.5,
      "text-offset": [0.4, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_澳门",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 70
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.5,
      "text-color": "#222222",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["==", "name_zh", "澳門"]
    ]
  }, {
    "id": "d0ea69c006c546d59b7b0f4f678b8d53",
    "maxzoom": 11.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "map",
      "text-anchor": "left",
      "text-allow-overlap": false,
      "icon-size": 0.5,
      "text-offset": [0.4, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_香港",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 71
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.5,
      "text-color": "#222222",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["==", "name_zh", "香港"]
    ]
  }, {
    "id": "9ccfd58a2c0544d5887a6d805cb37673",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [3, 16],
          [17, 24]
        ],
        "base": 1
      },
      "icon-image": "star-11",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-anchor": "bottom",
      "icon-size": 1.5,
      "text-offset": [0, -0.3]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "",
      "describe": "行政区划代表点",
      "name": "代表点_首都",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 72
    },
    "paint": {
      "text-halo-color": "#000000",
      "text-color": "#222222",
      "text-halo-width": 0.0,
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["in", "capital", 1]]
  }, {
    "id": "cc62fe6b1d764371b3c14deadc2313b6",
    "maxzoom": 4.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 20.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "",
      "describe": "世界地图代表点",
      "name": "世界代表点_国家",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 73
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#ee0000",
      "text-halo-width": 2.0,
      "icon-color": "#ff0000"
    },
    "source-layer": "Worldannotation",
    "minzoom": 3.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "中华人民共和国"]]
  }, {
    "id": "9930f2419441450196ddddc48ba27c96",
    "maxzoom": 8.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 12.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "",
      "describe": "世界地图代表点",
      "name": "世界代表点_大洋",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 74
    },
    "source-layer": "Worldannotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.1,
      "text-color": "#4b82c1",
      "icon-color": "#ff0000"
    },
    "minzoom": 3.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "405003"]]
  }, {
    "id": "4465611e03ad4d53b445a28f3e3deeff",
    "maxzoom": 8.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 12.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "",
      "describe": "世界地图代表点",
      "name": "世界代表点_海域名",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 75
    },
    "source-layer": "Worldannotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 0.1,
      "text-color": "#4b82c1",
      "icon-color": "#ff0000"
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "275008"],
      ["!=", "name_zh", "台湾海峡"]
    ]
  }, {
    "id": "c005d618ccc34d03b18ecaa7b06d883d",
    "maxzoom": 8.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 30.0,
      "visibility": "visible",
      "text-field": "{name_zh}"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "",
      "describe": "世界地图代表点",
      "name": "世界代表点_洲",
      "sourceminzoom": 3.0,
      "groupname": "代表点",
      "groupid": "5173a16c",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 76
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#704f17",
      "text-halo-width": 0.5,
      "icon-color": "#ff0000"
    },
    "source-layer": "Worldannotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "405002"]]
  }, {
    "id": "14ec135a97a94d139ff86bfa0cb1e281",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 9],
          [18, 14]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "",
      "describe": "公共交通线路名称",
      "name": "地铁线路名称",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 77
    },
    "source-layer": "Ptline",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": {
        "property": "color",
        "type": "identity"
      },
      "text-halo-width": 1.0,
      "icon-color": "#ff0000"
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0]]
  }],
  "solution": {
    "bearing": 0.0,
    "center": "[116.4234645,39.9371442]",
    "describe": "修改名称显示条件；去掉铁路；地铁颜色变浅",
    "icon": "standard",
    "maxZoom": 17.0,
    "minZoom": 3.0,
    "name": "示例中心浅色地图",
    "pitch": 0.0,
    "template": "0",
    "zoom": 10.0
  },
  "sources": {
    "Ptstop": {
      "tiles": [config.DATA_URL + "Ptstop/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Landuse": {
      "tiles": [config.DATA_URL + "Landuse/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Merge_1": {
      "tiles": [config.MERGE_URL + "Adminflag,Annotation,Ptline,Road,Villtown,Worldannotation/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Buildingmore": {
      "tiles": [config.DATA_URL + "Buildingmore/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Worldislands": {
      "tiles": [config.DATA_URL + "Worldislands/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Greenface": {
      "tiles": [config.DATA_URL + "Greenface/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Worldwaterface": {
      "tiles": [config.DATA_URL + "Worldwaterface/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Waterline": {
      "tiles": [config.DATA_URL + "Waterline/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Subwaypolygon": {
      "tiles": [config.DATA_URL + "Subwaypolygon/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Ptexit": {
      "tiles": [config.DATA_URL + "Ptexit/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Worldcountries": {
      "tiles": [config.DATA_URL + "Worldcountries/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Waterface": {
      "tiles": [config.DATA_URL + "Waterface/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Adminbound": {
      "tiles": [config.DATA_URL + "Adminbound/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    }
  }
}