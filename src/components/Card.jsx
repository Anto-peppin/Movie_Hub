import React, { useContext, useState,useRef,useEffect} from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Context } from "../App";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
const Card = ({ con }) => {
  
  const { likeArr, setLikeArr } = useContext(Context);
  const [like, setLike] = useState(false);
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
    const divRef = useRef(null);
    
  const handleHeart = (val) => {
    setLike((prev) => !prev);

    setLikeArr((prevArr) => {
      if (prevArr.some((item) => item.id === val.id)) {
        return prevArr.filter((item) => item.id !== val.id);
      } else {
        return [...prevArr, val];
      }
    });
  };

    useEffect(() => {
    const handleClickOutside = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const goToHome = (val)=>{
    navigate(`/view/${val}`)

}
  return (
    <div className="card bg-base-100 w-[280px] sm:w-[250px]  shadow-[0px_0px_2px_black] px-1 cursor-pointer"  ref={divRef}
      onClick={() => setShow(!show)}>
      <figure className="px-2 relative pt-2 min-h-[360px] max-w-[360px]">
       {
          con?.poster_path ? <img
          src={`https://image.tmdb.org/t/p/w500/${con?.poster_path}`}
          loading="lazy"
          alt={con?.title}
          className="rounded-xl"
        /> :  <div className="skeleton w-full min-h-[360px]  "></div>

        }
        <div className={`shadow-[inset_-2px_-2px_4px_black,inset_2px_2px_4px_white] absolute h-[98%] rounded-xl px-2 py-1 backdrop-blur-2xl mx-auto  transition-all duration-300 bg-black/50 ${show? "bottom-0" : "-bottom-100"}`}>
          <div className="w-full text-end">
            <button
              className="btn btn-circle w-fit h-fit relative p-1 top-2"
              onClick={(e) => {e.stopPropagation(); handleHeart(con)}}
            >
              {like ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-red-500" />
              )}
            </button>
          </div>
          <h2 className="font-bold text-xl text-yellow-500 my-2 ">
            {con?.title}
          </h2>
          <p className="font-pop text-[14px] text-justify line-clamp-9 text-white">
            {con?.overview}
          </p>
          <div className="flex justify-between items-center mt-3">
            <Rating  rate={con?.vote_average}/>
            <p className=" text-white text-[12px] cursor-pointer">
            {con?.release_date}
          </p>
          </div>
          <div onClick={(e)=>{ e.stopPropagation(); goToHome(con.id)}} className="text-[10px] text-white underline mt-1 text-end cursor-pointer">View More</div>
        </div>
      </figure>
      <h3 className="w-full p-1 text-center mx-2 font-bold text-lg ">
        {con?.title}
      </h3>

    </div>
  );
};

export default Card;
