<script>
export default {
  name: "Table",
  props: ["tableConfig"],
  data: () => ({
    tableData: [
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }
    ]
  }),
  render() {
    return (
      <el-table class="table" data={this.tableData} stripe>
        <el-table-column prop="date" label="日期" align="center" />
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="address" label="地址" align="center" />
      </el-table>
    );
  }
};
</script>