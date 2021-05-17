import React from 'react';

const IconParagraph = (props) => {
  return (
    <div className="iconParagraph">
      {props.icon}
      <p>{props.children}</p>
    </div>
  );
}

export default IconParagraph;
