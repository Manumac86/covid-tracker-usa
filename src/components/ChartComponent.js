import React, { useEffect } from 'react';
import { connect } from 'react-redux';

var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/histogram-bellcurve')(Highcharts);


const ChartComponent = ({ chartConfig }) => {
  useEffect(() => {
    // Create the chart
    Highcharts.chart('container', chartConfig);
  }, [chartConfig]);

  return (
    <div 
      id="container"
      style={{"width":"100%", "height":"600px"}}
    ></div>
  );
}


const mapStateToProps = (state) => {
  return {
    chartConfig: state.chartConfig
  }
}

export default connect(mapStateToProps, null)(ChartComponent);