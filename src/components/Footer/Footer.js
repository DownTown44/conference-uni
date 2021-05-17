import React from 'react';

import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <h1>Break the Web conference</h1>
        <h3>Feel free to follow us!</h3>
        <SocialLinks />
        {/* TODO: make contacts anchor to redirect */}
        <p>If you would like to be a sponsor contact the marketing department in the <a>Contacts</a> menu.<br /> It comes with much benefits!!! Also a t-shirt... maybe a pen.</p>
      </div>
      <div className="footer__end">
        <p>Copyright &copy;2021 | Break the Web | Designed by <span>Szabó Apor</span></p>
      </div>
    </footer>
  );
}

export default Footer;
