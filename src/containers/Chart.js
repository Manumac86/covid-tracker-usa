import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
/**
 * Api Methods
 */
import {
  getTotalData,
} from '../services/api';

/**
 * Actions
 */
import {
  setChartData,
  setClickedDate,
  setCovidData,
  setIsLoading,
} from '../actions';

import ChartComponent from '../components/ChartComponent';

const Chart = (props) => {
  /**
   * The props from the State.
   * 
   * @property {Boolean}   isLoading       Flag to indicate that the App is loading or not.
   * @property {String}    covidData       The covid data.
   * @property {String}    dataLimit       The limit to filter the chart data to show.
   * @property {Function}  setChartData    Action to set the Chart Data.
   * @property {Function}  setClickedDate  Action to set the Clicked date.
   * @property {Function}  setCovidData    Action to set the covid data.
   * @property {Function}  setIsLoading    Action to set the loading flag.
   * @property {Function}  setStatesData   Action to set the States Data.
   */
  const {
    isLoading,
    covidData,
    dataLimit,
    setChartData,
    setClickedDate,
    setCovidData,
    setIsLoading,
    setStatesData,
  } = props;
  
  /**
   * Use the api methods to get the data from the API.
   * Handle the Click event for a data point in the chart.
   */
  useEffect(() => {
    setIsLoading(true);
    /**
     * Handles the Click event for a data point in the chart.
     *
     * @param {SyntheticEvent} event  The click event.
     * @param {Array}          dates  The dates data.
     */
    const handleHistogramClickData = (event, dates) => {
      setClickedDate(
        moment(dates[event.point.index], "MM-DD")
        .format("YYYYMMDD")
      );
    };

    const sortData = (data) => {
      debugger;
      const sortedData = {
        dates: [],
        deaths: [],
        confirmed: [],
      }
      data.forEach(item => {
        sortedData.dates.push(
          moment(item.date, "YYYYMMDD")
          .format("MM-DD")
        );
        sortedData.deaths.push(item.death);
        sortedData.confirmed.push(item.positive);
      })
      return sortedData;
    };

    /**
     * Get the data from the API and set the config options for the chart.
     */
    getTotalData()
    .then((response) => {
      // Reverse the data to order it ascending.
      const orderedData = response.data.reverse();
      setCovidData(orderedData);
      
      // Set the needed data to construct the config options object for the Chart.
      const sortedData = sortData(orderedData);
        
      /**
       * Set the Chart Data into the state.
       */
      setChartData({
        xAxis: {
          categories: sortedData.dates,
        },
        series: [{
          name: 'Confirmed',
          data: sortedData.confirmed
        }, {
            name: 'Deaths',
            data: sortedData.deaths
        }],
        plotOptions: {
          series: {
            cursor: 'pointer',
            events: {
              click: (event) => {
                handleHistogramClickData(event, sortedData.dates)
              },
            }
          }
        },
      });
    })
  }, [setChartData, setClickedDate, setCovidData, setIsLoading, setStatesData]);

  useEffect(() => {
    /**
     * Handles the Click event for a data point in the chart.
     *
     * @param {SyntheticEvent} event  The click event.
     * @param {Array}          dates  The dates data.
     */
    const handleHistogramClickData = (event, dates) => {
      setClickedDate(
        moment(dates[event.point.index], "MM-DD")
        .format("YYYYMMDD")
      );
    };

    const sortData = (data) => {
      debugger;
      const sortedData = {
        dates: [],
        deaths: [],
        confirmed: [],
      }
      data.forEach(item => {
        sortedData.dates.push(
          moment(item.date, "YYYYMMDD")
          .format("MM-DD")
        );
        sortedData.deaths.push(item.death);
        sortedData.confirmed.push(item.positive);
      })
      return sortedData;
    };
    
    const filterChartData = (data, limit) => {
      return data.length ? data.slice(data.length - limit, data.length) : data;
    };

    let filteredData = [];
    let sortedData = [];
    
    if (dataLimit === '7Days') {
      filteredData = filterChartData(covidData, 7);
      sortedData = sortData(filteredData);
    } else if (dataLimit === '30Days') {
      filteredData = filterChartData(covidData, 30);
      sortedData = sortData(filteredData);
    } else {
      sortedData = sortData(covidData);
    }

    setChartData({
      xAxis: {
        categories: sortedData.dates,
      },
      series: [{
        name: 'Confirmed',
        data: sortedData.confirmed
      }, {
          name: 'Deaths',
          data: sortedData.deaths
      }],
      plotOptions: {
        series: {
          cursor: 'pointer',
          events: {
            click: (event) => {
              handleHistogramClickData(event, sortedData.dates)
            },
          }
        }
      },
    });

  }, [covidData, dataLimit, setChartData, setClickedDate])

  return (
    <>
    { !isLoading && <ChartComponent /> }
    </>
  );
}

/**
 * Map the state to the component props.
 *
 * @param {Object} state  The current state.
 * @return {Object} 
 */
const mapStateToProps = (state) => {
  return {
    clickedDate: state.clickedDate,
    isLoading: state.isLoading,
    dataLimit: state.dataLimit,
  }
}

/**
 * Map the dispatch actions to component props.
 * @type {Object}
 */
const mapDispatchToProps = {
  setChartData,
  setClickedDate,
  setCovidData,
  setIsLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
