import { combineReducers,createStore } from "redux";
import { listreducer } from "./listreducer";
const rootreducer= combineReducers({todolist:listreducer,})
const store1=createStore(rootreducer);
export default store1;