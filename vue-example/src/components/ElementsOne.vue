<template>
  <div class="elements-page-none"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page5</div>
    <div class="elements-container">
      <!-- 按钮 -->
      <div class="element-item">
        <div class="item-title">按钮:</div>
        <div class="item-container">
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary"
                       plain>主要按钮</el-button>
            <el-button type="success"
                       round>成功按钮</el-button>
            <el-button type="info"
                       icon="el-icon-message"
                       circle></el-button>
            <el-button type="warning"
                       disabled>警告按钮（禁用）</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button-group>
              <el-button type="primary"
                         icon="el-icon-arrow-left">上一页</el-button>
              <el-button type="primary">下一页
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </el-button-group>
            <el-button type="success"
                       v-on:click="loadingBtnClick"
                       v-bind:loading="loadingBtn.isLoading">{{loadingBtn.text}}</el-button>
          </el-row>
        </div>
      </div>
      <!-- 表格 -->
      <div class="element-item">
        <div class="item-title">表格:</div>
        <div class="item-container">
          <Table v-bind:tableConfig="tableConfig" />
        </div>
      </div>
      <!-- Message -->
      <div class="element-item">
        <div class="item-title">Message按钮:</div>
        <div class="item-container">
          <el-button type="success"
                     v-on:click="showMessage('success', '成功message', true)">成功</el-button>
          <el-button type="info"
                     v-on:click="showMessage('info', '消息message', true)">消息</el-button>
          <el-button type="warning"
                     v-on:click="showMessage('warning', '警告message', true)">警告</el-button>
          <el-button type="danger"
                     v-on:click="showMessage('error', '错误message', true)">错误</el-button>
        </div>
      </div>
      <!-- MessageBox弹窗 -->
      <div class="element-item">
        <div class="item-title">MessageBox弹窗:</div>
        <div class="item-container">
          <el-button v-on:click="showMessageBox">显示MessageBox弹窗</el-button>
        </div>
      </div>
      <!-- Notification通知 -->
      <div class="element-item">
        <div class="item-title">Notification通知:</div>
        <div class="item-container">
          <el-button type="success"
                     v-on:click="showNotification('success', '成功notification')">成功</el-button>
          <el-button type="info"
                     v-on:click="showNotification('info', '消息notification')">消息</el-button>
          <el-button type="warning"
                     v-on:click="showNotification('warning', '警告notification')">警告</el-button>
          <el-button type="danger"
                     v-on:click="showNotification('error', '错误notification')">错误</el-button>
        </div>
      </div>
      <!-- 对话框 -->
      <div class="element-item">
        <div class="item-title">对话框:</div>
        <div class="item-container">
          <el-button type="info"
                     v-on:click="showDialog">显示对话框</el-button>
          <el-dialog title="对话框"
                     v-bind:visible.sync="dialogVisible"
                     width="30%"
                     v-bind:before-close="handleDialogClose">
            <span>这是一个对话框</span>
            <span slot="footer"
                  class="dialog-footer">
              <el-button v-on:click="handleDialogClose">取消</el-button>
              <el-button type="primary"
                         v-on:click="handleDialogClose">确定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";
// 导入表格
import Table from "../tools/Table";

export default {
  name: "ElementsOne",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page5"
    }),
    loadingBtn: {
      isLoading: false,
      text: "加载按钮"
    },
    tableConfig: {
      // 类名
      className: "table",
      // 是否显示斑马线
      stripe: true,
      // 是否显示边框
      border: true,
      // 列表头数据
      columnData: [
        {
          prop: "date",
          label: "日期",
          align: "center"
        },
        {
          prop: "name",
          label: "姓名",
          align: "center"
        },
        {
          prop: "address",
          label: "地址",
          align: "center"
        }
      ],
      // 表格体数据
      bodyData: [
        {
          date: "2018-06-19",
          name: "×××××",
          address: "×××省×××市×××路1号"
        },
        {
          date: "2018-06-19",
          name: "×××××",
          address: "×××省×××市×××路2号"
        },
        {
          date: "2018-06-19",
          name: "×××××",
          address: "×××省×××市×××路3号"
        },
        {
          date: "2018-06-19",
          name: "×××××",
          address: "×××省×××市×××路4号"
        },
        {
          date: "2018-06-19",
          name: "×××××",
          address: "×××省×××市×××路5号"
        }
      ]
    },
    dialogVisible: false
  }),
  methods: {
    loadingBtnClick: function() {
      this.loadingBtn = {
        isLoading: true,
        text: "加载中..."
      };
      const timeOut = setTimeout(() => {
        this.loadingBtn = {
          isLoading: false,
          text: "加载按钮"
        };
        clearTimeout(timeOut);
      }, 1000);
    },
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    },
    showMessage: function(type, message, showClose) {
      this.$message({
        message: message,
        type: type,
        center: true,
        showClose: showClose,
        duration: 2000
      });
    },
    showMessageBox: function() {
      this.$confirm("是否确认该操作？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.showMessage("success", "操作成功", true);
        })
        .catch(() => {
          this.showMessage("info", "取消操作", true);
        });
    },
    showNotification: function(type, message) {
      this.$notify({
        title: "提示",
        message: message,
        type: type,
        duration: 2000
      });
    },
    handleDialogClose: function(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          this.hideDialog();
        })
        .catch(() => {
          this.hideDialog();
        });
    },
    showDialog: function() {
      this.dialogVisible = true;
    },
    hideDialog: function() {
      this.dialogVisible = false;
      this.showMessage("success", "对话框关闭", true);
    }
  },
  components: { Table }
};
</script>

<style>
.elements-page-none {
  width: 100%;
  height: auto;
}

.elements-page-none .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}

.elements-page-none .elements-container {
  width: 100%;
  height: calc(100% - 30px);
}

.elements-page-none .elements-container .element-item {
  width: 96%;
  position: relative;
  left: 2%;
  margin-top: 10px;
}

.elements-page-none .element-item .item-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}

.elements-page-none .element-item .item-container {
  width: 100%;
  position: relative;
  margin-top: 10px;
}

.elements-page-none .element-item .item-container .table {
  width: 100%;
}
</style>