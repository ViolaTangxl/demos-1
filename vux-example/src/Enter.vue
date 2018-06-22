<template>
  <div class="enter">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Enter",
  data() {
    return {};
  }
};
</script>

<style>
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
