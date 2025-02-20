import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <h1 className='title' >The Blog Spot</h1>
        <nav>
        <div className='blog-spot'>
        <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-blog">Add Blog</NavLink>
        </div>
        </nav>
    </div>
   
  )
}

export default NavBar