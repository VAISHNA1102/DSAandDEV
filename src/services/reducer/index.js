import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth"
import profileReducer from "../slices/profileSlice"
import editReducer from "../slices/editSlice"
import contactReducer from "../slices/contactUsSlice"

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    edit:editReducer,
    contact:contactReducer
})

export default rootReducer;