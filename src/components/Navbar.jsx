import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-5 shadow-lg z-10 transition-all duration-300 ease-in-out">
      <div className="flex justify-around flex-row gap-4 place-content-between text-3xl">
        <NavLink
          to='/'
          className="relative group hover:text-gray-300 transition-colors duration-200 ease-in-out"
        >
          Home
          <span className="absolute left-0 bottom-0 h-1 w-0 bg-red-400 transition-all duration-300 ease-in-out group-hover:w-full" />
        </NavLink>
        <NavLink
          to='/pastes'
          className="relative group hover:text-gray-300 transition-colors duration-200 ease-in-out"
        >
          Pastes
          <span className="absolute left-0 bottom-0 h-1 w-0 bg-red-400 transition-all duration-300 ease-in-out group-hover:w-full" />
        </NavLink>

      </div>
    </div>
  )
}

export default Navbar
