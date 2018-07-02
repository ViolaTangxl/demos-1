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
      tableHeight: "100%"
    };
  },
  mounted: function() {
    this.filterData = this.userData;
  },
  render: function(h) {
    return (
      <div class="user-manage">
        <el-table
          data={this.filterData}
          border
          style={"height: " + this.tableHeight}
          row-class-name={this.getRowClass}
        >
          {() => {
            return this.createTableColumn(h);
          }}
        </el-table>
      </div>
    );
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
     * 动态创建表格的列
     */
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
            formatter={(row, column, cellValue, index) => {
              return this.formatColumnContent(item, row, cellValue);
            }}
            filter-placement="bottom"
            filters={this.getFilters(item)}
            filter-method={this.getFilterMethod(item)}
          />
        );
      });
    },
    /**
     * 格式化表格列的内容
     */
    formatColumnContent(item, row, cellValue) {
      let formatContent = "";
      switch (item.prop) {
        case "sex":
          formatContent = this.getSex(cellValue);
          break;
        case "state":
          formatContent = this.getState(cellValue);
          break;
        case "operate":
          formatContent = this.renderOperBtns(row);
          break;
        default:
          formatContent = cellValue;
          break;
      }
      return formatContent;
    },
    /**
     * 创建操作按钮
     */
    renderOperBtns(row) {
      return (
        <el-button-group>
          <el-button size="mini">查看</el-button>
          <el-button size="mini" type="success">
            编辑
          </el-button>
          <el-button size="mini" type="danger">
            删除
          </el-button>
        </el-button-group>
      );
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
    }
  }
};
</script>

<style>
/* 引入UserTable样式 */
@import url("./UserManage.css");
</style>