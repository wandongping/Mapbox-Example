<template>
  <div>
    <!-- <Input search placeholder="搜索..." /> -->
    <al-selector searchable clearable  level="0" @on-change="handleAlChange"/>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data: () => {
    return {
    }
  },
  methods: {
    handleAlChange (data) {
      this.$emit('on-change', data)
    }
  }
}
</script>

<style>

</style>
