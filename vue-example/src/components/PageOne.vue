<template>
  <div class="page-one"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page1</div>
    <div class="count-container">总数: {{this.count}}</div>
    <div class="btn-container">
      <el-button type="success"
                 plain
                 v-on:click="addOne">加一(一秒后)</el-button>
      <el-button type="danger"
                 plain
                 v-on:click="reduceOne">减一(两秒后)</el-button>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";

export default {
  name: "PageOne",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page1"
    })
  }),
  methods: {
    addOne: function() {
      this.controlOverlayer(true);
      const timeOut = setTimeout(() => {
        this.count++;
        this.controlOverlayer(false);
        clearTimeout(timeOut);
      }, 1000);
    },
    reduceOne: function() {
      this.controlOverlayer(true);
      const timeOut = setTimeout(() => {
        this.count--;
        this.controlOverlayer(false);
        clearTimeout(timeOut);
      }, 2000);
    },
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  }
};
</script>

<style>
.page-one {
  width: 100%;
  height: 100%;
}
.page-one .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-one .count-container {
  width: 100%;
  height: 30px;
  position: relative;
  top: calc(50% - 30px);
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-one .btn-container {
  width: 100%;
  position: relative;
  top: calc(50% - 20px);
  text-align: center;
}
</style>