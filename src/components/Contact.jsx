import React from 'react'

const Contact = () => {
  return (
    <section className='resume-section' id="contact" >
            <h2 class="mb-3">Contact</h2>

<div className="contact-row">

  <div className="contact-right">
    <div className="contact-col form-wrapper">
      <div className="subheading"><span className="special-typed"></span></div>

      <p>Have a question or just want to get in touch? Let's chat.</p>
      <form action="" method="POST">

        <div className="form-group">
          <label for="name">Full Name</label>
          <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
        </div> 

        <div className="form-group">
          <label for="email">Email Address</label>
          <input type="email" name="Email" id="email" placeholder="email@domain.tld" required />
        </div> 

        <div className="form-group">
          <label for="message">Message</label>
          <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
        </div> 

        <div className="form-group">
            send
          {/* <button type="submit" className="submit">Send</i></button> */}
        </div> 
      </form>
    </div>

  </div>
</div>
    </section>
  )
}

export default Contact