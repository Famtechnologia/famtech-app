'use client';
import React from 'react'
import Navbar from './section/Navbar';
import Home from './section/Home';
import FirstSection from './section/FirstSection';
import SecondSection from './section/SecondSection';
import Service from './section/Service';
import Dashboard from './section/Dashboard';
import ThirdSection from './section/ThirdSection';
import Book from './section/Book';
import Footer from './section/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <FirstSection/>
      <SecondSection/>
      <Service/>
      <Dashboard/>
      <ThirdSection/>
      <Book/>
      <Footer/>
    </div>
  )
}

export default App