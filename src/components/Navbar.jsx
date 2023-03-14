import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <div className="container flex">
        <img className='logo' src={logo} alt="logo"/>
        <span>Space Traveller Hub</span>
        <nav className='navbar'>
          <NavLink exact activeClassName="active" to="/">Rockets</NavLink>
          <NavLink activeClassName="active" to="/missions">Missions</NavLink>
          |
          <NavLink activeClassName="active" to="/profile">My Profile</NavLink>

        </nav>

      </div>
      <Outlet/>
    </>
  )
}

export default Navbar
