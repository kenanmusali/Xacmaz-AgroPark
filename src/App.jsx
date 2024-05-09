import React from 'react'
import { LanguageProvider } from './Assets/Language';
import './App.css'
import './font.css'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Home from './Page/Home'
import About from './Page/About'
import Careers from './Page/Career'
import Contact from './Page/Contact'
import Gallery from './Page/Gallery'
import News from './Page/News'
import Products from './Page/Products'
import { Route, Routes } from 'react-router'
import NotFound404 from './Page/NotFound404'
import Loading from './Page/Loading'
import NewsDetail from './Page/NewsDetais'
import ShortCut from './Components/ShortCut'
import CareerDetails from './Page/CareerDetails'
import DarkMode from './Assets/DarkMode'
import Responsive from './Assets/Responsive'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

function App() {
  return (
    <div>
      <Loading />
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
          <Route path='/careers' element={<Layout><Careers /></Layout>} />
          <Route path='/careers/:id' element={<Layout><CareerDetails /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
          <Route path='/gallery' element={<Layout><Gallery /></Layout>} />
          <Route path='/news' element={<Layout><News /></Layout>} />
          <Route path='/news/:id' element={<Layout><NewsDetail /></Layout>} />
          <Route path='/products' element={<Layout><Products /></Layout>} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </LanguageProvider>
      <ShortCut />
      <DarkMode />
      <Responsive />
    </div>
  )
}

export default App
