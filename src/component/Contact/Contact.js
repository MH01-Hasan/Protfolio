import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        console.log(e.target)
        e.preventDefault();
        emailjs.sendForm('service_ksp2on6', 'template_s8gmz5e', e.target, 'user_0N06Ym6Urnawx9LUgsupG')
          .then((result) => {
              alert('successfully message sent')
              
             
          }, (error) => {
              console.log(error.text);
          });
         e.target.reset()
      };
    return (
        <div>
            <div className=' contact-fild'>
     <div className='from-fild'>
     <form onSubmit={sendEmail} className='contact-information' >
      <label className='levet-text'>Name</label> <br />
      <input type="text" name="user_name" className='input-fild' /> <br />
      <label className='levet-text'>Email</label> <br />
      <input type="email" name="user_email"  className='input-fild' /> <br />
      <label className='levet-text'>Message</label> <br />
      <textarea name="message"  className='textarea' /> <br />
      <input type="submit" value="Send" className='send-item' />
      </form>
        </div>
       </div>
        </div>
    );
};

export default Contact;