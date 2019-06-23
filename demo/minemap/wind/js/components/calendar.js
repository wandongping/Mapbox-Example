define(["format", "utils", "class"], function (e, r, c) {
  return c.extend({
    el: r.qs("#calendar"),
    weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    calendarHours: 120,
    numOfHours: 120,
    forecastTime: '00', // 预测时间: 00, 12
    localeHours: e.getHoursFunction(),
    _init: function () {
      this.render();
    },
    render: function () {
      var e = this.getCalendar();
      if (e) {
        var t, n = "",
          i = e.end,
          s = e.days.length,
          a = this.el.offsetWidth / s,
          r = 100 / s;
        if (100 < a)
          t = this.createDayStringLong;
        else if (60 < a)
          t = this.createDayString;
        else {
          if (!(40 < a))
            return void(this.el.innerHTML = "");
          t = this.createDayStringShort
        }
        for (var o = 0; o < s; o++) {
          var l = e.days[o];
          n += '<div data-do="' + Math.min(l.middayTs, i) + '"\n\t\t\t\t\tclass="uiyellow' + (l.middayTs < i ? " clickable" : " disabled") + '"\n\t\t\t\t\tstyle="width: ' + r + '%;">' + l.display + ' ' + l.day + "</div>"
        }
        this.el.innerHTML = n
      }
    },
    getCalendar: function () {
      this.startOfTimeline = this.getStart();
      this.start = this.startOfTimeline.getTime();
      this.endOfcalendar = this.add(this.startOfTimeline, this.calendarHours);
      this.end = this.endOfcalendar.getTime();

      this.days = [];
      this.timestamps = [];
      this.paths = [];
      this.createDays();
      this.createTimestamps();

      return this
    },
    add: function (s, n, t) {
      var i = new Date(s.getTime());
      return i.setTime(s.getTime() + ("days" === t ? 24 : 1) * n * r.tsHour),
        i
    },
    boundTs: function (e) {
      return r.bound(e, this.start, this.end)
    },
    getStart: function () {
      var d = new Date;
      // d.getHours() >=12 ? d.setHours(12) : d.setHours(0);
      return d.setHours(0),
        d.setMinutes(0),
        d.setSeconds(0),
        d.setMilliseconds(0),
        d
    },
    getMidnight: function () {
      var e = new Date;
      return e.setHours(0),
        e.setMinutes(0),
        e.setSeconds(0),
        e.setMilliseconds(0),
        e
    },
    createDays: function () {
      for (var a = this.add(this.startOfTimeline, 12), r = 0; r < this.calendarHours / 24; r++) {
        var start = this.add(this.startOfTimeline, r, "days").getTime();
        var end = this.add(this.startOfTimeline, 24).getTime();
        var t = this.add(a, r, "days");
        var ts = t.getTime();
        var w = this.weekdays[t.getDay()];
        this.days[r] = {
          // display: w + ' ' + t.getDate(),
          display: w,
          day: t.getDate(),
          middayTs: ts,
          t: t.toLocaleString(),
          start: start,
          end: end,
          month: t.getMonth() + 1,
          year: t.getFullYear()
        };
      }
    },
    createTimestamps: function () {
      for (var r = 3; r <= this.numOfHours; r += 3) {
        var e = this.add(this.startOfTimeline, r, "hours");
        this.paths.push(this.date2path(e));
        this.timestamps.push(e.getTime());
      }
    },
    date2path: function (t) {
      // return e.toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):.*/, "$1/$2/$3/$4")
      var n = (t.getTime() - this.start) / 1000 / 3600
      return '2019032812_' + n.toString().padStart('3', '0')
      // return e.formatDate('yyyyMMdd' + this.forecastTime +'_0hh', t);
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