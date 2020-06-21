import React from 'react';
import { Box, Card, Typography, Grid } from '@material-ui/core';
import styles from './App.module.css';
import cx from 'classnames';

import { Clock, Cards, SearchBar } from './components';

const App = () => {
  return (
    <div className={cx(styles.container, styles.overlay)}>
      <Box m={2}>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={6}>
            <Clock />
          </Grid>
        </Grid>
      </Box>
      <Cards />
    </div>
  );
};

export default App;
