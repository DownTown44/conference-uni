import React from 'react';

import SignupForm from '../components/Signup/SignupForm';
import CommunityCard from '../components/Community/CommunityCard';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__form">
        <SignupForm />
      </div>
      <div className="signup__community">
        <div className="signup__community-content">
          <CommunityCard title="We would love to have you!">Join our community on any social site!</CommunityCard>
          <CommunityCard title="You are looking for more?">Feel free to contact us about open positions!</CommunityCard>
          <CommunityCard title="Can't make it to the conference?">No worries we will be streaming the event through twitch!</CommunityCard>
        </div>
      </div>
    </div>
  );
}

export default Signup;
