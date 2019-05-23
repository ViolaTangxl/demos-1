<template>
  <div class="manage-page">
    <div class="head-container">
      <span class="head-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-bind:to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in fullPath"
                              v-bind:key="index">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
      </span>
      <div class="head-control">
        <!-- 控制器 -->
        <!-- 栅格布局 -->
        <el-row :gutter="10">
          <el-col :span="6">
            <!-- 搜索 -->
            <el-autocomplete class="user-search-input"
                             placeholder="搜索用户"
                             v-model="userSearchInput"
                             v-bind:fetch-suggestions="queryUser"
                             v-on:select="selectUser"></el-autocomplete>
          </el-col>
          <el-col :span="18"
                  class="create-btn-container">
            <!-- 新建用户 -->
            <el-button v-on:click="createUser">新建用户</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="table-container">
      <UserManage v-bind:userData="userData"
                  v-bind:columnData="columnData"
                  v-bind:selectedUser="selectedUser" />
    </div>
  </div>
</template>

<script>
/**
 * File name: ManagePage.vue
 * Description: User manage page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-07-01
 */

// 引入mapState，mapMutations和mapActions
import { mapState, mapMutations, mapActions } from "vuex";

// 导入模拟的用户数据
import { userData } from "@/config/userMana";
// 导入表格头数据
import { columnData } from "@/config/userManaColumn";
// 导入UserManage组件
import UserManage from "@/components/UserManage";

export default {
  name: "ManagePage",
  mounted: function() {
    // 生成面包屑导航
    const match = this.$router.options.routes.find(
      item => item.path === this.routePath
    );
    this.fullPath = match ? match.fullpath : [];
    // 模拟产生autocomplete的数据
    this.userData.map(item => {
      this.autoCompleteData.push({
        value: item.name + " - " + item.job,
        name: item.name
      });
    });
  },
  data: function() {
    return {
      fullPath: [],
      userSearchInput: "",
      columnData: columnData,
      userData: userData,
      autoCompleteData: [],
      selectedUser: ""
    };
  },
  methods: {
    queryUser(queryString, callback) {
      queryString = queryString.trim();
      if (!queryString) {
        this.selectedUser = "";
        callback(this.autoCompleteData);
        return;
      }
      const result = this.autoCompleteData.filter(
        item => item.value.indexOf(queryString) !== -1
      );
      callback(result);
    },
    selectUser(item) {
      this.selectedUser = item.name;
    },
    createUser: function() {
      this.showDialog({ type: "create" });
    },
    ...mapMutations("UserManage", ["showDialog"])
  },
  components: {
    UserManage
  },
  computed: {
    ...mapState(["routePath"])
  }
};
</script>

<style scoped>
/* 引入ManagePage样式 */
@import url("./ManagePage.css");
</style>