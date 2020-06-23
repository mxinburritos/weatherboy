import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import WeatherCard from './WeatherCard';
import styles from './Cards.module.css';

const Cards = props => {
  return (
    <div className={styles.container}>
      <Grid container space={3} justify='center'>
        <WeatherCard />
      </Grid>
    </div>
  );
};

export default Cards;
