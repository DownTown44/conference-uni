import React from 'react';

import LinkButton from '../Buttons/LinkButton';

const NewsCard = (props) => {
  return (
    <div className="newsCard">
      <h2 className="newsCard__headline">{props.headline}</h2>
      <img src={props.image}></img>
      <p>{props.children}</p>
      <LinkButton />
    </div>
  );
}

export default NewsCard;
