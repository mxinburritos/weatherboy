import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-lato';

import App from './App';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

const colorTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={colorTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
