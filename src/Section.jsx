import React from 'react'
// import Header from './pages/Header/Header'
import Contact from './pages/Contact/Contact'
import Page_not_found from './pages/Page_not_found/Page_not_found'
import Home from './pages/Home/Home'
import About from './pages/About'
import Categories from './pages/Categories/Categories'



import { Routes, Route } from 'react-router-dom'


function Section() {
  return (
    <>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Page_not_found/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/categories" element={<Categories/>}/>
        
        



    </Routes>

      
    </>
  )
}

export default Section
