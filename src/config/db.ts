import mongoose from "mongoose";

const database=async ()=>{
    console.log(process.env.MONGODB_URI);
    
    return mongoose.connect(process.env.MONGODB_URI as string)
}
export default database