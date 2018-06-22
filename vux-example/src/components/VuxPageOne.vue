<template>
  <div class="vux-page-one"
       v-bind:style="wsStyle"></div>
</template>

<script>
// 引入水印插件
import { waterPrint } from "../assets/plugins/waterprint.js";

export default {
  name: "VuxPageOne",
  data() {
    return {
      wsStyle: waterPrint({
        username: "jiayizhen vux1"
      })
    };
  }
};
</script>

<style>
.vux-page-one {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
