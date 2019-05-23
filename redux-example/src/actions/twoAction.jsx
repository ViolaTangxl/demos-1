// 加一
export const PAGE_TWO_ADD_ONE = "PAGE_TWO_ADD_ONE";
// 减一
export const PAGE_TWO_REDUCE_ONE = "PAGE_TWO_REDUCE_ONE";
// 改变loading值
export const LOADING_TWO_CHANGE = "LOADING_TWO_CHANGE";

export function addOne() {
  return {
    type: PAGE_TWO_ADD_ONE,
    payload: "page two add one"
  }
}

export function reduceOne() {
  return {
    type: PAGE_TWO_REDUCE_ONE,
    payload: "page two reduce one"
  }
}

export function loadingChange(isShow) {
  return {
    type: LOADING_TWO_CHANGE,
    payload: isShow
  };
}