<template>
  <div class="user-manage">
    <el-table v-bind:data="filterData"
              border
              v-bind:style="{height: tableHeight}"
              v-bind:row-class-name="getRowClass">
      <template v-for="item in columnData">
        <el-table-column align="center"
                         header-align="center"
                         v-bind:key="item.prop"
                         v-bind:prop="item.prop"
                         v-bind:label="item.label"
                         v-bind:width="item.width"
                         filter-placement="bottom"
                         v-bind:filters="getFilters(item)"
                         v-bind:filter-method="getFilterMethod(item)">
          <template slot-scope="scope">
            <span v-if="item.prop==='operate'">
              <el-button size="mini"
                         v-on:click="viewUserInfo(scope.row)">查看</el-button>
              <el-button size="mini"
                         type="success"
                         v-on:click="modifyUserInfo(scope.row)">编辑</el-button>
              <el-popover placement="top"
                          width="150"
                          title="提示"
                          v-model="scope.row.deletePopShow">
                <p class="pop-info">确认删除？</p>
                <div class="pop-control">
                  <el-button size="mini"
                             v-on:click="scope.row.deletePopShow = false">取消</el-button>
                  <el-button type="primary"
                             size="mini"
                             v-on:click="confirmDelete(scope.row)">确定</el-button>
                </div>
                <el-button size="mini"
                           type="danger"
                           slot="reference"
                           v-on:click="scope.row.deletePopShow = true">删除</el-button>
              </el-popover>
            </span>
            <span v-else>
              {{formatColumnContent(item, scope.row[item.prop])}}
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-dialog v-bind:title="dialogType === 'view' ? '查看用户' : '编辑用户'"
               width="400px"
               v-bind:visible="dialogVisible"
               v-bind:close-on-click-modal="false"
               v-bind:close-on-press-escape="false"
               v-bind:show-close="false">
      <el-form v-bind:model="dialogForm">
        <el-form-item label="活动名称"
                      v-bind:label-width="formLabelWidth">
          <el-input v-model="dialogForm.name"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域"
                      v-bind:label-width="formLabelWidth">
          <el-select class="dialog-select"
                     v-model="dialogForm.region"
                     placeholder="请选择活动区域">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="mini"
                   v-on:click="dialogVisible = false">取消</el-button>
        <el-button size="mini"
                   type="primary"
                   v-on:click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
/**
 * File name: UserManage.vue
 * Description: User manage table component
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-07-01
 */

// 引入mapState，mapMutations和mapActions
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "UserManage",
  props: ["userData", "columnData", "selectedUser"],
  data: function() {
    return {
      filterData: [],
      tableHeight: "100%",
      dialogType: "view",
      dialogVisible: false,
      dialogForm: {
        name: "测试",
        region: "shanghai"
      },
      formLabelWidth: "100px"
    };
  },
  mounted: function() {
    this.filterData = this.userData;
  },
  watch: {
    /**
     * 监听selectedUser
     */
    selectedUser: async function() {
      if (!this.selectedUser) {
        this.filterData = this.userData;
        this.tableHeight = "100%";
        return;
      }
      this.filterData = this.userData.filter(
        item => item.name === this.selectedUser
      );
      this.tableHeight = "auto";
    }
  },
  methods: {
    /**
     * 获取表格行的class
     */
    getRowClass({ rowIndex }) {
      let rowClass = "";
      if (rowIndex % 2 === 1) {
        rowClass = "row-success";
      }
      return rowClass;
    },
    /**
     * 格式化表格列的内容
     */
    formatColumnContent(item, cellValue) {
      let formatContent = "";
      switch (item.prop) {
        case "sex":
          formatContent = this.getSex(cellValue);
          break;
        case "state":
          formatContent = this.getState(cellValue);
          break;
        default:
          formatContent = cellValue;
          break;
      }
      return formatContent;
    },
    /**
     * 格式化性别信息
     */
    getSex(cellValue) {
      return cellValue === "m" ? "男" : "女";
    },
    /**
     * 格式化状态信息
     */
    getState(cellValue) {
      let state = "";
      switch (cellValue) {
        case 0:
          state = "在职";
          break;
        case 1:
          state = "离职";
          break;
        default:
          state = "在职";
          break;
      }
      return state;
    },
    /**
     * 获取过滤的数组
     */
    getFilters(item) {
      let filters = null;
      switch (item.prop) {
        case "sex":
          filters = [{ value: "m", text: "男" }, { value: "f", text: "女" }];
          break;
      }
      return filters;
    },
    /**
     * 获取过滤的方法
     */
    getFilterMethod(item) {
      let filterMethod = null;
      switch (item.prop) {
        case "sex":
          filterMethod = this.filterSex;
          break;
      }
      return filterMethod;
    },
    /**
     * 执行过滤性别操作
     */
    filterSex(value, row) {
      let isShow = false;
      if (row.sex === value) {
        isShow = true;
      }
      return isShow;
    },
    /**
     * 查看用户信息
     */
    viewUserInfo(row) {
      this.dialogType = "view";
      this.dialogVisible = true;
    },
    /**
     * 修改用户信息
     */
    modifyUserInfo(row) {
      this.dialogType = "edit";
      this.dialogVisible = true;
    },
    /**
     * 确认删除用户
     */
    confirmDelete(row) {
      row.deletePopShow = false;
      this.userData.forEach((item, index) => {
        if (item.index === row.index) {
          this.userData.splice(index, 1);
        }
      });
      // 重新编号
      this.userData.forEach((item, index) => {
        item.index = index + 1;
      });
      this.filterData = this.userData;
    }
  }
};
</script>

<style>
/* 引入UserTable样式 */
@import url("./UserManage.css");
</style>