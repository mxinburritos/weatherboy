import React from 'react';
import styled from 'styled-components';
import { Card, Typography, Grid } from '@material-ui/core';

const TransparentCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.5em;
  margin: 1em;
  height: 30vh;
  width: 10vw;
`;

const LargeIcon = styled.i`
  margin-top: 0.1em;
  font-size: 5em;
  margin-bottom: 0.3em;
`;

const getDay = timestamp => {
  let date = new Date(timestamp * 1000);
  let weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  return weekday[date.getDay()];
};

const convertTemp = temp => {
  return Math.round(((parseFloat(temp) - 273.15) * 9) / 5 + 32);
};

const Forecast = ({ data }) => {
  console.log(data);
  if (!data.daily) {
    return <div></div>;
  }

  return (
    <Grid container alignItems='center' justify='center'>
      {data.daily.map(day => {
        return (
          <Grid item>
            <TransparentCard>
              <div
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h6'>{getDay(day.dt)}</Typography>
                <Typography variant='h5'>
                  {convertTemp(day.temp.min) +
                    '\u00B0' +
                    'F' +
                    ' \u2758 ' +
                    convertTemp(day.temp.max) +
                    '\u00B0' +
                    'F'}
                </Typography>
                {/* <i
                  className={`wi wi-owm-${day.weather[0].id}`}
                  style={{ fontSize: 6 + 'em' }}
                ></i> */}
                <LargeIcon
                  className={`wi wi-owm-${day.weather[0].id}`}
                ></LargeIcon>
                <Typography variant='subtitle'>
                  {day.weather[0].description.charAt(0).toUpperCase() +
                    day.weather[0].description.slice(1)}
                </Typography>
              </div>
            </TransparentCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Forecast;
