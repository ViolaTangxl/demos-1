<template>
  <div class="vux-page-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是vux page2</div>
    <div class="count-container">总数: {{count}}</div>
    <div class="btn-container">
      <el-button type="success"
                 plain
                 v-on:click="addOne">加一</el-button>
      <el-button type="danger"
                 plain
                 v-on:click="reduceOne">减一</el-button>
    </div>
  </div>
</template>

<script>
// 引入水印插件
import { waterPrint } from "../assets/plugins/waterprint.js";

export default {
  name: "VuxPageTwo",
  data() {
    return {
      loading: false,
      count: 0,
      wsStyle: waterPrint({
        username: "jiayizhen vux2"
      })
    };
  },
  methods: {
    addOne: function() {},
    reduceOne: function() {},
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  }
};
</script>

<style>
.vux-page-two {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.vux-page-two .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.vux-page-two .count-container {
  width: 100%;
  height: 30px;
  position: relative;
  top: calc(50% - 30px);
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.vux-page-two .btn-container {
  width: 100%;
  position: relative;
  top: calc(50% - 20px);
  text-align: center;
}
</style>