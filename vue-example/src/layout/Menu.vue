<template>
    <el-menu class="el-menu-vertical-demo layout-menu" v-bind:default-active="matchActiveRouter" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-bind:collapse="isCollapse" router>
        <el-submenu index="submenu1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>测试导航</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="page1">页面1</el-menu-item>
                <el-menu-item index="page2">页面2</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: "Menu",
  props: ["isCollapse", "navConfig"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    matchActiveRouter: function() {
      return this.$route.path.replace("/", "");
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