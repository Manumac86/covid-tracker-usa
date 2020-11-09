import axios from 'axios';

import { config } from '../config/index';

const getUsDailyData = axios({
  method: 'get',
  url: `${config.apiUrl}/v1/us/daily.json`,
});

const getStatesDailyData = axios({
  method: 'get',
  url: `${config.apiUrl}/v1/states/daily.json`,
});

export const getAllData = () => {
  return axios.all([getUsDailyData, getStatesDailyData])
};