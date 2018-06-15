<script>
export default {
  name: "MenuJSX",
  props: ["isCollapse", "navConfig"],
  data() {
    return {};
  },
  render() {
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
        <el-submenu index="/group1">
          <template slot="title">
            <i class="el-icon-location" />
            <span>目录组1</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/group1/page1">页面1</el-menu-item>
            <el-menu-item index="/group1/page2">页面2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    );
  },
  methods: {
    createMenu: function() {
      console.log(this.navConfig);
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