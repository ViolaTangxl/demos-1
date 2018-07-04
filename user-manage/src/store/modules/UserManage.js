// 导入模拟的用户数据
import {
  userData
} from "@/config/userMana";

const UserManage = {
  namespaced: true,
  state: {
    loading: false,
    filterData: userData,
    userData: userData,
  },
};

export default UserManage;