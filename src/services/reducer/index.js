import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth"
import profileReducer from "../slices/profileSlice"
import editReducer from "../slices/editSlice"

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    edit:editReducer
})

export default rootReducer;