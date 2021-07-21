import * as actions from "./ActionTypes";

const initailSate = {
  productData: [],
  serachData: [],
  serachWord: "",
  priceData: [],
  allData: [],
  price: 0,
};

export default function Reducer(state = initailSate, action) {
  switch (action.type) {
    case actions.GET_ADD_DATA:
      return {
        ...state,
        productData: [...state.productData, action.payload],
      };
    case actions.GET_REMOVE_DATA:
      return {
        ...state,
        productData: action.payload,
      };

    case actions.GET_RESTORE_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case actions.GET_DELETE_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case actions.GET_SEARCH_DATA:
      return {
        ...state,
        allData: action.payload,
      };
    case actions.GET_SEARCH_WORD:
      return {
        ...state,
        serachWord: action.payload,
      };
    case actions.GET_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case actions.GET_PRICE_DATA:
      return {
        ...state,
        allData: action.payload,
      };
    default:
      return state;
  }
}
