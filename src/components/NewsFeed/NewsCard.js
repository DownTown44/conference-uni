import React from 'react';

import LinkButton from '../Buttons/LinkButton';

const NewsCard = (props) => {
  return (
    <div className="newsCard">
      <h2>{props.headline}</h2>
      {/* TODO: maybe an image? */}
      <p>{props.children}</p>
      <LinkButton />
    </div>
  );
}

export default NewsCard;
