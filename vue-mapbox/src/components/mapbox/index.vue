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
    resetCenterAndZoom () {
      const { center, zoom } = this
      this.map.flyTo({
        center: center,
        zoom: zoom
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
      map.dragRotate.disable()
      this.map = map

      this.map.on('load', () => {
        this.$emit('load')

        this.map.addSource('china-source', {
          'type': 'vector',
          'scheme': 'tms',
          'tiles': [
            'http://localhost:8008/geoserver/gwc/service/tms/1.0.0/china:china@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
          ]
        })

        this.map.addLayer({
          'id': 'province-layer',
          'type': 'line',
          'source': 'china-source',
          'source-layer': 'province',
          'paint': {
            'line-color': '#FFFFFF',
            'line-opacity': 0.5
          }
        })

        this.map.addLayer({
          'id': 'province-hightlight-layer',
          'type': 'fill',
          'source': 'china-source',
          'source-layer': 'province',
          'paint': {
            'fill-color': '#00FFFF',
            'fill-opacity': 0.5
          },
          'filter': ['==', 'DZN', '']
        })

        this.map.addLayer({
          'id': 'border-layer',
          'type': 'line',
          'source': 'china-source',
          'source-layer': 'Border',
          'paint': {
            'line-color': '#F56C6C',
            'line-width': 1.5
          }
        })
      })
    },
    setFilter (layerName, filters) {
      this.map.setFilter(layerName, filters)
      this.resetCenterAndZoom()
      setTimeout(() => {
        // querySourceFeatures 只能查询可视范围内的要素
        let features = this.map.querySourceFeatures('china-source', {
          sourceLayer: 'province',
          filter: filters
        })
        console.log(features.length)
        if (features.length > 0 && features[0].geometry.type === 'Polygon') {
          let geom = features[0].geometry
          // bbox extent in minX, minY, maxX, maxY order
          let bound = turf.bbox(turf.polygonToLine(geom))

          this.map.fitBounds(bound, {
            padding: {top: 10, bottom: 10, left: 10, right: 10}
          })
        }
      }, 800)
    }
  }
}
</script>

<style>

</style>
