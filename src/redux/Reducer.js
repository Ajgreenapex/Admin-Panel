import * as actions from "./ActionTypes";
const initailSate = {
  productData: [],
  serachData: [],
  serachWord: "",
  priceData: [],
  allData: [],
  price: 0,
  faceBookData: {},
  like: false,
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
        // allData: action.payload,
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

    case actions.GET_UPDATE_DATA:
      console.log("reuder ===>", action.payload);
      return {
        ...state,
        productData: action.payload,
      };
    case actions.GET_FACEBOOK_DATA:
      console.log("reuder face boobk  ===>", action.payload);
      return {
        ...state,
        faceBookData: action.payload,
      };
    case actions.REMOVE_FACEBOOK_DATA:
      console.log("reuder face boobk  ===>", action.payload);
      return {
        ...state,
        faceBookData: action.payload,
      };
    case actions.LIKE:
      return {
        ...state,
        like: action.payload,
      };
    default:
      return state;
  }
}
