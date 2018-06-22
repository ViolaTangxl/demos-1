// 引入components
import VuxPageOne from "@/components/VuxPageOne"
import VuxPageTwo from "@/components/VuxPageTwo"

const navConfig = [{
  path: "group1",
  name: "group1",
  alias: "Menu Group1",
  icon: "menu",
  content: [{
    path: "page1",
    name: "page1",
    alias: "Vux Page1",
    icon: "goods",
    content: VuxPageOne
  }, {
    path: "page2",
    name: "page2",
    alias: "Vux Page2",
    icon: "goods",
    content: VuxPageTwo
  }]
}];

export default navConfig;