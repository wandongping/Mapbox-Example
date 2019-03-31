<template>
  <div id="app">
    <Mapbox
      ref="map"
      :zoom="3"
      @load="mapLoaded">
    </Mapbox>
    <search-bar @on-search="handleSearch" @on-select="handleSelect" @on-clear="handleClear"></search-bar>
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
        { 'value': '成都市', 'code': '000000' },
        { 'value': '德阳市', 'code': '000000' }
      ]
      // 调用 callback 返回建议列表的数据
      callback(area)
    },
    handleClear () {
      this.$refs.map.setFilter('province-hightlight-layer', ['==', 'CODE', ''])
      this.$refs.map.resetMapView()
    },
    handleSelect (data) {
      // const areaMap = {
      //   '510000': {
      //     'center': [116.3671875, 40.17408860939014],
      //     'bounds': [97.3828125, 26.115985925333533, 108.45703125, 34.30714385628805]
      //   },
      //   '500000': {
      //     'center': [107.75390625, 30.27717756941305],
      //     'bounds': [105.29296875, 28.14950321154457, 110.21484375, 32.24997445586331]
      //   }
      // }
      // let code = data.code
      // this.$refs.map.setFilter('province-hightlight-layer', ['==', 'DZM', code])
      // this.$refs.map.flyToCoords({center: areaMap[code].center, zoom: 6, pitch: 60})
      // let fs = this.$refs.map.querySourceFeatures('china-source', 'province', ['==', 'DZM', code])
      // this.$refs.map.fitFeature(fs)
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
