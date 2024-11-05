import './App.css';
import Courses from './components/Courses';
import HeroSection from './components/HeroSection';
import MissionVisionComponent from './components/MissionVisionComponent';
import Navbar from './components/Navbar';
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
    </>
  )
}

export default App
