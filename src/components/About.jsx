import React from 'react'
import { FaCodepen, FaGithub, FaLinkedinIn  } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from "react-icons/ti";

const About = () => {
  return (
    <section className='resume-section' id='about' >
        <div className="section-container">
        <div className="content">
            <h1>Lisa <span className="text-fancy">Wagner</span></h1>
            <div className="subheading mb-3">I'm a <span className="typed" typed-strings="Lifelong Learner, Software Developer, Solutions Creator" ></span></div>
            <p className="mb-3">I'm a creative coder who enjoys making amazing things with web technologies. I develop modern Web Apps and UI/UX components using React.JS, Node.JS, Redux, Gatsby, and the MERN Stack</p>
          </div>

          <ul className="social">
            <li>
              <a href="#" target="_blank" className="social-item"><FaGithub></FaGithub></a> 
            </li>
            <li>
            <a href="#" target="_blank" className="social-item"><FaCodepen></FaCodepen></a>
            </li>
            <li>
              <a href="#" target="_blank" className="social-item"><FaLinkedinIn></FaLinkedinIn></a>
            </li>
          </ul>
  
    </div>
    </section>
  )
}

export default About