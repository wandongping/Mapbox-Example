define(["utils", "drag", "bindedcheckbox", "ghostbox", "class"], function (Utils, Drag, BindedCheckbox, GhostBox, c) {
  return c.extend(Drag, BindedCheckbox, GhostBox, {
    offset: 45, // timecode offset
    borderOffset: 0,
    jumpingWidth: 140,
    calendar: {
      "numOfHours": 240,
      "minifestFile": {
        "v": "2.0",
        "ref": "2019-03-13T00:00:00Z",
        "update": "2019-03-13T07:35:17Z",
        "dst": [
          [3, 3, 144],
          [6, 150, 240]
        ]
      },
      "midnight": "2019-03-12T16:00:00.000Z",
      "startOfTimeline": "2019-03-12T16:00:00.000Z",
      "start": 1552406400000,
      "days": [{
        "display": "周三",
        "day": 13,
        "middayTs": 1552449600000,
        "start": 1552406400000,
        "end": 1552492800000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周四",
        "day": 14,
        "middayTs": 1552536000000,
        "start": 1552492800000,
        "end": 1552579200000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周五",
        "day": 15,
        "middayTs": 1552622400000,
        "start": 1552579200000,
        "end": 1552665600000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周六",
        "day": 16,
        "middayTs": 1552708800000,
        "start": 1552665600000,
        "end": 1552752000000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周日",
        "day": 17,
        "middayTs": 1552795200000,
        "start": 1552752000000,
        "end": 1552838400000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周一",
        "day": 18,
        "middayTs": 1552881600000,
        "start": 1552838400000,
        "end": 1552924800000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周二",
        "day": 19,
        "middayTs": 1552968000000,
        "start": 1552924800000,
        "end": 1553011200000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周三",
        "day": 20,
        "middayTs": 1553054400000,
        "start": 1553011200000,
        "end": 1553097600000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周四",
        "day": 21,
        "middayTs": 1553140800000,
        "start": 1553097600000,
        "end": 1553184000000,
        "month": 3,
        "year": 2019
      }, {
        "display": "周五",
        "day": 22,
        "middayTs": 1553227200000,
        "start": 1553184000000,
        "end": 1553270400000,
        "month": 3,
        "year": 2019
      }],
      "endOfcalendar": "2019-03-22T16:00:00.000Z",
      "endOfCal": 1553270400000,
      "maxTimestamp": 1553270400000,
      "type": "forecast",
      "timestamps": [1552446000000, 1552456800000, 1552467600000, 1552478400000, 1552489200000, 1552500000000, 1552510800000, 1552521600000, 1552532400000, 1552543200000, 1552554000000, 1552564800000, 1552575600000, 1552586400000, 1552597200000, 1552608000000, 1552618800000, 1552629600000, 1552640400000, 1552651200000, 1552662000000, 1552672800000, 1552683600000, 1552694400000, 1552705200000, 1552716000000, 1552726800000, 1552737600000, 1552748400000, 1552759200000, 1552770000000, 1552780800000, 1552791600000, 1552802400000, 1552813200000, 1552824000000, 1552834800000, 1552845600000, 1552856400000, 1552867200000, 1552878000000, 1552888800000, 1552899600000, 1552910400000, 1552921200000, 1552932000000, 1552942800000, 1552953600000, 1552975200000, 1552996800000, 1553018400000, 1553040000000, 1553061600000, 1553083200000, 1553104800000, 1553126400000, 1553148000000, 1553169600000, 1553191200000, 1553212800000, 1553234400000, 1553256000000],
      "paths": ["2019/03/13/03", "2019/03/13/06", "2019/03/13/09", "2019/03/13/12", "2019/03/13/15", "2019/03/13/18", "2019/03/13/21", "2019/03/14/00", "2019/03/14/03", "2019/03/14/06", "2019/03/14/09", "2019/03/14/12", "2019/03/14/15", "2019/03/14/18", "2019/03/14/21", "2019/03/15/00", "2019/03/15/03", "2019/03/15/06", "2019/03/15/09", "2019/03/15/12", "2019/03/15/15", "2019/03/15/18", "2019/03/15/21", "2019/03/16/00", "2019/03/16/03", "2019/03/16/06", "2019/03/16/09", "2019/03/16/12", "2019/03/16/15", "2019/03/16/18", "2019/03/16/21", "2019/03/17/00", "2019/03/17/03", "2019/03/17/06", "2019/03/17/09", "2019/03/17/12", "2019/03/17/15", "2019/03/17/18", "2019/03/17/21", "2019/03/18/00", "2019/03/18/03", "2019/03/18/06", "2019/03/18/09", "2019/03/18/12", "2019/03/18/15", "2019/03/18/18", "2019/03/18/21", "2019/03/19/00", "2019/03/19/06", "2019/03/19/12", "2019/03/19/18", "2019/03/20/00", "2019/03/20/06", "2019/03/20/12", "2019/03/20/18", "2019/03/21/00", "2019/03/21/06", "2019/03/21/12", "2019/03/21/18", "2019/03/22/00", "2019/03/22/06", "2019/03/22/12"],
      "interTimestamps": [1552451400000, 1552462200000, 1552473000000, 1552483800000, 1552494600000, 1552505400000, 1552516200000, 1552527000000, 1552537800000, 1552548600000, 1552559400000, 1552570200000, 1552581000000, 1552591800000, 1552602600000, 1552613400000, 1552624200000, 1552635000000, 1552645800000, 1552656600000, 1552667400000, 1552678200000, 1552689000000, 1552699800000, 1552710600000, 1552721400000, 1552732200000, 1552743000000, 1552753800000, 1552764600000, 1552775400000, 1552786200000, 1552797000000, 1552807800000, 1552818600000, 1552829400000, 1552840200000, 1552851000000, 1552861800000, 1552872600000, 1552883400000, 1552894200000, 1552905000000, 1552915800000, 1552926600000, 1552937400000, 1552948200000, 1552964400000, 1552986000000, 1553007600000, 1553029200000, 1553050800000, 1553072400000, 1553094000000, 1553115600000, 1553137200000, 1553158800000, 1553180400000, 1553202000000, 1553223600000, 1553245200000],
      "refTime": "2019031300",
      "refTimeTxt": "2019-03-13T00:00:00Z",
      "updateTxt": "2019-03-13T07:35:17Z",
      "refTimeTs": 1552435200000,
      "updateTs": 1552462517000,
      "minifestValid": true,
      "end": 1553256000000
    },
    _init: function () {
      this.left = 0;
      this.numberOfHours = 240;
      this.progressBar = Utils.qs("#progress-bar");
      this.progressWidth = this.progressBar.offsetWidth - this.offset;
      this.pxRatio = this.progressWidth / (this.calendar.endOfCal - this.calendar.start);
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
        this.timestamp = this.pos2ts(t),
          this.update(t),
          this.bcast(),
          this.removeAnimation()
      }
    },
    ondrag: function (e) {
      this.update(e + 20 - this.offset);
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
      var t = Math.floor(this.numberOfHours * this.left / (24 * this.progressWidth)),
        n = this.calendar.days[t],
        i = n ? "" + n.display + (n.day && " " + n.day) + " - " : "";
      return this.zuluMode && (e.dataset.zulu = p.hourUTC(this.timestamp)),
        "" + i + this.displayHour(Math.round(this.numberOfHours * this.left / this.progressWidth) % 24)
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