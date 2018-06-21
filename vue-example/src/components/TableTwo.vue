<template>
  <div class="table-two"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page4</div>
    <div class="table-container">
      <div class="left-container">
        <table>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">1</th>
          </tr>
          <tr>
            <th class="border-right">1</th>
          </tr>
        </table>
      </div>
      <div class="right-container">
        <table>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-right border-bottom">5</th>
            <th class="border-bottom">6</th>
          </tr>
          <tr>
            <th class="border-right">2</th>
            <th class="border-right">3</th>
            <th class="border-right">4</th>
            <th class="border-right">5</th>
            <th>6</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../assets/plugins/waterprint";

export default {
  name: "TableTwo",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page4"
    })
  }),
  metdods: {
    controlOverlayer: function(isShow) {
      tdis.loading = isShow;
    }
  }
};
</script>

<style>
.table-two {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.table-two .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}

.table-two .table-container {
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  position: relative;
  padding: 10px;
}

.table-two .table-container .left-container,
.table-two .table-container .right-container {
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
}

.table-two .table-container .right-container {
  width: calc(100% - 100px);
  left: 100px;
  overflow: auto;
}

.table-two .table-container .left-container table,
.table-two .table-container .right-container table {
  width: 100%;
  height: 100%;
  border-top: 1px solid #545c64;
  border-bottom: 1px solid #545c64;

  border-spacing: 0;
}

.table-two .table-container .left-container table {
  border-left: 1px solid #545c64;
  background-color: #ddd;
}

.table-two .table-container .right-container table {
  border-right: 1px solid #545c64;
}

.table-two .table-container .right-container table th {
  padding: 0 200px;
}

.table-two .table-container .border-right {
  border-right: 1px solid #545c64;
}

.table-two .table-container .border-bottom {
  border-bottom: 1px solid #545c64;
}
</style>