import * as types from "../constants/ActionTypes";

export const listAll = () => {
  return { type: types.LIST_ALL };
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};

export const updateTask = (id) => {
  return {
    type: types.UPDATE_TASK,
    id,
  };
};

export const filterList = (filter) => {
  return {
    type: types.FILTER_TASK,
    filter,
  };
};
