import { getAllPosts } from '@/actions/postActions'
import Feature from '@/components/Feature'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import React from 'react'

const Home = async({params,searchParams}:any) => {
  const data = await getAllPosts(searchParams)
  console.log(process.env.MONGO_URI)
  return (
    <div>
      <h1>NextJS 13.4 Server Action + MongoDB(mongoose)</h1>
      <h2>C.R.U.D + Sort + Search + Pagination</h2>
      <PostForm/>
      <Feature/>
      {data?.posts && <PostList posts={data?.posts}/>}
    </div>
  )
}

export default Home