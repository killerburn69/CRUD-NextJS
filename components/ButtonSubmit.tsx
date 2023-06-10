"use client"
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
interface Props{
    value:string
}
const ButtonSubmit = (props:Props) => {
    const { pending } = useFormStatus()
  return (
    <button type='submit' disabled={pending}>
        {pending?"loading...":props.value}
    </button>
  )
}

export default ButtonSubmit