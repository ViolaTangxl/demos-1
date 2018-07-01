<template>
  <div class="manage-page">
    <div class="head-container">
      <span class="head-title">用户管理</span>
      <div class="head-control">
      </div>
    </div>
    <div class="table-container">
      <UserManage />
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

// 导入UserInfo组件
import UserManage from "@/components/UserManage";

export default {
  name: "ManagePage",
  data: function() {
    return {};
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