'use client'

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
   userinfo:localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null
}

export const userLogin = createAsyncThunk('user/userLogin',async(data,thunkAPI) => {

    return data


})


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        Login : (state , action) => {
          //console.log('called')
        }
    },
    extraReducers: (builder)=>{

        builder.addCase(userLogin.fulfilled,(state,action) => {
           state.userinfo  = action.payload
           localStorage.setItem('userInfo', JSON.stringify(action.payload));
        })
    }})
   
  


export const { Login    } = userSlice.actions
export default userSlice.reducer