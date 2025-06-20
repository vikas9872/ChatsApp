import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
// create store
export const store=configureStore({
    // place the slice in store
    reducer:{
        user: userSlice
    }
})