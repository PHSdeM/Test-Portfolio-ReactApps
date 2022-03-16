import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {CgTemplate} from 'react-icons/cg'
import {GoTools} from 'react-icons/go'
import {BiBookmarkAltPlus} from 'react-icons/bi'
import {MdOutlineContactPage} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><SiAboutdotme /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><CgTemplate /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><GoTools /></a>
      <a href="#certificate" onClick={() => setActiveNav('#certificate')} className= {activeNav === '#certificate' ? 'active' : ''}><BiBookmarkAltPlus /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPage /></a>
    </nav>
  )
}

export default Nav