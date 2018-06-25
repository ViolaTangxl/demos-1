<!-- note: 在vue中使用render函数时，要把<template>标签里的东西全部注释掉，render函数才能生效 -->
<script>
export default {
  name: "Menu",
  props: ["isCollapse", "navConfig"],
  data: function() {
    return {};
  },
  render(h) {
    return (
      <el-menu
        class="el-menu-vertical-demo layout-menu"
        default-active={this.matchActiveRouter}
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#C0C4CC"
        collapse={this.isCollapse}
        router
      >
        {this.createMenu(h, this.navConfig, "")}
      </el-menu>
    );
  },
  methods: {
    createMenu: function(h, navItems, previous) {
      if (navItems.length === 0) {
        return;
      }
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

<style scoped>
@import url("./Menu.css");
</style>