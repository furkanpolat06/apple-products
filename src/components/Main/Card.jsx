import React from 'react'

const Card = ({name, image, price, description}) => {
  return (
    <div className='cards'>
        <div className='name'>{name}</div>
        <img src={image} alt="jpg" />
        <div className='price'>${price}</div>

   
        <div className='card-over'>{description} </div>
    

    </div>
  )
}

export default Card