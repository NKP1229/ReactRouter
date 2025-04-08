import { useState } from 'react'
// import { Routes, Route, Link } from "react-router-dom"
import './App.css'
// import Red from './components/Red'
// import Blue from './components/Blue'
// import Home from './components/Home'
import NavBar from './components/Navbar'
import MainRoutes from './components/MainRoutes'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        {/* <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div> */}
        <NavBar />
        {/* <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blue" element={<Blue />}/>
            <Route path="/red" element={<Red />}/>
          </Routes>
        </div> */}
        <MainRoutes />
        <Footer />
      </div>
    </>
  )
}
export default App