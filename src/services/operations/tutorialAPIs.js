import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { tutorial } from "../apis";


export const getTutorial=async(token)=>{
    const toastId = toast.loading("Loading...")
    let result=[];
    try{
        const response=await apiConnector("GET",tutorial.GET_TUTORIALS,null,{
            Authorization: `Bearer ${token}`,
        })

        if(!response.data.success){
            throw new Error(response.data.message)
        }
        result = response.data.data
    }catch(e){
        console.log("ERROR WHILE FETCHING TUTORIAL DATA",e);
        toast.error("Error while fetching Tutorials")
    }
    toast.dismiss(toastId);
    return result;
}

export const getFullTutorial=async(token,tutorialId)=>{
    const toastId = toast.loading("Loading...")
    let result=[];
    console.log(tutorialId)
    try{
        const response=await apiConnector("GET",`${tutorial.GET_FULL_TUTORIALS}?tutorialId=${tutorialId}`,null,{
            Authorization: `Bearer ${token}`,
        })
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        result = response.data.data
    }catch(e){
        console.log("ERROR WHILE FETCHING TUTORIAL DATA",e);
        toast.error("Error while fetching Tutorials")
    }
    toast.dismiss(toastId);
    return result;
}

export const updateTutorialProgress=(token,tutorialId,subsectionId)=>{
    return async(dispatch)=>{
        const toastId=toast.loading("Loading....");
        console.log("updateTutorialProgress");
        try{
            const response=await apiConnector("POST",tutorial.UPDATE_PROGRESS,{tutorialId,subsectionId},{
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`, 
            });

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Progress updated Successfully");
        }catch(e){
            console.log("DELETE_PROFILE_API API ERROR............", e)
            toast.error("Not able to update tutorial progress");
            toast.error("Try Again");
        }
        toast.dismiss(toastId);
    }
}
