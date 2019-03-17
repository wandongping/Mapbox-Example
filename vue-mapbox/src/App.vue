<template>
  <div id="app">
    <Mapbox
      ref="map"
      :zoom="3"
      @load="mapLoaded">
    </Mapbox>
    <search-bar :style="{position: 'fixed', top: '10px', left: '10px'}"
      @on-change="handleSearch"></search-bar>
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
    handleSearch (data) {
      let code = data.code
      this.$refs.map.setFilter('province-hightlight-layer', ['==', 'DZM', code])
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}
</style>
