import './App.css';
import Courses from './components/Courses';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import MissionVisionComponent from './components/MissionVisionComponent';
import Navbar from './components/Navbar';
import Newsletter from './components/NewsLetter';
import OurServices from './components/OurServices';
import WhatWeDo from './components/WhatWeDo';

function App() {
  

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <WhatWeDo/>
    <MissionVisionComponent/>
    <OurServices/>
    <Courses/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
