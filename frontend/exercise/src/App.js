import React from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"

const App = () => {
  return (
    
    <>
    
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
         </li>
      </ul>
    </nav>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>

    </Routes>
    
    
    </>
  )
}

export default App