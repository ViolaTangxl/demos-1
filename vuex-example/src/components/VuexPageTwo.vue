<template>
  <div class="vuex-page-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是vuex page2</div>
    <div class="count-container">总数: {{count}}</div>
    <div class="btn-container">
      <el-button type="success"
                 plain
                 v-on:click="addOne({time:500})">加一</el-button>
      <el-button type="danger"
                 plain
                 v-on:click="reduceOne({time:1000})">减一</el-button>
    </div>
  </div>
</template>

<script>
// 引入水印插件
import { waterPrint } from "../assets/plugins/waterprint.js";
// 引入createNamespacedHelpers插件
import { createNamespacedHelpers } from "vuex";
// 定义mapState
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("vuex2");

export default {
  name: "VuexPageTwo",
  data() {
    return {
      wsStyle: waterPrint({
        username: "jiayizhen vuex2"
      })
    };
  },
  methods: {
    ...mapMutations({
      controlOverlay: "controlOverlay"
    }),
    ...mapActions({
      addOne: "addOne",
      reduceOne: "reduceOne"
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

<style scoped>
.vuex-page-two {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.vuex-page-two .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.vuex-page-two .count-container {
  width: 100%;
  height: 30px;
  position: relative;
  top: calc(50% - 30px);
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.vuex-page-two .btn-container {
  width: 100%;
  position: relative;
  top: calc(50% - 20px);
  text-align: center;
}
</style>