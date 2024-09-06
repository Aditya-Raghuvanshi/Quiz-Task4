import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import questionSlice from "./questionSlice";

const store = configureStore({
    reducer:{
        user:userSlice,
        question:questionSlice,
    }
});

export default store