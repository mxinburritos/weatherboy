import axios from 'axios';

const url = 'api.openweathermap.org/data/2.5/';

const fetchCity = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get;
  } catch (error) {
    return error;
  }
};
