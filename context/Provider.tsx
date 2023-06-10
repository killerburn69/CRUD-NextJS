'use client'
import React,{useContext, useState} from 'react'
const Context = React.createContext<any>(null);
export const useMyContext = ()=>useContext(Context)
interface ChildrenPorps{
    children:React.ReactNode
}
const Provider = (props:ChildrenPorps) => {
    const [editPost, setEditPost] = useState<any>(null)
    const value = {editPost,setEditPost}
  return (
    <Context.Provider value={value}>
        {props.children}
    </Context.Provider>
  )
}

export default Provider