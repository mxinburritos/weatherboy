import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, Grid } from '@material-ui/core';
import styles from './App.module.css';
import cx from 'classnames';
import FadeIn from 'react-fade-in';
import Fade from '@material-ui/core/Fade';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

import { Info, Cards, SearchBar, Error, Forecast } from './components';
import { fetchData, fetchForecastData } from './api';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import Tokyo from './assets/Tokyo.jpg';
import unsplash from './api/unsplash';

let url = 'https://source.unsplash.com/1920x1080/?$tokyo%20city';

const BackgroundPicture = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  margin: 0;
  padding: 0;

  background-image: url('${props => (props.imgUrl ? props.imgUrl : Tokyo)}');
  // background-image: url(${url});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const App = () => {
  const [cityData, setCityData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [cityName, setCityName] = useState('Tokyo');

  const cityImage = city => {
    let url = `https://source.unsplash.com/1920x1080/?${city}`;
    console.log(url);
    return url;
  };

  const handleSubmit = city => {
    setCityName(city);
  };

  useEffect(() => {
    const fetchedData = async city => {
      const cityResult = await fetchData(city);
      let forecastResult;
      if (cityResult.data && cityResult.data.cod === 200) {
        forecastResult = await fetchForecastData(
          cityResult.data.coord.lat,
          cityResult.data.coord.lon
        );
      } else {
        forecastResult = await fetchForecastData(0, 0);
      }

      setCityData(cityResult.data);
      setForecastData(forecastResult.data);
    };

    fetchedData(cityName);
  }, [cityName]);

  console.log(cityName);

  return (
    <BackgroundPicture
      imgUrl={
        cityData && cityData.cod === 200
          ? cityImage(cityName + '%20Skyline')
          : cityImage('forest')
      }
    >
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchBar handleSubmit={handleSubmit} />
        {cityData && cityData.cod === 200 ? (
          <FadeIn>
            <Info data={cityData} />
          </FadeIn>
        ) : (
          <FadeIn>
            <Error />
          </FadeIn>
        )}
        {cityData && cityData.cod === 200 ? (
          <Forecast data={forecastData} />
        ) : (
          <div></div>
        )}
      </div>
    </BackgroundPicture>
  );
};

export default App;
