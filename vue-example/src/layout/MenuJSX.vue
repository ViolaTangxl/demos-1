<script>
export default {
  name: "MenuJSX",
  props: ["isCollapse", "navConfig"],
  data() {
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
              <el-menu-item-group>
                {this.createMenu(h, item.content, path)}
              </el-menu-item-group>
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