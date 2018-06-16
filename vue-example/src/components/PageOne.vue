<template>
  <div class="page-one">
    <div class="title-container">这是page1</div>
    <div class="count-container">总数: {{this.count}}</div>
    <div class="btn-container">
      <el-button type="success"
                 plain
                 v-on:click="addOne">加一(同步)</el-button>
      <el-button type="danger"
                 plain
                 v-on:click="reduceOne">减一(同步)</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageOne",
  data: () => ({
    count: 0
  }),
  methods: {
    addOne: function() {
      this.count++;
    },
    reduceOne: function() {
      this.count--;
    }
  }
};
</script>

<style>
.page-one {
  width: 100%;
  height: 100%;
}
.page-one .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-one .count-container {
  width: 100%;
  height: 30px;
  position: relative;
  top: calc(50% - 30px);
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.page-one .btn-container {
  width: 100%;
  position: relative;
  top: calc(50% - 20px);
  text-align: center;
}
</style>