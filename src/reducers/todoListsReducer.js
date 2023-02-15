import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { todoListsApi} from "../DAL/api";
import {deleteOpenListId} from '../reducers/tasksReducer'
import {useDispatch} from "react-redux";


export const getTodoLists = createAsyncThunk(
    'todoListsReducer/get',
    async ()=>{
        const response= await todoListsApi.getTodoLists()
        if (!response.resultCode) {
            return response.data
        }
    }
)
export const createTodoList = createAsyncThunk(
    'todoListsReducer/post',
    async (data)=>{
        const response= await todoListsApi.postTodoList(data[0])
        if (!response.resultCode) {
            return response.data

        }
    }
)

export const deleteTodoLists = createAsyncThunk(
    'todoListsReducer/delete',
    async (todolistId )=>{
        const response= await todoListsApi.deleteTodoList(todolistId[0])
        if (!response.resultCode) {
            return response.data
        }
    }
)
export const refactorTodoLists = createAsyncThunk(
    'todoListsReducer/put',
    async (renameData)=>{
        const response= await todoListsApi.updateTodoList(renameData[0],renameData[1].title)
        if (!response.resultCode) {
            return response.data
        }
    }
)
export const reorderTodoLists = createAsyncThunk(
    'todoListsReducer/put',
    async ()=>{
        const response= await todoListsApi.orderTodoList()
        if (!response.resultCode) {
            return response.data

        }
    }
)


const todoListsReducer = createSlice({
    name:'todoLists',
    initialState:{
        todos:null,
    },
    reducers:{

    },
    extraReducers:{
        [getTodoLists.pending]:(state,action)=>{},
        [getTodoLists.fulfilled]:(state,action)=>{
            state.todos = action.payload
        },
        [createTodoList.fulfilled]:(state,action)=>{
            state.todos =[ action.payload.item,...state.todos]
        },
        [deleteTodoLists.fulfilled]:(state,action)=>{

            state.todos =state.todos.filter(list=> {

                return list.id !== action.meta.arg[0]
            })
        },
        [refactorTodoLists.fulfilled]:(state,action)=>{
            state.todos =state.todos.map(list=> {
                if (list.id === action.meta.arg[0]) {
                    return {...list, title:action.meta.arg[1].title}
                }
                return list
            })
        },

        [getTodoLists.rejected]:(state,action)=>{},

    }
})
export default todoListsReducer.reducer
// export const {} = todoListsReducer.actions