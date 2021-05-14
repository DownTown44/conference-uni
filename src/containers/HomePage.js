import React, {useState, useEffect} from 'react';

import Story from '../components/Story/Story';
import NewsFeed from '../components/NewsFeed/NewsFeed';

import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaThumbtack } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import Boxes from '../assets/boxes.png';
import Topics from '../assets/topics.png';

const HomePage = () => {
  // Array index
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  {/* some inspiration, a prize, development, a community, an experience, innovation */}
  const words = [" some inspiration?", " a prize?", " development?", " a community?", " an experience?", " fame?", " innovation?"];
  // Typewriter
  useEffect(() => {
    // Returns nothing, we went through the array
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && index !== words.length -1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) =>  prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === words[index].length ? 1000 : 100, parseInt(Math.random() * 200)));
    
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 450);
    return () => clearTimeout(timeout2);
  }, [blink]); 

  return (
    <div className="homePage">
      <div className="homePage__picture">
        <section className="homePage__welcomeSection">
          <div className="homePage__greeting">
            <h1>Welcome</h1>
            <h2 className="homePage__changingSentence">Looking for 
              <span>
              {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
              </span>
            </h2>
            <h2>The possibilities are endless on the <span>BTW</span> conference.</h2>
          </div>
        </section>
      </div>
      <section className="homePage__hook">
        <Story
          uClass="u-flex-left" 
          icon={<FaChalkboardTeacher className="story__box__board-icon" />}
          image={Boxes}
          title="Break the web">
            Break the web is a conference for top notch web developers.
            You will hear about the newest, most impactful changes on the web.
            You can attend as a participant or as a presenter!
        </Story>
        <Story
          uClass="u-flex-right" 
          icon={<FaThumbtack className="story__box__board-icon" />}
          image={Topics}
          title="Topics">
            We discuss anything that is web development or an indispensable part of it. Basically Full Stack!
            Content design, visual design, usability, security, speed, optimization, languages, frameworks, new technologies (like WebAssembly), should I go on?
        </Story>
        <Story
          uClass="u-flex-left" 
          icon={<FaRegLightbulb className="story__box__board-icon" />}
          buttonText="Break the web!"
          ctaHref=""
          title="Have an idea?">
            To innovate, or just to get better everyday, you need to think outside of the box, and to think outside you'll need to break out... you'll need to break the web.
        </Story>
      </section>
      <section className="homePage__news">
        <NewsFeed />
      </section>
    </div>
  )
}

export default HomePage;
