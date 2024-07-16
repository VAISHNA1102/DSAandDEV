import { createSlice } from "@reduxjs/toolkit";

const initialState={
    editProfile:false,
    editPass:false,
    editPic:false
}

export const editSlice=createSlice({
    name:"edit",
    initialState:initialState,
    reducers:{
        setEditProfile(state, value){
            state.editProfile = value.payload;
        },
        setEditPass(state, value){
            state.editPass= value.payload;
        },
        setEditPic(state, value){
            state.editPic= value.payload;
        }
    }
})

export const {setEditProfile,setEditPass,setEditPic} = editSlice.actions;
export default editSlice.reducer;