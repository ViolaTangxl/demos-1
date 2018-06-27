<script>
/**
 * File name: UserTable.vue
 * Description: User info table component
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

export default {
  name: "UserTable",
  props: ["userData", "columnData"],
  data: function() {
    return {};
  },
  render: function(h) {
    return (
      <div class="user-table">
        <el-table
          data={this.userData}
          height="100%"
          border
          row-class-name={this.getRowClass}
        >
          {this.createTableColumn(h)}
        </el-table>
      </div>
    );
  },
  methods: {
    getRowClass({ rowIndex }) {
      let rowClass = "";
      if (rowIndex % 2 === 1) {
        rowClass = "row-success";
      }
      return rowClass;
    },
    createTableColumn(h) {
      if (this.columnData.length === 0) {
        return null;
      }
      return this.columnData.map(item => {
        return (
          <el-table-column
            prop={item.prop}
            label={item.label}
            width={item.width}
            align="center"
            header-align="center"
            formatter={
              item.prop === "state"
                ? this.getState
                : (row, column, cellValue, index) => cellValue
            }
          />
        );
      });
    },
    getState(row, column, cellValue, index) {
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
    }
  }
};
</script>

<style>
/* 引入UserTable样式 */
@import url("./UserTable.css");
</style>