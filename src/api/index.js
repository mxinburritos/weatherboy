import axios from 'axios';

const DEFAULT_URL_1 =
  'http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=3155c804170271132c11d1db77cedef0';
const DEFAULT_URL_2 =
  'https://api.openweathermap.org/data/2.5/onecall?lat=35.692&lon=139.69&%20exclude=current,hourly&appid=3155c804170271132c11d1db77cedef0';
const url = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '3155c804170271132c11d1db77cedef0';

export const fetchData = async city => {
  let newURL = DEFAULT_URL_1;

  if (city) {
    newURL = `${url}weather?q=${city}&appid=${API_KEY}`;
  }

  try {
    const { data } = await axios.get(newURL);

    return { data };
  } catch (error) {
    return error;
  }
};

export const fetchForecastData = async (lat, lon) => {
  let newURL = DEFAULT_URL_2;

  if (lat && lon) {
    newURL = `${url}onecall?lat=${lat}&lon=${lon}&%20exclude=current,hourly&appid=${API_KEY}`;
  }

  try {
    const { data } = await axios.get(newURL);

    return { data };
  } catch (error) {
    return error;
  }
};

export const fetchBackgroundPhot0 = async city => {};
