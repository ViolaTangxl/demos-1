<template>
  <div class="table-one"
       v-bind:style="wsStyle"
       v-loading="loading">
    <div class="title-container">这是page3</div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="border-right border-bottom">1</th>
            <th class="border-right border-bottom">2</th>
            <th class="border-right border-bottom">3</th>
            <th class="border-right border-bottom">4</th>
            <th class="border-bottom">5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right border-bottom">1</td>
            <td class="border-right border-bottom">2</td>
            <td class="border-right border-bottom">3</td>
            <td class="border-right border-bottom">4</td>
            <td class="border-bottom">5</td>
          </tr>
          <tr>
            <td class="border-right">1</td>
            <td class="border-right">2</td>
            <td class="border-right">3</td>
            <td class="border-right">4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入水印插件
import { waterPrint } from "../assistes/plugins/waterprint";

export default {
  name: "TableOne",
  data: () => ({
    count: 0,
    loading: false,
    wsStyle: waterPrint({
      username: "jiayizhen page3"
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
.table-one {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.table-one .title-container {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
}
.table-one .table-container {
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  padding: 10px;
}
.table-one .table-container table {
  width: 100%;
  height: 100%;
  border: 1px solid #545c64;
  border-spacing: 0;
}

.table-one .table-container .border-right {
  border-right: 1px solid #545c64;
}

.table-one .table-container .border-bottom {
  border-bottom: 1px solid #545c64;
}

.table-one .table-container thead {
  width: 100%;
  height: 50px;
  table-layout: fixed;
  display: table;
}

.table-one .table-container thead tr {
  background-color: #ddd;
}

.table-one .table-container tbody {
  width: 100%;
  height: calc(100% - 50px);
  position: relative;
  overflow-y: auto;
  display: block;
}

.table-one .table-container tbody tr {
  width: 100%;
  table-layout: fixed;
  display: table;
}

.table-one .table-container tbody td {
  padding: 25px;
  text-align: center;
}
</style>