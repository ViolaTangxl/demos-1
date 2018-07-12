<!-- note: 在vue中使用render函数时，要把<template>标签里的东西全部注释掉，render函数才能生效 -->
<script>
/**
 * File name: Menu.vue
 * Description: Left nav menu component
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

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
        background-color={this.newState.backgroundColor}
        text-color="#fff"
        active-text-color={this.newState.frontColor}
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
                <i
                  class={"el-icon-" + icon}
                  style={{ color: this.newState.frontColor }}
                />
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
              <i
                class={"el-icon-" + icon}
                style={{ color: this.newState.frontColor }}
              />
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
    ...mapState(["isadmin"]),
    ...mapState("Custom", ["newState"])
  }
};
</script>

<style>
@import url("./Menu.css");
</style>