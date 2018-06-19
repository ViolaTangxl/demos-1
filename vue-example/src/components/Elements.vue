<template>
  <div class="elements-page"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page5</div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";

export default {
  name: "Elements",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page5"
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
.elements-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.elements-page .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
</style>