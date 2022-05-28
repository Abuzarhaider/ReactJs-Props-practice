import React from 'react'
import CardBox from "./CardBox.jsx"
import "./Main.css"
import CardData from "./CardData.jsx"

const Main = () => {
  return (
    <>
    <main>
      {/* Title */}
      <div className='mainHeading'>
          <h3>Latest to Watch</h3>
      </div>
      
      {/* Calling Cards in Main component at HOME Page */}
        <div className='mainDisplay'>
        <CardBox imgSrc={CardData[0].imgsrc}/>
        <CardBox imgSrc={CardData[1].imgsrc}/>
        <CardBox imgSrc={CardData[2].imgsrc}/>
        </div>
        <div className='mainDisplay'>
        <CardBox imgSrc={CardData[3].imgsrc}/>
        <CardBox imgSrc={CardData[4].imgsrc}/>
        <CardBox imgSrc={CardData[5].imgsrc}/>
        </div>
    </main>
    </>
  )
}

export default Main