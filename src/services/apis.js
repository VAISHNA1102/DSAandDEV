import react from "react"

const BASE_URL = "http://localhost:4000/api/v1"

// User route endpoints
export const user  = {
    LOGIN_API : BASE_URL + "/auth/login",
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    RESETPASSWORDTOKEN_API : BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API : BASE_URL + "/auth/reset-password",
}
