// 引入components
import VuexPageOne from "@/components/VuexPageOne"
import VuexPageTwo from "@/components/VuexPageTwo"

const navConfig = [{
  path: "group1",
  name: "group1",
  alias: "Menu Group1",
  icon: "menu",
  content: [{
    path: "page1",
    name: "page1",
    alias: "Vuex Page1",
    icon: "goods",
    content: VuexPageOne
  }, {
    path: "page2",
    name: "page2",
    alias: "Vuex Page2",
    icon: "goods",
    content: VuexPageTwo
  }]
}];

export default navConfig;