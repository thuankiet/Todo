import { combineReducers } from "redux";
import tasks from "./tasks";
import filterTask from "./filterTask";

const myReducer = combineReducers({
  tasks,
  filterTask,
});

export default myReducer;
