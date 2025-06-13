'use client';
import React from 'react'
import Navbar from './section/Navbar2';
import Home from './section/Home';
import FirstSection from './section/FirstSection';
import SecondSection from './section/SecondSection';
import Service from './section/Service'
import Dashboard from './section/Dashboard';
import Book from './section/Book';
import Footer from './section/Footer';
import Team from './section/Team';
import FourthSection from './section/FourthSection'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <FirstSection/>
      <SecondSection/>
      <Service/>
      <Dashboard/>
       <Team/>
      <FourthSection/>
      <Book/>
      <Footer/>
</div>
  )
}

export default App