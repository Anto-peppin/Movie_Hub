import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Input from "./Input";
import {Context} from '../App'
const Nav = () => {
  const navigate = useNavigate()
const {likeArr} = useContext(Context)
const[list,setList] = useState(true)
const location = useLocation()

useEffect(()=>{
 location.pathname == '/' ? setList(true) : setList(false)
},[location.pathname])

useEffect(()=>{
  if(likeArr.length>=1){
    likeArr.map()
  }
},[])

  return (
    <>
      <div className="navbar bg-white shadow-sm sticky top-0 z-50 flex gap-3 justify-between px-4">
        <div style={{ whiteSpace: "nowrap" }}>
          <NavLink to={'/'} className="text-2xl font-bold md:text-3xl bg-linear-[#26d9d9,blue] bg-clip-text text-transparent ">
            Movie Hub
          </NavLink>
        </div>
       <div className="flex items-center gap-4">
        {
          list &&  <Input /> 
          
        }

          <div tabIndex={0} role="button" className="btn btn-info text-white " onClick={()=>{navigate('/wish')}}>
            <div className="indicator flex gap-1">
              <p className="hidden md:inline-block">WishList</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{likeArr?.length}</span>
            </div>
          </div>
       </div>
        
      </div>
    </>
  );
};

export default Nav;
