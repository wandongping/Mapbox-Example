<template>
  <div class="search-bar">
    <el-autocomplete ref="autocomplete"
      v-model="searchText"
      placeholder="搜索"
      :fetch-suggestions="handleSearch"
      @select="handleSelect">
      <div slot="prefix" class="el-icon-logo">
        <i class="el-icon-menu"></i>
      </div>
      <span slot="suffix">
        <i class="" :class="`el-icon-${searchText ? 'close' : 'search'}`" @click="iconClick"></i>
      </span>
      <template slot-scope="{ item }">
        <div class="popper-record">
          <i class="el-icon-location"></i>
          <span>{{ item.code + '-' + item.value }}</span>
        </div>
      </template>
    </el-autocomplete>
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
    handleSearch (string, cb) {
      this.$emit('on-search', string, cb)
    },
    handleSelect (item) {
      this.$emit('on-select', item)
    },
    iconClick () {
      if (this.searchText) this.searchText = ''
      else this.$refs.autocomplete.focus()
      this.$emit('on-icon-click')
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/var.scss';
  .search-bar {
    position: absolute;
    top: 50px;
    left: 60px;
    width: 100%;
    max-width: 400px;
    height: 70px;
    padding: 15px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 2.5px 5px 20px 0 rgba(0,0,0,.25);
    .el-autocomplete {
      width: 100%;
      .el-input {
        font-size: 18px;
        .el-input__inner {
          border: none;
          outline: none;
          padding: 0 60px 0 80px;
        }
        .el-input__prefix, .el-input__suffix {
          font-size: 28px;
          color: $--color-primary;
          cursor: pointer;
        }
        .el-input__prefix {
          left: 20px;
           .el-icon-logo {
              padding: 8px;
              border-radius: 5px;
              background-color: $--color-primary;
              i {
                color: #FFFFFF;
              }
           }
        }
        .el-input__suffix {
          right: 20px;
        }
      }
    }
  }
  .el-popper[x-placement^=bottom] {
    margin-top: 22px;
  }
  .el-popper .popper-record {
    padding: 4px 12px 8px 12px;
    font-size: 16px;
    i.el-icon-location {
      font-size: 24px;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      line-height: 24px;
      vertical-align: middle;
    }
  }
</style>
