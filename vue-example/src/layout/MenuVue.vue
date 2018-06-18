<template>
  <el-menu class="el-menu-vertical-demo layout-menu"
           v-bind:default-active="matchActiveRouter"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           v-bind:collapse="isCollapse"
           router>
    <el-submenu index="/group1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>目录组1</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/group1/page1">
          <i class="el-icon-goods"></i>
          <span>页面1</span>
        </el-menu-item>
        <el-menu-item index="/group1/page2">
          <i class="el-icon-goods"></i>
          <span>页面2</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/group2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>目录组2</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/group2/page3">
          <i class="el-icon-goods"></i>
          <span>页面3</span>
        </el-menu-item>
        <el-menu-item index="/group2/page4">
          <i class="el-icon-goods"></i>
          <span>页面4</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "MenuVue",
  props: ["isCollapse", "navConfig"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    matchActiveRouter: function() {
      return this.$route.path;
    }
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