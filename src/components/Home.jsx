import gsap from "gsap";
import { useContext, useEffect } from "react";
import Main from "./Main";
import {Context} from '../App'
const Home = () => {
 const {input} = useContext(Context)
  useEffect(() => {
    gsap.fromTo(
      ".gs",
      {
        y: 20,
        opacity: 0,
        stagger: 0.2,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }
    );
  },[]);

  return (
    <>
  <div className={`w-full relative  ${input.length<=0 ? 'flex' : 'hidden'} font-pop items-center h-[450px]   bg-no-repeat bg-cover bg-center`}>
      <img className="w-full h-full absolute " src="./poster.jpg" />
      <main className="text-white p-3 sm:p-5 relative top-10 ">
        <h2 className=" gs font-bold font-pop text-3xl">Batman Begins</h2>
        <p className=" gs text-[12px] max-w-[350px] sm:max-w-[450px] text-gray-200">
          After training with his mentor, Batman begins his fight to free Gotham
          City from corruption.
        </p>

        <div className=" gs flex gap-1 items-center my-4">
          <div className="rating">
            <div
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            ></div>
            <div
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
            ></div>
            <div
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            ></div>
            <div
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
              aria-current="true"
            ></div>
            <div
              className="mask mask-star-2 bg-white"
              aria-label="5 star"
            ></div>
          </div>
          <kbd className=" kbd font-pop text-black">4.0</kbd>
        </div>

        <div className=" gs flex gap-6 ">
          <button className="btn btn-info">Book Now</button>
          <button className="btn btn-accen btn-outline">View Info</button>
        </div>
      </main>
    </div>
   
    <Main/>
    </>
  );
};

export default Home;
