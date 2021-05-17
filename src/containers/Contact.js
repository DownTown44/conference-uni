import React from 'react'

import { HiLocationMarker } from 'react-icons/hi';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { HiMail } from 'react-icons/hi';

import IconParagraph from '../components/ContactCardComponents/IconParagraph';
import SocialLinks from '../components/Footer/SocialLinks';

const Contact = () => {
  return (
    <div className="contact">
      {/* FORM */}
      <div className="contact__formBox">
        <from className="contact__form">
          <div className="contact__form-field">
            <label>Name</label>
            <input 
              type="name"
              name="name" />
          </div>
          <div className="contact__form-field">
            <label>E-mail</label>
            <input 
              type="email"
              name="email" />
          </div>
          <div className="contact__form-field">
            <label>Company</label>
            <input 
              type="company"
              name="company"
              placeholder="Optional" />
          </div>
          <div className="contact__form-field">
            <label>Message</label>
            <textarea name="textarea"></textarea>
          </div>
          <button
              className="ctaButton"
              type="submit">
              Submit</button>
        </from>
      </div>

      {/* CONTACTCARD */}
      <div className="contact__contactCard">
        <h3>Do not hesitate!</h3>
        <IconParagraph icon={<HiLocationMarker className="icon" />}>Los Angeles, California</IconParagraph>
        <IconParagraph icon={<IoPhonePortraitOutline className="icon" />}>213-200-5126</IconParagraph>
        <IconParagraph icon={<HiMail className="icon" />}>btwconference@gmail.com</IconParagraph>
        <div className="contact__divider"/>
        <SocialLinks modClass="socialLinks--dark"/>
      </div>
    </div>
  )
}

export default Contact;
