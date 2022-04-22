import React from 'react'
import { FaCodepen, FaGithub, FaLinkedinIn  } from 'react-icons/fa'

import typewriter, { Typewriter } from 'react-simple-typewriter'

const About = () => {
  return (
    <section className='resume-section' id='about' >
        <div className="section-container">
        <div className="content">
            <h1>Lisa <span className="text-fancy">Wagner</span></h1>
            {/* <div className="subheading mb-3">I'm a <span className="typed" typed-strings="Lifelong Learner, Software Developer, Solutions Creator" ></span></div> */}
            <div className="subheading mb-3">I'm a{' '} 
              <span className="typed" typed-strings="Lifelong Learner, Software Developer, Solutions Creator">
                <Typewriter 
                  loop
                  cursor
                  cursorStyle='_'
                  typeSpeed={90}            
                  deleteSpeed={80}
                  delaySpeed={3000}
                  words={['Lifelong Learner', 'Frontend Developer', 'Solutions Creator']}
                />
              </span>
            </div>

            <p className="mb-3">I'm a creative coder who enjoys making amazing things with web technologies. I develop modern Web Apps and UI/UX components using React.JS, Node.JS, Redux, Gatsby, and the MERN Stack</p>
          </div>

          <ul className="social">
            <li>
              <a href="https://github.com/lisawagner"  aria-label="Github link button" rel="noreferrer" target="_blank" className="social-item"><FaGithub></FaGithub></a> 
            </li>
            <li>
            <a href="https://codepen.io/wgnr" aria-label="Codepen link button" rel="noreferrer" target="_blank" className="social-item"><FaCodepen></FaCodepen></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lisa-wagner-87ba929a/" aria-label="LinkedIn link button" rel="noreferrer" target="_blank" className="social-item"><FaLinkedinIn></FaLinkedinIn></a>
            </li>
          </ul>
  
    </div>
    </section>
  )
}

export default About