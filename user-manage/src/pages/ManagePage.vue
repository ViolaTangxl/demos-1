<template>
  <div class="manage-page">
    <div class="head-container">
      <span class="head-title">用户管理</span>
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

// 导入模拟的用户数据
import { userData } from "@/config/userMana";
// 导入表格头数据
import { columnData } from "@/config/userManaColumn";
// 导入UserManage组件
import UserManage from "@/components/UserManage";

export default {
  name: "ManagePage",
  mounted: function() {
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
      console.log("新建用户");
    }
  },
  components: {
    UserManage
  }
};
</script>

<style scoped>
/* 引入ManagePage样式 */
@import url("./ManagePage.css");
</style>