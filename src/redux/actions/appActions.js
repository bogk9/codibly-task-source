import { actionTypes } from "../actions/actionTypes"


export const fetchStarted = () => {
  return {
    type: actionTypes.FETCH_STARTED,
    payload: "",
  };
};

export const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailed = (data) => {
  return {
    type: actionTypes.FETCH_FAILED,
    payload: data,
  };
};

export const switchPage = (page) => {
  return {
    type: actionTypes.SWITCH_PAGE,
    payload: page,
  };
};

export const switchColor = (page) => {
  return {
    type: actionTypes.SWITCH_COLOR,
  };
};

export const setFilter = (id) => {
  return {
    type: actionTypes.SET_FILTER,
    payload: id,
  };
};

export const fetchData = (keyword) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    fetch(
      "https://reqres.in/api/products?per_page=5&page=" +
        getState().app.currentPage
    )
      .then((data) => data.json())
      .then((data) => dispatch(fetchSuccess(data)))
      .catch((err) => dispatch(fetchFailed(err)));
  };
};

