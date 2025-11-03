import React, { useContext } from 'react'
import {Context} from '../App'
import { useNavigate } from 'react-router-dom'
const Input = () => {
 const {setInput} = useContext(Context)
 const navigate = useNavigate()
 const handleInput = (e)=>{
  setInput(e.target.value)
  navigate('')
 }
  
  return (
    
    <label className="input border-0 outline-0 shadow-[0px_0px_2px_black] flex items-center justify-between p-1">
  <svg className="h-[1em] opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>

  <input onChange={handleInput} type="search" className="grow" placeholder="Search the movie" />
  
</label>


    
  )
}

export default Input