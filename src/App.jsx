import React from 'react'
import './App.css'
import './font.css'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Home from '../Page/Home'
import About from '../Page/About'
import Careers from '../Page/Career'
import Contact from '../Page/Contact'
import Gallery from '../Page/Gallery'
import News from '../Page/News'
import Products from '../Page/Products'
import { Route, Routes } from 'react-router'




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/news' element={<News />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App