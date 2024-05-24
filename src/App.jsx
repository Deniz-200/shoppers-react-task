import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import Advert from './Advert'
import About from './About'
import Collection from './Collection'
import Sale from './Sale'
function App() {


  return (
    <>
  <Header/>
<Navbar/>
<Advert/>
<About/>
<Collection/>
<Sale/>
    </>
  )
}

export default App
