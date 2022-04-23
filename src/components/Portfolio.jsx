import React from 'react'

import images from '../constants/images'
import { BsBoxArrowUpRight, BsCodeSlash } from 'react-icons/bs'


const Portfolio = () => {
  return (
    <section className='resume-section' id='portfolio'>

      <div className="section-container">

        <h2 className="mb-3">Portfolio</h2>
        <p className="mb-3">
        Welcome to my online portfolio. In building JavaScript applications, I can deliver solutions optimized for performance and scalability. I am taking on freelance work at the moment. Want some help building your software?
        </p>

        <div className="cards">

        {/* single card */}
        <article className="card">
            <div className="card-img">
              {/* <img src="img/movieDB.png" alt="Movie Database image"> */}
              <img className="" src={images.moviedb} alt='Movie Database landing page' />
            </div>
            <div className="card-info">
              <h3>The Movie DB</h3>
              <p>A web app for looking up details on your favourite movies. External API calls, React Router use.</p>
              <div className="card-links">
                <a className="card-link" href="#" target="_blank" aria-label="Github code link button" rel="noreferrer">
                  <BsCodeSlash />
                </a>
                <a className="card-link" href="https://super-react-moviedb.netlify.app/" target="_blank" aria-label="Website link button" rel="noreferrer">
                  <BsBoxArrowUpRight />
                </a>

              </div>
            </div>
            <div className="card-tags">
              <p>React</p>
              <p>TypeScript</p>
            </div>
          </article>
        {/* end single card */}

        {/* single card */}
        <article className="card">
            <div className="card-img">
              {/* <img src="img/movieDB.png" alt="Movie Database image"> */}
              <img className="" src={images.moviedb} alt='Movie Database landing page' />
            </div>
            <div className="card-info">
              <h3>The Movie DB</h3>
              <p>A web app for looking up details on your favourite movies. External API calls, React Router use.</p>
              <div className="card-links">
                <a className="card-link" href="#" target="_blank" aria-label="Github code link button" rel="noreferrer">
                  <BsCodeSlash />
                </a>
                <a className="card-link" href="https://super-react-moviedb.netlify.app/" target="_blank" aria-label="Website link button" rel="noreferrer">
                  <BsBoxArrowUpRight />
                </a>

              </div>
            </div>
            <div className="card-tags">
              <p>React</p>
              <p>TypeScript</p>
            </div>
          </article>
        {/* end single card */}

        {/* single card */}
        <article className="card">
            <div className="card-img">
              {/* <img src="img/movieDB.png" alt="Movie Database image"> */}
              <img className="" src={images.moviedb} alt='Movie Database landing page' />
            </div>
            <div className="card-info">
              <h3>The Movie DB</h3>
              <p>A web app for looking up details on your favourite movies and to see who the key actors are.</p>
              <div className="card-links">
                <a className="card-link" href="#" target="_blank" aria-label="Github code link button" rel="noreferrer">
                  <BsCodeSlash />
                </a>
                <a className="card-link" href="https://super-react-moviedb.netlify.app/" target="_blank" aria-label="Website link button" rel="noreferrer">
                  <BsBoxArrowUpRight />
                </a>

              </div>
            </div>
            <div className="card-tags">
              <p>React</p>
              <p>TypeScript</p>
            </div>
          </article>
        {/* end single card */}

        </div>
        

      </div>
      {/* end section-container */}

    </section>
  )
}

export default Portfolio