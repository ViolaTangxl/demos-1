<!-- note: 在vue中使用render函数时，要把<template>标签里的东西全部注释掉，render函数才能生效 -->
<script>
// 引入vuex相关方法
import { mapState, mapActions, mapGetters } from "vuex";

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
        active-text-color="#CCFF00"
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
          let disabled = false;
          if (item.limit && !this.isadmin) {
            disabled = true;
          }
          return (
            <el-menu-item index={path} disabled={disabled}>
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
    },
    ...mapState(["isadmin"])
  }
};
</script>

<style>
@import url("./Menu.css");
</style>