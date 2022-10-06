import mongoose from "mongoose";
import { config } from "dotenv";
config();
export default( async () =>{
    const { USER,PASSWORD,CLUSTER,DBNAME } = process.env; 
    const MONGODB_URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${DBNAME}?retryWrites=true&w=majority`;
    try {
        const db = await mongoose.connect(MONGODB_URI)
        console.log(`Connected to db ${db.connection.name}`)
    } catch (error) {
        console.log(error);
    }
})();