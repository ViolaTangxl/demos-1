<!-- note: 在vue中使用render函数时，要把<template>标签里的东西全部注释掉，render函数才能生效 -->
<!-- <template>
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
      <el-menu-item index="/group1/page1">
        <i class="el-icon-goods"></i>
        <span>页面1</span>
      </el-menu-item>
      <el-menu-item index="/group1/page2">
        <i class="el-icon-goods"></i>
        <span>页面2</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/group2">
      <template slot="title">
        <i class="el-icon-date"></i>
        <span>目录组2</span>
      </template>
      <el-menu-item index="/group2/page3">
        <i class="el-icon-goods"></i>
        <span>页面3</span>
      </el-menu-item>
      <el-menu-item index="/group2/page4">
        <i class="el-icon-goods"></i>
        <span>页面4</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/group3">
      <template slot="title">
        <i class="el-icon-bell"></i>
        <span>目录组3</span>
      </template>
      <el-menu-item index="/group3/page5">
        <i class="el-icon-goods"></i>
        <span>页面5</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template> -->

<script>
export default {
  name: "MenuVue",
  props: ["isCollapse", "navConfig"],
  data: function() {
    return {};
  },
  render(h) {
    return (
      <el-menu
        class="el-menu-vertical-demo layout-menu"
        default-active={this.matchActiveRouter}
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        collapse={this.isCollapse}
        router
      >
        {this.createMenu(h, this.navConfig, "")}
      </el-menu>
    );
  },
  methods: {
    createMenu: function(h, navItems, previous) {
      return navItems.map(item => {
        const path = previous + "/" + item.path;
        const icon = item.icon ? item.icon : "document";
        if (Array.isArray(item.content)) {
          return (
            <el-submenu index={path}>
              <template slot="title">
                <i class={"el-icon-" + icon} />
                <span>{item.alias}</span>
              </template>
              {this.createMenu(h, item.content, path)}
            </el-submenu>
          );
        } else {
          return (
            <el-menu-item index={path}>
              <i class={"el-icon-" + icon} />
              <span>{item.alias}</span>
            </el-menu-item>
          );
        }
      });
    }
  },
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