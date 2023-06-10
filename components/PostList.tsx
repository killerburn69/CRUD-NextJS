import React from 'react'
import PostCard from './PostCard'
interface PostList{
    posts:any
}
const PostList = (props:PostList) => {
  return (
    <div style={{display:"flex", gap:20, flexWrap:"wrap"}}>
        {props.posts.map((post:any)=>(
            <PostCard key={post._id} post={post}/>
        ))}
    </div>
  )
}

export default PostList