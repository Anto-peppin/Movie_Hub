import React, { useContext } from 'react'
import {Context} from '../App'
import Card from './Card';
import Pagination from './Pagination';
const Main = () => {
  const {data} = useContext(Context)

  
  return (
    <div className='px-2'>
        <h2 className='mt-5 font-bold text-2xl mb-2 bg-linear-[#26d9d9,blue] bg-clip-text text-transparent '>Movie List</h2>
        <div  className='w-full mb-3 p-1 flex flex-wrap justify-center gap-3 '>
            {
               data.length>0 ? data.map((val,ind)=>(
                    <Card key={ind} con={val} />

                )) :  <div className="skeleton w-full" style={{ height:'calc(100vh - 65px)' }}></div> 

            }
        </div>
        <Pagination  />
    </div>
  )
}

export default Main