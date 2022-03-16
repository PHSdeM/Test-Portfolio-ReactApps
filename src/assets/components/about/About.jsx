import React from 'react'
import './about.css'
import ME from '../../img/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

  
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <BsBook className='about__icon'/>
              <h5>Experience</h5>
              <small>Junior</small>
            </article>
            <article className='about__card'><a href="#certificate">
              <FaAward className='about__icon'/>
              <h5>Certificate</h5>
              <small>4</small>
            </a></article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>12 studies projects</small>
            </article>
          </div>
          <p>
          I'm a developer starting my career, I have a knowledge base in java, c# and android, but I decided to focus on web development.
          I'm looking to evolve as a professional, always looking for something new, for now I'm focused on ReactJs and then I'll go fully to the backend.
          </p>

          <a href="#contact" className='btn btn-primary'>Le'ts Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About