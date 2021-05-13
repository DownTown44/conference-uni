import React from 'react';
import StoryBox from './StoryBox';

const Story = (props) => {
  return (
    <div className={"story " + props.uClass}>
      <StoryBox icon= {props.icon} title={props.title}>
        {props.children}
      </StoryBox>
      <img src={props.image} />
    </div>
  );
}

export default Story;
