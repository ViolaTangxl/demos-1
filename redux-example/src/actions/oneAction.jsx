// 加一
export const PAGE_ONE_ADD_ONE = "PAGE_ONE_ADD_ONE";
// 减一
export const PAGE_ONE_REDUCE_ONE = "PAGE_ONE_REDUCE_ONE";
// 改变loading值
export const LOADING_ONE_CHANGE = "LOADING_ONE_CHANGE";

// export function addOne() {
//     return {
//         type: PAGE_ONE_ADD_ONE,
//         payload: "page one add one"
//     }
// }

export async function addOne() {
  const response = await waitSomeTime();
  if (response.status === 200) {
    return {
      type: PAGE_ONE_ADD_ONE,
      payload: "page one add one"
    };
  }
}

// 异步方法
function waitSomeTime() {
  return new Promise(function (resolve, reject) {
    const timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      resolve({
        status: 200
      });
    }, 1000);
  });
}

export function reduceOne() {
  return {
    type: PAGE_ONE_REDUCE_ONE,
    payload: "page one reduce one"
  };
}

export function loadingChange(isShow) {
  return {
    type: LOADING_ONE_CHANGE,
    payload: isShow
  };
}
// // 添加到cart
// export const ADD_TO_CART = "ADD_TO_CART";
// // 更新cart
// export const UPDATE_CART = "UPDATE_CART";
// // 删除cart
// export const DELETE_FROM_CART = "DELETE_FROM_CART";

// export function addToCart(product, quantity, unitCost) {
//     return {
//         type: ADD_TO_CART,
//         payload: { product, quantity, unitCost }
//     }
// }

// export function updateCart(product, quantity, unitCost) {
//     return {
//         type: UPDATE_CART,
//         payload: { product, quantity, unitCost }
//     }
// }

// export function deleteFromCart(product) {
//     return {
//         type: DELETE_FROM_CART,
//         payload: { product }
//     }
// }