import { useEffect } from 'react';
import moment from 'moment';
import ChartComponent from '../components/ChartComponent'
import Dropdown from '../containers/Dropdown';
import { getTotalData } from '../services/api';

import { connect } from 'react-redux';
import { setChartData } from '../actions';

import '../assets/css/App.css';

function App(props) {
  /**
   * Call the api service to get the data to show in the chart.
   */
  useEffect(() => {
    getTotalData()
    .then((response) => {
      const orderedData = response.data.reverse();
      const dates = [];
      const deaths = [];
      const confirmed = [];

      orderedData.forEach(item => {
        dates.push(moment(item.date, "YYYYMMDD").format("MM-DD"));
        deaths.push(item.death);
        confirmed.push(item.positive);
      });
      props.setChartData({
        xAxis: {
          categories: dates,
        },
        series: [{
          name: 'Confirmed',
          data: confirmed
        }, {
            name: 'Deaths',
            data: deaths
        }],
      })
      console.log(orderedData);
    })
  }, [props]);

  return (
    <div className="App">
      <h1>Covid-19 USA Tracker</h1>
      <Dropdown />
      <ChartComponent />
    </div>
  );
}

const mapDispatchToProps = {
  setChartData,
}

export default connect(null, mapDispatchToProps)(App);
