import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {

  function sendEmail(e) {
    console.log(e);
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    emailjs.sendForm('gmail', 'template_73ziN6Fh', e.target, 'user_Xh2LL1ah4t45bmDc0Ujvs')
      .then((result) => {
        console.log(result.text);
          //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div class="grid-row contact-form-control-container">
        <input class="contact-form-control contact-form-control-name" type="text" name="from_name" placeholder="Enter your full name*"/>
        <input class="contact-form-control contact-form-control-phone" type="text" name="your-phone"placeholder="Enter your phone number*" />
        <input class="contact-form-control contact-form-control-email" type="email" name="user_email" placeholder="Enter your e-mail*"/>
        <textarea class="contact-form-control contact-form-control-message" name="message_html" placeholder="Type your message"/>
        <input class="contact-form-control button-theme-second-color-rgba" type="submit" value="Schedule A Demo" />
      </div>
    </form>
  );

}

export default ContactUs;