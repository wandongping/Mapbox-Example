var config = {
  API_URL: "http://minedata.cn/minemapapi/v2.0.0/",
  DATA_URL: "http://datahive.minedata.cn/data/",
  DYN_URL: "http://datahive.minedata.cn/dynamicdata/",
  OTHER_URL: "http://datahive.minedata.cn/otherdata/",
  MERGE_URL: "http://datahive.minedata.cn/mergeddata/",
  ACCESS_TOKEN: '<your access token here>',
  SOLUTION: 9389
};
var _style = {
  "version": 8,
  "glyphs": config.API_URL + "fonts/{fontstack}/{range}.pbf",
  "sprite": config.API_URL + "sprite/sprite",
  "layers": [{
    "id": "28d7e16ff6974bb7a9f9e0ba060fb6ee",
    "maxzoom": 17.5,
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
    "paint": {
      "background-color": "#f5f5f5"
    },
    "source-layer": "",
    "minzoom": 3.0,
    "type": "background"
  }, {
    "id": "5835467f7826448c9f827c5003608063",
    "maxzoom": 6.0,
    "source": "Worldwaterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Worldwaterface",
      "prefix": "102",
      "describe": "世界地图水系面",
      "name": "世界地图水系面",
      "sourceminzoom": 3.0,
      "groupname": "轮廓面",
      "groupid": "0f94af90",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 1
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Worldwaterface",
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "205aac422d9f4e19a60c0d2ab7929835",
    "maxzoom": 8.5,
    "source": "Worldcountries",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Worldcountries",
      "prefix": "104",
      "describe": "世界地图",
      "name": "世界地图",
      "sourceminzoom": 3.0,
      "groupname": "轮廓面",
      "groupid": "0f94af90",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 2
    },
    "paint": {
      "fill-outline-color": "#f5f5f5",
      "fill-color": "#f5f5f5",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Worldcountries",
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "56b800fd51a04339bb3eb84de9bba92a",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-海岸线",
      "sourceminzoom": 3.0,
      "groupname": "轮廓面",
      "groupid": "0f94af90",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 3
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 5.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "3e76204633164fabb246bd1524f9e7fd",
    "maxzoom": 13.5,
    "source": "Hillshade",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Hillshade",
      "prefix": "203",
      "describe": "山体阴影图",
      "name": "山体阴影图",
      "sourceminzoom": 1.0,
      "groupname": "",
      "groupid": "",
      "datatype": "raster",
      "sourcemaxzoom": 13.5,
      "zindex": 4
    },
    "paint": {
      "raster-opacity": 0.02,
      "raster-fade-duration": 0.001
    },
    "source-layer": "hillshade",
    "minzoom": 1,
    "type": "raster"
  }, {
    "id": "6feae62814fb47c195bdbfabfcd8cd4e",
    "maxzoom": 17.5,
    "source": "satellite",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "satellite",
      "prefix": "202",
      "describe": "卫星影像",
      "name": "资三",
      "sourceminzoom": 3.0,
      "groupname": "",
      "groupid": "",
      "datatype": "raster",
      "sourcemaxzoom": 17.5,
      "zindex": 5
    },
    "paint": {
      "raster-fade-duration": 0.001
    },
    "source-layer": "satellite",
    "minzoom": 3,
    "type": "raster"
  }, {
    "id": "f8f17033e13e4a04800069f227de5605",
    "maxzoom": 17.5,
    "source": "ResidentialPolygon",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "ResidentialPolygon",
      "prefix": "106004",
      "describe": "小区面",
      "name": "小区面",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 6
    },
    "source-layer": "ResidentialPolygon",
    "paint": {
      "fill-outline-color": "#f5f8f9",
      "fill-color": "#f5f8f9",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill"
  }, {
    "id": "26ec35d3988b4f2ea131f9a15a5b8dc5",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106006",
      "describe": "土地利用",
      "name": "文化区域",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 7
    },
    "paint": {
      "fill-outline-color": "#e5e2cf",
      "fill-color": "#e5e2cf",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 31, 38]]
  }, {
    "id": "f0afbf1bdc564b3cb402c1cf3a23dce0",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106005",
      "describe": "土地利用",
      "name": "机场",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 8
    },
    "paint": {
      "fill-outline-color": "#fcf6ef",
      "fill-color": "#fcf6ef",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 11]]
  }, {
    "id": "9991023546174c2f9cf59a7bc7526610",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106005",
      "describe": "土地利用",
      "name": "机场跑道",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 9
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#dedede",
      "fill-color": "#f1f1f1",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 12]]
  }, {
    "id": "a0718af626c940bf909482751e40cf1f",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106004",
      "describe": "土地利用",
      "name": "工业区",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 10
    },
    "paint": {
      "fill-outline-color": "#efeeee",
      "fill-color": "#efeeee",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 7]]
  }, {
    "id": "6de4ea8fa4154e90b35535e7a59a06bf",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106007",
      "describe": "土地利用",
      "name": "商业",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 11
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#fee2c4",
      "fill-color": "#fef7ef",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 30, 36, 35, 2]]
  }, {
    "id": "b1971135af844a839992e08b31b7c458",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106009",
      "describe": "土地利用",
      "name": "公共区域",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 12
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#e5e2cf",
      "fill-color": "#e5e2cf",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 32, 34, 33, 39]]
  }, {
    "id": "81f3a1b2e6644dd194e4590d8d155046",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106003",
      "describe": "土地利用",
      "name": "医院",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 13
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#f8eded",
      "fill-color": "#f8eded",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "8744da99887645acbe90da7578b47895",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106003",
      "describe": "土地利用",
      "name": "大学",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 14
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#e8ebed",
      "fill-color": "#e8ebed",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "93b2d7d44b7e4e7f98ce706ba276090d",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106008",
      "describe": "土地利用",
      "name": "停车场",
      "sourceminzoom": 12.0,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 15
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#e9e8e7",
      "fill-color": "#e9e8e7",
      "fill-opacity": 0.75,
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 6, 40]]
  }, {
    "id": "7ac2376049a64e14aeb786b89e94483d",
    "maxzoom": 17.5,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地16-17.5",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 16
    },
    "paint": {
      "fill-outline-color": "#c0ecae",
      "fill-color": "#c0ecae",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 16.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"]]
  }, {
    "id": "3cfed5d5cddf4c6bb781b2a1ec2503e4",
    "maxzoom": 16.0,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地14-16",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 17
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#c0ecae",
      "fill-color": "#c0ecae",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 20]
    ]
  }, {
    "id": "294faeec69584835b96bcff446498d7a",
    "maxzoom": 14.0,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地12-14",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 18
    },
    "paint": {
      "fill-outline-color": "#c0ecae",
      "fill-color": "#c0ecae",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 40]
    ]
  }, {
    "id": "5943d3d14f2d4f51a68a73aa6fbb256a",
    "maxzoom": 12.0,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地10-12",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 19
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#c0ecae",
      "fill-color": "#c0ecae",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 93]
    ]
  }, {
    "id": "aa2decccfb3f4be087dce5ab40e6905f",
    "maxzoom": 10.0,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地8-10",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 20
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#c0ecae",
      "fill-color": "#c0ecae",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 98]
    ]
  }, {
    "id": "60632264f5a94686acc3fa20e70a2f71",
    "maxzoom": 17.5,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "104",
      "describe": "绿地",
      "name": "岛无属性2",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 21
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#f5f5f5",
      "fill-color": "#f5f5f5",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", "1"]]
  }, {
    "id": "3be4742514c04e81bf481eb742ce1eaf",
    "maxzoom": 8.0,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "104",
      "describe": "绿地",
      "name": "岛无属性1",
      "sourceminzoom": 3.0,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 22
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#f5f5f5",
      "fill-color": "#f5f5f5",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 5.0,
    "type": "fill",
    "filter": ["all", [">=", "area_level", 75],
      ["==", "kind", "1"]
    ]
  }, {
    "id": "b3177844579f4da88a52cc46188a1830",
    "maxzoom": 8.0,
    "source": "Waterline",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Waterline",
      "prefix": "102",
      "describe": "单线河",
      "name": "单线河",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 23
    },
    "source-layer": "Waterline",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#aadaff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.8],
          [7, 1.6],
          [9, 1.6],
          [20, 10]
        ],
        "base": 1
      }
    },
    "minzoom": 3.0,
    "type": "line"
  }, {
    "id": "ba6f7878a46c4ee9b9544511725abc5b",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-港湾",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 24
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 3.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 5],
      ["==", "display_class", 8]
    ]
  }, {
    "id": "81befd5a0e0f444d9dd0b8c5e6477afb",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-鸭绿江",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 25
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 7.0,
    "type": "fill",
    "filter": ["all", ["==", "display_class", -1]]
  }, {
    "id": "0531841239ad40968ac52fe2a7b4b5dd",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-黄金坪",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 26
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 7.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", -2]
    ]
  }, {
    "id": "89f09bac559f476f9a846736ca1811bd",
    "maxzoom": 4.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼3-4",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 27
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 3.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 8]
    ]
  }, {
    "id": "39cb6510e5c54e5c985588444947e56d",
    "maxzoom": 6.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼4-6",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 28
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 4.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      [">=", "display_class", 7]
    ]
  }, {
    "id": "fe824700942849259305108ccac2645c",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级6-8",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 29
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 6.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 92]
    ]
  }, {
    "id": "cdeecd9bf6914ed2a979fa82b0f18adb",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级6-8",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 30
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 6.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      [">", "display_class", 1],
      [">=", "area_level", 60]
    ]
  }, {
    "id": "c0030b31bdb14e1e90cb7f3ea4b9353c",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级8-10",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 31
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 70]
    ]
  }, {
    "id": "63f47e8963a243029debab7124251e3b",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级8-10",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 32
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "52784f126faa4bea80cc807dc6f13a33",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级10-12",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 33
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 50]
    ]
  }, {
    "id": "1762d80c195b4dabbd37c3daea7997e0",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级10-12",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 34
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "117fcd6e01a14006a45ad1138096396b",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级12-14",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 35
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 30]
    ]
  }, {
    "id": "5834bd5e7ac14cb3b3157b24e0778206",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级12-14",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 36
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "5d1039f915ae4728bb5dbd6a2b571f23",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级14-16",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 37
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 10]
    ]
  }, {
    "id": "52d977e9adff48d09a0952c60a67ffa3",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级14-16",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 38
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "2d7f8b6ce7c945c0817f726dedb49fec",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级16-17.5",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 39
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 16.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1]
    ]
  }, {
    "id": "7973e8e5372245b5ac1380726a42b17f",
    "maxzoom": 6.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河3-6",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 40
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 3,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "055151ba58dd434fa3f065678c468d3a",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河6-8",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 41
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 6.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "09e8799749eb4a738bce604439bbb3a8",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级8-10",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 42
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1]
    ]
  }, {
    "id": "f56f79402c2b48dabb4fb68e689311a1",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河8-10",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 43
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "5de1c514686b47f1a9264d1dc4a58519",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级10-12",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 44
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1],
      [">=", "area_level", 73]
    ]
  }, {
    "id": "def61e80ada54e90ac2cd1e086c28dd7",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河10-12",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 45
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1],
      [">=", "area_level", 60]
    ]
  }, {
    "id": "c3b240ad84e54d32b656835b4ef1261a",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级12-14",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 46
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1],
      [">=", "area_level", 15]
    ]
  }, {
    "id": "b80e878d78f346419899950587dd50be",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河12-14",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 47
    },
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "798daaebd1fb43aea9b0e37e13207cab",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级14-16",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 48
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1]
    ]
  }, {
    "id": "1f1bf8fba11b4711bf83e3c04302339b",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河14-16",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 49
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1, 1],
      [">=", "area_level", 10]
    ]
  }, {
    "id": "f9c741a6cd494d11a9bb55c3976bef81",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河16-17.5",
      "sourceminzoom": 3.0,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 50
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#aadaff",
      "fill-color": "#aadaff",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 16.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1]
    ]
  }, {
    "id": "67892ad0e5f24b7b827f3b59c2b750f8",
    "maxzoom": 17.5,
    "source": "Subwaypolygon",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Subwaypolygon",
      "prefix": "106005",
      "describe": "地铁站点面",
      "name": "地铁站点面",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 51
    },
    "source-layer": "Subwaypolygon",
    "paint": {
      "fill-outline-color": "#f5f5f5",
      "fill-color": {
        "base": 0,
        "property": "color",
        "type": "identity"
      },
      "fill-opacity": 0.5,
      "fill-antialias": true
    },
    "minzoom": 15.0,
    "type": "fill"
  }, {
    "id": "2b3419c19827454ea6163ac7ffaa2209",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Railway",
      "prefix": "101009",
      "describe": "铁路",
      "name": "铁路_边框",
      "sourceminzoom": 6.0,
      "groupname": "铁路",
      "groupid": "50829a6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 52
    },
    "source-layer": "Railway",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#d5d8db",
      "line-width": {
        "stops": [
          [7, 1.5],
          [18, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 6,
    "type": "line"
  }, {
    "id": "77c2390e44f346049a304f7d3a910312",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Railway",
      "prefix": "101009",
      "describe": "铁路",
      "name": "铁路_线",
      "sourceminzoom": 6.0,
      "groupname": "铁路",
      "groupid": "50829a6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 53
    },
    "source-layer": "Railway",
    "paint": {
      "line-dasharray": [9, 9],
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [7, 1],
          [18, 3.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 6,
    "type": "line"
  }, {
    "id": "1e7edeb940ed40248a171e2fbac3f78f",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103003",
      "describe": "行政区划边界",
      "name": "特别行政区边界",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 54
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [6, 3, 3, 4],
      "line-color": {
        "stops": [
          [3, "#999999"],
          [4, "#999999"],
          [5, "#999999"],
          [8, "#999999"]
        ],
        "base": 1
      },
      "line-width": 1
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 6]]
  }, {
    "id": "5c770ac2f1b74a4788af1de5c75554a4",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103003",
      "describe": "行政区划边界",
      "name": "省界",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 55
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [5, 3],
      "line-color": {
        "stops": [
          [3, "#999999"],
          [4, "#999999"],
          [5, "#999999"],
          [8, "#999999"]
        ],
        "base": 1
      },
      "line-width": 1.0
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 5]]
  }, {
    "id": "c011f6d2256d44b2bbf9fd2fef613973",
    "maxzoom": 7,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103002",
      "describe": "行政区划边界",
      "name": "国界争议区域",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 56
    },
    "source-layer": "Adminbound",
    "paint": {
      "line-dasharray": [3, 3, 5, 5],
      "line-translate-anchor": "viewport",
      "line-color": "#81807f",
      "line-width": {
        "stops": [
          [3, 1],
          [8, 2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 2]]
  }, {
    "id": "c337eb82e6ab4458b46bc60ad69218e7",
    "maxzoom": 7.0,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103002",
      "describe": "行政区划边界",
      "name": "国界",
      "sourceminzoom": 3.0,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 57
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#81807f",
      "line-width": {
        "stops": [
          [3, 1],
          [8, 2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["in", "kind", 3, 1]]
  }, {
    "id": "915e443babab4c6a89a5dc1ef23e5198",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101007",
      "describe": "道路",
      "name": "轮渡9-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 58
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [3, 3],
      "line-color": "#89bdf3",
      "line-width": {
        "stops": [
          [10, 1],
          [18, 3]
        ],
        "base": 1.2
      }
    },
    "minzoom": 9.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 13],
      ["==", "const_st", 1]
    ]
  }, {
    "id": "7a897142a8cf47ee9597e6cf73feeef2",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 59
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["!in", "form", "15"]
    ]
  }, {
    "id": "5e5c92a17dd14493a19ad93949426c74",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 60
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["!in", "form", "15"]
    ]
  }, {
    "id": "a063003fba46475380c38b8a81c2363f",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "一般道路9-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 61
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.7],
          [9, 0.7],
          [10, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 9.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["in", "kind", 7, 6]
    ]
  }, {
    "id": "cc4a351c92da41cea7a0e7752ff209eb",
    "maxzoom": 9.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "一般道路5-9",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 62
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.7],
          [9, 0.7],
          [10, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      [">=", "functionclass", 3],
      ["in", "kind", 7, 6]
    ]
  }, {
    "id": "6d0f804654544a76889b43348498b036",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 63
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["!in", "form", "15"]
    ]
  }, {
    "id": "37bc460b7ee7456c88c5e9e4d45f1e8f",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 64
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["!in", "form", "15"]
    ]
  }, {
    "id": "55a194b347b94f6488ec1daeb804b9c2",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 65
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 36],
          [18, 36],
          [19, 36]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2]
    ]
  }, {
    "id": "d9f46c4f4f274865adf7ddcf4c158e83",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 66
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2]
    ]
  }, {
    "id": "4d82e6cd8d324105aec198342d2ad823",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 67
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2.5],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1]
    ]
  }, {
    "id": "a81f3c9456954a519c750e2d8bf7f106",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路5-10",
      "sourceminzoom": 5.0,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 68
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2.5],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1]
    ]
  }, {
    "id": "a899d51e179e439488dc75cf3e90fa17",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路边框10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 69
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      },
      "line-color": {
        "stops": [
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.7],
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "c38e7a83a0234f47aa80c4af39fa5d0c",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道边框10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 70
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [5, "#e5e5e5"],
          [6, "#e5e5e5"],
          [7, "#e5e5e5"],
          [8, "#e5e5e5"],
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.6],
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "e2de0f7cd58a4a0f9508418d8a910dae",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 71
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "20f62e5fe5694b78a5fce43e430cad92",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 72
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "f250d31a48ec4548a711f43ee2fa8958",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 73
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "4da43fce985f484fa9f3a7a3fda98f1c",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 74
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "e4227a4486384bb4b655f56ef8fcc533",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 75
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "3214164156434db58668f91752303fbd",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 76
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "c7e9f1db40ee4797a7a68b71afa7c38a",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 77
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["!in", "form", "10"]
    ]
  }, {
    "id": "4073489ae58b43059fce68f847df0d86",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 78
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["!in", "form", "10"]
    ]
  }, {
    "id": "58fd37a0382647c29b4a255e8c289f8b",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 79
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["!in", "form", "10"]
    ]
  }, {
    "id": "5def47fa7f0b4333acbf08295cd393cf",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路10-12",
      "sourceminzoom": 5.0,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 80
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["!in", "form", "10"]
    ]
  }, {
    "id": "66892b8bf3f4405db27836f80065313b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101006",
      "describe": "道路",
      "name": "步行道路边框14-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 81
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 2],
          [16, 3],
          [17, 5],
          [18, 5],
          [19, 5]
        ],
        "base": 1.2
      },
      "line-color": {
        "stops": [
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [13, 0],
          [14, 0.4],
          [15, 0.6],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 10],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "7721be7b0843483390a103aead5215f5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路边框13-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 82
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "70503f3282b045f68983668d684cd239",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "九级路边框14-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 83
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 1],
          [14, 2],
          [15, 4],
          [16, 6],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 0],
          [14, 0.3],
          [15, 0.6],
          [16, 0.8],
          [17, 1],
          [18, 1],
          [19, 1]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 9],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "5e0a77bdeecd4aeeaf920626074b9858",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路-边框14-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 84
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      },
      "line-color": {
        "stops": [
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.7],
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "2d321200fbef4f3082c3fa327dffacb5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101006",
      "describe": "道路",
      "name": "步行道路14-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 85
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [13, "#fdfdfd"],
          [14, "#fdfdfd"],
          [15, "#f2f2f2"],
          [16, "#f2f2f2"],
          [17, "#f2f2f2"],
          [18, "#f2f2f2"],
          [19, "#f2f2f2"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 2],
          [16, 3],
          [17, 5],
          [18, 5],
          [19, 5]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 10],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "471d5e28cc7d47b6abe9579bc306f686",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 86
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [5, "#e5e5e5"],
          [6, "#e5e5e5"],
          [7, "#e5e5e5"],
          [8, "#e5e5e5"],
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.6],
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "65f6942fc18d451cb3fbfb44c4e70697",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道附属边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 87
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "287e029080424af58b4c526a9ac79bf3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道附属12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 88
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "e5038a4e7d8e48f982986620bf9da4c3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道附属边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 89
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "e754712ed8a34bb68735995ee8af96d6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道附属12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 90
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "07b5b0e0c7a34a92ab3742bf5bb16257",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路13-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 91
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "d87fcd9aa2924277b633a3de31859d2d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "九级路14-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 92
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 2],
          [15, 4],
          [16, 6],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 9],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "01d87da3ecfd4a409349d1c73176c32d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路14-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 93
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "bf9c3dee7b47460c8a058079585d2ca3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 94
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "bea55782f74a43f587f978b9ee4a37cc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 95
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["!in", "form", "37", "39", "10", "15"]
    ]
  }, {
    "id": "0edce21659c34f1db03d4d86794cffcd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 96
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "0a1ad88e3422458bbafbec8b61a4adc1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 97
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "72497b002016455384eaeacb2a5eb572",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 98
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "ff49a33b601a4be4a49e8b8d5496903b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速附属边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 99
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "f2e304aa206342f48366019461a69dfe",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 100
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "bfa6306e7d7a4009bf648eb86d1b9989",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速附属12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 101
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "cac9ddae3a094430b39eb096ce19d720",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 102
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "a344aa5b39dc49ce8d7d3497960f89b8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路附属边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 103
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "41eb9b7220904809a2986a155ff37b13",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 104
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "9a7b8713d71c4a09aae1d98b515093b7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路附属12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 105
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2.4],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "f19203b6bc0e4be9914e678ee3bb15f2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "道路12-17.5",
      "groupid": "96ab7266",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 106
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 1.8],
          [10, 2],
          [11, 1.8],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "67733b22f0da4bbfb34ab099eea98b54",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路隧道边框",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 107
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1.2],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "514a5dc35fd54c708abae5586a8c7ebe",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路隧道",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 108
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "bdafdb1839c249c090a3ad10dc4e6da6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路隧道边框14",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 109
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "c5eab35e6641442aab91a56e2b0d0f91",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路隧道14",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 110
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "074c4135d2a64440ae8c07509fdbbbab",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道隧道边框14",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 111
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "365aef654bf34e6a933d79c59aeabec0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道隧道",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 112
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "117e0c7a65a34760ac852e7794b60782",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道隧道边框",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 113
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "c996db379bb4437babb77b5d4f6ee618",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道隧道",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 114
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "be9549422fe64601996a7b3ec0a02c21",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道隧道边框",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 115
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "483723eb94e14285aa63faed5d9ab00c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道隧道",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 116
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "74110b2d454d40f293b5880986c8521f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速隧道边框",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 117
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "31"]
    ]
  }, {
    "id": "65e536794c764869b6bd6bc505b2b347",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速隧道",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 118
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-opacity": 1.0,
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "31"]
    ]
  }, {
    "id": "435593b386784469bb2fd1e6a9776161",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路隧道边框",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 119
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#cccccc",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "4aba037af8214db68af5c46303208c90",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路隧道",
      "sourceminzoom": 5.0,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 120
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#e3e3e3",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "9ae77c25e5e74e0c80777abc4308f759",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-其它道路-边框13",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 121
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-color": {
        "stops": [
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "3ed480898e944b219c8f9965570d736a",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-其它道路13",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 122
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "ac3e1e826ea14d6aaf3540ed3b0b2023",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-乡镇村道路边框13",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 123
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      },
      "line-color": {
        "stops": [
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "ce683739f43a4ef6bb16e5980e7470dc",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-乡镇村道路13",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 124
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "792e06b84d644e2ca3fc958dd8d450c1",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-县道边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 125
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-color": {
        "stops": [
          [9, "#e5e5e5"],
          [10, "#e5e5e5"],
          [11, "#e5e5e5"],
          [12, "#e5e5e5"],
          [13, "#e5e5e5"],
          [14, "#e5e5e5"],
          [15, "#e5e5e5"],
          [16, "#e5e5e5"],
          [17, "#e5e5e5"],
          [18, "#e5e5e5"],
          [19, "#e5e5e5"]
        ],
        "base": 1
      },
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "0267a4daf18b43469c8ca3e663e2872f",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-县道",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 126
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "4aedea27edc24d5a8a479bb6d94f4dc4",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 127
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "f313b7ac878e4b3889e21da3766eab31",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道附属",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 128
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "c14b1acf59f9434ab00df4b53a5b0efb",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道附属边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 129
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "c0250f9f885e474b825e7ad659b4cd80",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 130
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "48f7789d8f3c4eb9a2836cac44cdc8ea",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道附属边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 131
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["in", "form", "37", "14", "36", "10", "38", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "120d4a951fe6419da28d5f68162c6521",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 132
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "form", "37", "14", "36", "10", "38", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "a9359f2c8eff485c8860ba9b1be87b17",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道附属",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 133
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      [">=", "zvalue", 1],
      ["in", "form", "37", "14", "36", "10", "38", "15"]
    ]
  }, {
    "id": "527eac6c8fa2489e90d7e4d308754ad2",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 134
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#fff2af",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      [">=", "zvalue", 1],
      ["!in", "form", "37", "14", "36", "10", "38", "15"]
    ]
  }, {
    "id": "3d968b580655444cbe32baf83b523866",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速附属边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 135
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "455c5dd160204e68a9f4b8be9b5e7f93",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 136
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "7abbde9a41284c5aa55ac1215fa99d0e",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速附属",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 137
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "0f70b5a8e5ca4465821855fbb6420eda",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 138
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": 0.0,
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "089603e25ce3441db92a0868c7aab5e8",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路附属边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 139
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.6],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "83ec88677d464fe7b2f340e5af519315",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路边框",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 140
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30],
          [20, 30]
        ],
        "base": 1.2
      },
      "line-color": "#f6cf65",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "a1b8dec6b3c6436090847626bbc73234",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路附属",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 141
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "b7bb07369b4e4646a8b2961bd5e663aa",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路",
      "sourceminzoom": 5.0,
      "groupname": "立交15-17.5",
      "groupid": "1cfdde5b",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 142
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffeba1",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "9fa068706311497192ead8f7177fdad2",
    "maxzoom": 16,
    "source": "Buildingmore",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Buildingmore",
      "prefix": "",
      "describe": "建筑物",
      "name": "建筑物-平面",
      "sourceminzoom": 14.0,
      "groupname": "",
      "groupid": "",
      "datatype": "extrusion",
      "sourcemaxzoom": 17.5,
      "zindex": 143
    },
    "source-layer": "Buildingmore",
    "paint": {
      "fill-color": {
        "stops": [
          [14, "#eeeeee"],
          [15, "#eeeeee"],
          [16, "#eeeeee"]
        ],
        "base": 1
      }
    },
    "minzoom": 14,
    "type": "fill"
  }, {
    "id": "2cdd8f8a84094af4b20c12927ac13467",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "101010",
      "describe": "公共交通线路",
      "name": "地铁线路_边框",
      "sourceminzoom": 10.0,
      "groupname": "地铁线路",
      "groupid": "74541ee7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 144
    },
    "source-layer": "Ptline",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-opacity": 1.0,
      "line-width": {
        "stops": [
          [10, 2.8],
          [19, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "status", 0]]
  }, {
    "id": "43c91476fd8d451c806c2f3b90b042bf",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "101010",
      "describe": "公共交通线路",
      "name": "地铁线路",
      "sourceminzoom": 10.0,
      "groupname": "地铁线路",
      "groupid": "74541ee7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 145
    },
    "source-layer": "Ptline",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-opacity": 0.5,
      "line-color": {
        "property": "color",
        "type": "identity"
      },
      "line-width": {
        "stops": [
          [10, 1.8],
          [19, 3.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "status", 0]]
  }, {
    "id": "cda915ec589b4fa481c5cf101f598f75",
    "maxzoom": 17.5,
    "source": "Buildingmore",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Buildingmore",
      "prefix": "",
      "describe": "建筑物",
      "name": "建筑物-立体",
      "sourceminzoom": 14.0,
      "groupname": "",
      "groupid": "",
      "datatype": "extrusion",
      "sourcemaxzoom": 17.5,
      "zindex": 146
    },
    "source-layer": "Buildingmore",
    "paint": {
      "fill-extrusion-color": "#eeeeee",
      "fill-extrusion-translate-anchor": "viewport",
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.3,
      "fill-extrusion-height": {
        "property": "levels",
        "type": "identity"
      },
      "fill-extrusion-translate": [0, 0]
    },
    "minzoom": 16.0,
    "type": "fill-extrusion"
  }, {
    "id": "dc6115bb0ce04740bb1b47d98514969b",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC5边框13-17.5",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 147
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 1.2],
          [19, 6]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.2],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Trafficrtic",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 5]]
  }, {
    "id": "0ccbc80766a5493e8e5cd6c1fb71957b",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC5-13-17.5",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 148
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [0, "#c9cbd3"],
          [1, "#63d668"],
          [2, "#ff974d"],
          [3, "#f23c32"],
          [4, "#811f1f"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 2],
          [19, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 5]]
  }, {
    "id": "3b6fe0dfa3294a21be8562d3fad06c0a",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC4边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 149
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 1.2],
          [12, 1.6],
          [19, 2.4]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.2],
          [12, 1.6],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Trafficrtic",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 4]]
  }, {
    "id": "1e8f83f1faab440b9c77f033932b3bdc",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC4-12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 150
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [0, "#c9cbd3"],
          [1, "#63d668"],
          [2, "#ff974d"],
          [3, "#f23c32"],
          [4, "#811f1f"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 2],
          [19, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 4]]
  }, {
    "id": "986aa314c56e4b9faafe50eff2d55326",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC123边框12-17.5",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 151
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-translate-anchor": "viewport",
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["in", "function_class", 1, 2, 3]]
  }, {
    "id": "4676d55d8f8e460d86137e68c927a7c9",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC123-12-17.5_2",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 152
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [0, "#c9cbd3"],
          [1, "#63d668"],
          [2, "#ff974d"],
          [3, "#f23c32"],
          [4, "#811f1f"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["in", "function_class", 1, 2, 3]]
  }, {
    "id": "ee66fe6f426b43b7975a979f69c2967b",
    "maxzoom": 12.0,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC2边框-8-12",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 153
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Trafficrtic",
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 2]]
  }, {
    "id": "32dd87aad21d428cbce649658ba4f15d",
    "maxzoom": 12.0,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC2-8-12",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 154
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [0, "#c9cbd3"],
          [1, "#63d668"],
          [2, "#ff974d"],
          [3, "#f23c32"],
          [4, "#811f1f"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 2]]
  }, {
    "id": "cd9e932f9cb9444d884307ccbf5c9752",
    "maxzoom": 12.0,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1-8-12边框",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 155
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Trafficrtic",
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "bd9997d695054eec81290496375f88ee",
    "maxzoom": 12.0,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1-8-12",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 156
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [0, "#c9cbd3"],
          [1, "#63d668"],
          [2, "#ff974d"],
          [3, "#f23c32"],
          [4, "#811f1f"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Trafficrtic",
    "minzoom": 8.0,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "af115082719c41dd82313faf57f7e50f",
    "maxzoom": 8.0,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1-5-8边框",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 157
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Trafficrtic",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "1bc24cf4ef2e4e62bc869fd1d2d0abfa",
    "maxzoom": 8.0,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1-5-8",
      "sourceminzoom": 5.0,
      "groupname": "交通路况",
      "groupid": "a1a749f7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 158
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": {
        "stops": [
          [0, "#c9cbd3"],
          [1, "#63d668"],
          [2, "#ff974d"],
          [3, "#f23c32"],
          [4, "#811f1f"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2],
          [12, 2.4],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "96bbf8c79c3f458dbd9e9b7ecf118224",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 11],
          [13, 11],
          [14, 11],
          [15, 11],
          [16, 12],
          [17, 12],
          [18, 12],
          [19, 12]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 11.0,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101006",
      "describe": "道路名",
      "name": "15步行道路名",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 159
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#666666",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 10],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "1c75eb437f3042d9a8b38fd21f5819cb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 11],
          [13, 11],
          [14, 11],
          [15, 11],
          [16, 12],
          [17, 13],
          [18, 13],
          [19, 13]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "14九级路名",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 160
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": "#666666",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 9],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "00e86fbacdef483db24787953c1993a2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12],
          [14, 14],
          [15, 14],
          [16, 14],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "14其他道路名",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 161
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#666666",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Road",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 8],
      ["==", "const_st", 1],
      ["!=", "form", "12"]
    ]
  }, {
    "id": "3d32340bec6f4c6992f71706b9bbd81c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12],
          [14, 12],
          [15, 14],
          [16, 14],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "14乡镇村道路名",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 162
    },
    "paint": {
      "text-halo-color": "#f9f9f9",
      "text-halo-width": 1.0,
      "text-color": "#696b6c",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "0de5eaea64dd4ad987dbd1fbb6fc778a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 11],
          [12, 11],
          [13, 12],
          [14, 12],
          [15, 13],
          [16, 14],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "12县道名",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 163
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": "#666666",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "58e6aead41e54ee1bc3d5777fea093ae",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [7, 10],
          [12, 10],
          [13, 10],
          [14, 11],
          [15, 11],
          [16, 11],
          [17, 12],
          [18, 12],
          [19, 12]
        ],
        "base": 1
      },
      "text-padding": 2.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Railway",
      "prefix": "101009",
      "describe": "铁路名",
      "name": "12铁路名",
      "sourceminzoom": 6.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 164
    },
    "source-layer": "Railway",
    "paint": {
      "text-halo-color": "#fefdfc",
      "text-color": "#76767b",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "symbol"
  }, {
    "id": "b59abb74449d4369afdac35bf921c850",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101007",
      "describe": "道路名",
      "name": "11轮渡名",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 165
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": "#4d81c6",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 13],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "9b4dd66b900044a3bd4f4bce901336d1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9.0,
      "icon-image": "county-15-{brief_cnt}",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.94
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "12县道简称",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 166
    },
    "paint": {
      "text-color": "#4a4a4a",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 6]
    ]
  }, {
    "id": "485af2b7e8004ea9928f2815d15bfb3f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9.0,
      "icon-image": "Provincial-15-{brief_cnt}",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.94,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路名",
      "name": "9省道简称",
      "sourceminzoom": 5.0,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 167
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 4]
    ]
  }, {
    "id": "07ad69f1436143f384d4a0f3dd4b8365",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17E-金融、保险-03-17级-ATM/自助银行",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 168
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "150101", "150102"]
    ]
  }, {
    "id": "209bc60250b14a4898d65323426acd45",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17E-金融、保险-01-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 169
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "150101"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "24b3dfa7a2314f2fb83cbbbc6ba81928",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17E-金融、保险-01-17级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 170
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "150103", "150104"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a8f0b7f284c247d1b98249c49a9e230e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "17M-交通运输、仓储-06-17级-通用",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 171
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230130", "230219", "230220", "230221", "230228", "230229"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "e0ba802e68ff4c9ba1721106dabe9e7f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "17K-居民服务-03-17级-宠物医院",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 172
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "210105"]
    ]
  }, {
    "id": "dbb56c8e937c4372b9956459b9385178",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "17K-居民服务-03-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 173
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "210101", "210102", "210103", "210104", "210201", "210202", "210203", "210204", "210206", "210207", "210209", "210210", "210213", "210214", "210216", "210217", "210218", "210219", "210301", "210302", "210303", "210400"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "c76d14e3380640bf8efd0118676bbe7d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17J-商业设施、商务服务-04-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 174
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "200200", "200300", "200400", "200404", "200405"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "0678e4232c1f49b49d20c4739464edcc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190200_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "17I-公共设施-06-17级-消防",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 175
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "190204"]
    ]
  }, {
    "id": "81ed54bb8e3b480d9803447791901664",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "17I-公共设施-06-17级-国际组织",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 176
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "190500", "190501"]
    ]
  }, {
    "id": "a36f2eb4ee4a4d6e9f01802e5d584407",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "17I-公共设施-06-17级-通用",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 177
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190111", "190112", "190113", "190114", "190301", "190502"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "8b3e88e4f93d4307b4a6e42629d32ec0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "17H-运动、休闲-03-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 178
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180209", "180210", "180211"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "9163461e74a443f59d622b7b3a892c27",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "17H-运动、休闲-03-17级-通用",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 179
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180206", "180207", "180208", "180301", "180302", "180303"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "869841f6f9c44dfc9e12e70a182cb014",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_180201_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "17H-运动、休闲-03-17级-休闲娱乐",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 180
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180201", "180202", "180203", "180204", "180205"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "19ed2f06b37e4028a599f7ce268ebe52",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17G-卫生、社保-03-17级-牙科诊所",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 181
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "170107"]
    ]
  }, {
    "id": "b84565f30c68424ca09aade5fe0f449d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17G-卫生、社保-03-17级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 182
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170106", "170108", "170109", "170110", "170201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "267b2b37360f4779b5c83b5b8ea2dc2e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17F-教育、文化-03-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 183
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160201", "160202"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6c441ab6639043ae9648e174d7895e29",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17F-教育、文化-03-17级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 184
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160108", "160110", "160209"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "9e62933da0fc435f9b746fc5856971e5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17D-汽车销售及服务-02-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 185
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "140202"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b82f98d34bd3464d877f7844a3ab9e8e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17C-批发、零售-01-17级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 186
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130101", "130200", "130201", "130202", "130303", "130304", "130501", "130502"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b22198d44edf4b9b8190201773a128bb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17C-批发、零售-01-17级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 187
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130104", "130105", "130203", "130204", "130205", "130206", "130207", "130302", "130401", "130403", "130404", "130405", "130406", "130407", "130408", "130409", "130410", "130411", "130800", "130801", "130803", "130804", "130805", "130806", "130807"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "afb780fdf6624f5bbcfaf1fb9be48fe7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 12],
          [18, 20]
        ],
        "base": 1
      },
      "text-padding": 0.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "16M-交通运输、仓储-07-16级-桥+立交桥",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 188
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "230201", "230202"]
    ]
  }, {
    "id": "94c6ba330561463280c01efbc3fb6f1b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230207_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "16M-交通运输、仓储-07-16级+停车场（三类）",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 189
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230211", "230212", "230214", "230223", "230224", "230225", "230213"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "7f43e92b9bdf4b82a4c3d843477a6c8a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_22",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "16M-交通运输、仓储-07-16级+停车场（三类）_2",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 190
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230203", "230204", "230230"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "3c870e1c3d924f7981d12cabe15744df",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "16L-公司企业-03-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 191
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220200"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a51a2efc441b4e82ad360426b3263211",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_200103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16J-商业设施、商务服务-03-16级-大厦",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 192
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "200103"]
    ]
  }, {
    "id": "db908fe8acac4c0e8e7700bf24c41ed6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "16H-运动、休闲-05-公园-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 193
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "d6603e22d4fe4b89b1feefa308e3dbf5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "16H-运动、休闲-01-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 194
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180100", "180101", "180102", "180103", "180104", "180105", "180106", "180306", "180400"],
      ["==", "accessflag", 0],
      ["!=", "name_zh", "澳門總督府"]
    ]
  }, {
    "id": "74abbf19ff7c420c928c1b0454c478ad",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "16H-运动、休闲-01-16级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 195
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "180107", "180110"]
    ]
  }, {
    "id": "ac6c0cab2c2c48d3bb4c968aee9a0d87",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_170100_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16G-卫生、社保-02-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 196
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170103", "170104"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "4a088a63bcac4529813da19dca5265ca",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16G-卫生、社保-02-16级-急诊",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 197
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "170105"]
    ]
  }, {
    "id": "776da7f6563d448d8ae40c1a696a8fe0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_160102_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16F-教育、文化-01-16级-中学",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 198
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "160103"]
    ]
  }, {
    "id": "7c05489303774bb08bb9d76666d0afa1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16F-教育、文化-01-16级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 199
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160100", "160207", "160208"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "8efd2b2228414348ab22b5f4d6f2a1de",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16F-教育、文化-01-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 200
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160101", "160102", "160104", "160204", "160205", "160206"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "896cabc829894f68af6cf42606649a7e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16E-金融、保险-02-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 201
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "150200"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "7a91568cd9734d19921a767f6066f866",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-justify": "center",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16C-批发、零售-02-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 202
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130102", "130106", "130301"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "1910c249f3b44ef792ddd7bbe1e82106",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16C-批发、零售-02-16级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 203
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130402", "130601", "130602", "130603", "130700", "130701", "130702", "130703", "130704", "130705"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "c18970d26ac84637abcd725d5cdae68c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16B-住、宿-16级-通用图标层",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 204
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "120104"]
    ]
  }, {
    "id": "e8303482a34a4c6084d1244e243b28e2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.5, 0],
      "text-size": 11.0,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "16L-公司企业-02-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 205
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "220100", "220400"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "faba17a19395475e819c9cde7a188981",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "16N-科研及技术服务-01-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 206
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "240100"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "7028ac4be5d24122937a849ccff40b9b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16A-餐饮-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 207
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "110101", "110102", "110103", "110200", "110301", "110302", "110303", "110304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "da50e21acc7247b4b51b4357b592d689",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16B-住、宿-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 208
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "120101", "120102", "120103", "120201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2204d3ff47014bc7a32f8bc40ccbd6ca",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16B-住、宿-小区-01-16级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 209
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"],
      ["==", "generation", 2],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2c429a96c154487a986ba5f32443226d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_door_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16出入口-正门、非正门16",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 210
    },
    "source-layer": "Poi",
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "accessflag", 2, 1]]
  }, {
    "id": "8f0008d2717e4440800c529698e4e3ca",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-04-15级-宗教-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 211
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "190400"]
    ]
  }, {
    "id": "df53a9f411554b2db2af9650451797fa",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-04-15级-宗教",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 212
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190401", "190402", "190403", "190404"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a03d16166dcc48f292f863af7af470e4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190200_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-05-15级-公安机关",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 213
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190200", "190201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "921779643db84e78933ea02320950d97",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "15H-运动、休闲-06-植物园-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 214
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "d063ee227fcb41aa99d3aee0b1d72b5b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "15H-运动、休闲-04-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 215
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180307", "180308"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "303aefb46efa4994ac98efcc8f015627",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "15H-运动、休闲-04-15级-街心公园",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 216
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "180305"]
    ]
  }, {
    "id": "09b7039e9d51478b955ccd18f88c4f92",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_170100_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15G-卫生、社保-01-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 217
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170100", "170101", "170102"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "0a9a566018894f2dbcb2490e5d388b7d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [1, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "15-居民服务-02-15级-公共厕所",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 218
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "210215"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a91be471a17e4235b15a260f337d9e3d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15F-教育、文化-02-15级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 219
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "200102", "200201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "333e84aaea0b4884ad5476565ca74889",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15F-教育、文化-02-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 220
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160105", "160203", "160106", "160107"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "ec3767a09d114be0820e18dc19787e75",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15F-教育、文化-02-15级-通用图标",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 221
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "", "160109"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "fe293f8933cf47218b8e14a82a4ed87d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "15D-汽车销售及服务-01-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 222
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "140101", "140104", "140201", "140301", "140302", "140303", "140304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2fcff582bf47424d9a8e1825182c9eb4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "15K-居民服务-01-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 223
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "210211", "210304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "ba3cf4cffab24df99aa0bb65a88c3fb9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15M-交通运输、仓储-04-15级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 224
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230125", "230206", "230207"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "bb49ea06d7524a6589b79f3bc8f3e2b5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15M-交通运输、仓储-04-15级-通用",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 225
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230127", "230128", "230129", ""],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "54108a3548384f34b9eb1c00c7e5373b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15M-交通运输、仓储-02-15级-机场/候机楼-02",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 226
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      ["==", "generation", 2],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "8d0c7746dab346aea8a59d15d424a9b2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15L-公司企业-01-15级-工业园",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 227
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220300"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "beaee08732084f3889bb8fdfcf80e07d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190100_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-03-15级-政府及管理机构-机关1",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 228
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190100", "190101", "190103", "190104", "190105", "190106"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "23f23231f07d4a3b883f8e9dcb0e0a49",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-03-15级-政府及管理机构-机关2",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 229
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "190110"]
    ]
  }, {
    "id": "98b3919b5ee641a0be0f4520e8bd85c9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "14I-公共设施-02-14级-省级政府机关",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 230
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190102"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a4f8711beeaa438faa59a935820bc0a5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "14H-运动、休闲-02-垂钓-14级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 231
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180109"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2dfe65e87bc643629fa006a3f460706a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "14J-商业设施、商务服务-01-14级-商业综合体",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 232
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200105"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "cc4f21b6ca3f4374abde4403eb2b0209",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "14O-农林牧渔业-01-14级-通用",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 233
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "250100", "250200"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "fc78be57f92140cc84caef55cc031dc0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "14B-住、宿-小区-02-14级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 234
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "68693b8cee6b4ef5b9fecdb10397c9a1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "14M-交通运输、仓储-03-14级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 235
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230100", "230108", "230226"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a1086cbfe9854be6b8cf758792eeb08d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "13H-运动、休闲-07-水族馆-13级",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 236
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a2a98ca1fcf84a338eb7d57ac855e917",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "13I-公共设施-01-13级-省/直辖市/自治区政府+市县政府",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 237
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190107", "190108"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6f1eeb15918c4a3f8199f505e9282776",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "12M-交通运输、仓储-01-12级-机场/候机楼-01",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 238
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      ["==", "generation", 1],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "49b134f415f74ca2baf63e9975e1a742",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105008",
      "describe": "兴趣点",
      "name": "11P-自然地物\\地名-01-11级-通用",
      "sourceminzoom": 9.0,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 239
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "260000", "260100"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "8cb6bd8173224d13aa769c16c8237efc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+家居用品",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 240
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130705"]]
  }, {
    "id": "064db1818f3a4abea5112ebc260dc5c3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+日杂店",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 241
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130104"]]
  }, {
    "id": "ac627e317af6486bb6a06a1e603cd0cf",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+百货商店",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 242
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130103"]]
  }, {
    "id": "bf27144f43f842ce96c162a89bb36476",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+超市代表",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 243
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "135036"]]
  }, {
    "id": "65542595240d4c7fa7120869bc7a8f7d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+购物中心，商厦代表",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 244
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "210217"]]
  }, {
    "id": "91a15fda047944d29ffffe467f1fb019",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 0.0,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "16+网球场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 245
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180102"]]
  }, {
    "id": "76e1d783fbdf479898acd17fbb781879",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "16+羽毛球场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 246
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180101"]]
  }, {
    "id": "26ea477009b149e5acbbeb897cf757f1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190403_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+基督教",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 247
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190403"]]
  }, {
    "id": "fff02a0e2de54c8f84f2c3802785c733",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190402_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+天主教",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 248
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190402"]]
  }, {
    "id": "76058814f7fe4cc3a138bd4b549a25dd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190404 _16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+伊斯兰教",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 249
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190404"]]
  }, {
    "id": "7f44bb5ffb484de8a8679b7a70b45b25",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+幼儿园/托儿所",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 250
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160101"]]
  }, {
    "id": "a30ef9778b5748b090048d24765e0846",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+社区医疗",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 251
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170106"]]
  }, {
    "id": "0712a376b8a04baa99959b97cedf5826",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+其他单位/广播",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 252
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "220400", "165026"]]
  }, {
    "id": "74046d4216a2496294401a0d162b9bb6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "16+商业零售设施类-家具",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 253
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130702"]]
  }, {
    "id": "afd1ff5810b94d4ca35065d79234877b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "16+小商品城，其他批发市场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 254
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130101"]]
  }, {
    "id": "49abaf3452704f09b5f21f9c7396fce4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "16+邮局",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 255
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "215201"]]
  }, {
    "id": "ff9f32718c584fcb86f835df7a55a8cc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "16+街区，小区",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 256
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275015"]]
  }, {
    "id": "3d1cfa716ad64d31a6436eeb1465d787",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180310_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "15+水族馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 257
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"]]
  }, {
    "id": "85bab71a5ba142cda877f0e2e4cb535b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "15+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 258
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "2df4f5e188924bbda3c0e496f5456a12",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+美术馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 259
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160206"]]
  }, {
    "id": "4e0b06cbe88b45008bd5e6ba98cc0a95",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+资料馆，档案馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 260
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160204"]]
  }, {
    "id": "e0a18030178f4a50a6b1994077ce3d54",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+新闻社，报社，出版社",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 261
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160201"]]
  }, {
    "id": "329bd1ef6099453ca4f8df261794f077",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160202_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "icon-optional": false,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+电视台",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 262
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165028"]]
  }, {
    "id": "73dc0b2e576c4467939e47573bbe4967",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+专科医院",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 263
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170102"]]
  }, {
    "id": "15c18980f2f94e799ac965bef3cc56b1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+医院",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 264
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "175115"]]
  }, {
    "id": "21d4fbd9c8a44f13871a776e030a704d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+其他教育机构/厂矿/公司，企业代表/电力/墓地",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 265
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160100", "220200", "225018", "215033", "215031", "275016", ""]]
  }, {
    "id": "126fc42a3e2e4e5d97ba6f1fb5a42103",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+中专/职高/技校",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 266
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160104", ""]]
  }, {
    "id": "ca1cf8af75b842c1a0bb234782adbd57",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120102_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+旅馆，招待所",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 267
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120102"]]
  }, {
    "id": "daaba6530faf474fa4ece9a1bf762501",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+普通出租公寓",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 268
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120104"]]
  }, {
    "id": "7e4ccf7263f640ab8c0fcf769e5e16f6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+温泉/农家乐",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 269
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185123", "180301"]]
  }, {
    "id": "d97c55007cdb496096e51836b0b49c8d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_120103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+非星级度假村，疗养院",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 270
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180302"]]
  }, {
    "id": "344a73c69bcb43e89c0d032d5484a753",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+酒店式公寓",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 271
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120103"]]
  }, {
    "id": "db1989d5e12d4186a3d8bdccef9cb360",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+灯饰",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 272
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130704"]]
  }, {
    "id": "46a4abcd4350439f9abb174b8b0006aa",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+建材，洁具",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 273
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130703"]]
  }, {
    "id": "0dbddcccf61c435583dab7ec07fc55b0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+家居建材代表",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 274
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130700"]]
  }, {
    "id": "29424fa6d8ad45fc937909250a356506",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+农贸市场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 275
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130202"]]
  }, {
    "id": "667a3a1fec404b579baf94761543b8ff",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "15+点状文字分类",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 276
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275016"]]
  }, {
    "id": "c852b1a1ac7f4766a13399c17845e591",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "15+通讯代表、中国电信、中国移动、中国联通、中国铁通",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 277
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "215035", "215204", "215205", "215206", "215207"]]
  }, {
    "id": "0921ded62f324444bfe4f84fd67cf102",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "15+住宅楼",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 278
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120202"]]
  }, {
    "id": "6a1979840c5147519067a5fa9a09a2a4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "15+植物园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 279
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "31aeee74ed444be0a07d1fb5f93c458b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.5, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "15+山",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 280
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275009"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "52b840e9b26348d9bf8408daf8d2f6c8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "15+广场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 281
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180306"]]
  }, {
    "id": "84f1ed677c754684be520d91ab412df6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230207_16",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15+高速停车区",
      "sourceminzoom": 9.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 282
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230207"]]
  }, {
    "id": "62d6525d17084153b9ca94e0cca81fad",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "icon-image": "poi_code_230100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "105007",
      "describe": "公共交通站点",
      "name": "15公交站",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 283
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#e67a7f"
    },
    "source-layer": "Ptstop",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 0],
      ["==", "status", 0]
    ]
  }, {
    "id": "d68b5b0481144a3583612bb7a7c4e7d4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230209_34",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 1.0
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15+收费站",
      "sourceminzoom": 9.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 284
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230209"]]
  }, {
    "id": "120532211eef4f80be5f8361786b27e2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+火车站",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 285
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"]]
  }, {
    "id": "167b232b0b3f4223a42b628efc3f23cd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "15+其它政府机关街道办事处",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 286
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195130"]]
  }, {
    "id": "ef204f19bbf24eafa889f33acdc55abc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-anchor": "left",
      "icon-size": 0.89
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+港，港口",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 287
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1,
      "icon-color": "#ff0000",
      "text-translate": [10, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "235021", "235022"],
      ["<", "rank", 3]
    ]
  }, {
    "id": "70707f607d234174871c1ce8494f91b1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180104_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "14+滑雪场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 288
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180104"]]
  }, {
    "id": "bb6a1a26779a49abbda97d40f0877937",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+花卉",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 289
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130801"]]
  }, {
    "id": "6017386d245f489fabd682bb312a0d28",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+剧场，戏院，音乐厅",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 290
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180210"],
      ["<=", "rank", 2]
    ]
  }, {
    "id": "c35bf1e845aa420aafb8f002c5689c94",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+驾校",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 291
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160109"]]
  }, {
    "id": "845ed1817634437bb5f630e94afd25dd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+学校代表",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 292
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165027"]]
  }, {
    "id": "7c9246469adc4c7b8b950a4fdee5193a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+小学",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 293
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160102"]]
  }, {
    "id": "207799dfe6c7429487cc1c22c386deaa",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+中学",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 294
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160103"],
      ["<=", "rank", 1]
    ]
  }, {
    "id": "491dba14d1d6441f94e332ef06161e6f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-padding": 0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+大专院校",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 295
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"],
      ["<", "rank", 2]
    ]
  }, {
    "id": "a02a7c60561840fa9f324756eb433b7d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180209_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "14+电影院",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 296
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185121"]]
  }, {
    "id": "f4f0cfaef55a49edb6c927e696fba4dc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "14+名胜古迹",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 297
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"],
      [">", "rank", 1]
    ]
  }, {
    "id": "b0ea7b7a7bf44799b671460ffa6fa0f1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "14+公园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 298
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "name_zh", ""],
      ["<", "rank", 2]
    ]
  }, {
    "id": "0ecaf726413a47d88ffbc696e82555c0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_150101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "14+银行",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 299
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "155030", "155029", "155175", "155176", "155177", "155178", "155179", "155180", "155181", "155182", "155183", "155184", "155185", "155186", "155187", "155188", "155189", "155190", "155191", "155192", "155193", "155194", "155195", "155196", "155197", "155198", "155199", "155200", "155030", "155029"]]
  }, {
    "id": "ae48bf0cce9a4de892e624eca1a45392",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "14+工业园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 300
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220300"]]
  }, {
    "id": "3edf2b1b51194027a8250306ceb82ecb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "14+小区",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 301
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"]]
  }, {
    "id": "a00ec3b42c654c5cbfe0027bd789a0ef",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "14+星级饭店（星级度假村）1/2/3星级",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 302
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "125134", "125136", "125137", "125138"]]
  }, {
    "id": "df2e2bbaf34144c3ae3b83d838775656",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "14+渡口，码头",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 303
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "235021"]]
  }, {
    "id": "2d31489451fa4a75815c61e5b1620e7b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190200_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+警察局/公安局/派出所/交警队/消防队（港澳）",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 304
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "195133", "190201", "190202", "190203", "190204"]]
  }, {
    "id": "42bddaf1316f41f28799eec0a4c17aba",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+大厦代表",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 305
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "215032"]]
  }, {
    "id": "5a12e8ae916f4559ba4c68c8358c3528",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+乡、镇政府",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 306
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190110"]]
  }, {
    "id": "ac74069ddc1f447f93cf355bb2751576",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+法院，检察院",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 307
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195129"]]
  }, {
    "id": "00fad72b3e714762a2789534fe83ef6d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+县级政府机关",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 308
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190105"]]
  }, {
    "id": "1ae775fe46454d84ae16b4b7851544e4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+区、县级市、县政府",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 309
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190104"]]
  }, {
    "id": "a61bc4c6129f413b800eca55973a3eb4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+外国大使馆｜领事馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 310
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190501"]]
  }, {
    "id": "e2fd79bf5f5844d2ab11688e2b584e65",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+政府机关（国务院所属29部委以外的其他部委，省级和省会的国家机关）",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 311
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195128"]]
  }, {
    "id": "5361ec2c5f384fafa8828bd0b6ac6b6b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "14+高速服务区",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 312
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230206"]]
  }, {
    "id": "51deda16e9ca4fe29a065d7767ac6fde",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "13+五金、机电、仪器仪表",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 313
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130701"]]
  }, {
    "id": "0fe96eae9b684cd4ad1757e900f341af",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "13+商务中心/会馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 314
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200104"]]
  }, {
    "id": "beaf1e21bc344bd3868ed287bc86f49b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "13+商业综合体",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 315
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200104"]]
  }, {
    "id": "0654750a75f14937b6067411db9c4f61",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 0.0,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "13+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 316
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      ["<", "rank", 3]
    ]
  }, {
    "id": "6e08c3cd78324f1fb4441a58c59299e5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "13+寺庙",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 317
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195126"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "7a6f8246e8e2489bb2bd6f881c082fcd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "13+名胜古迹",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 318
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"],
      ["<=", "rank", 1]
    ]
  }, {
    "id": "b10ea5a4bc04457da4ccff8a734e3c76",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "13+博物馆，纪念馆，展览馆，陈列馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 319
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"],
      ["<", "rank", 2]
    ]
  }, {
    "id": "b5ac33809f464ab8a85c9bc9ebc6376d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+道观",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 320
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195132"]]
  }, {
    "id": "af16f7e8b8e34e878fdb2ca45964f1e4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+会议中心，展览中心_2",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 321
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200101"],
      ["!in", "rank", 2, 3]
    ]
  }, {
    "id": "02ab84337d434489a8e426de199ef613",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+综合医院",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 322
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170101"]]
  }, {
    "id": "7aa3d33f49894524bd7a1e531d0c6b02",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+中学",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 323
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160103"],
      [">", "rank", 1]
    ]
  }, {
    "id": "600ebcb13b734462bb0232b21f711d30",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "13+星级饭店（星级度假村）4星级",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 324
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125139"]]
  }, {
    "id": "bfd53b54278941949ec249c2e667c481",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "13+星级饭店（星级度假村）5星级",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 325
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125140"]]
  }, {
    "id": "66611bf0d310473db5c5b15d6b9828c4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "13+省级政府机关",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 326
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190102"]]
  }, {
    "id": "3309ec796f2a47089441f3c2b36b3a45",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "13+国家机关（部委局）",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 327
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190101"]]
  }, {
    "id": "abd9edc7e5ee4b70aa030e74d0e6dc7f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "12+高尔夫练习场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 328
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180106"]]
  }, {
    "id": "868d05f922f648049753e4f504eaa9da",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+山",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 329
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275009"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "71121db4cdb84fb4bfd9a58edf201e84",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+公园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 330
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      ["in", "rank", 2, 3]
    ]
  }, {
    "id": "6829668cf4064632bba5c2854d317393",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+城墙",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 331
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165024"]]
  }, {
    "id": "394ab12fe4f24efd8dd38beca42cbe8e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180307_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+游乐园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 332
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185119"]]
  }, {
    "id": "fa998bfb4b514f23aec1eff07e078206",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+剧场，戏院，音乐厅",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 333
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180210"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "50cf5c9b756c417392c3abb928508db5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+文化馆，活动中心",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 334
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160208"]]
  }, {
    "id": "44e59ef8014e4fe7a61f22e9097880b7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+科技馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 335
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160207"]]
  }, {
    "id": "5d0d6ad0577c4609b0a2fd4ec53db0a1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-padding": 0.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+大专院校",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 336
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"],
      ["==", "rank", 2]
    ]
  }, {
    "id": "568939746aa1434884dc7f1986a3a984",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "12+百货商场/百货商城",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 337
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130102"]]
  }, {
    "id": "2bff8760a0064fa2a3139e9afb656649",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-anchor": "left",
      "icon-size": 0.89
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "12+港，港口",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 338
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-color": "#ff0000",
      "text-translate": [10, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "235021", "235022"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "9fbd46e09db64cdaba4eb794e718bcaf",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "12+货运火车站",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 339
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230107"]]
  }, {
    "id": "8978eba2130345039cb20fc9f43dd724",
    "maxzoom": 15.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "12-15火车站",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 340
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"],
      [">=", "rank", 1]
    ]
  }, {
    "id": "bb761ecabe4142a795eba2774a86147a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "12+区、县级市、县政府",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 341
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190109"]]
  }, {
    "id": "eb06fc86668b48dfaedd36ba24b20be4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180105_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "11+高尔夫球场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 342
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180105"]]
  }, {
    "id": "678c6d3429294f51be2cacd29902d468",
    "maxzoom": 14.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "11-14寺庙",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 343
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195126"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "36bd9710acca41fd88ec5ca32a73adf5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "11+会议中心，展览中心",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 344
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200101"],
      ["in", "rank", 2, 3]
    ]
  }, {
    "id": "f209923019cf468b9850017798c96ba9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "11+博物馆，纪念馆，展览馆，陈列馆",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 345
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "95751a37580e4d9f8dc16687b529374a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230126_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "11+机场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 346
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"]]
  }, {
    "id": "d2c2587e99f14e52bbc18e7a8b3fe823",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "11+省会政府/省、直辖市政府/地级市、州政府，直辖市区政府",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 347
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "195125", "190107", "195131"]]
  }, {
    "id": "0b029df767934f5996f7a425a0f935d3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [14, 12],
          [15, 12],
          [16, 14],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+桥",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 348
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.2,
      "text-color": "#555555",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230201"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "6b9358c2219e42f8bc0064e4cc340e87",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 11],
          [12, 11],
          [13, 12],
          [14, 13],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+立交桥",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 349
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.2,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230202"],
      ["<=", "rank", 4]
    ]
  }, {
    "id": "db8106c637404dafb653b3e81e1ca443",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [14, 12],
          [15, 12],
          [16, 14],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "13+桥",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 350
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230201"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "0060924514cc4ffcbe34616555a4cee6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9.0,
      "icon-image": "national-15-{brief_cnt}",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.89
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "6高速简称",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 351
    },
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "source-layer": "Road",
    "minzoom": 6.0,
    "type": "symbol",
    "filter": ["all", ["in", "kind", 2, 1],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "3fcaf52e84f44e3688d61cc57b1705cf",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 10],
          [12, 11],
          [13, 12],
          [14, 13],
          [15, 13],
          [16, 14],
          [17, 14],
          [18, 15],
          [19, 15]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路名",
      "name": "10省道名",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 352
    },
    "paint": {
      "text-halo-color": "#fff8d7",
      "text-halo-width": 1.0,
      "text-color": "#783b03",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 4],
      ["==", "const_st", 1]
    ]
  }, {
    "id": "2003542f1d6e44a68a5a0006abf063f1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 10],
          [12, 11],
          [13, 12],
          [14, 13],
          [15, 13],
          [16, 14],
          [17, 14],
          [18, 15],
          [19, 15]
        ],
        "base": 1
      },
      "symbol-spacing": 250.0,
      "visibility": "visible",
      "text-padding": 2.0,
      "symbol-avoid-edges": false,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路名",
      "name": "10国道名",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 353
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#fff8d7",
      "text-color": "#7a3e07",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "155780bb598f487eae3943917afb9286",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 12],
          [12, 12],
          [13, 12],
          [14, 12],
          [15, 12],
          [16, 13],
          [17, 13],
          [18, 13],
          [19, 13]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "103007",
      "describe": "乡镇点",
      "name": "10+村",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 354
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#f6f6f5",
      "text-color": "#667585",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260100"]]
  }, {
    "id": "fa9553d34f664c5ab23ec46676f5ba91",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 10],
          [12, 10],
          [13, 10]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-padding": 16.0,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "103006",
      "describe": "乡镇点",
      "name": "街道10-12",
      "sourceminzoom": 9.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 355
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#f6f6f5",
      "text-halo-width": 1.2,
      "text-color": "#667585",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-opacity": 1.0
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260000"],
      ["==", "name_tag", 3]
    ]
  }, {
    "id": "a3cf8c32dce64234a786cc6b273091b0",
    "maxzoom": 13.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12]
        ],
        "base": 1
      },
      "text-padding": 2.0,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": false,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "text-anchor": "center",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "103006",
      "describe": "乡镇点",
      "name": "乡镇9-13",
      "sourceminzoom": 9.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 356
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#f6f6f5",
      "text-halo-width": 1.2,
      "text-color": "#667585",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-opacity": 1.0
    },
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260000"],
      ["in", "name_tag", 2, 1],
      ["!=", "special", 1]
    ]
  }, {
    "id": "a07e41e659e64a47a251a12b1973c3b6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 11],
          [12, 12],
          [13, 13],
          [14, 13],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "11+立交桥",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 357
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.2,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230202"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "64bcbd56e0c047c297a7d187eb67e912",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180308_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+动物园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 358
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180308"]]
  }, {
    "id": "ac9178fa549c4c518822f76f2c3b8f15",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+植物园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 359
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "be72334ce4d54119a851353c24f22a16",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "10+大专院校",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 360
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "16fdddd48368415587602a96a66e09b2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+名胜古迹",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 361
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185116"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "46c1a0d4699c44688ec800933eee2e4b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+公园",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 362
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "0cefe62d161a4ec08da0e23484ec98bc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 11],
          [13, 11],
          [14, 12],
          [15, 12],
          [16, 12],
          [17, 13],
          [18, 13],
          [19, 13]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "text-anchor": "center",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "101010",
      "describe": "公共交通线路名称",
      "name": "10+地铁线路名称",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 363
    },
    "source-layer": "Ptline",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": {
        "property": "color",
        "type": "identity"
      },
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0]]
  }, {
    "id": "3938d874dcf7451ebf16fd7ae9e53ff2",
    "maxzoom": 17.5,
    "source": "Trafficlight",
    "layout": {
      "icon-image": "traffic-light-15",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Trafficlight",
      "prefix": "105007",
      "describe": "红绿灯",
      "name": "16+红绿灯",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 364
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Trafficlight",
    "minzoom": 16.0,
    "type": "symbol"
  }, {
    "id": "8ec2f0e695314821b5b3f96fba5cce3c",
    "maxzoom": 13.0,
    "source": "Ptstop",
    "layout": {
      "text-size": 12,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.67,
      "symbol-placement": "point",
      "icon-optional": false,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "12+地铁站",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 365
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.2,
      "text-color": "#021f39",
      "icon-translate-anchor": "viewport",
      "icon-color": "#171bf0",
      "text-translate": [0, 4]
    },
    "source-layer": "Ptstop",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0],
      ["==", "stationtype", 1]
    ]
  }, {
    "id": "230d6d189b4849a7bdbdb9bac849be07",
    "maxzoom": 15.0,
    "source": "Ptstop",
    "layout": {
      "text-size": 12.0,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [0, 1.1]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "13+地铁站",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 366
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#008fce",
      "text-halo-width": 1,
      "icon-translate-anchor": "map",
      "text-translate-anchor": "map",
      "icon-color": "#ff0000"
    },
    "source-layer": "Ptstop",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 1],
      ["==", "status", 0]
    ]
  }, {
    "id": "de94a7a730b44a979f138f18f371cff5",
    "maxzoom": 16.0,
    "source": "Ptstop",
    "layout": {
      "text-size": 13.0,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0, 1.1]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "15+地铁站",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 367
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#008fce",
      "text-halo-width": 1,
      "icon-translate-anchor": "map",
      "icon-color": "#ff0000"
    },
    "source-layer": "Ptstop",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 1],
      ["==", "status", 0]
    ]
  }, {
    "id": "f1646822a31248fe9e5eb2a1c1868007",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "text-size": 14.0,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 1.0,
      "text-offset": [0, 1.2]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "16+地铁站",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 368
    },
    "source-layer": "Ptstop",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1,
      "text-color": "#008fce",
      "icon-color": "#ff0000"
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 1],
      ["==", "status", 0]
    ]
  }, {
    "id": "20ef8ceb3ab6417ab2372be57810c8c7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9.0,
      "icon-image": "state-15-{brief_cnt}",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.94
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "8国道简称",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 369
    },
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Road",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 3]
    ]
  }, {
    "id": "6ca8eb79a0ab4a55b8a760bca6feee78",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 10],
          [10, 10],
          [11, 11],
          [12, 12],
          [13, 13],
          [14, 14],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": false,
      "text-padding": 2.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "map",
      "text-allow-overlap": false,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路名",
      "name": "9城市高速名",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 370
    },
    "paint": {
      "text-halo-color": "#fff5d0",
      "text-color": "#783b03",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 2],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "773964a8a19e4f8abcb994596f04c9ca",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 10],
          [10, 10],
          [11, 11],
          [12, 12],
          [13, 13],
          [14, 14],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1
      },
      "text-padding": 2.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路名",
      "name": "9高速道路名",
      "sourceminzoom": 5.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 371
    },
    "paint": {
      "text-halo-color": "#fff5d0",
      "text-color": "#783b03",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 1],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "f6cd27b160de403b9ac4b26697c2b051",
    "maxzoom": 12.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "10-12火车站",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 372
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"],
      ["!=", "name_zh", ""],
      [">=", "rank", 2]
    ]
  }, {
    "id": "d9bfa464297f46cd98e3af0682e9b126",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 373
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#555555",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "39fa138bc21f402da296457be38af2ac",
    "maxzoom": 11.0,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230126_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-optional": false,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-allow-overlap": false,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11.0,
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "9-11机场",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 374
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "3269c61a7c974239837d9356191b4bd3",
    "maxzoom": 17.5,
    "source": "Ptexit",
    "layout": {
      "text-size": 12.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{code}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1.0
    },
    "layerInfo": {
      "source": "Ptexit",
      "prefix": "105007",
      "describe": "公共交通出入口",
      "name": "16+地铁出入口",
      "sourceminzoom": 10.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 375
    },
    "paint": {
      "text-halo-color": "#fff956",
      "icon-halo-color": "#656565",
      "text-color": "#555555",
      "text-halo-width": 4.0,
      "icon-translate-anchor": "viewport",
      "icon-halo-width": 0.0,
      "icon-color": "#008fce",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Ptexit",
    "minzoom": 16.0,
    "type": "symbol"
  }, {
    "id": "efde1910602844bf83eaaf25b7b4e56f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "icon-image": "Tiananmen",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [2.6, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10天安门",
      "sourceminzoom": 3.0,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 376
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#555555",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "天安门"]]
  }, {
    "id": "05122a2f344f4717823d8b50505de237",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "岛屿8+",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 377
    },
    "paint": {
      "text-halo-color": "#d4ecff",
      "text-halo-width": 1.0,
      "text-color": "#313421",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "275006", "275007"],
      ["!in", "name_zh", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "a075fd301efe4796a7c2303e84d56213",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 10.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom-left",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "赤尾屿4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 378
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#d4ecff",
      "text-halo-width": 1.0,
      "text-color": "#313421",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [6, 4]
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "赤尾屿"]
    ]
  }, {
    "id": "b9656d9360a145ac8df864a59d1f4d7f",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 14.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "103004",
      "describe": "世界地图代表点",
      "name": "台湾海峡5-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 379
    },
    "source-layer": "Worldannotation",
    "paint": {
      "text-halo-color": "#aadaff",
      "text-halo-width": 1.0,
      "text-color": "#4d81c6",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [-24, 8]
    },
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "275008"],
      ["==", "name_zh", "台湾海峡"]
    ]
  }, {
    "id": "d32d9d7cd3ca4abda1323caf5beb8948",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": 10,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "top",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "敏感岛屿4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 380
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#d4ecff",
      "text-halo-width": 1,
      "text-color": "#313421",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [-12, -18]
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "275007"],
      ["!in", "name_zh", "黄尾屿", "赤尾屿", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "523c7ea948fd492080fd20654988ae42",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 14.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "102",
      "describe": "世界地图代表点",
      "name": "海域名4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 381
    },
    "source-layer": "Worldannotation",
    "paint": {
      "text-halo-color": "#aadaff",
      "text-halo-width": 1.0,
      "text-color": "#4d81c6",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "275008"],
      ["!in", "name_zh", "台湾海峡"]
    ]
  }, {
    "id": "c3677c9790c14a9b9ed7bd0eb3931d5f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [6, 11],
          [7, 14],
          [8, 14],
          [9, 14],
          [10, 15],
          [11, 15],
          [12, 16],
          [13, 16],
          [14, 17],
          [15, 17],
          [16, 18],
          [17, 18],
          [18, 19],
          [19, 20]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 11.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "台湾资料6+",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 382
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#333333",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Annotation",
    "minzoom": 6.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "5095ff7c2e144eebab8fab6a1ea89b76",
    "maxzoom": 6.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 10.0,
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 6.0,
      "text-rotation-alignment": "viewport",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "台湾资料5",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 383
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1,
      "text-color": "#333333",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [-3, 0]
    },
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "（台湾省详细资料暂缺）"]]
  }, {
    "id": "749a084c401c4977bdb97780ff3e16ea",
    "maxzoom": 11.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 11],
          [10, 11],
          [11, 12]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2.0,
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 7.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "symbol-placement": "point",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103005",
      "describe": "行政区划代表点",
      "name": "区/自治县9-11",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 384
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#f6f5f4",
      "text-color": "#677686",
      "text-halo-width": 1.0,
      "icon-opacity": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#4d98dd",
      "text-translate": [0, 0],
      "text-opacity": 1.0
    },
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4],
      ["!in", "name_zh", "香洲区（由澳门特别行政区实施管辖）", "台湾"]
    ]
  }, {
    "id": "a9832cd57b0c4b0fa807a983ba48304f",
    "maxzoom": 9.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [7, 11],
          [8, 12],
          [9, 12]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1.0,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103005",
      "describe": "行政区划代表点",
      "name": "区/自治县7-9",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 385
    },
    "paint": {
      "text-halo-color": "#f6f5f4",
      "text-halo-width": 1,
      "text-color": "#677686",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [3, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 7.0,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4],
      ["!in", "name_zh", "台湾", "元宝区", "东港市", "集安市", "临江市", "长白朝鲜族自治县", "图们市", "饶河县", "振兴区", "振安区", "呼玛县", "爱辉区"]
    ]
  }, {
    "id": "04681c85f8f748b1a2f750ce5af1a540",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 13.0,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-ignore-placement": false,
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-allow-overlap": false,
      "icon-size": 0.8,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "盟自治州8-10",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 386
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-color": "#4c4c4c",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["in", "name_tag", 1, 3, 2]
    ]
  }, {
    "id": "899df07e3efe41f7a436273a25ceb685",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [5, 11],
          [6, 11],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-anchor": "bottom",
      "text-allow-overlap": false,
      "icon-size": 0.8,
      "text-offset": [0, -0.3]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "盟自治州5-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 387
    },
    "paint": {
      "text-halo-color": "#f8f8f8",
      "text-halo-width": 1.0,
      "text-color": "#4c4c4c",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["in", "name_tag", 1, 3, 2],
      ["!in", "name_zh", "延边朝鲜族自治州", "塔城地区", "德宏傣族景颇族自治州", "西双版纳傣族自治州", "怒江傈僳族自治州", "伊犁哈萨克自治州"]
    ]
  }, {
    "id": "c6a4c3ad2daa4f73b2b37cb2e675ff95",
    "maxzoom": 11.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 14.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-anchor": "center",
      "text-allow-overlap": false,
      "icon-size": 1.0,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "地级市8-11",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 388
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": "#3e3e3e",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Adminflag",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["!in", "name_tag", 1, 3, 2]
    ]
  }, {
    "id": "b9f615de0df84c2580f34b5e4f852134",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "icon-image": "circle-brown-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-allow-overlap": false,
      "icon-size": 0.78,
      "text-offset": [0, -0.5],
      "text-size": {
        "stops": [
          [5, 11],
          [6, 11],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-optional": false
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "地级市5-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 389
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#fefefd",
      "text-color": "#3e3e3e",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["!in", "name_tag", 1, 3, 2],
      ["!in", "name_zh", "黑河", "丹东"]
    ]
  }, {
    "id": "ccc7b554feb347a4991931d374125f45",
    "maxzoom": 11.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 16],
          [10, 16],
          [11, 16]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "省会/直辖市8-11",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 390
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": "#535a63",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2]]
  }, {
    "id": "9f0f0b64107f47e1bbf0e5ec14e5a1dd",
    "maxzoom": 10.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 16.0,
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1.0,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "北京8-10",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 391
    },
    "paint": {
      "text-halo-color": "#f6f5f2",
      "icon-halo-color": "#d0021b",
      "text-color": "#454648",
      "text-halo-width": 1.0,
      "icon-halo-width": 10.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Adminflag",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["in", "capital", 1]]
  }, {
    "id": "08512d0dc0b04738b507b2f48896cbb6",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "right",
      "icon-size": 0.78,
      "text-offset": [-0.5, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "澳门4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 392
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#fafafa",
      "text-halo-width": 1.0,
      "text-color": "#2f2f2f",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 2],
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "澳門"]]
  }, {
    "id": "fa8a9741899f4c53816c2f2e979468ec",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "香港4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 393
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#fafafa",
      "text-halo-width": 1.0,
      "text-color": "#2f2f2f",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "香港"]]
  }, {
    "id": "80a55d3241f54b07bb06affbbe67533f",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "top",
      "icon-size": 0.78,
      "text-offset": [0, 0.5]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "天津4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 394
    },
    "paint": {
      "text-halo-color": "#fafafa",
      "text-halo-width": 1,
      "text-color": "#2f2f2f",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 2],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["==", "name_zh", "天津"]
    ]
  }, {
    "id": "3bb6395b91d842ecbefc4f61ad6bb36c",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [0, -0.5]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "省会/直辖市4-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 395
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#fafafa",
      "text-color": "#2f2f2f",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["!in", "name_zh", "香港", "澳門", "天津"]
    ]
  }, {
    "id": "42e690fad6c34c08990a1addc7bc8299",
    "maxzoom": 4.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 20.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "103002",
      "describe": "世界地图代表点",
      "name": "中华人民共和国3-4",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 396
    },
    "paint": {
      "text-halo-color": "#f1f3e9",
      "text-color": "#262626",
      "text-halo-width": 1.2,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Worldannotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "中华人民共和国"],
      ["==", "kind", "405001"]
    ]
  }, {
    "id": "8d4c9e0ecb34471c88fb0536f34bfd51",
    "maxzoom": 8.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 24.0,
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "103001",
      "describe": "世界地图代表点",
      "name": "世界地图代表点-洲3-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 397
    },
    "paint": {
      "text-halo-color": "#fafafa",
      "text-color": "#262626",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Worldannotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "405002"]]
  }, {
    "id": "ddffeaa4dea94080ac348712c5452da4",
    "maxzoom": 8.0,
    "source": "Merge_1",
    "layout": {
      "text-size": 16.0,
      "icon-image": "star-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-rotation-alignment": "viewport",
      "text-offset": [0, -0.5]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "北京3-8",
      "sourceminzoom": 3.0,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 398
    },
    "paint": {
      "text-halo-color": "#f2f5eb",
      "text-halo-width": 1.0,
      "text-color": "#242423",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 1]]
  }, {
    "id": "01b638d4638543068aa1c0d80c45e3db",
    "maxzoom": 17.5,
    "source": "Event",
    "layout": {
      "icon-image": "event-app-{teyetype}-18",
      "visibility": "none",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Event",
      "prefix": "201",
      "describe": "交通事件",
      "name": "交通事件",
      "sourceminzoom": 10.0,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 399
    },
    "paint": {
      "icon-translate-anchor": "viewport"
    },
    "source-layer": "Event",
    "minzoom": 10,
    "type": "symbol"
  }],
  "solution": {
    "bearing": 0.0,
    "center": "[116.40717,39.90469]",
    "describe": "",
    "icon": "fresh",
    "maxZoom": 17.0,
    "minZoom": 3.0,
    "name": "清新地图",
    "pitch": 0.0,
    "template": "0",
    "zoom": 10.4
  },
  "sources": {
    "satellite": {
      "tiles": ["http://p1.map.gtimg.com/sateTiles/{z}/{m}/{n}/{x}_{y}.jpg?version=228"],
      "scheme": "tms",
      "tileSize": 256,
      "type": "raster"
    },
    "Trafficlight": {
      "tiles": [config.DATA_URL + "Trafficlight/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Event": {
      "tiles": [config.DYN_URL + "Event/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Landuse": {
      "tiles": [config.DATA_URL + "Landuse/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
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
    "Ptexit": {
      "tiles": [config.DATA_URL + "Ptexit/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Subwaypolygon": {
      "tiles": [config.DATA_URL + "Subwaypolygon/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Waterface": {
      "tiles": [config.DATA_URL + "Waterface/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Adminbound": {
      "tiles": [config.DATA_URL + "Adminbound/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Hillshade": {
      "tiles": [config.OTHER_URL + "hillshade/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "raster"
    },
    "Traffic": {
      "tiles": [config.DYN_URL + "Trafficrtic/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "traffic": true,
      "type": "vector"
    },
    "Zlevel": {
      "tiles": [config.DATA_URL + "Zlevel/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Ptstop": {
      "tiles": [config.DATA_URL + "Ptstop/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Merge_1": {
      "tiles": [config.MERGE_URL + "Adminflag,Annotation,Poi,Ptline,Railway,Road,Villtown,Worldannotation/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Buildingmore": {
      "tiles": [config.DATA_URL + "Buildingmore/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "ResidentialPolygon": {
      "odevity": 1,
      "maxzoom": 17,
      "tiles": [config.DATA_URL + "ResidentialPolygon/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    },
    "Worldcountries": {
      "tiles": [config.DATA_URL + "Worldcountries/{z}/{x}/{y}?token=" + config.ACCESS_TOKEN + "&solu=" + config.SOLUTION],
      "type": "vector"
    }
  }
}
