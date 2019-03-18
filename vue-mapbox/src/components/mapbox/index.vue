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
    /**
     * 初始化地图
     */
    async init () {
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
      // map.dragRotate.disable()
      this.map = map

      this.map.on('load', () => {
        this.$emit('load')

        this._initSource()
        this._initLayer()
      })

      this.mapClickEvent((e) => {
        var features = map.queryRenderedFeatures(
          e.point,
          { layers: ['province-symbol-layer'] }
        )
        if (features.length > 0) {
          // this.fitFeature(features)
          this.map.setFilter('province-hightlight-layer', ['==', 'NAME', features[0].properties['name']])
        } else {
          this.resetMapView()
          this.map.setFilter('province-hightlight-layer', ['==', 'NAME', ''])
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
      // 省边界
      this.map.addLayer({
        'id': 'province-outline-layer',
        'type': 'line',
        'source': 'china-source',
        'source-layer': 'province',
        'paint': {
          'line-color': '#FFFFFF',
          'line-opacity': 0.5
        }
      })
      // 省
      this.map.addLayer({
        'id': 'province-layer',
        'type': 'fill',
        'source': 'china-source',
        'source-layer': 'province',
        'paint': {
          'fill-color': '#FFFFFF',
          // 'fill-color': ['case',
          //   ['<=', ['get', 'Z120610'], 10], '#56C6DA',
          //   ['<=', ['get', 'Z120610'], 100], '#F5CB5D',
          //   '#FF4F4D'
          // ],
          'fill-opacity': 0
        }
      })
      // 省-高亮
      this.map.addLayer({
        'id': 'province-hightlight-layer',
        'type': 'fill-extrusion',
        'source': 'china-source',
        'source-layer': 'province',
        'paint': {
          'fill-extrusion-color': '#F56C6C',
          'fill-extrusion-height': ['*', ['get', 'Z120610'], 100],
          'fill-extrusion-base': 10
        },
        'filter': ['==', 'DZM', '']
      })
      // 国界线
      this.map.addLayer({
        'id': 'border-layer',
        'type': 'line',
        'source': 'china-source',
        'source-layer': 'Border',
        'maxzoom': 6,
        'paint': {
          'line-color': '#F56C6C',
          'line-width': 1.5
        }
      })
      // 省名称
      this.map.addLayer({
        'id': 'province-symbol-layer',
        'type': 'symbol',
        'source': 'china-source',
        'source-layer': 'provincepoint',
        'layout': {
          'text-field': '{name}'
        },
        'paint': {
          'text-color': '#934D43'
        }
      })
    },

    /**
     * 图层过滤器
     * @param {String} layerName 图层id
     * @param {Array} filters 过滤器
     */
    setFilter (layerName, filters, map = this.map) {
      map.setFilter(layerName, filters)
    },

    /**
     * 地图视图范围缩放至要素
     * @param {Array} features 要素集
     */
    fitFeature (features, map = this.map) {
      let fc = turf.featureCollection(features)
      // bbox extent in minX, minY, maxX, maxY order
      let bound = turf.bbox(fc)
      map.fitBounds(bound, {
        padding: {top: 10, bottom: 10, left: 10, right: 10}
      })
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
