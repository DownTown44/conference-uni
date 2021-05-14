import React from 'react';

const CTAButton = (props) => {
  return (
    <a href={props.ctaHref} className="ctaButton">{props.children}</a>
  );
}

export default CTAButton;