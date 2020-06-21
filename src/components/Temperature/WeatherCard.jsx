import React from 'react';
import { CardContent, Typography, Grid, Card } from '@material-ui/core';

import styles from './Cards.module.css';

const WeatherCard = props => {
  let cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '45vw',
  };
  return (
    <Grid item xs={12} md={3} component={Card} className={styles.card}>
      <CardContent>
        <Typography variant='h3'>Day</Typography>
      </CardContent>
    </Grid>
  );
};

export default WeatherCard;
