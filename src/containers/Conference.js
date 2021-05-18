import React from 'react';

import ApplicationForm from '../components/ApplicationForm/ApplicationForm';

const Conference = () => {
  return (
    <div className="conference">
      <div className="conference__intro">
        <div className="conference__intro-box">
          <h1>Conference introduction</h1>
          <p>Break the Web is a conference for everyone. Okay mostly for web developers...</p>
          <br />
          <p>The conference lasts about three days. It has two main parts. The first day we listen to some invited speakers, and after that for the whole day we check out the presenters.</p>
          <br />
          <p>On the second day the challenge starts. Yes you heard right, the challenge. After the presenters introduced they ideas etc. we will hold a hackathon style marathon, where the challengers will try to realize/implement what the presenters introduced.</p>
          <br />
          <p>The marathon will be closed on the third day morning, we will have a three hour break and after that we will look at the projects.</p>
          <br />
          <p>Closing the day we will evaluate the presenters and the challengers work.</p>
        </div>
      </div>
      <div className="conference__attend">
        <div className="conference__attend-presenter">
          <h1>Presenter</h1>
          <p>You can come by yourself or in a team (up to four members).</p>
          <br />
          <p>As a presenter you will need an originial idea. You can't introduce us an existing idea from the web...</p>
          <p>It can be <span>anything</span>.</p>
          <br />
          <p>The purpose is that it has to be something new, or something that changes an "old fashioned" way.</p>
          <br />
          <h4>Things you need:</h4>
          <ul>
            <li>an idea</li>
            <li>a presentation</li>
            <li>dissertation</li>
            <li>challenge idea</li>
          </ul>
          <br />
          <p>*Before filling out the application form you will need to sign up.</p>
          <ApplicationForm applyText="Apply as a presenter"/>
        </div>
        <div className="conference__attend-challenger">
          <h1>Challenger</h1>
          <p>You can come by yourself or in a team (up to four members).</p>
          <br />
          <p>As a challenger you will need to attend the presentation phase and listen to the challenges.</p>
          <p>You can come up with your <span>own</span> challenge as long as it is inside the topic.</p>
          <br />
          <p>The purpose is that you will have to use the idea/idea's that you heard on the presentation</p>
          <br />
          <h4>Things you need:</h4>
          <ul>
            <li>laptop</li>
            <li>coding skills</li>
            <li>fast hands</li>
            <li>caffeine</li>
          </ul>
          <br />
          <p>*Before filling out the application form you will need to sign up.</p>
          <ApplicationForm applyText="Apply as a challenger"/>
        </div>
      </div>
    </div>
  )
}

export default Conference;
