import config from '../../config'
import axios from 'axios'

// API key lives in config.API_KEY
// have to make your own!

const baseUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${config.API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const searchUrl = `${baseUrl}&q=${city}`;
  const request = axios.get(searchUrl)
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}