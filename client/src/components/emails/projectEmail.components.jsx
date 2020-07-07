import React from 'react';
import emailjs from 'emailjs-com';

const RequestQuote = () => {

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
    <form enctype="multipart/form-data" className="contact-form request-quote" onSubmit={sendEmail}>
      <div class="grid-row contact-form-control-container">
        <h2>Tell us about your project</h2>
        <label>Name*</label>
        <input class="contact-form-control contact-form-control-name" type="text" name="name"/>
        <label>Email*</label>
        <input class="contact-form-control contact-form-control-email" type="email" name="email"/>
        <label>Company</label>
        <input class="contact-form-control contact-form-control-company" type="text" name="company"/>
        <label>Project description</label>
        <textarea class="contact-form-control contact-form-control-message" name="description"/>
        <label>Attach File</label>
        <input type="file" name="file"/> 
        <input class="contact-form-control button-theme-second-color-rgba" type="submit" value="Request A Quote" />
      </div>
    </form>
  );

}

export default RequestQuote;