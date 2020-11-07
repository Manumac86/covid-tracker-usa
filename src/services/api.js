import axios from 'axios';

import { config } from '../config/index';

export const getTotalData = () => {
  return axios({
    method: 'get',
    url: `${config.apiUrl}/v1/us/daily.json`,
  });
};

export const getStatesDataByDate = () => {
  return axios({
    method: 'get',
    url: `${config.apiUrl}/v1/states/daily.json`,
  });
};