import { useState } from "react";

const Card = (item) => {
  const [show, setShow] = useState(true);
  const handleClick=()=>{
    setShow(!show)
  }
  console.log(show);
  return (
    <>
      {show ? (
        <div onClick={handleClick} className="cards">
          <div className="price">${item.price}</div>
          <img src={item.image} alt="" />
          <div className="card-over">
            {item.name} 
          </div>
        </div>
      ) : (
        // <div onClick={()=>setShow(true)}  className="cards">{item.description}</div>
        <div onClick={handleClick} id="togglePage"  className="cards p-4 ">{item.description} <div className="card-over">{item.category} ({new Date().getFullYear()}/{new Date().getMonth()+1}/{new Date().getDate()})</div></div>
      )}
    </>
  );
};

export default Card;
