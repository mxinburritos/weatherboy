import React from 'react';
import styled from 'styled-components';
import 'fontsource-roboto';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { faCoffee, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TransparentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  width: 30vw;
  align-items: center;
  padding: 1em;
  margin: 1em;
`;

const Error = () => {
  return (
    <TransparentCard>
      <CardContent>
        <Grid container alignItems='center' justify='center' spacing={1}>
          <Grid item>
            <FontAwesomeIcon icon={faSadCry} />
          </Grid>
          <Grid item>
            <Typography variant='h6'>
              Sorry, please try another city!
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </TransparentCard>
  );
};

export default Error;
