import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {
  return (
    <section className='resume-section' id="contact" >
            <h2 class="mb-3">Contact</h2>

<div className="contact-row">

  <div className="contact-right">
    <div className="contact-col form-wrapper">
      <div className="subheading">
        <span className="special-typed">
          <Typewriter 
            loop
            cursor
            cursorStyle={'|'}
            typeSpeed={90}            
            deleteSpeed={80}
            delaySpeed={3000}
            words={["Nice to meet you!", "Let's build something amazing!"]}
            />
        </span>
      </div>

      <p>Have a question or just want to get in touch? Let's chat.</p>
      <form action="" method="POST">

        <div className="form-group">
          {/* <label for="name">Full Name</label>
          <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" /> */}
          <label for="name">Full Name<input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" /></label>
        </div> 

        <div className="form-group">
          <label for="email">Email Address<input type="email" name="Email" id="email" placeholder="email@domain.tld" required /></label>
        </div> 

        <div className="form-group">
          <label for="message">Message<textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea></label>       
        </div> 

        <div className="form-group">
          <button type="submit" className="submit">Send</button>
        </div> 
      </form>
    </div>

  </div>
</div>
    </section>
  )
}

export default Contact