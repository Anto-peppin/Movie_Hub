import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
const Wish = () => {
  const { likeArr } = useContext(Context);
 const navigate =useNavigate()

  return (
    <div>
      <h2 className="mt-5 font-bold text-2xl mb-2 bg-linear-[#26d9d9,blue] bg-clip-text text-transparent mx-5">
        Wish List
      </h2>
      {
        likeArr.length >= 1 ? (
          <div  className='w-full mb-3 p-1 flex flex-wrap justify-center gap-3 '>
            {
                likeArr.map((val,ind)=>(
                    <Card key={ind} con={val} />

                ))
            }
        </div>
        ) : (
         <div className="mockup-browser border-base-300 border w-[90%] mx-auto">
  <div className="mockup-browser-toolbar">
    <div className="input cursor-pointer" onClick={()=>navigate('/')}>Go to MovieBox.com</div>
  </div>
  <div className="grid place-content-center border-t border-base-300 h-80 font-bold text-2xl">Add the Wish List...</div>
</div>
        )
      }
    </div>
  );
};

export default Wish;
