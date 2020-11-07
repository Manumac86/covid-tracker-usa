import React from 'react';
import { connect } from 'react-redux';
import { setChartData } from '../actions';
import ChartComponent from '../components/ChartComponent';


const Chart = ({ config }) => {
  return (
    <>
      <ChartComponent config={config} />
    </>
  );
}

const mapDispatchToProps = {
  setChartData,
}

export default connect(null, mapDispatchToProps)(Chart);
