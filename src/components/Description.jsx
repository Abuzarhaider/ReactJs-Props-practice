import React from 'react'
import "./Description.css"

const Description = () => {
  return (
    <>
    <div className='mainDes'>
      {/* Title in Description page */}
      <div className='title'>
        <h2>Description</h2>
      </div>
      {/* Text in Description page */}
      <div>
        <p>
          Usually website interface consist of small sections/components that looks same except a few changes. Developers need to code for every section in pure HTML and CSS. But in React Js library, props are used for this purpose. Props are arguments to functions. They are passed similar to HTML attributes. This small project helps to understand props more easily.
          <br /> <br />
          In this project we have used single block of code of HTML/CSS for cards. Using this code we have passed different data and call the card component number of times we want to display.
          <br />
          Following two things are used in this template,
          <ul>
            <li>React Router Dom  (to avoid website loading)</li>
            <li>Props</li>
          </ul>
        </p>
      </div>
    </div>
    </>
  )
}

export default Description