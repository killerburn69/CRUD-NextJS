import React from 'react'
import SearchForm from './SearchForm'
import Sort from './Sort'

const Feature = () => {
  return (
    <div style={{display:"flex", gap:30,margin:"30px 0"}}>
        <SearchForm/>
        <Sort/>
    </div>
  )
}

export default Feature