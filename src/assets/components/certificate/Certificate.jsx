import React from 'react'
import './certificate.css'
import IMG1 from '../../img/javascript-basic.png'
import IMG2 from '../../img/javascript-intermediate.png'
import IMG3 from '../../img/alghoritms.JPG'
import IMG4 from '../../img/responsive.JPG'


const data = [
    {
      id: 1,
      image: IMG1,
      title: 'JavaScript (Basic) Certificate',
      origin: 'https://www.hackerrank.com/certificates/2113c52a0626',
      linkedin: 'https://www.linkedin.com/in/pedrohsdm/'
    
    },
    {
      id: 2,
      image: IMG2,
      title: 'JavaScript (Intermediate) Certificate',
      origin: 'https://www.hackerrank.com/certificates/0f930ea1352a',
      linkedin: 'https://www.linkedin.com/in/pedrohsdm/'
    
    },
    {
      id: 3,
      image: IMG3,
      title: 'JavaScript Algorithims and Data Structures',
      origin: 'https://www.freecodecamp.org/certification/phsdem/javascript-algorithms-and-data-structures',
      linkedin: 'https://www.linkedin.com/in/pedrohsdm/'
    
    },
    {
      id: 4,
      image: IMG4,
      title: 'Responsive Web Design',
      origin: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/pedrohsdm/'
    
    },
    ]

const Certificate = () => {
    return (
        <section id='certificate'>
          <h5>My Recent Study</h5>
          <h2>Certificate</h2>
    
          <div className="container certificate__container">
            {
              data.map(({id, image,title,github,demo}) => {
                return (
                  <article key={id} className="certificate__item">
                  <div className="certificate__item-image">
                  <img src={image} alt={title} />
                  </div>
                    <h3>{title}</h3>
    
                    <div className="certificate__item-cta">
                      <a href={github} className='btn' target='_blank'>Origin</a>
                      <a href={demo}className='btn btn-primary' target='_blank'>LinkedIn</a>
                    </div>
                    
                </article>
                )
              })
            }
          </div>
        </section>
      )
 }

export default Certificate