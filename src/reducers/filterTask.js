import * as types from "../constants/ActionTypes";

const initialState = -1;

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TASK:
      state = parseInt(action.filter, 10);
      return state;
    default:
      return state;
  }
};

export default myReducer;
