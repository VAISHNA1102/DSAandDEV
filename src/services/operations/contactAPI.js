import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import {contactUss} from "../apis"
import {setLoading} from "../slices/contactUsSlice";

//contact
export const ContactUs=(formData)=>{
    return async (dispatch) => {
        dispatch(setLoading(true));
        const toastID = toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",contactUss.CONTACT_US,formData);

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Mail send successfully");
        }catch(e){
            console.log("Error while sending mail in contact us page...........", e)
            toast.error("Mail not send")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastID)
    }
}