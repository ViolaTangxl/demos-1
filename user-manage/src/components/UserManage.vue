<template>
  <div class="user-manage"
       v-loading="pageLoad"
       element-loading-text="玩儿命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
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
    <el-dialog v-loading="dialogLoad"
               element-loading-text="请稍后..."
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.6)"
               v-bind:title="dialogType === 'view' ? '查看用户' : '编辑用户'"
               width="400px"
               v-bind:visible="dialogVisible"
               v-bind:close-on-click-modal="false"
               v-bind:close-on-press-escape="false"
               v-bind:show-close="false">
      <el-form ref="dialogForm"
               v-bind:model="dialogForm"
               v-bind:rules="formRules">
        <!-- 姓名 -->
        <el-form-item class="dialog-form-item"
                      label="姓名"
                      prop="name"
                      v-bind:label-width="formLabelWidth">
          <el-input v-model="dialogForm.name"
                    v-bind:disabled="formItemDisable"
                    v-bind:clearable="true"></el-input>
        </el-form-item>
        <!-- 年龄 -->
        <el-form-item class="dialog-form-item"
                      label="年龄"
                      prop="age"
                      v-bind:label-width="formLabelWidth">
          <el-input v-model.number="dialogForm.age"
                    v-bind:disabled="formItemDisable"
                    v-bind:clearable="true"></el-input>
        </el-form-item>
        <!-- 住址 -->
        <el-form-item class="dialog-form-item"
                      label="住址"
                      prop="address"
                      v-bind:label-width="formLabelWidth">
          <el-input v-model="dialogForm.address"
                    v-bind:disabled="formItemDisable"
                    v-bind:clearable="true"></el-input>
        </el-form-item>
        <!-- 职位 -->
        <el-form-item class="dialog-form-item"
                      label="职位"
                      prop="job"
                      v-bind:label-width="formLabelWidth">
          <el-input v-model="dialogForm.job"
                    v-bind:disabled="formItemDisable"
                    v-bind:clearable="true"></el-input>
        </el-form-item>
        <!-- 性别 -->
        <el-form-item class="dialog-form-item"
                      label="性别"
                      prop="sex"
                      v-bind:label-width="formLabelWidth">
          <el-select class="dialog-select"
                     v-bind:disabled="formItemDisable"
                     v-model="dialogForm.sex"
                     placeholder="请选择性别">
            <el-option label="男"
                       value="m"></el-option>
            <el-option label="女"
                       value="f"></el-option>
          </el-select>
        </el-form-item>
        <!-- 状态 -->
        <el-form-item class="dialog-form-item"
                      label="状态"
                      prop="state"
                      v-bind:label-width="formLabelWidth">
          <el-select class="dialog-select"
                     v-bind:disabled="formItemDisable"
                     v-model="dialogForm.state"
                     placeholder="请选择就职状态">
            <el-option label="在职"
                       v-bind:value="0"></el-option>
            <el-option label="离职"
                       v-bind:value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="mini"
                   v-on:click="dialogVisible = false">取消</el-button>
        <el-button size="mini"
                   type="primary"
                   v-on:click="confirmViewEdit('dialogForm')">确定</el-button>
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
  mounted: async function() {
    await this.simulateShowPageOverlay();
    this.setUserData({ userData: this.userData });
    this.setFilterData({ filterData: this.userData });
  },
  data: function() {
    return {
      tableHeight: "100%",
      dialogType: "view",
      dialogVisible: false,
      dialogForm: {
        name: "",
        age: 0,
        address: "",
        job: "",
        sex: "",
        state: ""
      },
      formRules: {
        name: [{ required: true, message: "名字不能为空", trigger: "change" }],
        age: [
          { required: true, message: "年龄不能为空", trigger: "change" },
          { type: "number", message: "年龄必须为数字", trigger: "change" }
        ],
        address: [
          { required: true, message: "住址不能为空", trigger: "change" }
        ],
        job: [{ required: true, message: "职位不能为空", trigger: "change" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        state: [
          { required: true, message: "请选择就职状态", trigger: "change" }
        ]
      },
      formLabelWidth: "60px",
      formItemDisable: false
    };
  },
  watch: {
    /**
     * 监听selectedUser
     */
    selectedUser: async function() {
      const result = await this.filtUserBySelect({
        selectedUser: this.selectedUser
      });
      if (result) {
        this.tableHeight = "auto";
      } else {
        this.tableHeight = "100%";
      }
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
      this.dialogForm = { ...this.dialogForm, ...row };
      this.formItemDisable = true;
    },
    /**
     * 修改用户信息
     */
    modifyUserInfo(row) {
      this.dialogType = "edit";
      this.dialogVisible = true;
      this.dialogForm = { ...this.dialogForm, ...row };
      this.formItemDisable = false;
    },
    /**
     * 确认关闭查看/编辑用户对话框
     */
    confirmViewEdit(formName) {
      // 查看
      if (this.dialogType === "view") {
        this.dialogVisible = false;
        return;
      }
      // 编辑
      this.$refs[formName].validate(valid => {
        if (valid) {
          const model = this.$refs[formName].model;
          this.editUser({ model: model }).then(() => {
            this.dialogVisible = false;
            this.showMessage("success", "修改成功", 1500);
          });
        } else {
          this.showMessage("error", "无法进行修改", 1500);
          return;
        }
      });
    },
    /**
     * 确认删除用户
     */
    confirmDelete(row) {
      row.deletePopShow = false;
      this.deleteUser({ row: row }).then(() => {
        this.showMessage("success", "删除成功", 1500);
      });
    },
    /**
     * 显示消息
     */
    showMessage: function(type, message, duration) {
      this.$message({
        type: type,
        message: message,
        center: true,
        duration: duration,
        onClose: true
      });
    },
    ...mapMutations("UserManage", ["setUserData", "setFilterData"]),
    ...mapActions("UserManage", [
      "simulateShowPageOverlay",
      "simulateShowDialogOverlay",
      "filtUserBySelect",
      "editUser",
      "deleteUser"
    ])
  },
  computed: {
    ...mapState("UserManage", ["pageLoad", "dialogLoad", "filterData"])
  }
};
</script>

<style>
/* 引入UserTable样式 */
@import url("./UserManage.css");
</style>