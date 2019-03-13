define(["class"], function (e) {
  return e.extend({
    supportTouch: !0,
    preventDefault: !0,
    _init: function () {
      this.el.addEventListener("mousedown", this.startDrag.bind(this)),
        this.supportTouch && this.el.addEventListener("touchstart", this.startDrag.bind(this)),
        this.dragging = !1,
        this.bindedDrag = this._drag.bind(this),
        this.bindedEndDrag = this.endDrag.bind(this)
    },
    getXY: function (e) {
      return e.touches ? [e.touches[0].pageX, e.touches[0].pageY] : [e.pageX, e.pageY]
    },
    startDrag: function (e) {
      this.preventDefault && e.preventDefault(),
        this.startXY = this.getXY(e),
        this.offsetX = -this.el.offsetLeft,
        this.offsetY = -this.el.offsetTop,
        this.dragging = !0,
        this.ondragstart && this.ondragstart.call(this, this.startXY),
        window.addEventListener("mousemove", this.bindedDrag),
        window.addEventListener("mouseup", this.bindedEndDrag),
        this.supportTouch && (window.addEventListener("touchmove", this.bindedDrag),
          window.addEventListener("touchend", this.bindedEndDrag),
          window.addEventListener("touchcancel", this.bindedEndDrag))
    },
    _drag: function (e) {
      var t = this.getXY(e);
      this.ondrag(t[0] - this.startXY[0] - this.offsetX, t[1] - this.startXY[1] - this.offsetY, e)
    },
    endDrag: function (e) {
      window.removeEventListener("mousemove", this.bindedDrag),
        window.removeEventListener("touchmove", this.bindedDrag),
        window.removeEventListener("mouseup", this.bindedEndDrag),
        window.removeEventListener("touchend", this.bindedEndDrag),
        window.removeEventListener("touchcancel", this.bindedEndDrag),
        this.ondragend && this.ondragend(e),
        this.dragging = !1
    }
  })
});