'use client'
import { createPost, updatePost } from '@/actions/postActions';
import React,{useRef} from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import ButtonSubmit from './ButtonSubmit';
import { useMyContext } from '@/context/Provider';
const PostForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const {editPost, setEditPost} = useMyContext()
    async function handleAction(formData:any) {
        // "use server"
        const title = formData.get('title')
        const image = formData.get('image')
        if(editPost){
            console.log({title,image,id:editPost._id});
            await updatePost({title,image,id:editPost._id})
        }else{
            await createPost({title,image})
        }
        setEditPost()
        formRef.current?.reset()
        console.log({'client action': {title, image}});
    }
  return (
    <form  action={handleAction} ref={formRef} style={{display:'flex', gap:20, margin:'30px 0'}}>
        <input defaultValue={editPost?.title} type="text" name="title" placeholder='title' required />
        <input defaultValue={editPost?.image} type="text" name="image" placeholder='image' required />
        {
            editPost ? (
                <>
                    <ButtonSubmit value="Update"/>
                    <button type='button' onClick={()=>setEditPost()}>Cancel</button>
                </>
            ):(
                <>
                <ButtonSubmit value="Create"/>
                </>
            )
        }
    </form>
  )
}

export default PostForm