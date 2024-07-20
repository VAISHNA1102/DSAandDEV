import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth"
import profileReducer from "../slices/profileSlice"
import editReducer from "../slices/editSlice"
import contactReducer from "../slices/contactUsSlice"
import tutorialReducer from "../slices/tutorialSlice"

const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    edit:editReducer,
    contact:contactReducer,
    tutorial:tutorialReducer
})

export default rootReducer;