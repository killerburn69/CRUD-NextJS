"use client"
import { deletePost } from '@/actions/postActions'
import { useMyContext } from '@/context/Provider'
import Image from 'next/image'
import Link from 'next/link'
import React, {useTransition} from 'react'
interface PostCard{
    post:any
}
const PostCard = (props:PostCard) => {
    const {setEditPost} = useMyContext()
    let [isPending, startTransition] = useTransition()
    async function handleDelete(_id: any) {
        if(window.confirm("Do you want to delete this")){
            await deletePost(_id)
        }
        console.log(_id);
        
    }

  return (
    <div>
        <Link href={`/post/${props.post._id}`}>
            <Image src={props.post?.image} alt='image' width={200} height={200} priority/>
            <h3>{props.post?.title}</h3>
        </Link>

        <div style={{display:"flex", gap:20}}>
            <button onClick={()=>setEditPost(props.post)}>Edit</button>
            <button onClick={()=>startTransition(()=>handleDelete(props.post._id))}>
                {isPending ? "loading..." : "delete"}
            </button>
        </div>
    </div>
  )
}

export default PostCard