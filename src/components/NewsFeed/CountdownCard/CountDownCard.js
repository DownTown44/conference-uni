import React, { useState, useEffect } from 'react';

const CountDownCard = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // The plus sign will cast the date as an integer
    const difference = +new Date(`10/10/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countDownCard">
      <h3>The next conference is in:</h3>
      <div className="countDownCard__countDown">
        {timerComponents.length ? timerComponents : <span>It's ON!</span>}
      </div>  
      <p>Are you ready?</p>
      <div className="countDownCard__datebox">
        <p>Date:</p>
      </div>
    </div>
  );
}

export default CountDownCard;
