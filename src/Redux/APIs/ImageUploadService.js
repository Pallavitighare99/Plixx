import { toast } from "react-hot-toast";
import Axios from "./Axios";


export const uploadImagesService = async(file, setLoading) =>{
    try {
        setLoading(true);
        const {data} = await Axios.post('/upload', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            setLoading(false);
            toast.success("File Uploaded");
            return data;
    } catch(error){
        setLoading(false)
        console.log(error.stack);
        toast.error(error.stack)
    }
}

export const uploadTrailerService = async(file, setLoading) =>{
    try {
        setLoading(true);
        const {data} = await Axios.post('/trailer', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            setLoading(false);
            toast.success("Trailer Uploaded");
            return data;
    } catch(error){
        setLoading(false)
        console.log(error.stack);
        toast.error(error.stack)
    }
}
