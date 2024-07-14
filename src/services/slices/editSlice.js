import { createSlice } from "@reduxjs/toolkit";

const initialState={
    editProfile:false
}

export const editSlice=createSlice({
    name:"edit",
    initialState:initialState,
    reducers:{
        setEditProfile(state, value){
            state.editProfile = value.payload;
        }
    }
})

export const {setEditProfile} = editSlice.actions;
export default editSlice.reducer;