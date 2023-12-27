import axios from "axios";

const publicUrl = 'http://62.72.12.251:3333/course/public/all'

export const fetchCourse = async ()=>{
    try {
        const response = await axios.get(publicUrl);
        return response.data;
    } catch (error) {
        return error.message;
    }
}