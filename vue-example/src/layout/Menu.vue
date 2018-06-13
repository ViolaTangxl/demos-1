<template>
  <el-menu class="el-menu-vertical-demo layout-menu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-bind:collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  props: ["isCollapse"],
  data: function() {
    return {};
  }
};
</script>

<style>
.layout-menu {
  height: 100%;
}
.layout-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>