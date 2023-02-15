import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tasksApi} from "../DAL/api";


export const getTasks = createAsyncThunk(
    'tasksReducer/get',
    async (todolistId)=>{
        const response= await tasksApi.getTasks(todolistId)
        if (!response.resultCode) {
            return response.data
        }
    }
)
export const createTask = createAsyncThunk(
    'tasksReducer/post',
    async (postData)=>{
        const response= await tasksApi.postTasks(postData[1],postData[0])
        if (!response.resultCode) {
            return response.data

        }
    }
)

export const refactorTask = createAsyncThunk(
    'tasksReducer/put',
    async (renameData)=>{
        const response= await tasksApi.updateTasks(...renameData.reverse())
        if (!response.resultCode) {
            return response.data
        }
    }
)
export const deleteTask = createAsyncThunk(
    'tasksReducer/delete',
    async (postData)=>{
        const response= await tasksApi.deleteTasks(postData[1],postData[0])
        if (!response.resultCode) {
            return response.data
        }
    }
)
export const reorderTask = createAsyncThunk(
    'tasksReducer/put',
    async ()=>{
        const response= await tasksApi.orderTasks()
        if (!response.resultCode) {
            return response.data

        }
    }
)

const tasksReducer = createSlice({
    name:'tasks',
    initialState:{
   tasks:[],
        openListId:null


    },
    reducers:{
        deleteOpenListId(state){
            state.openListId=null
            state.tasks=[]
        }
    },
    extraReducers:{
        [createTask.pending]:(state,action)=>{},

        [getTasks.fulfilled]:(state,action)=>{

            state.openListId=action.meta.arg
            state.tasks = action.payload.items
        },
        [createTask.fulfilled]:(state,action)=>{
            state.tasks =[ action.payload.item,...state.tasks]
        },
        [deleteTask.fulfilled]:(state,action)=>{
            state.tasks =state.tasks.filter(list=> {
                return list.id !== action.meta.arg[0]
            })
        },
        [refactorTask.fulfilled]:(state,action)=>{
            state.tasks =state.tasks.map(list=> {
                if (list.id === action.meta.arg[2]) {
                    return {...list, title:action.meta.arg[1].title}
                }
                return list
            })
        },

        [createTask.rejected]:(state,action)=>{},

    }
})
export default tasksReducer.reducer
export const {deleteOpenListId} = tasksReducer.actions
