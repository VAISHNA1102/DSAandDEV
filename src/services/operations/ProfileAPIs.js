import { apiConnector } from "../apiConnector";
import {setProfile,setLoading} from "../slices/profileSlice";
import {setSignUpData} from "../slices/auth";
import { toast } from "react-hot-toast"
import {profile} from "../apis"
import { logout } from "./authAPIs"

export const getUserDetails=(token,navigate)=>{
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response=await apiConnector("GET",profile.GET_USER_DETAIL,null,{
                Authorization: `Bearer ${token}`,
        });

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            const userImage=response.data.data.image
            ? response.data.data.image
            : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`

            dispatch(setProfile({ ...response.data.data, image: userImage }))
        }catch(e){
            dispatch(logout(navigate))
            console.log("GET_USER_DETAILS API ERROR............", e)
            toast.error("Could Not Get User Details")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}


export const getEnrolledTutorial=async(token)=>{
    const toastId = toast.loading("Loading...")
    const result=[];
    try{
        const response = await apiConnector(
            "GET",
            profile.GET_ENROLLED_TUTORIAL,
            null,
            {
              Authorization: `Bearer ${token}`,
            }
        )

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response.data.data
    }catch(e){
        console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", e)
        toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
    return result;
}


export const updateProfile=(token,formData)=>{
    return async(dispatch)=>{
        const toastID=toast.loading("Loading...");
        try{
            const response=await apiConnector("PUT",profile.UPDATE_PROFILE,formData, {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`, 
            });

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            const userImage = response.data.updateProfile.image
            ? response.data.updateProfile.image
            : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updateProfile.firstName} ${response.data.updateProfile.lastName}`

            dispatch(setProfile({ ...response.data.updateProfile, image: userImage }))
            localStorage.setItem("user", JSON.stringify(response.data.updateProfile));  
            toast.success("Profile Updated Successfully")
        }catch(e){
            console.log("UPDATE_PROFILE_API API ERROR............", e)
            toast.error("Could Not Update Profile")
        }
        toast.dismiss(toastID)
    }
}


export const updateProfilePicture=(token,formData)=>{
    return async(dispatch)=>{
        const toastID=toast.loading("Loading...");
        try{
            const response=await apiConnector("PUT",profile.UPDATE_PROFILE_PIC,formData,
                {
                    "Content-Type":"multipart/form-data",
                    Authorization: `Bearer ${token}`, 
                }
            )
            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Display Picture Updated Successfully")
            dispatch(setProfile(response.data.updatedProfile))
        }catch(e){
            console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", e)
            toast.error("Could Not Update Display Picture")
        }
        toast.dismiss(toastID)
    }
}


export const deleteProfile=(token, navigate)=> {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try{
            const response = await apiConnector("DELETE", profile.DELETE_PROFILE, null, {
            Authorization: `Bearer ${token}`,
            })
    
            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Profile Deleted Successfully")
            dispatch(logout(navigate))
      }catch (e) {
            console.log("DELETE_PROFILE_API API ERROR............", e)
            toast.error("Could Not Delete Profile")
      }
      toast.dismiss(toastId)
    }
}


export const changePassword=(token,formData)=>{
    return async(dispatch)=>{
        const toastID=toast.loading("Loading....");
        try{
            const response=await apiConnector("POST",profile.CHANGED_PASS,formData,{
                Authorization: `Bearer ${token}`,
            });

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Password Changed Successfully")
        }catch(e){
            console.log("CHANGE_PASSWORD_API API ERROR............", e)
            toast.error(e.response.data.message)
        }
        toast.dismiss(toastID)
    }
}