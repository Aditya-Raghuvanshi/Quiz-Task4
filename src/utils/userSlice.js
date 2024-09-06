import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userName:"",
    },
    reducers:{
        insertName:(state,action)=>{
            state.userName=action.payload;
        }
    }
});

export const {insertName} = userSlice.actions

export default userSlice.reducer