<template>
  <div class="elements-page"
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
                       v-bind:loading="loadingBtn.isLoading">{{loadingBtn.text}}</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../plugins/waterprint";

export default {
  name: "Elements",
  data: () => ({
    count: 0,
    loading: false,
    loadingBtn: {
      isLoading: false,
      text: "加载按钮"
    },
    wsStyle: waterPrint({
      username: "jiayizhen page5"
    })
  }),
  methods: {
    controlOverlayer: function(isShow) {
      this.loading = isShow;
    }
  }
};
</script>

<style>
.elements-page {
  width: 100%;
  height: 100%;
}

.elements-page .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}

.elements-page .elements-container {
  width: 100%;
  height: calc(100% - 30px);
}

.elements-page .elements-container .element-item {
  width: 96%;
  position: relative;
  left: 2%;
  margin-top: 10px;
}

.elements-page .element-item .item-title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}

.elements-page .element-item .item-container {
  width: 100%;
  position: relative;
}
</style>