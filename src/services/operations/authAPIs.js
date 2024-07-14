import {setLoading, setToken} from "../slices/auth"
import {setProfile} from "../slices/profileSlice"
import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import {user} from "../apis"

// sendOtp
export const sendOtp = (email, navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        console.log("user SENDOTP_API", user.SENDOTP_API)
        const toastID=toast.loading("Loading...");
        try{
            const response = await apiConnector("POST", user.SENDOTP_API, {
                email
            });

            if( !response.data.success ){
                throw new Error(response.data.message);
            }

            toast.success("OTP Sent Successfully");

            navigate("/verify-email");
        }
        catch(error){
            console.log("Error occured at sending otp", error);
            toast.error("Could Not Send OTP");
        }
        toast.dismiss(toastID);
        dispatch(setLoading(false));
    }
}


//signup
export const signUp=(firstName, lastName, email, password, confirmPassword, accountType, otp,contactNumber,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...");

        try{
            const response=await apiConnector("POST",user.SIGNUP_API,{
                firstName, lastName, email, password, confirmPassword, accountType, otp,contactNumber
            });

            if(!response.data.success){
                throw new Error("hello",response.data.message);
            }

            toast.success("Signup Successfully");

            navigate("/login");
        }catch(e){
            console.log("error occured at sign Up ", e);
            toast.error("Signup Failed");
            navigate("/signup");
        }
        toast.dismiss(toastID);
        dispatch(setLoading(false));
    }
}


//login
export const login=(email, password, navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",user.LOGIN_API,{email,password});
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Login Successfully");

            dispatch(setToken(response.data.token));
            dispatch(setProfile(response.data.user));


            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));

            console.log(localStorage.getItem("user"));
            // calling auto logout component            
            setTimeout( () => {
                console.log("Auto logout triggered"); 
                dispatch(logout(navigate))
            }, 7200000 )
       
            navigate("/tutorial");
        }catch(e){
            console.log("Error occured at login..", e);
            toast.error("Login Failed");
            navigate("/login");
        }
        toast.dismiss(toastID);
        dispatch(setLoading(false));
    }
}


// logout
export const logout = (navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...");
        try{

            dispatch(setToken(null));

            dispatch(setProfile(null));

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            toast.success("Logout Successfully");

            navigate("/");
        }
        catch(e){
            console.log(e);
            navigate("/");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastID);
    }
}


//resetPassword
export const getResetPasswordToken=(email,setEmailSend)=>{
    return async (dispatch) => {
        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",user.RESETPASSWORDTOKEN_API,{email});
            if(!response.data.success){
                throw new Error(response.data.message);
            }

            setEmailSend(response.data.success);

            // showing toast  
            toast.success("Reset Email Sent");

        }catch(e){
            console.log("Error occured at resetPasswordToken", e);
            toast.error("Failed To Send Reset Email");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastID);
    }
}

// Reset Password
export const resetPassword = ( password, confirmPassword, token, setPasswordUpdated, setEmail ) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...");
        try{
            const responce = await apiConnector("POST", user.RESETPASSWORD_API, {password, confirmPassword, token} );

            if( !responce.data.success ){
                throw new Error(responce.data.message);
            }

            // updating value of email using state variable
            setEmail(responce.data.email);

            setPasswordUpdated(responce.data.success);

            toast.success("Password Reset Successfully");

        }
        catch(error){
            console.log("Error occured at password update", error);
            toast.error("Failed To Reset Password");
        }
        toast.dismiss(toastID);
        dispatch(setLoading(false));
    }
}