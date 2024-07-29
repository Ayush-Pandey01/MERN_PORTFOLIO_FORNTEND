import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro.js'
import About from './About.js'
import Experiences from './Experiences.js'
import Project from './Project.js'
import Education from './Education.js'
import ContactUs from './ContactUs.js'
import Footer from './Footer.js'
import LeftSider from './LeftSider.js'
import { useSelector } from 'react-redux'

function Home() {
  const { portfolioData} = useSelector((state)=>state.root);
  return (
    <div >
      <Header/>
      {portfolioData &&    <div className=' bg-gray-900 text-black lg:ps-20 sm:p-2 '>
        <Intro/>
        <About/>
        <Experiences/>
        <Project/>
        <Education/>
        <ContactUs/>
        <Footer/>
        <LeftSider/>

      </div>}
   
    </div>
  )
}

export default Home
