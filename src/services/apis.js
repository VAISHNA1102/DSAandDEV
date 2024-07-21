const BASE_URL = "http://localhost:4000/api/v1"

// User route endpoints
export const user  = {
    LOGIN_API : BASE_URL + "/auth/login",
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    RESETPASSWORDTOKEN_API : BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API : BASE_URL + "/auth/reset-password",
}

export const profile={
    GET_USER_DETAIL: BASE_URL +"/profile/get-user-details",
    GET_ENROLLED_TUTORIAL: BASE_URL+"/profile/get-enrolled-tutorials",
    UPDATE_PROFILE: BASE_URL+ "/profile/update-profile",
    UPDATE_PROFILE_PIC: BASE_URL+ "/profile/update-display-picture",
    DELETE_ACCOUNT:  BASE_URL+ "/profile/delete-profile",

    CHANGED_PASS: BASE_URL+ "/auth/changepassword"
}

export const contactUss={
    CONTACT_US: BASE_URL+"/contact"
}

export const tutorial={
    GET_TUTORIALS:BASE_URL+"/tutorial/getTutorial",
    GET_FULL_TUTORIALS:BASE_URL+"/tutorial/getFullTutorial",

    UPDATE_PROGRESS:BASE_URL+"/tutorial/updateTutorialProgress",
    GET_PROGRESS:BASE_URL+"/tutorial/getProgressPercentage"
}