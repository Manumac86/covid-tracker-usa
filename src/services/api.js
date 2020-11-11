/**
 * Dependencies.
 */
import axios from 'axios';
import { config } from '../config/index';

/**
 * The request to get the USA Covid historic daily data.
 */
const getUsDailyData = axios({
  method: 'get',
  url: `${config.apiUrl}/v1/us/daily.json`,
});

/**
 * The request to get the USA Covid historic daily data for states.
 */
const getStatesDailyData = axios({
  method: 'get',
  url: `${config.apiUrl}/v1/states/daily.json`,
});

/**
 * Make all the requests.
 * 
 * @type {Function}
 * 
 * @returns {Promise}
 */
export const getAllData = () => {
  return axios.all([getUsDailyData, getStatesDailyData])
};