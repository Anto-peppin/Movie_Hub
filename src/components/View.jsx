import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Rating from './Rating'

const View = () => {
    const {val} = useParams()
    const[viewData,setViewData] = useState([])
  useEffect(()=>{

       const viewFun = async()=>{
        try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${val}?api_key=913436e2989364cd46db75bdf5fbc1ec`)
       setViewData(response.data)
       } catch (error) {
        console.log(error.message);
        
       }
       }
       viewFun()
  },[])
    // const handleDownload = async(img,title)=>{
    //  try {
    // //  const responce = await axios.get(`https://image.tmdb.org/t/p/w500/${img}`,{responseType:'blob'})
    // //  const blobUrl = URL.createObjectURL(responce.data)

    // //    const a = document.createElement('a')
    // //   a.href = blobUrl
    // //   a.download = title
    // //   document.body.appendChild(a)
    // //   a.click()
    // //   document.body.removeChild(a)

    // //  URL.revokeObjectURL(blobUrl)
    // window.location.href = `/api/download?url=${encodeURIComponent(img)}`;
     
    //  } catch (error) {
    //   console.log(error.message);
      
      
    //  }
    // }

    
  return (
    <>{viewData.id!= undefined ?  
        <div className="w-full relative  flex font-pop items-center   bg-no-repeat bg-cover bg-center" style={{ height:'calc(100vh - 65px)' }}>
      <img className="w-full h-full absolute " src={`https://image.tmdb.org/t/p/w500/${viewData.backdrop_path}`} />
      <main className="text-white  p-3 sm:p-5 relative top-10 ">
        <h2 className=" gs font-bold mb-2  font-pop text-3xl"  style={{textShadow:'0px 1px 1px black'}}>{viewData.title}</h2>
        <p className=" gs text-[12px] max-w-[350px]  sm:max-w-[450px] text-gray-200 line-clamp-3" style={{textShadow:'0px 1px 1px black'}}>
         {viewData.overview}
        </p>

        <div className=" gs flex gap-1 items-center my-4">
        
        <Rating rate={viewData?.vote_average} />
          <kbd className=" kbd font-pop text-black">{Math.floor(viewData?.vote_average/2)}.0</kbd>
        </div>

        <div className=" gs flex gap-6 ">
          <button className="btn btn-info">Book Now</button>
          <a href={`https://image.tmdb.org/t/p/w500/${viewData.backdrop_path}`} target="_blank" download={viewData.title} rel="noopener noreferrer">
          <button className="btn btn-accen btn-outline" >Download</button>
          </a>
        </div>
      </main>
   
    </div> :  <div className="skeleton w-full" style={{ height:'calc(100vh - 65px)' }}></div> }
   
    </>
  )
}

export default View