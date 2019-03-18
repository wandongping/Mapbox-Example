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
    'class': './common/class',
    'utils': './common/utils',
    'format': './common/format',
    'drag': './common/drag',
    'map': './components/map',
    'bar': './components/bar',
    'ghostbox': './components/ghostbox',
    'bindedcheckbox': './components/bindedcheckbox',
    'calendar': './components/calendar',
  }
});

require(['map', 'bar'], function (
  Map, Bar
) {
  return app = {
    ui_map: Map.instance({}),
    ui_bar: Bar.instance({}),
  }
});