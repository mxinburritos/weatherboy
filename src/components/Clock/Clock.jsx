import React, { useState, useEffect } from 'react';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timeID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timeID);
    };
  });

  const tick = () => {
    setTime(new Date());
  };

  return (
    <>
      <Typography variant='h3' gutterBottom>
        {time.toLocaleTimeString()}
      </Typography>
      <Typography variant='h3' gutterBottom>
        {time.getMonth() + '/' + time.getDate() + '/' + time.getFullYear()}
      </Typography>
    </>
  );
};

export default Clock;
