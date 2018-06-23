<template>
  <div class="vuex-page-one"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是vuex page1</div>
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
// 引入createNamespacedHelpers插件
import { createNamespacedHelpers } from "vuex";
// 定义mapState
const { mapState, mapMutations } = createNamespacedHelpers("vuex1");

export default {
  name: "VuexPageOne",
  data() {
    return {
      wsStyle: waterPrint({
        username: "jiayizhen vuex1"
      })
    };
  },
  methods: {
    ...mapMutations({
      addOne: "addOne",
      reduceOne: "reduceOne",
      controlOverlay: "controlOverlay"
    })
  },
  computed: {
    ...mapState({
      count: state => state.count,
      loading: state => state.loading
    })
  }
};
</script>

<style>
.vuex-page-one {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.vuex-page-one .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.vuex-page-one .count-container {
  width: 100%;
  height: 30px;
  position: relative;
  top: calc(50% - 30px);
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.vuex-page-one .btn-container {
  width: 100%;
  position: relative;
  top: calc(50% - 20px);
  text-align: center;
}
</style>
