import React from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import web from "../images/logo.jpeg"

const NavBar = () => {
  return (
    <>
    <nav>
        {/* NavBar LOGO */}
        <div className="logo">
          <img src={web} alt="Netflix"/>
        </div>
        {/* NavBar Options */}
        <div className="navMenu">
          <ul>
            <li>
              <NavLink to="main">HOME</NavLink>
            </li>
            <li>
              <NavLink to="description">Description</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar