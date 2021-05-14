import React from 'react';
import StoryBox from './StoryBox';
import CTAButton from '../Buttons/CTAButton';

const Story = (props) => {
  let imageOrButton = <img src={props.image} />;
  if (!props.image) {
    imageOrButton = <CTAButton ctaHref={props.ctaHref} >{props.buttonText}</CTAButton>;
  }
  
  return (
    <div className={"story " + props.uClass}>
      <StoryBox icon= {props.icon} title={props.title}>
        {props.children}
      </StoryBox>
      {imageOrButton}
    </div>
  );
}

export default Story;
