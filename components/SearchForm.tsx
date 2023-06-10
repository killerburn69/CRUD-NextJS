"use client"
import React from 'react'
import ButtonSubmit from './ButtonSubmit'
import useCustomRouter from '@/hooks/useCustomRouter'

const SearchForm = () => {
    const {pushQuery, query}:any = useCustomRouter()
    async function handleSearch(formData:any) {
        const search = formData.get("search")
        pushQuery({search})
        console.log(search);
        
        
    }
  return (
    <form action={handleSearch}>
        <input defaultValue={query.search || ""} type="search" name="search" id="" placeholder='search' required />
        <ButtonSubmit value='Search'/>
    </form>
  )
}

export default SearchForm