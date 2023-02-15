import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "../DAL/api";

export const getAuth = createAsyncThunk(
    'todos/auth',
    async ()=>{
        return await authApi.authUser()

    }
)
export const login = createAsyncThunk(
    'todos/login',
    async (dataUser)=>{
        return await authApi.login(dataUser[0])

    }
)
export const logout = createAsyncThunk(
    'todos/logout',
    async ()=>{
        return await authApi.logout()
    }
)

const auth = createSlice({
    name:'auth',
    initialState:{
        dataUser: {

        },
        isAuthorized: false,
        initialization:false
    },
    reducers:{
        authUser: (state,action) => {
            state.dataUser = action.payload
            state.isAuthorized = action.payload
        },
},
    extraReducers:{
        [getAuth.pending]:(state,action)=>{},
        [getAuth.fulfilled]:(state,action)=>{
            state.initialization = true
            if (action.payload.resultCode === 0){
                state.dataUser = action.payload.data
                state.isAuthorized = true
}},
        [logout.fulfilled]:(state,action)=>{

                if (action.payload.resultCode === 0){
                    state.dataUser = null
                    state.isAuthorized = false
                }
        },
        [login.fulfilled]:(state,action)=>{
            if (action.payload.resultCode !== 0){
                action.meta.arg[1](action.payload.messages)
            }
        },
        [getAuth.rejected]:(state,action)=>{},

    }
})




export default auth.reducer
export const {authUser} = auth.actions