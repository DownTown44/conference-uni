import React from 'react';

const StoryBox = (props) => {
  return (
    <div className="story__box">
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}

export default StoryBox;
