import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name : "toggle",
    initialState:false,
    reducers:{
        toggle:(state) => !state
    }

})

export const {toggle} = slice.actions
export default slice.reducer