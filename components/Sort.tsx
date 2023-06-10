'use client'
import useCustomRouter from '@/hooks/useCustomRouter'
import React from 'react'

const Sort = () => {
    const {pushQuery,query} = useCustomRouter()
    console.log(query.sort);
    
  return (
    <div>
        Sort:{` `}
        <select name="" id="" value={query.sort || 'createAt'} onChange={e=>pushQuery({sort:e.target.value})}>
            <option value="createAt">A-Z</option>
            <option value="-createAt">Z-A</option>
        </select>
    </div>
  )
}

export default Sort