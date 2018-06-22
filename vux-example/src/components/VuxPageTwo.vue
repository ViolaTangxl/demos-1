<template>
  <div class="vux-page-two"
       v-bind:style="wsStyle"></div>
</template>

<script>
// 引入水印插件
import { waterPrint } from "../assets/plugins/waterprint.js";

export default {
  name: "VuxPageTwo",
  data() {
    return {
      wsStyle: waterPrint({
        username: "jiayizhen vux2"
      })
    };
  }
};
</script>

<style>
.vux-page-two {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>