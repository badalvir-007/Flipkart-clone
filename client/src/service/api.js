import axios from 'axios';


const URL = "http://localhost:80";


export const autheticateSignup   = async(data) => {
    try {
        return await axios.post( `${URL}/signup` , data);
    } catch (error) {
        console.log('Error while calling signup  api' , error);
    }
}