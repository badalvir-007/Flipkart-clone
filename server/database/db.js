
import mongoose from 'mongoose';
 
 
 export const Connection = async (USERNAME ,PASSWORD) => {
    
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@e-commerce.vrlo9tj.mongodb.net/?retryWrites=true&w=majority`;
 try {
   
    await mongoose.connect( URL ,{ useUnifiedTopology : true ,  useNewUrlParser : true});
    console.log('Database connected  successfully');
 } catch (error) {
    console.log("Error while connectiong the Database ", error.message);
 }
}

export default Connection;
