import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
function Header() {
  return (
    <div>
<div className="col-12">
        <nav className='navbar1'>
            <div className='icon'><IoIosSearch className='icon11' /><input type="text"  placeholder="Search" className='inp1' /></div>
            <div className='icone'><h1>SHOPPERS</h1></div>
            <div className='iconn2'><IoPerson /><FaHeart /><MdShoppingCart /></div>
        </nav>
        </div>
    </div>

  )
}

export default Header