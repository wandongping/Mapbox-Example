define("calendar", ["format", "utils", "class"], function (e, r, t) {
  return t.extend({
    weekdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    calendarHours: 240,
    numOfHours: 240,
    localeHours: e.getHoursFunction(),
    _init: function () {
      this.midnight = this.getMidnight(),
        this.startOfTimeline = this.startOfTimeline || this.midnight,
        this.start = this.startOfTimeline.getTime(),
        this.days = [],
        this.endOfcalendar = this.add(this.startOfTimeline, this.calendarHours),
        this.endOfCal = this.endOfcalendar.getTime(),
        this.maxTimestamp = this.endOfcalendar.getTime(),
        this.type = this.endOfcalendar < this.midnight ? "historical" : this.startOfTimeline < this.midnight ? "mixed" : "forecast",
        this.timestamps = [],
        this.paths = [],
        this.interTimestamps = [],
        this.minifestFile && this.createTimestampsFromMinifest(this.minifestFile) ? this.minifestValid = !0 : (this.createTimestamps(),
          this.minifestValid = !1),
        this.end = Math.min(this.timestamps[this.timestamps.length - 1], this.endOfCal);
      for (var e, t, n, i, s, a = this.add(this.startOfTimeline, 12), r = 0; r < this.calendarHours / 24; r++)
        i = this.add(this.startOfTimeline, r, "days").getTime(),
        s = this.add(this.startOfTimeline, 24),
        s = this.add(s, r, "days").getTime(),
        t = (e = this.add(a, r, "days")).getTime(),
        n = this.weekdays[e.getDay()],
        this.days[r] = {
          display: n + "2",
          displayLong: n,
          day: e.getDate(),
          middayTs: t,
          start: i,
          end: s,
          month: e.getMonth() + 1,
          year: e.getFullYear()
        };
      for (r = 1; r < this.paths.length; r++)
        this.interTimestamps.push(this.timestamps[r - 1] + Math.floor((this.timestamps[r] - this.timestamps[r - 1]) / 2));
      return this
    },
    add: function (e, t, n) {
      var i = new Date(e.getTime());
      return i.setTime(e.getTime() + ("days" === n ? 24 : 1) * t * r.tsHour),
        i
    },
    boundTs: function (e) {
      return r.bound(e, this.start, this.end)
    },
    getMidnight: function () {
      var e = new Date;
      return e.setHours(0),
        e.setMinutes(0),
        e.setSeconds(0),
        e.setMilliseconds(0),
        e
    },
    createTimestamps: function () {
      var e, t, n = this.startOfTimeline.getUTCHours() % 3;
      for (n && (this.startOfTimeline = this.add(this.startOfTimeline, 3 - n, "hours")),
        t = 0; t < this.numOfHours; t += 3)
        e = this.add(this.startOfTimeline, t, "hours"),
        this.paths.push(this.date2path(e)),
        this.timestamps.push(e.getTime())
    },
    prepareTimesFromMinifest: function (e) {
      return e && "object" == typeof e && e.ref && e.dst ? (this.refTime = e.ref.replace(/(\d+)-(\d+)-(\d+)T(\d+):.*/, "$1$2$3$4"),
        this.refTimeTxt = e.ref,
        this.updateTxt = e.update,
        this.refTimeTs = new Date(e.ref).getTime(),
        this.updateTs = new Date(e.update).getTime(),
        !0) : (window.wError("Calendar", "Invalid format of minifest 2.0"),
        !1)
    },
    createTimestampsFromMinifest: function (e) {
      var n = this;
      if (!this.prepareTimesFromMinifest(e))
        return !1;
      var i, s = r.tsHour,
        t = Math.min(12, this.numOfHours / 24),
        a = this.add(this.startOfTimeline, t, "days").getTime();
      return e.dst.forEach(function (e) {
          for (var t = e[1]; t <= e[2]; t += e[0])
            (i = n.refTimeTs + t * s) <= a && (n.timestamps.push(i),
              n.paths.push(n.date2path(new Date(i))))
        }),
        !0
    },
    date2path: function (e) {
      return e.toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):.*/, "$1/$2/$3/$4")
    },
    ts2path: function (e) {
      var t, n = this.interTimestamps;
      for (t = 0; t < n.length; t++)
        if (e < n[t])
          return this.paths[t];
      return this.paths[n.length - 1]
    },
    path2date: function (e) {
      var t = e.split("/");
      return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], 0, 0))
    },
    ts2string: function (e) {
      var t = new Date(e),
        n = t.getDay(),
        i = t.getDate(),
        s = this.localeHours(t.getHours());
      return a[this.weekdays[n]] + " " + i + " - " + s
    }
  })
});