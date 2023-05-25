import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div>
      <div class="contact-container">
		<div class="contact-box">
			<div className="contact-left">
				<h2>Get In Touch</h2>
				<p>Hey👋🏻 shoot a message and we are all in to hear. <br />

Connect with us on WhatsApp or DM on Instagram too.</p>

			</div>
			<div class="contact-right">
				<h2>WE ARE ALL EARS</h2>
				<input type="text" class="field" placeholder="Your Name" />
				<input type="email" class="field" placeholder="Your Email" />
				<input type="number" class="field" placeholder="Phone" />
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
	</div>
    </div>
  )
}

export default ContactUs