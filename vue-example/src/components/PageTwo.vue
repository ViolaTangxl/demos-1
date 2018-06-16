<template>
  <div class="page-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page2</div>
    <div class="count-container">总数: {{this.count}}</div>
    <div class="btn-container">
      <el-button type="success"
                 plain
                 v-on:click="addOne">加一(半秒后)</el-button>
      <el-button type="danger"
                 plain
                 v-on:click="reduceOne">减一(一秒后)</el-button>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";

export default {
  name: "PageTwo",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page2"
    })
  }),
  methods: {
    addOne: function() {
      this.controlOverlayer(true);
      const timeOut = setTimeout(() => {
        this.count++;
        this.controlOverlayer(false);
        clearTimeout(timeOut);
      }, 500);
    },
    reduceOne: function() {
      this.controlOverlayer(true);
      const timeOut = setTimeout(() => {
        this.count--;
        this.controlOverlayer(false);
        clearTimeout(timeOut);
      }, 1000);
    },
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  }
};
</script>

<style>
.page-two {
  width: 100%;
  height: 100%;
}
.page-two .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-two .count-container {
  width: 100%;
  height: 30px;
  position: relative;
  top: calc(50% - 30px);
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-two .btn-container {
  width: 100%;
  position: relative;
  top: calc(50% - 20px);
  text-align: center;
}
</style>