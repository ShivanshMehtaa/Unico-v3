import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div>
      <div class="contact-container">
		<div class="contact-box">
			<div class="contact-right">
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name" />
				<input type="text" class="field" placeholder="Your Email" />
				<input type="text" class="field" placeholder="Phone" />
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
	</div>
    </div>
  )
}

export default ContactUs
