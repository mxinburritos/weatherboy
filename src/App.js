import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, Grid } from '@material-ui/core';
import styles from './App.module.css';
import cx from 'classnames';
import FadeIn from 'react-fade-in';
import Fade from '@material-ui/core/Fade';
import { Motion, spring } from 'react-motion';

import { Info, Cards, SearchBar, Error, Forecast } from './components';
import { fetchData, fetchForecastData } from './api';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [cityData, setCityData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [cityName, setCityName] = useState('Tokyo');

  const handleSubmit = city => {
    setCityName(city);
  };

  useEffect(() => {
    const fetchedData = async city => {
      const cityResult = await fetchData(city);
      const forecastResult = await fetchForecastData(
        cityResult.data.coord.lat,
        cityResult.data.coord.lon
      );

      setCityData(cityResult.data);
      setForecastData(forecastResult.data);
    };

    fetchedData(cityName);
  }, [cityName]);

  return (
    <div className={cx(styles.container, styles.overlay)}>
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchBar handleSubmit={handleSubmit} />
        <FadeIn>
          {cityData && cityData.cod === 200 ? (
            <Info data={cityData} />
          ) : (
            <Error />
          )}
        </FadeIn>
        {cityData && cityData.cod === 200 ? (
          <Forecast data={forecastData} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default App;
