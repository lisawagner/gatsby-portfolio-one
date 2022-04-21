import React from 'react'
import { Link } from 'gatsby'

const About = () => {
  return (
    <section className='resume-section' id='about' >
        <Link to='/'>About</Link>
        <div class="section-container">
        <div class="content">
            <h1>Lisa <span class="text-fancy">Wagner</span></h1>
            <div class="subheading mb-3">I'm a <span class="typed" typed-strings="Lifelong Learner, Software Developer, Solutions Creator" ></span></div>
            <p class="mb-3">I'm a creative coder who enjoys making amazing things with web technologies. I develop modern Web Apps and UI/UX components using React.JS, Node.JS, Redux, Gatsby, and the MERN Stack</p>
          </div>

          <ul class="social">
            <li class="social-item">
              <a href="#" target="_blank">
                {/* <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa-brands fa-github fa-stack-1x fa-inverse"></i>
                </span> */}
              </a>
            </li>
            <li class="social-item">
              <a href="#" target="_blank">
                {/* <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa-brands fa-codepen fa-stack-1x fa-inverse"></i>
                </span> */}
              </a>
            </li>
            <li class="social-item">
              <a href="#" target="_blank">
                {/* <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa-brands fa-linkedin-in fa-stack-1x fa-inverse"></i>
                </span> */}
              </a>
            </li>
          </ul>
  
    </div>
    </section>
  )
}

export default About