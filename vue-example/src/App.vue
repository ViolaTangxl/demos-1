<template>
  <Layout v-bind:navConfig="navConfig" />
</template>

<script>
// 引入Layout
import Layout from "./layout/Layout";

export default {
  name: "App",
  props: ["navConfig"],
  created: function() {},
  data: function() {
    return {};
  },
  components: {
    Layout
  }
};
</script>

<style>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>