import React from 'react'

function Navbar() {
  return (
    <div>
        <ul className='ul1'>
        <select class="menu" name="option">
    <option value="" disabled selected>HOME</option>
    <option value="1">Menu One</option>
    <option value="2">Menu Two</option>
    <option value="3">Menu Three</option>
    <option value="3">Sub Menu</option>
  </select>
  <select class="menu" name="option">
    <option value="" disabled selected>ABOUT</option>
    <option value="1">Menu One</option>
    <option value="2">Menu Two</option>
    <option value="3">Menu Three</option>
  </select>
            <li>SHOP</li>
            <li>CATALOGUE</li>
            <li>NEW ARRIVALS</li>
            <li>CONTACT</li>
        </ul>
    </div>
  )
}

export default Navbar