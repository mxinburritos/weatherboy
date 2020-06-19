import React from 'react';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';

const Clock = () => {
  let time = new Date();
  return (
    <>
      <Typography variant='h1' gutterBottom>
        {time.getHours() + ':' + time.getMinutes()}
      </Typography>
      <Typography variant='h2' gutterBottom>
        {time.getMonth() + '/' + time.getFullYear()}
      </Typography>
    </>
  );
};

export default Clock;
