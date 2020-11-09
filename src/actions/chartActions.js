import moment from 'moment';
import { getAllData } from '../services/api';

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
  })
  return arrangedData;
};

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

export const addClickAction = (handleHistogramClickData) => dispatch => {
  dispatch({
    type: 'ADD_CLICK_ACTION',
    payload: handleHistogramClickData
  })
}

export const histogramDateClick = (date) => dispatch => {
  dispatch({
    type: "HISTOGRAM_DATE_CLICK",
    payload: date
  })
}

export const setFilteredStatesData = (filteredStatesData) => dispatch => {
  dispatch({
    type: "SET_FILTERED_STATES_DATA",
    payload: filteredStatesData
  })
}