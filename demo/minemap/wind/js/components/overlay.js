define(["utils", "class"], function (Utils, c) {
  return c.extend({
    overlayTypes: [
      {'key': 'TMP', 'name': '温度', 'icon': ''},
      // {'key': 'RH', 'name': '湿度', 'icon': '/'},
      {'key': 'APCP', 'name': '降水', 'icon': '9'}
    ],
    _init: function () {
      this.overlay = Utils.qs('#overlay');
      var ts = this.overlay.getElementsByTagName('a')
      for (let i = 0; i < ts.length; i++) {
        var ee = ts[i];
        ee.onclick = this.overlayClick.bind(this, ee.getAttribute('data-do'));
      }
    }
  })
})