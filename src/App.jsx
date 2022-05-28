import React from "react"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Description from "./components/Description.jsx"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/description" element={<Description />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  )
}

export default App