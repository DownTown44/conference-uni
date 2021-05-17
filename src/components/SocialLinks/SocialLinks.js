import React from 'react';

import { AiFillFacebook } from 'react-icons/ai'; 
import { AiFillInstagram } from 'react-icons/ai'; 
import { AiFillTwitterSquare } from 'react-icons/ai'; 
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const SocialLinks = (props) => {
  return (
    <div className={"socialLinks " + props.modClass}>
      <AiFillFacebook className="socialLinks__icon" />
      <AiFillInstagram className="socialLinks__icon" />
      <AiFillTwitterSquare className="socialLinks__icon" />
      <AiFillYoutube className="socialLinks__icon" />
      <FaGithubSquare className="socialLinks__icon" />
    </div>
  );
}

export default SocialLinks;
