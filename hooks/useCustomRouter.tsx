"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
const useCustomRouter = () => {
    const router = useRouter()
    const searchParam = useSearchParams()
    const query:any = {}
    let search:any = searchParam.get('search')
    let sort:any = searchParam.get('sort')
    if(search) query.search = search
    if(sort) query.sort = sort
    const pushQuery = ({search,sort}:any) =>{
        if(search !== undefined){
            search === "" ? (delete query.search) : query.search = search
        }
        if(sort !== undefined){
            sort === "createAt" ? (delete query.sort) : query.sort = sort
        }
        const newQuery = new URLSearchParams(query).toString()
        router.push(`?${newQuery}`)
    }
  return {pushQuery,query}
}

export default useCustomRouter