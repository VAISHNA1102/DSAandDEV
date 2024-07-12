
const BASE_URL = process.env.REACT_BASE_URL


// User route endpoints
export const user = {
    LOGIN_API : BASE_URL + "api/v1/auth/login",
    SENDOTP_API : BASE_URL + "api/v1/auth/sendotp",
    SIGNUP_API : BASE_URL + "api/v1/auth/signup",
    RESETPASSWORDTOKEN_API : BASE_URL + "api/v1/auth/reset-password-token",
    RESETPASSWORD_API : BASE_URL + "api/v1/auth/reset-password",
}