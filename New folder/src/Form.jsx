import React from 'react'
export default function Form({handleAdd}) {
  const [text,setText]= React.useState('')
  return(
    <>
    <input
    type="text"
    onChange={(e)=>setText(e.target.value)}
    />
    <button
    onClick={()=>handleAdd(text)}
    >Add</button>
    </>
  )
}