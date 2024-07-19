import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
}

export const contactUsSlice=createSlice({
    name:"contact",
    initialState:initialState,
    reducers:{
        setLoading(state, value){
            state.loading = value.payload;
        }
    }
})

export const {setLoading} = contactUsSlice.actions;
export default contactUsSlice.reducer;