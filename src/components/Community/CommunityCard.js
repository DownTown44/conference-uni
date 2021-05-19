import React from 'react';

const CommunityCard = (props) => {
  return (
    <div className="communityCard">
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  )
}

export default CommunityCard;
