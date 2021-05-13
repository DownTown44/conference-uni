import React, {useState, useEffect} from 'react';

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
  )
}

export default HomePage;