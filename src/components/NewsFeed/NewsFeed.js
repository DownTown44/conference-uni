import React from 'react';

import NewsCard from './NewsCard';
import CountDownCard from './CountdownCard/CountDownCard';

const NewsFeed = (props) => {
  return (
    <div className="newsFeed">
      <CountDownCard></CountDownCard>
      <NewsCard headline="Headline1">
        Story 1
      </NewsCard>
      <NewsCard headline="Headline2">
        Story 2
      </NewsCard>
      <NewsCard headline="Headline3">
        Story 3
      </NewsCard>
    </div>
  )
}

export default NewsFeed;
