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
                             placeholder="搜索用户"></el-autocomplete>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="table-container">
      <UserManage v-bind:userData="userData"
                  v-bind:columnData="columnData" />
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
import { columnData, userData } from "@/config/userInfo";
// 导入UserManage组件
import UserManage from "@/components/UserManage";

export default {
  name: "ManagePage",
  data: function() {
    return {
      columnData: columnData,
      userData: userData
    };
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