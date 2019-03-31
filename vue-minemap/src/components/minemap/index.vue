<template>
  <div :id="container" style="height: 100%;"></div>
</template>

<script>
import minemap from 'minemap'
export default {
  name: 'minemap',
  props: {
    container: {
      type: String,
      default: 'map-container'
    },
    token: {
      type: String,
      default: 'ae291ab75d1b42d39ca220cb136b28a4'
    },
    solution: {
      type: String,
      default: '8089'
    },
    center: {
      type: Array,
      default: () => {
        return [108.445, 33.935]
      }
    },
    minZoom: {
      type: Number,
      default: 2
    },
    maxZoom: {
      type: Number,
      default: 20
    },
    zoom: {
      type: Number,
      default: 2
    },
    pitch: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      map: null
    }
  },
  methods: {
    /**
     * 初始化地图
     */
    async init () {
      const { token, container, solution, center, minZoom, maxZoom, zoom, pitch } = this
      minemap.accessToken = token
      minemap.solution = solution
      // const map = new minemap.Map({
      //   container: container,
      //   style: 'http://minedata.cn/service/solu/style/id/' + solution,
      //   zoom: zoom,
      //   minZoom: minZoom,
      //   maxZoom: maxZoom,
      //   pitch: pitch,
      //   center: center,
      //   logoControl: false
      // })
      const map = new minemap.EarthMap({
        container: container,
        style: 'http://minedata.cn/service/solu/style/id/' + solution,
        zoom: zoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
        pitch: pitch,
        center: center,
        logoControl: false,
        // 是否显示地球
        hasEarth: true,
        // 地球与地图切换zoom
        earthSwitch: 5.2,
        // 两级覆盖图url（解决腾讯影像两级空白）
        maskUrl: 'http://minedata.cn/minemapapi/v2.0.0/plugins/earth/base.png',
        // 星空背景图url
        backgroundUrl: 'http://minedata.cn/minemapapi/v2.0.0/plugins/earth/starBackground.jpg',
        // 栅格图服务（默认腾讯卫星影像）
        // mapTileService: 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
        mapTileService: 'tecent'
      })
      map.doubleClickZoom.disable()
      map.dragRotate.disable()
      this.map = map

      this.map.on('load', () => {
        this.$emit('load')

        // this.map.addLayer({
        //   'id': 'province-layer',
        //   'type': 'fill',
        //   'source': {
        //     'type': 'vector',
        //     'scheme': 'tms',
        //     'tiles': [
        //       'http://localhost:8008/geoserver/gwc/service/tms/1.0.0/china:china@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
        //     ]
        //   },
        //   'source-layer': 'province',
        //   'paint': {
        //     'fill-color': '#C1FFC1',
        //     'fill-opacity': 0.5
        //   }
        //   // 'filter': ['==', 'DZM', '']
        // })
      })
    },
    setFilter (layerName, filters) {
      if (!this.map.getLayer(layerName)) {
        throw new Error(`${layerName} not find.`)
      }
      this.map.setFilter(layerName, filters)
    }
  }
}
</script>

<style>

</style>
