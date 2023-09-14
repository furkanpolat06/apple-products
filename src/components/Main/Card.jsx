import React from 'react'

const Card = (item) => {
  return (
    <div className='cards'>
        {/* <div className='title'>
        <h1>{item.name}</h1>

        </div> */}
        <div className="price">
            {item.price}$
        </div>
        
        <img src={item.image} alt="" />
        <div className='card-over'>{item.name} ({item.releaseYear})</div>
    </div>

  )
}

export default Card