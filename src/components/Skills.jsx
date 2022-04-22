import React from 'react'

import skillicons from '../constants/skillicons'

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
            <img className="iconify" src={skillicons.javascript} alt='Javascript Logo' />
          </div>
          <h3 className="skills-title">Javascript</h3>
          <p className="skills-desc">For small-scale apps, I use plain JS to modify app behaviours and responses to user actions instead of huge libraries. Clean and clear code.
          </p>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.react} alt='React Logo' />
          </div>
          <div className="skills-title">ReactJS</div>
          <div className="skills-desc">Able to build efficient, reusable components for complex, scaleable apps with React, React Router and Redux.</div>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.html5Plain} alt='HTML5 Logo' />
            <img className="iconify" src={skillicons.css3Plain} alt='CSS3 Logo' />

          </div>
          <div className="skills-title">HTML5 + CSS3</div>
          <div className="skills-desc">Able to accurately translate UI/UX designs into well-constructed, semantic code and bridge the gap between graphic design and technical implementation.</div>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.graphql} alt='GraphQL Logo' />
          </div>
          <div className="skills-title">GraphQL + API's</div>
          <div className="skills-desc">Can build backend Schema's for Node.js and create frontend GraphQL queries to fetch data with a single endpoint API call.</div>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.nodePlain} alt='NodeJS Logo' />
          </div>
          <div className="skills-title">NodeJS</div>
          <div className="skills-desc">Can build apps with the MERN Stack (Mongo, Express, React, Node). This stack is ideally suited for JSON-heavy, cloud-native cases that require dynamic web interfaces.</div>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.gatsby} alt='Gatsby Logo' />
          </div>
          <div className="skills-title">GatsbyJS</div>
          <div className="skills-desc">Experience building Server Side ReactJS solutions with GatsbyJS incorporating de-coupled services including Netlify, MongoDB and headless CMSs.</div>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.mongodbPlain} alt='MongoDB Logo' />
          </div>

          <div className="skills-title">MongoDB</div>
          <div className="skills-desc">Able to set up and configure MongoDB in the cloud so apps can be built faster, handle highly diverse data types, and scale better.</div>
        </div>

        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.firebase} alt='Firebase Logo' />
          </div>
          <div className="skills-title">Firebase</div>
          <div className="skills-desc">Able to implement Firebase Authentication protocols in apps requiring secure user logins.</div>
        </div>
        
      </div> 

      {/* <!-- next skill segment --> */}
    
      <div className="subheading mb-3">Other Tools and Technologies</div>
      
      <div className="skills-grid grid-gutters grid-full">
        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.wpPlain} alt='WordPress Logo' />
          </div>
          <div className="skills-title">WordPress</div>
          <div className="skills-desc">My coding journey began with WordPress and the LAMP Stack. I modified existing WP templates and created bespoke pages as per design specs.</div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.sass} alt='Sass Logo' />
          </div>
          <div className="skills-title">SASS</div>
          <div className="skills-desc">For styling React Components, I often use CSS Modules or Styled Components, and occasionally SCSS. </div>
        </div>
        <div className="skills-cell">
          <div className="skills-icon">
            <img className="iconify" src={skillicons.d3jsPlain} alt='D3JS Logo' />
          </div>
          <div className="skills-title">D3JS</div>
          <div className="skills-desc">Able to create powerful data driven visualization components for apps with the D3.js library.</div>
        </div>
        <div className="skills-cell">
        <div className="skills-icon">
            <img className="iconify" src={skillicons.unity} alt='Unity Logo' />
          </div>
          <div className="skills-title">Unity</div>
          <div className="skills-desc">In my spare-time, I enjoy building WebGL games with the Unity Game Engine in C#.</div>
        </div>


      </div> 
    </div>
    </section>
  )
}

export default Skills