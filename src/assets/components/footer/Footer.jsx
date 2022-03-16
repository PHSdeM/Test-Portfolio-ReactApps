import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
   <footer>
     <a href="#" className="footer__logo">Pedro Moura</a>

    <ul className='permalinks'>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#certificate">Certificate</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/pedrohsdm/"><BsLinkedin /></a>
      <a href="https://github.com/PHSdeM"><BsGithub /></a>
      <a href="https://www.instagram.com/phsdem/"> <BsInstagram /></a>
      <a href="https://twitter.com/__pedrohenrii"><BsTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Pedro Moura. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer