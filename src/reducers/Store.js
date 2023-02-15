import {configureStore,combineReducers} from "@reduxjs/toolkit";
import todoLists from "./todoListsReducer";
import auth from "./auth";
import tasks from "./tasksReducer";

const rootReducer = combineReducers({
    todoLists:todoLists,
    auth:auth,
    tasks:tasks
})
const store =  configureStore({
    reducer:rootReducer
})
export default store