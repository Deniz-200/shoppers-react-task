import React from 'react'
import { FaTruck } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { FaCircleQuestion } from "react-icons/fa6";

function About() {
  return (
    <div>
      <div className="row">
        <div  className='col-lg-12 col-md-4'>
        <div className="container">
<div className='que'><FaTruck className='icon4'/><div><h3>FREE SHIPPING</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
</div> </div>
<div className='que'><IoRefresh className='icon4'/><div><h3>
FREE RETURNS</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div></div>
<div className='que'><FaCircleQuestion className='icon4'/><div>
<h3>CUSTOMER SUPPORT</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div></div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default About