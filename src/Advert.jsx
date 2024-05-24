import React from 'react'

function Advert() {
  return (
    <div className='container'>
      <section className='big'>
      <div className="row advert">
        <div className='col-lg-7 col-md-12'>
          <img src="https://themewagon.github.io/minishop/images/product-4.png" alt="" className='shoes'/></div>
        <div className="col-lg-5 col-md-12">
          <div className='textpho'>
            <h1>Finding Your Perfect Shoes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            <button className='shop'>SHOP NOW</button></div>
        </div>
      </div>
   </section>
    </div>
  )
}

export default Advert