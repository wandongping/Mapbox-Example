<template>
  <div id="app">
    <minemap
      ref="map"
      :zoom="3"
      :solution="'8089'"
      @load="mapLoaded">
    </minemap>
    <search-bar :style="{position: 'fixed', top: '10px', left: '10px'}"
      @on-change="handleSearch"></search-bar>
  </div>
</template>

<script>
import SearchBar from './components/search-bar'
import Minemap from './components/minemap'

export default {
  name: 'App',
  components: {
    [Minemap.name]: Minemap,
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
      // let code = data[0].code
      this.$refs.map.map.flyTo({
        center: [108.445, 33.935],
        zoom: 7
      })
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
