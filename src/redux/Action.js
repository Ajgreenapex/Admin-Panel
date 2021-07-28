import * as actions from "./ActionTypes";

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actions.GET_ADD_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
export const removeProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actions.GET_REMOVE_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const restoreProduct = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actions.GET_REMOVE_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteProduct = (data) => {
  return async (dispatch) => {
    try {
      // console.log("delete action===>", data);
      dispatch({ type: actions.GET_DELETE_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
export const serachProduct = (data) => {
  return async (dispatch) => {
    try {
      // console.log("serachProduct action===>", data);
      dispatch({ type: actions.GET_SEARCH_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
export const serachWord = (data) => {
  return async (dispatch) => {
    try {
      // console.log("serachProduct array action===>", data);
      dispatch({ type: actions.GET_SEARCH_WORD, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const productPrice = (data) => {
  return async (dispatch) => {
    try {
      // console.log("data price action===>", data);
      dispatch({ type: actions.GET_PRICE, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductPriceData = (data) => {
  return async (dispatch) => {
    try {
      // console.log("GET_PRICE_DATA action===>", data);
      dispatch({ type: actions.GET_PRICE_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductUpdateData = (data) => {
  return async (dispatch) => {
    try {
      // console.log("GET_UPDATE_DATA action===>", data);
      dispatch({ type: actions.GET_UPDATE_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getFaceBookData = (data) => {
  return async (dispatch) => {
    try {
      // console.log("GET_UPDATE_DATA action===>", data);
      dispatch({ type: actions.GET_FACEBOOK_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
