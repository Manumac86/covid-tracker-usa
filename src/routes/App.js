import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import {
  addClickAction,
  filterData,
  getChartData,
  histogramDateClick,
  setFilteredStatesData,
} from '../actions/chartActions';

// Components
import Chart from '../components/Chart'
import DateTable from '../components/DateTable';
import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';

// Styles
import '../assets/css/App.css';

/**
 * The App Component
 *
 * @return {JSX} 
 */
const App = () => {
  const {
    loading, 
    usData, 
    chartConfig, 
    clickedDate, 
    statesData, 
    filteredStatesData ,
    filteredData
  } = useSelector(state => state.chart)

  // To dispatch redux actions.
  const dispatch = useDispatch();

  /**
   * Get the data collection to show in the chart on load.
   */
  useEffect(() => {
    dispatch(getChartData())
  }, [dispatch])

  /**
   * Filter chart data according to the selected period.
   *
   * @param {SyntheticEvent} event  The dropdown change event.
   */
  const handleDropdownChange = (event) => {
    dispatch(
      filterData(
        usData,
        event.target.value
      )
    )
  }

  useEffect(() => {
    const handleHistogramClickData = (event) => {
      dispatch(
        histogramDateClick(
          moment(filteredData.dates[event.point.index], "MM-DD").format("YYYYMMDD")
        )
      )
    }
    dispatch(addClickAction(handleHistogramClickData))
  }, [dispatch, filteredData.dates, statesData, usData])

  useEffect(() => {
    const filteredStatesData = statesData.filter(item => item.date.toString() === clickedDate);
    dispatch(
      setFilteredStatesData(
        filteredStatesData
      )
    )
  }, [clickedDate, dispatch, statesData])
  
  return (
    <div className="App">
      <h1 className="App__Title">Covid-19 USA Tracker</h1>
      <a href="https://api.covidtracking.com">Data source: covidtracking.com</a>
      <Dropdown handleChange={handleDropdownChange} />
      { 
        !loading ?
          <Chart chartConfig={chartConfig} />
        : <Spinner />
      }
      {
        !loading && (filteredStatesData.length > 0) &&
          <DateTable
            data={filteredStatesData}
            date={moment(clickedDate, "YYYYMMDD").format("YYYY-MM-DD")}
          />
      }
      <footer className="App__Footer">
        <a href="https://github.com/Manumac86/covid-tracker-usa/">Github</a>
        <a href="https://www.linkedin.com/in/emmartinez-profile/">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
