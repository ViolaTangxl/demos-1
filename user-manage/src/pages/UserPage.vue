<template>
  <div class="user-page">
    <div class="head-container">
      <span class="head-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-bind:to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户</el-breadcrumb-item>
          <el-breadcrumb-item>用户信息表</el-breadcrumb-item>
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
          <el-col :span="6">
            <!-- 时间选择器 -->
            <el-date-picker v-model="dateRange"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="table-container">
      <UserInfo v-bind:userData="userData"
                v-bind:columnData="columnData"
                v-bind:selectedUser="selectedUser"
                v-bind:dateRange="dateRange" />
    </div>
  </div>
</template>

<script>
/**
 * File name: UserPage.vue
 * Description: User info page
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 导入模拟的用户数据
import { userData } from "@/config/userInfo";
// 导入表格头数据
import { columnData } from "@/config/userInfoColumn";
// 导入UserInfo组件
import UserInfo from "@/components/UserInfo";
import { mapState } from "vuex";

export default {
  name: "UserPage",
  mounted: function() {
    console.log(this.routePath);
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
      selectedUser: "",
      dateRange: null
    };
  },
  methods: {
    /**
     * 查询用户
     */
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
    /**
     * 选择用户
     */
    selectUser(item) {
      this.selectedUser = item.name;
    }
  },
  components: {
    UserInfo
  },
  computed: {
    ...mapState(["routePath"])
  }
};
</script>

<style scoped>
/* 引入UserPage样式 */
@import url("./UserPage.css");
</style>