import React from 'react';
import { CardContent, Typography, Grid, Card } from '@material-ui/core';
import styled from 'styled-components';

const TransparentCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.2);
  alignitems: center;
  justify-content: center;
`;

const WeatherCard = props => {
  return (
    <Grid item xs={12} md={3} component={TransparentCard}>
      <CardContent>
        <Typography variant='h3'>Day</Typography>
      </CardContent>
    </Grid>
  );
};

export default WeatherCard;
