<script>
export default {
  name: "Table",
  props: ["tableConfig"],
  data: () => ({}),
  render(h) {
    if (!this.tableConfig) {
      this.showMessage("can not find tableConfig", "warning");
      return;
    }
    const {
      className,
      stripe,
      border,
      columnData,
      bodyData
    } = this.tableConfig;
    if (!columnData) {
      this.showMessage("can not find columnData in tableConfig", "warning");
      return;
    }
    return (
      <el-table
        class={className ? className : ""}
        data={bodyData ? bodyData : []}
        stripe={stripe ? stripe : false}
        border={border ? border : false}
      >
        {this.createTableColumn(h, columnData)}
      </el-table>
    );
  },
  methods: {
    showMessage: function(message, type) {
      this.$message({
        message: message,
        type: type,
        center: true,
        duration: 2000
      });
    },
    createTableColumn: function(h, columnData) {
      return columnData.map(item => {
        const { prop, label, align } = item;
        return (
          <el-table-column
            prop={prop ? prop : ""}
            label={label ? label : ""}
            align={align ? align : "left"}
          />
        );
      });
    }
  }
};
</script>