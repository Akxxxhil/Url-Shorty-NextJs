import mongoose,{Document,Model} from "mongoose";


const urlSchema=new mongoose.Schema({
    originalurl:{
        type:String,
        required:true,
        unique:true
    },
    shorturl:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true})

export interface Iurl extends Document{
    originalurl:string,
    shorturl:string
}

const Url:Model<Iurl>= mongoose.models.Url ||  mongoose.model("Url",urlSchema)
export default Url;