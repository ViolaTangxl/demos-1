<script>
/**
 * File name: UserInfo.vue
 * Description: User info table component
 * Auther: Zhazha jiayizhen
 * Create Date: 2018-06-25
 */

// 引入mapState，mapMutations和mapActions
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "UserInfo",
  props: ["userData", "columnData", "selectedUser", "dateRange"],
  data: function() {
    return {
      tableHeight: "100%"
    };
  },
  mounted: async function() {
    await this.simulateShowOverlay();
    this.setUserData({ userData: this.userData });
    this.setFilterData({ filterData: this.userData });
  },
  render: function(h) {
    return (
      <div
        class="user-table"
        v-loading={this.loading}
        element-loading-text="玩儿命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.6)"
      >
        <el-table
          data={this.filterData}
          border
          style={"height: " + this.tableHeight}
          row-class-name={this.getRowClass}
        >
          {this.createTableColumn(h)}
        </el-table>
      </div>
    );
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
    },
    /**
     * 监听dateRange
     */
    dateRange: function() {
      if (!this.dateRange || this.dateRange.length !== 2) {
        this.setFilterData({ filterData: this.userData });
        this.tableHeight = "100%";
        return;
      }
      const startTm = this.dateRange[0].getTime();
      const endTm = this.dateRange[1].getTime();
      this.setFilterData({
        filterData: this.userData.filter(item => {
          const dateMark = item.time.split("-");
          const date = new Date(
            parseInt(dateMark[0]),
            parseInt(dateMark[1]) - 1,
            parseInt(dateMark[2])
          );
          if (date.getTime() >= startTm && date.getTime() <= endTm) {
            return item;
          }
        })
      });
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
              return this.formatColumnContent(item, cellValue);
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
        case "state":
          filters = [{ value: 0, text: "在职" }, { value: 1, text: "离职" }];
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
        case "state":
          filterMethod = this.filterState;
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
     * 执行过滤状态操作
     */
    filterState(value, row) {
      let isShow = false;
      if (row.state === value) {
        isShow = true;
      }
      return isShow;
    },
    ...mapMutations("UserInfo", ["setUserData", "setFilterData"]),
    ...mapActions("UserInfo", ["simulateShowOverlay", "filtUserBySelect"])
  },
  computed: {
    ...mapState("UserInfo", ["loading", "filterData"])
  }
};
</script>

<style>
/* 引入UserTable样式 */
@import url("./UserInfo.css");
</style>