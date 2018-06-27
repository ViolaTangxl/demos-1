<template>
  <div class="user-page">
    <div class="head-container">
      <span class="head-title">用户信息表</span>
      <div class="head-control">
        <!-- 控制器 -->
        <!-- 栅格布局 -->
        <el-row :gutter="10">
          <el-col :span="6">
            <!-- 搜索 -->
            <el-autocomplete class="user-search-input"
                             placeholder="搜索用户"></el-autocomplete>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="table-container">
      <UserTable v-bind:userData="userData"
                 v-bind:columnData="columnData" />
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
import { columnData, userData } from "@/config/userInfo";
// 导入UserTable组件
import UserTable from "@/components/UserTable";

export default {
  name: "UserPage",
  data: function() {
    return {
      columnData: columnData,
      userData: userData
    };
  },
  components: {
    UserTable
  }
};
</script>

<style scoped>
/* 引入UserPage样式 */
@import url("./UserPage.css");
</style>