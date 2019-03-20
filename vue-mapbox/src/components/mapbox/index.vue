<template>
  <div :id="container" style="height: 100%;"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'
export default {
  name: 'Mapbox',
  props: {
    container: {
      type: String,
      default: 'map-container'
    },
    token: {
      type: String,
      default: 'pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2ptbjJsZXRsMHBlNzNsbGIycTk3eWU0biJ9.Pj_8_ER8nD7UQSSeOg4JZA'
    },
    mapStyle: {
      type: String,
      default: 'mapbox://styles/huanglii/cjtcts8h62qen1fmytxujnsf3'
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
    resetMapView () {
      const { center, zoom } = this
      this.map.flyTo({
        center: center,
        zoom: zoom,
        pitch: 0,
        bearing: 0
      })
    },
    setSCView () {
      this.fitBounds([97.3828125, 26.115985925333533, 108.45703125, 34.30714385628805])
    },
    /**
     * 初始化地图
     */
    async init () {
      // 'mapbox://styles/huanglii/cjtfl5rty5x331fnrd6oi0hpn'
      const { token, container, mapStyle, center, minZoom, maxZoom, zoom, pitch } = this
      mapboxgl.accessToken = token
      const map = new mapboxgl.Map({
        container: container,
        style: mapStyle,
        zoom: zoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
        pitch: pitch,
        center: center,
        logoControl: false
      })
      map.doubleClickZoom.disable()
      map.dragRotate.disable()
      this.map = map

      this.map.on('load', () => {
        this.$emit('load')
        this.setSCView()

        this._initSource()
        this._initLayer()
      })

      this.mapClickEvent((e) => {
        console.log(this.map.getZoom())
        console.log(this.map.getCenter())
        var features = map.queryRenderedFeatures(
          e.point,
          { layers: ['sc-symbol-layer'] }
        )
        console.log(features)
        if (features.length > 0) {
          let cname = features[0].properties['name']
          let filter = ['==', 'CITYNAME', cname]
          let fs = this.querySourceFeatures('china-source', 'sc', filter)
          if (fs.length > 0) {
            this.fitFeature(fs)
            this.setFilter('sc-city-fill-layer', filter)
          }
        } else {
          this.setSCView()
          this.setFilter('sc-city-fill-layer', ['==', 'CITYNAME', ''])
        }
      })
    },

    /**
     * 初始化数据源
     */
    _initSource (map = this.map) {
      map.addSource('china-source', {
        'type': 'vector',
        'scheme': 'tms',
        'tiles': [
          'http://localhost:8008/geoserver/gwc/service/tms/1.0.0/china:china@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
        ]
      })
    },

    /**
     * 初始化图层
     */
    _initLayer (map = this.map) {
      // 四川省市边界
      map.addLayer({
        'id': 'sc-city-line-layer',
        'type': 'line',
        'source': 'china-source',
        'source-layer': 'sc',
        'minzoom': 4,
        'paint': {
          'line-color': '#FFFFFF',
          'line-opacity': 0.5
        }
      })
      // 四川城市
      map.addLayer({
        'id': 'sc-city-fill-layer',
        'type': 'fill',
        'source': 'china-source',
        'source-layer': 'sc',
        'minzoom': 4,
        'paint': {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'Shape_Area'],
            0,
            '#409EFF',
            2,
            '#E6A23C'
          ]
        },
        'filter': ['==', 'CITYNAME', '']
      })
      // 城市-高亮
      // map.addLayer({
      //   'id': 'city-hightlight-layer',
      //   'type': 'fill-extrusion',
      //   'source': 'china-source',
      //   'source-layer': 'sc',
      //   'paint': {
      //     'fill-extrusion-color': '#F56C6C',
      //     'fill-extrusion-height': ['*', ['get', 'Shape_Area'], 1000],
      //     'fill-extrusion-base': 10
      //   },
      //   'filter': ['==', 'CITYNAME', '']
      // })
      // 四川省界
      map.addLayer({
        'id': 'sc-border-layer',
        'type': 'line',
        'source': 'china-source',
        'source-layer': 'province',
        'minzoom': 4,
        'paint': {
          'line-color': '#F56C6C',
          'line-width': 1.5
        },
        'filter': ['==', 'CODE', '510000']
      })
      map.addLayer({
        'id': 'sc-symbol-layer',
        'type': 'symbol',
        'source': 'china-source',
        'source-layer': 'sc-citypoint',
        'minzoom': 4,
        'layout': {
          'text-field': '{name}'
        },
        'paint': {
          'text-color': '#934D43'
        }
      })
    },

    /**
     * querySourceFeatures
     */
    querySourceFeatures (sourceId, sourceLayer, filter, map = this.map) {
      return map.querySourceFeatures(sourceId, {
        sourceLayer: sourceLayer,
        filter: filter
      })
    },

    /**
     * 图层过滤器
     * @param {String} layerName 图层id
     * @param {Array} filter 过滤器
     */
    setFilter (layerName, filter, map = this.map) {
      map.setFilter(layerName, filter)
    },

    /**
     * 地图视图范围缩放至要素
     * @param {Array} features 要素集
     */
    fitFeature (features, map = this.map) {
      let fc = turf.featureCollection(features)
      // bbox extent in minX, minY, maxX, maxY order
      let bound = turf.bbox(fc)
      this.fitBounds(bound)
    },

    /**
     * fitBounds
     */
    fitBounds (bound, options = {padding: {top: 100, bottom: 100, left: 100, right: 100}}, map = this.map) {
      map.fitBounds(bound, options)
    },

    /**
     * 根据坐标 及 其他配置改变地图显示位置
     * @param {Object} flyOptions center: 地图中心点，zoom: 地图zoom duration 动画持续时间
     * @param {Function} callback 动画执行完毕的回调
     * @param {Map} map 地图实例，默认为当前实例
     */
    flyToCoords ({ center = this.map.getCenter(), zoom = 8, duration = 500, pitch = this.pitch } = {}, callback, map = this.map) {
      if (map.isZooming()) {
        if (callback) callback()
        return
      }
      map.flyTo({
        center,
        zoom,
        duration,
        pitch
      })
      const timeOut = setTimeout(() => {
        clearTimeout(timeOut)
        if (callback) callback()
      }, duration)
    },

    /**
     * mapbox click 事件
     */
    mapClickEvent (callback, map = this.map) {
      let clickEvent = null
      const func = (e) => {
        if (callback) callback(e)
      }
      if (clickEvent) return
      clickEvent = map.on('click', func)
    },

    /**
     * mapbox zoom 事件
     */
    mapZoomEvent (callback, map = this.map) {
      let zoomEvent = null
      const func = () => {
        if (callback) callback()
      }
      if (zoomEvent) return
      zoomEvent = map.on('zoom', func)
    },

    /**
     * mapbox zoomend 事件
     */
    mapZoomEndEvent (callback, map = this.map) {
      let zoomEndEvent = null
      const func = () => {
        this.checkMapZoom(map)
        if (callback) callback()
      }
      if (zoomEndEvent) return
      zoomEndEvent = map.on('zoomend', func)
    },

    /**
     * mapbox zoomstart 事件
     */
    mapZoomStartEvent (callback, map = this.map) {
      let zoomStartEvent = null
      const func = () => {
        if (callback) callback()
      }
      if (zoomStartEvent) return
      zoomStartEvent = map.on('zoomstart', func)
    },

    /**
     * mapbox move 事件
     */
    mapMoveEvent (callback, map = this.map) {
      let moveEvent = null
      const func = () => {
        if (callback) callback()
      }
      if (moveEvent) return
      map.on('move', func)
    }
  }
}
</script>

<style>

</style>
