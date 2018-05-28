// 加一
export const PAGE_TWO_ADD_ONE = "PAGE_TWO_ADD_ONE";
// 减一
export const PAGE_TWO_REDUCE_ONE = "PAGE_TWO_REDUCE_ONE";

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