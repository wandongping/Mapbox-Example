define(["utils", "class"], function (Utils, c) {
  return c.extend({
    onValue: !0,
    offValue: !1,
    play: !1,
    interval: null,
    _init: function () {
      this.el = Utils.qs("#playpause");
      this.el.onclick = this.toggle.bind(this);
      this.setPlay(this.play);
    },
    setPlay: function (e) {
      this.el.classList[e === this.onValue ? "remove" : "add"]("off")
    },
    toggle: function () {
      this.play = !this.play;
      this.setPlay(this.play);
      if (this.play) {
        var _ = this;
        this.interval = setInterval(function () {
          _.timestamp += 3600 * 3 * 1000;
          _.timestamp <= _.calendar.end ? _.set(_.timestamp): clearInterval(_.interval)
        }, 1000)
      } else {
        clearInterval(this.interval);
      }
    },
  })
});