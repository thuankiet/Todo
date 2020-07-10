import * as types from "../constants/ActionTypes";
import shortId from "shortid";

const data = JSON.parse(localStorage.getItem("activities"));
const initialState = data ? data : [];

const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      const newTask = {
        id: shortId.generate(),
        description: action.payload.description,
        status: action.payload.status,
        filterStatus: -1,
      };
      state.push(newTask);
      localStorage.setItem("activities", JSON.stringify(state));
      return [...state];

    case types.DELETE_TASK:
      const id = action.id;
      let index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("activities", JSON.stringify(state));
      return [...state];

    case types.UPDATE_TASK:
      const idUpdate = action.id;
      let indexUpdate = findIndex(state, idUpdate);
      state[indexUpdate].status = !state[indexUpdate].status;
      localStorage.setItem("activities", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducer;
