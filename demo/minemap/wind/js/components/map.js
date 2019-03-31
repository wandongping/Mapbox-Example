define(['minemap', 'velocity', 'config', 'class'], function (Minemap, Velocity, Config, c) {
  return c.extend({
    map: undefined,
    windVelocity: undefined,
    windVelocityData: [],
    _init: function () {
      Minemap.accessToken = Config.TK;
      Minemap.solution = Config.SOLUTION;
      this.map = new Minemap.Map({
        container: 'map',
        style: 'http://minedata.cn/service/solu/style/id/' + Config.SOLUTION,
        zoom: 3,
        center: [108.952, 34.223],
        logoControl: false,
        // maxBounds: [
        //   [70 + 0.1, 0 + 0.1],
        //   [140 - 0.1, 60 - 0.1]
        // ]
      });
      // this.map.addControl(new Minemap.Navigation(), 'bottom-right');
      // this.map.addControl(new Minemap.Fullscreen(), 'bottom-right');
      var _ = this;
      this.map.on('load', function () {
        _._initSource();
        _._initLayer();
        // wind
        Minemap.util.getJSON("./data/WIND_2019032812_003.json", function (t, n) {
          _.windVelocityData = n || [];
          _.windVelocity.setData(n);
          _.windVelocity.drawLayer();
        });
      });
    },
    _initSource: function () {
      this.map.addSource("nc", {
        "type": "image",
        "url": "./data/TMP_2019030600_003.png",
        "coordinates": [
          [71, 59],
          [139, 59],
          [139, 1],
          [71, 1]
        ]
      });
    },
    _initLayer: function () {
      this.map.addLayer({
        "id": "imageLayer",
        "type": "raster",
        "source": "nc",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "raster-opacity": 0.25
        }
      });
      Velocity.initVelocityComponent(this.map);
      this.windVelocity = new Velocity({
        canvas: document.getElementById("windcanvas"),
        displayValues: !0,
        displayOptions: {
          velocityType: "Velocity",
          position: "bottomleft",
          emptyString: "No velocity data"
        },
        uLineRatio: 1,
        vLineRatio: 1,
        maxVelocity: 5,
        // 温度：'#9588d3', '#9588d3', '#9588d3', '#9588d3', '#96d0d8', '#80cbc5', '#66b3ba', '#5e8fc5', '#4f8b3d', '#79921c', '#aaa00e', '#deb106', '#f29606', '#ec5e14', '#be4112', '#8a2a0a', '#8a2a0a'
        // 降水：'#5f587c', '#5f587c', '#5f587c', '#5f587c', '#585c8a', '#35748e', '#2b798c', '#1f8088', '#0c8b82', '#529965', '#fa9dbe', '#f8a1c0', '#f8a1c0'
        colorScale: ["rgba(0, 255, 255, 0.5)", "rgba(100, 240, 255, 0.5)", "rgba(135, 225, 255, 0.5)",
          "rgba(160, 208, 255, 0.5)", "rgba(181, 192, 255, 0.5)", "rgba(198, 173, 255, 0.5)",
          "rgba(212, 155, 255, 0.5)", "rgba(225, 133, 255, 0.5)", "rgba(236, 109, 255, 0.5)",
          "rgba(255, 30, 219, 0.5)"
        ],
        data: this.windVelocityData,
        map: this.map
      });
    },
    updateImage: function (url) {
      // this.map.getSource('nc').updateImage({
      //   url: url
      // });
      var s = this.map.getSource('nc');
      // s.options.url = url;
      // s.url = url;
      s.options.url = url;
      s.url = url;
      // s.load();
      s.load(s.options.coordinates, function () {
        s.texture = null;
      });
    },
  })
});