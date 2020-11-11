import moment from 'moment';
import { getAllData } from '../services/api';

/**
 * Arrange the data received in a new object to use in the chart.
 *
 * @param {Array}  data             The data to arrange.
 * @param {Object} data[i]          The data for specifics days.
 * @param {string} data[i].date     The date of a specific day.
 * @param {number} data[i].death    The deaths cases for a specific date.
 * @param {number} data[i].positive The confirmed cases for a specific date.
 * 
 * @return {Object}
 */
const arrangeData = (data) => {
  const arrangedData = {
    dates: [],
    deaths: [],
    confirmed: [],
  }

  data.forEach(item => {
    arrangedData.dates.push(
      moment(item.date, "YYYYMMDD")
      .format("MM-DD")
    );
    arrangedData.deaths.push(item.death);
    arrangedData.confirmed.push(item.positive);
  });

  return arrangedData;
};

/**
 * Gets the data for the chart and the states data table.
 * Dispatch the actions for loading and success.
 */
export const getChartData = () => async dispatch => {
  dispatch({
    type: 'AWAITING_DATA'
  })

  const responses = await getAllData();
  const statesData = responses[1].data;
  const arrangedUsData = arrangeData(responses[0].data.reverse());

  dispatch({
    type: "SUCCEED_DATA",
    payload: {
      statesData,
      arrangedUsData
    }
  })
}

/**
 * Dispatch the actions for loading and filter the data 
 * according to the time period to filter the data.
 *
 * @param {Object} data      - The data to filter.
 * @param {string} timeLimit - The time window to filter the data.
 */
export const filterData = (data, timeLimit) => dispatch => {
  dispatch({
    type: 'AWAITING_DATA'
  })
  let filteredData = {};
  if (timeLimit === '7Days') {
    filteredData.dates = data.dates.slice(data.dates.length - 7, data.dates.length);
    filteredData.confirmed = data.confirmed.slice(data.confirmed.length - 7, data.confirmed.length);
    filteredData.deaths = data.deaths.slice(data.deaths.length - 7, data.deaths.length);
    dispatch({
      type: 'FILTER_DATA',
      payload: filteredData
    })
  } else if (timeLimit === '30Days') {
    filteredData.dates = data.dates.slice(data.dates.length - 30, data.dates.length);
    filteredData.confirmed = data.confirmed.slice(data.confirmed.length - 30, data.confirmed.length);
    filteredData.deaths = data.deaths.slice(data.deaths.length - 30, data.deaths.length);
    dispatch({
      type: 'FILTER_DATA',
      payload: filteredData
    })
  } else {
    dispatch({
      type: 'FILTER_DATA',
      payload: data
    })
  }
}

/**
 * Dispatch the action to add the callback to the configChart
 * for when a data point is clicked.
 *
 * @param {Function} handleHistogramClickData  The callback to add to the click action.
 */
export const addClickAction = (handleHistogramClickData) => dispatch => {
  dispatch({
    type: 'ADD_CLICK_ACTION',
    payload: handleHistogramClickData
  })
}

/**
 * Dispatch the action for when a date point is clicked.
 *
 * @param {string} date  The date point clicked.
 */
export const histogramDateClick = (date) => dispatch => {
  dispatch({
    type: "HISTOGRAM_DATE_CLICK",
    payload: date
  })
}

/**
 * Dispatch the action for set the filtered states data.
 *
 * @param {Array} filteredStatesData  The filtered states data to add to the store.
 */
export const setFilteredStatesData = (filteredStatesData) => dispatch => {
  dispatch({
    type: "SET_FILTERED_STATES_DATA",
    payload: filteredStatesData
  })
}