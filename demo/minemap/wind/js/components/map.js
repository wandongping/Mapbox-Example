define(['minemap', 'velocity', 'config', 'broadcast', 'class'], function (Minemap, Velocity, Config, e, c) {
  return c.extend({
    map: undefined,
    imgType: 'TMP',
    windUrl: './data/WIND_2019031000_003.json',
    windVelocity: undefined,
    windVelocityData: [],
    num: 3,
    bid: 'fe519a18dec04c5fb65e0a53c9e25771', // 背景图层
    aid: '8e1115b0249740308a4d7ff2f0684134', // 国界图层
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
        e.emit('mapload', 22222222222);
      });
    },
    _initSource: function () {
      this._initWeatherSource();
    },
    _initWeatherSource: function () {
      for (var t = 3; t <= 120; t = t + 3) {
        this.map.addSource('TMP' + t, {
          type: 'image',
          url: './data/TMP/TMP_2019032812_' + t.toString().padStart(3, '0') + '.jpg',
          coordinates: [
            [71, 59],
            [139, 59],
            [139, 1],
            [71, 1]
          ]
        });
        this.map.addSource('APCP' + t, {
          type: 'image',
          url: './data/APCP/APCP_2019032812_' + t.toString().padStart(3, '0') + '.jpg',
          coordinates: [
            [71, 59],
            [139, 59],
            [139, 1],
            [71, 1]
          ]
        });
      }
    },
    _initLayer: function () {
      this._initWeatherLayers();

      // 风场
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
      this.windVelocity.drawLayer();
    },
    _initWeatherLayers: function () {
      for (var t = 3; t <= 120; t = t + 3) {
        this.map.addLayer({
          "id": "TMP" + t,
          "type": "raster",
          "source": "TMP" + t,
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "raster-opacity": .8
          }
        }, this.bid);
        this.map.addLayer({
          "id": "APCP" + t,
          "type": "raster",
          "source": "APCP" + t,
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "raster-opacity": .8
          }
        }, this.bid);
      }
    },
    update: function (path) {
      var t = path.split('_')[1];
      this.windUrl = './data/WIND/WIND_2019032812_' + t + '.json';
      this.updateWindData();
      this.updateImgData(t - 0);
    },
    /**
     * 更新风场
     */
    updateWindData: function () {
      console.log(this.windUrl);
      var _ = this;
      Minemap.util.getJSON(_.windUrl, function (t, n) {
        _.windVelocityData = n || [];
        _.windVelocity.setData(n);
      });
    },
    // 更新图片
    updateImgData: function (n) {
      this.map.moveLayer(this.imgType + this.num, this.bid);
      this.num = n;
      this.map.moveLayer(this.imgType + n, this.aid);
    },
    toggleImgData: function (type) {
      this.map.moveLayer(this.imgType + this.num, this.bid);
      this.imgType = type;
      this.map.moveLayer(type + this.num, this.aid);
    }
  })
});