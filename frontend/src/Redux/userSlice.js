import { createSlice } from "@reduxjs/toolkit";
// create slice
const userSlice=createSlice({
    name: "user",
    initialState: {
        userData: null,
    },
    reducers:{
        setUserData: (state, action)=>{
            state.userData=action.payload
        }
    }
})
// export the reducers
export const {setUserData}=userSlice.actions

// export the slice
export default userSlice.reducer;