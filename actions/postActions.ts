"use server"
import connectDB from "@/database/mongoosedb"
import Post from "@/models/postModel"
import { revalidatePath } from "next/cache";
interface Update{
    title:any;
    image:any;
    id:any;
}
connectDB()
export async function getAllPosts(searchParams:any){
    const search = searchParams.search || ""
    const sort = searchParams.sort || "createAt"
    try{
        const posts = await Post.find({title:{$regex:search}})
        .sort(sort)
        // const posts = await Post.find();
       
        console.log(posts);
        const newData = posts.map(post=>(
            {
                ...post._doc,
                _id:post._doc._id.toString()
            }
        ))
        console.log(newData)
        return {posts:newData};
    }
    catch(error:unknown){
        console.log(error)
    }
    
}
export async function createPost(data:Object){
    try{
        const newPost = new Post(data)
        await newPost.save()
        revalidatePath("/")
        console.log({...newPost._doc, _id:newPost._id.toString()});
        return {...newPost._doc, _id:newPost._id.toString()};
    }
    catch(error:unknown){
        console.log(error)
    }
    
}
export async function updatePost({title,id,image}:Update){
    try{
        const post = await Post.findByIdAndUpdate(id,{title,image},{new:true})
        console.log(post)
        revalidatePath("/")
        // console.log({...newPost._doc, _id:newPost._id.toString()});
        return {...post._doc, _id:post._id.toString()};
    }
    catch(error:unknown){
        console.log(error)
    }
    
}
export async function deletePost(id:any){
    try{
        const post = await Post.findByIdAndDelete(id,{new:true})
        console.log(post)
        revalidatePath("/")
        // console.log({...newPost._doc, _id:newPost._id.toString()});
        return {...post._doc, _id:post._id.toString()};
    }
    catch(error:unknown){
        console.log(error)
    }
    
}
export async function getOnePosts(id:any){
    try{
        const posts = await Post.findById(id);
       
        console.log(posts);
        return {...posts._doc,_id:posts._doc._id.toString()};
    }
    catch(error:unknown){
        console.log(error)
    }
    
}