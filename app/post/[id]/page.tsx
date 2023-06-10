import { getOnePosts } from '@/actions/postActions'
import PostCard from '@/components/PostCard'
import React from 'react'

const SinglePost = async({params}:{params:{id:any}}, searchParams:any) => {
    const post = await getOnePosts(params.id)
  return (
    <div>
        {post && <PostCard post={post}/>}
    </div>
  )
}

export default SinglePost