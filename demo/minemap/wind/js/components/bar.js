define(["utils", "drag", "bindedcheckbox", "ghostbox", "calendar", "class"], function (Utils, Drag, BindedCheckbox, GhostBox, Calendar, c) {
  return c.extend(Drag, BindedCheckbox, GhostBox, {
    offset: 45, // timecode offset
    borderOffset: 10,
    jumpingWidth: 140,
    _init: function () {
      this.calendar = Calendar.instance();
      this.left = 0;
      this.numberOfHours = 240;
      this.progressBar = Utils.qs("#progress-bar");
      this.progressWidth = this.progressBar.offsetWidth - this.offset;
      this.pxRatio = this.progressWidth / (this.calendar.end - this.calendar.start);
      this.maxWidth = this.ts2pos(this.calendar.end);
      this.el = this.timecode = Utils.qs(".main-timecode", this.progressBar);
      this.text = Utils.qs(".box", this.timecode);
      this.progressLine = Utils.qs(".progress-line", this.progressBar);
      this.progressLine.style.width = Utils.bound(this.maxWidth, 0, this.progressWidth) + "px";
      this.progressLine.addEventListener("mouseup", this.click.bind(this));
      this.played = Utils.qs(".progress-line .played", this.progressBar);
      this.ghost = Utils.qs(".ghost-timecode", this.progressBar);
      this.ghostTxt = Utils.qs(".box", this.ghost);
      this.timestamp = this.calendar.start;
      this.set(new Date().getTime());
      GhostBox._init.call(this);
      Drag._init.call(this);
      BindedCheckbox._init.call(this);
    },
    addAnimation: function () {
      this.progressBar.classList.add("anim-allowed")
    },
    removeAnimation: function () {
      var e = this;
      window.setTimeout(function () {
        e.progressBar.classList.remove("anim-allowed")
      }, 300)
    },
    pos2ts: function (e) {
      return this.calendar.start + e / this.pxRatio
    },
    ts2pos: function (e) {
      return (e - this.calendar.start) * this.pxRatio
    },
    bcast: function () {
      this.timestamp = this.pos2ts(this.left);
      // this.onbcast()
    },
    click: function (e) {
      if (!this.dragging) {
        this.addAnimation();
        var t = Utils.bound(e.pageX - this.offset - this.borderOffset, 0, this.maxWidth);
        this.timestamp = this.pos2ts(t);
        this.update(t);
        this.bcast();
        this.removeAnimation();
      }
      app.ui_map.updateImage('./data/RH_2019030600_003.png')
    },
    ondrag: function (e) {
      // 有 bug
      // this.update(e + 20 - this.offset);
      // this.throttledBcast()
    },
    set: function (e) {
      this.addAnimation(),
        this.timestamp = e,
        this.update(this.ts2pos(e)),
        this.removeAnimation()
    },
    update: function (e) {
      return this.left = Utils.bound(e, 0, this.maxWidth),
        this.timecode.style.left = this.left + this.offset + "px",
        this.text.textContent = this.createText(this.text),
        this.played && (this.played.style.width = this.left + "px"),
        this.left
    },
    updateGhost: function (e) {
      var t = Utils.bound(e.clientX - this.offset - this.borderOffset, 0, this.maxWidth);
      this.ghost.style.left = t + this.offset + "px";
      this.ghostTxt.textContent = this.createGhostText(t);
    },
    createText: function (e) {
      var t = Math.floor(this.numberOfHours * this.left / (24 * this.progressWidth));
      var n = this.calendar.days[t];
      var i = n ? "" + n.display + (n.day && " " + n.day) + " - " : "";
      var h = this.displayHour(Math.round(this.numberOfHours * this.left / this.progressWidth) % 24);
      return i + h
    },
    createGhostText: function (e) {
      var t = parseInt(e / this.progressWidth * this.numberOfHours) % 24;
      return this.displayHour(t)
    },
    displayHour: function (h, m) {
      return h + ":" + (null != m ? r.pad(m) : "00")
    }
  })
});