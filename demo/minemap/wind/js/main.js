/*
 * @Author: huangli290
 * @Date: 2019-03-13 17:20:44
 * @Last Modified by: huangli290
 * @Last Modified time: 2019-03-13 17:20:44
 */
require.config({
  paths: {
    'minemap': 'http://minedata.cn/minemapapi/v2.0.0/minemap',
    'velocity': 'http://minedata.cn/minemapapi/v2.0.0/plugins/wind/velocity',
    'config': './common/config',
    'event': './common/event',
    'broadcast': './common/broadcast',
    'class': './common/class',
    'utils': './common/utils',
    'format': './common/format',
    'drag': './common/drag',
    'map': './components/map',
    'bar': './components/bar',
    'ghostbox': './components/ghostbox',
    'bindedcheckbox': './components/bindedcheckbox',
    'calendar': './components/calendar',
    'overlay': './components/overlay'
  }
});

require(['map', 'bar'], function (
  Map, Bar
) {
  return app = {
    // mapEl: Map.instance({}),
    barEl: Bar.instance({}),
  }
});