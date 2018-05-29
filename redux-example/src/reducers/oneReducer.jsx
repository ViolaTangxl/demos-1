// import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from "../actions/oneAction";
import { PAGE_ONE_ADD_ONE, PAGE_ONE_REDUCE_ONE, LOADING_CHANGE } from "../actions/oneAction";

// const initialState = {
//     cart: [
//         {
//             product: "bread 700g",
//             quantity: 2,
//             unitCost: 90
//         },
//         {
//             product: "milk 500ml",
//             quantity: 1,
//             unitCost: 47
//         }
//     ]
// }

const initialState = {
    count: 0,
    loading: false
}

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case ADD_TO_CART: {
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         }
//         case UPDATE_CART: {
//             return {
//                 ...state,
//                 cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
//             }
//         }

//         case DELETE_FROM_CART: {
//             return {
//                 ...state,
//                 cart: state.cart.filter(item => item.product !== action.payload.product)
//             }
//         }
//         default:
//             return state;
//     }
// }

export default function (state = initialState, action) {
    switch (action.type) {
        case PAGE_ONE_ADD_ONE:
            return addOne(state);
        case PAGE_ONE_REDUCE_ONE:
            return reduceOne(state);
        case LOADING_CHANGE:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

function addOne(state) {
    return {
        ...state, count: state.count + 1
    }
}

function reduceOne(state) {
    return {
        ...state, count: state.count - 1
    }
}