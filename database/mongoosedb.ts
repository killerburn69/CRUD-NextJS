import mongoose from "mongoose";
const connectDB = ()=>{
    if(mongoose.connections[0].readyState){
        console.log("MongoDB is already connectd");
        return;
    }
    mongoose.connect(process.env.MONGO_URI || "")
    .then(()=>console.log("MongoDB is connected"))
    .catch(error=>console.log(error))
}
export default connectDB