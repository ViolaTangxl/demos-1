<template>
  <div class="page-three"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page3</div>
    <div class="table-container"></div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";

export default {
  name: "PageThree",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page3"
    })
  }),
  methods: {
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  }
};
</script>

<style>
.page-three {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page-three .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-three .table-container {
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  padding: 10px;
}
</style>