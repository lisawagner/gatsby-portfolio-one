import React from 'react'
// import { Skillicons } from '../constants'
// import { Skillicons } from '../constants/Skillicons'
import jsIcon from '../assets/icons/javascript-plain.svg'

const Skills = () => {
  return (
    <section className='resume-section' id='skills'>
      <div className="section-container">
      <h2 className="mb-3">Skills</h2>
      <p className="mb-3"> Front End Development is my main area of expertise, building small to medium web application. I love headless CMSs and decoupling everything. My current favourite tech stack is: React, Gatsby and deploying on Netlify with MongoDB and Firebase for authentication. In the past, I've dabbled in WP development</p>
      <div className="subheading mb-1">Current Tools and Technologies</div>
      <div className="skills-grid grid-gutters grid-full">
        <div className="skills-cell">
          <div className="skills-icon">
          <img className="iconify" src={jsIcon} alt="Javascript Logo"/>
            {/* <img src={Skillicons.JavaScript} alt='Javascript Logo' /> */}
            <i className="devicon-javascript-plain colored"></i>

            </div>
          <div className="skills-title">Javascript</div>
          <div className="skills-desc">For small-scale apps, I use plain JS to modify app behaviours and responses to user actions instead of huge libraries. Clean and clear code.
          </div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-react-original colored"></i></div>
          <div className="skills-title">ReactJS</div>
          <div className="skills-desc">Able to build efficient, reusable components for complex, scaleable apps with React, React Router and Redux.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
          </div>
          <div className="skills-title">HTML5 + CSS3</div>
          <div className="skills-desc">Able to accurately translate UI/UX designs into well-constructed, semantic code and bridge the gap between graphic design and technical implementation.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-graphql-plain colored"></i></div>
          <div className="skills-title">GraphQL + API's</div>
          <div className="skills-desc">Can build Schema's for backend apps (e.g. Node.js) and create frontend GraphQL queries to fetch data with a single endpoint API call.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-nodejs-plain colored"></i></div>
          <div className="skills-title">NodeJS</div>
          <div className="skills-desc">Can build apps with the MERN Stack (Mongo, Express, React, Node). This stack is ideally suited for JSON-heavy, cloud-native cases that require dynamic web interfaces.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-gatsby-plain colored"></i></div>
          <div className="skills-title">GatsbyJS</div>
          <div className="skills-desc">Experience building Server Side ReactJS solutions with GatsbyJS incorporating de-coupled services including Netlify, MongoDB and headless CMSs.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon">
            <i className="devicon-mongodb-plain colored"></i>
          </div>
          <div className="skills-title">MongoDB</div>
          <div className="skills-desc">Able to set up and configure MongoDB in the cloud so apps can be built faster, handle highly diverse data types, and scale better.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-firebase-plain colored"></i></div>
          <div className="skills-title">Firebase</div>
          <div className="skills-desc">Able to implement Firebase Authentication protocols in apps requiring secure user logins.</div>
        </div>
      </div> 

      {/* <!-- next skill segment --> */}
    
      <div className="subheading mb-3">Other Tools and Technologies</div>
      
      <div className="skills-grid grid-gutters grid-full">
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-wordpress-plain colored"></i></div>
          <div className="skills-title">WordPress</div>
          <div className="skills-desc">I began my coding journey with WordPress and the LAMP Stack. My focus was modifying existing WP templates and creating bespoke pages as per design team specifications.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-sass-original colored"></i></div>
          <div className="skills-title">SASS</div>
          <div className="skills-desc">For styling React Components, I often use CSS Modules or Styled Components, and occasionally SCSS. </div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-d3js-plain colored"></i></div>
          <div className="skills-title">D3JS</div>
          <div className="skills-desc">Able to create powerful data driven visualization components for apps with the D3.js library.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon"><i className="devicon-unity-original colored"></i></div>
          <div className="skills-title">Unity</div>
          <div className="skills-desc">In my spare-time, I enjoy building WebGL games with the Unity Game Engine in C#.</div>
        </div>


      </div> 
    </div>
    </section>
  )
}

export default Skills