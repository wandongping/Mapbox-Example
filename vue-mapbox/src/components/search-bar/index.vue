<template>
  <div>
    <el-autocomplete
      v-model="searchText"
      :fetch-suggestions="querySearch"
      placeholder="搜索"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data: () => {
    return {
      searchText: ''
    }
  },
  methods: {
    querySearch (queryString, cb) {
      let area = [
        { 'value': '北京', 'code': '110000' },
        { 'value': '重庆', 'code': '500000' }
      ]
      let results = queryString ? area.filter(this.createFilter(queryString)) : area
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (area) => {
        return (area.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (data) {
      this.$emit('on-change', data)
    }
  }
}
</script>

<style scoped>

</style>
