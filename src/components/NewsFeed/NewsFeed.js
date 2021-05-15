import React from 'react';

import NewsCard from './NewsCard';
import CountDownCard from './CountdownCard/CountDownCard';

const NewsFeed = (props) => {
  return (
    <div className="newsFeed">
      <CountDownCard></CountDownCard>
      <NewsCard headline="Web assembly">
        The dream of WebAssembly is not to kill JavaScript but to work alongside of it, to help super charge processing-heavy or low-level tasks — tasks that benefit from Rust’s focus on performance.
      </NewsCard>
      <NewsCard headline="CSS with superpowers">
        SASS is a CSS extension that lends superpower and elegance to this formal simple style language. SASS gives you the ability to use variables, nested rules...
      </NewsCard>
      <NewsCard headline="Speakers on conference">
        This year we have a little bit of suprise! We got some of the most interesting speakers in the life of the BTW conference.
      </NewsCard>
    </div>
  )
}

export default NewsFeed;
