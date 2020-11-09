/**
 * Dependencies
 */
import moment from 'moment';
import { useEffect } from 'react';
import { connect } from 'react-redux';
/**
 * Components
 */
import Chart from '../containers/Chart'
import DataTable from '../components/DateTable';
import Dropdown from '../containers/Dropdown';
/**
 * Api Methods
 */
import {
  getStatesDataByDate
} from '../services/api';
/**
 * Actions
 */
import {
  setStatesData,
  setIsLoading,
  setClickedDate,
  setFilteredStatesData,
  setIsTableVisible
} from '../actions';
/**
 * Styles
 */
import '../assets/css/App.css';

/**
 * The App Component
 *
 * @param {Object} props
 * @return {JSX} 
 */
const App = (props) => {
  /**
   * The props from the State.
   * 
   * @property {Moment}    clickedDate            The clicked date in the chart.
   * @property {Array}     filteredStatesData     The filtered data from states data.
   * @property {Boolean}   isLoading              Flag to indicate that the App is loading or not.
   * @property {Boolean}   isTableVisible         Flag to indicate that the DataTable is visible or not.
   * @property {Array}     statesData             The data for the US states.
   * @property {Function}  setFilteredStatesData  Action to set the Filtered States Data.
   * @property {Function}  setIsLoading           Action to set the loading flag.
   * @property {Function}  setIsTableVisible      Action to set the DataTable visibility flag.
   * @property {Function}  setStatesData          Action to set the States Data.
   */
  const {
    clickedDate,
    filteredStatesData,
    isLoading,
    isTableVisible,
    statesData,
    setFilteredStatesData,
    setIsLoading,
    setIsTableVisible,
    setStatesData,
  } = props;

  /**
   * Use the api methods to get the data from the API.
   * Handle the Click event for a data point in the chart.
   */
  useEffect(() => {
    /**
     * Get the states data from the API and set it into the state.
     */
    getStatesDataByDate()
    .then(response => {
      setStatesData(response.data);
      setIsLoading(false);
    })
  }, [setIsLoading, setStatesData]);

  /**
   * Filter the states data with the clicked date in order to show it within the DataTable.
   */
  useEffect(() => {
    if(statesData.length) {
      const filteredStatesData = statesData
        .filter(item => item.date.toString() === clickedDate)
      setFilteredStatesData(filteredStatesData);
      setIsLoading(false);
    }
  }, [statesData, clickedDate, setFilteredStatesData, setIsLoading, setIsTableVisible]);
  /**
   * Set the DataTable to visible when a date is clicked.
   */
  useEffect(() => {
    if(clickedDate.length) {
      setIsTableVisible(true);
    }
  }, [setIsTableVisible, clickedDate])
  
  return (
    <div className="App">
      <h1>Covid-19 USA Tracker</h1>
      <Dropdown />
      <Chart />
      {
        !isLoading && isTableVisible && 
        <DataTable 
          data={filteredStatesData} 
          date={moment(clickedDate, "YYYYMMDD").format("YYYY-MM-DD")}
        />
      }
    </div>
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
    statesData: state.statesData,
    filteredStatesData: state.filteredStatesData,
    isTableVisible: state.isTableVisible,
  }
}

/**
 * Map the dispatch actions to component props.
 * @type {Object}
 */
const mapDispatchToProps = {
  setStatesData,
  setIsLoading,
  setClickedDate,
  setFilteredStatesData,
  setIsTableVisible,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
