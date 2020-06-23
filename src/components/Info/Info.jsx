import React, { useState, useEffect } from 'react';
import { Typography, Card, Grid, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import WeatherIcon from 'react-icons-weather';
import 'fontsource-roboto';
import '../../assets/css/weather-icons.min.css';

const FormatLoader = styled(CircularProgress)`
  color: rgba(255, 255, 255, 1);
  margin: 3em;
`;

const TransparentCard = styled(Card)`
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  width: 30vw;
  align-items: center;
  padding: 1em;
  margin: 1em;
  margin-top: 0em;
`;

const Info = ({ data }) => {
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

  if (!data.name) {
    return <FormatLoader />;
  } else {
  }

  return (
    <TransparentCard>
      <Typography variant='h6'>
        {time.toLocaleTimeString() + ' '}
        {time.getMonth() + '/' + time.getDate() + '/' + time.getFullYear()}
      </Typography>
      <Typography variant='h3'>{data.name}</Typography>
      <Typography variant='h1'>
        {Math.round(((parseFloat(data.main.temp) - 273.15) * 9) / 5 + 32) +
          '\u00B0' +
          'F'}
      </Typography>
      <Grid container alignItems='center' justify='center' spacing={1}>
        <Grid item>
          <i className={`wi wi-owm-${data.weather[0].id}`}></i>
        </Grid>
        <Grid item>
          <Typography>
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
          </Typography>
        </Grid>
      </Grid>
    </TransparentCard>
  );
};

export default Info;
