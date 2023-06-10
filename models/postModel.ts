import { Schema, model, models  } from "mongoose";
const postSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
},{timestamps:true})

const Post = models.post || model('post',postSchema)
export default Post