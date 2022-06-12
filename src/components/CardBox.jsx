import React from 'react'
import "./CardBox.css"

const CardBox = (props) => {
  return (
    <div className='cardMain'>
        {/* Card Image */}
        <div className='cardImg'>
            <img src={props.imgSrc} alt="" srcset="" />
        </div>
        {/* Card link Button */}
        <div className='cardButton'>
            <a href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer"> Watch Here</a>
        </div>
    </div>
  )
}

export default CardBox