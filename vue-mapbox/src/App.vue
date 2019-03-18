<template>
  <div id="app">
    <Mapbox
      ref="map"
      :zoom="3"
      @load="mapLoaded">
    </Mapbox>
    <search-bar @on-search="handleSearch" @on-select="handleSelect" @on-icon-click="handleIconClick"></search-bar>
  </div>
</template>

<script>
import SearchBar from './components/search-bar'
import Mapbox from './components/mapbox'

export default {
  name: 'App',
  components: {
    [Mapbox.name]: Mapbox,
    [SearchBar.name]: SearchBar
  },
  data: () => {
    return {

    }
  },
  mounted () {
    this.$refs.map.init()
  },
  methods: {
    mapLoaded () {
      console.log('map loaded...')
    },
    handleSearch (queryString, callback) {
      let area = [
        { 'value': '北京', 'code': '110000' },
        { 'value': '重庆', 'code': '500000' }
      ]
      // 调用 callback 返回建议列表的数据
      callback(area)
    },
    handleIconClick (queryString) {
      if (queryString) this.$refs.map.resetMapView()
    },
    handleSelect (data) {
      const areaMap = {
        '110000': {
          'center': [116.3671875, 40.17408860939014],
          'bounds': [115.48828125, 39.368279149160145, 117.421875, 41.112468789180895]
        },
        '500000': {
          'center': [107.75390625, 30.27717756941305],
          'bounds': [105.29296875, 28.14950321154457, 110.21484375, 32.24997445586331]
        }
      }
      let code = data.code
      this.$refs.map.setFilter('province-hightlight-layer', ['==', 'DZM', code])
      this.$refs.map.flyToCoords({center: areaMap[code].center, zoom: 6, pitch: 60})
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/var.scss';
  * {
    margin: 0;
    padding: 0;
  }
  html, body, #app {
    height: 100%;
  }
  [class*=" el-icon-"], [class^=el-icon-] {
    color: $--color-primary;
  }
</style>
