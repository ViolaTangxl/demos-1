<template>
  <Layout v-bind:navConfig="navConfig" />
</template>

<script>
// 引入Layout
import Layout from "@/layout/Layout.vue";

export default {
  name: "Enter",
  props: ["navConfig"],
  data() {
    return {};
  },
  components: {
    Layout
  }
};
</script>

<style>
@import url("./common.css");

* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
