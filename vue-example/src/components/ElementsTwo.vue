<template>
  <div class="elements-page-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page6</div>
    <div class="elements-container">
      <!-- 嵌套Dialog -->
      <div class="element-item">
        <div class="item-title">嵌套Dialog:</div>
        <div class="item-container">
          <el-button type="info"
                     v-on:click="showOuterDialog">显示外层对话框</el-button>
          <el-dialog width="30%"
                     title="外层Dialog"
                     v-bind:visible.sync="outerDialogVisible"
                     v-bind:close-on-click-modal="false"
                     v-bind:close-on-press-escape="false">
            <el-dialog width="30%"
                       title="内层Dialog"
                       v-bind:visible.sync="innerDialogVisible"
                       v-bind:close-on-click-modal="false"
                       v-bind:close-on-press-escape="false"
                       append-to-body>
            </el-dialog>
            <div slot="footer"
                 class="dialog-footer">
              <el-button v-on:click="outerDialogVisible = false">取消</el-button>
              <el-button type="primary"
                         v-on:click="innerDialogVisible = true">打开内层Dialog</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
      <!-- Tooltip文字提示 -->
      <div class="element-item">
        <div class="item-title">Tooltip文字提示:</div>
        <div class="item-container">
          <el-tooltip content="顶部居中"
                      placement="top">
            <el-button>暗色</el-button>
          </el-tooltip>
          <el-tooltip content="底部居中"
                      placement="bottom"
                      effect="light">
            <el-button>亮色</el-button>
          </el-tooltip>
          <el-tooltip content="底部居中"
                      placement="bottom"
                      v-bind:disabled="tooltipDisable">
            <el-button v-on:click="changeTooltipDisabled">{{ tooltipDisable ? "单击启用" : "单击停用" }}</el-button>
          </el-tooltip>
        </div>
      </div>
      <!-- 卡片 -->
      <div class="element-item">
        <div class="item-title">卡片:</div>
        <div class="item-container">
          <el-row>
            <el-col v-bind:span="8"
                    v-for="(item, index) in imgList"
                    v-bind:key="index"
                    v-bind:offset="2">
              <el-card class="element-card"
                       v-bind:body-style="{ padding: '0px' }">
                <div class="image-container">
                  <img v-bind:src="item.img"
                       class="image">
                </div>
                <div class="info-container">
                  <span>{{ item.name }}</span>
                  <div class="bottom">
                    <time class="time">{{ getCurrentTime }}</time>
                    <el-button type="text"
                               class="button">查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 走马灯 -->
      <div class="element-item">
        <div class="item-title">走马灯:</div>
        <div class="item-container">
          <div class="element-carousel">
            <el-carousel :interval="5000"
                         type="card"
                         height="calc(100% - 26px)">
              <el-carousel-item v-for="(item, index) in imgList"
                                :key="index">
                <img class="image"
                     v-bind:src="item.img">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../assets/plugins/waterprint";

export default {
  name: "ElementsTwo",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page6"
    }),
    outerDialogVisible: false,
    innerDialogVisible: false,
    tooltipDisable: false,
    imgList: [
      { name: "image1", img: require("../assets/img/image1.jpg") },
      { name: "image2", img: require("../assets/img/image2.jpg") },
      { name: "image3", img: require("../assets/img/image3.jpg") },
      { name: "image4", img: require("../assets/img/image4.jpg") }
    ]
  }),
  methods: {
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    },
    showOuterDialog: function() {
      this.outerDialogVisible = true;
    },
    hideOuterDialog: function() {
      this.outerDialogVisible = false;
    },
    changeTooltipDisabled: function() {
      this.tooltipDisable = !this.tooltipDisable;
    }
  },
  computed: {
    getCurrentTime: function() {
      let time = "",
        date = new Date();
      time =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      return time;
    }
  },
  components: {}
};
</script>

<style>
.elements-page-two {
  width: 100%;
  height: auto;
  min-height: 100%;
}

.elements-page-two .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}

.elements-page-two .elements-container {
  width: 100%;
  height: calc(100% - 30px);
}

.elements-page-two .elements-container .element-item {
  width: 96%;
  position: relative;
  left: 2%;
  margin-top: 10px;
}

.elements-page-two .element-item .item-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}

.elements-page-two .element-item .item-container {
  width: 100%;
  position: relative;
  margin-top: 10px;
}

.elements-page-two .element-card {
  width: 100%;
  position: relative;
}

.elements-page-two .element-card .image-container {
  width: 100%;
  min-height: 5rem;
}

.elements-page-two .element-card .image-container .image {
  width: 100%;
}

.elements-page-two .element-card .info-container {
  padding: 10px;
}

.elements-page-two .element-card .info-container .time {
  font-size: 13px;
  color: #999;
}

.elements-page-two .element-card .info-container .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.elements-page-two .element-card .info-container .button {
  padding: 0;
  float: right;
}

.elements-page-two .element-item .item-container .element-carousel {
  width: 100%;
  height: 300px;
  position: relative;
}

.elements-page-two .element-carousel .el-carousel--card {
  height: 100%;
}

.elements-page-two .element-carousel .image {
  height: 100%;
}
</style>