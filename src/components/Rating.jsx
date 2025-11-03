import React from 'react'

const Rating = ({rate}) => {
    const fRate = Math.floor(rate/2)
  return (
    <div className="rating">
        {
            new Array(5).fill(0).map((_,ind)=>(
                <div key={ind} name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label={`${ind+1}star`} aria-current={`${ind+1 == fRate ?true:false}`}></div>
            ))
        }
</div>
  )
}

export default Rating