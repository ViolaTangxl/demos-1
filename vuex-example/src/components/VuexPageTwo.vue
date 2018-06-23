<template>
  <div class="vuex-page-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是vuex page2</div>
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
// 引入mapState
import { mapState } from "vuex";

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
    addOne: function() {},
    reduceOne: function() {},
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  },
  computed: {
    ...mapState({
      count: store => store.vuex2.count,
      loading: store => store.vuex2.loading
    })
  }
};
</script>

<style>
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