import React, { useContext } from 'react'
import {Context} from '../App'
const Pagination = () => {
    const {page,setPage} = useContext(Context)
    const dicrease = ()=>{
setPage(pre=>pre==1?1:pre-1)
    }
    const increase = ()=>{
setPage(pre=>pre==undefined?1:pre+1)
    }

  return (
    <div className="join relative left-[50%] -translate-x-[50%] mb-3 ">
        {
            page>1 &&   <button className="join-item btn" onClick={dicrease}>«</button>

        }
  <button className="join-item btn">page {page}</button>
  <button className="join-item btn" onClick={increase}>»</button>
</div>
  )
}

export default Pagination