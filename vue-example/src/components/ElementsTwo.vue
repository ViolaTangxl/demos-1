<template>
  <div class="elements-page-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page6</div>
    <div class="elements-container">
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";

export default {
  name: "ElementsTwo",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page6"
    })
  }),
  methods: {
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  },
  components: {}
};
</script>

<style>
.elements-page-two {
  width: 100%;
  height: auto;
  min-height: 100%;
}

.elements-page-two .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}

.elements-page-two .elements-container {
  width: 100%;
  height: calc(100% - 30px);
}

.elements-page-two .elements-container .element-item {
  width: 96%;
  position: relative;
  left: 2%;
  margin-top: 10px;
}

.elements-page-two .element-item .item-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}

.elements-page-two .element-item .item-container {
  width: 100%;
  position: relative;
  margin-top: 10px;
}
</style>