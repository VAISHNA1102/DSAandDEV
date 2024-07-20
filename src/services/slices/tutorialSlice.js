import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loading:false,
    tutorialUId:null,
    subSectionUId:null
}

const tutorialSlice=createSlice({
    name:"tutorial",
    initialState:initialState,
    reducers:{
        setLoading(state,value){
            state.loading=value.payload
        },
        setTutorialUId(state,value){
            state.tutorialUId=value.payload
        },
        setsubSectionUId(state,value){
            state.subSectionUId=value.payload
        },
    }
})

export const {setLoading,setTutorialUId,setsubSectionUId}=tutorialSlice.actions;
export default tutorialSlice.reducer;