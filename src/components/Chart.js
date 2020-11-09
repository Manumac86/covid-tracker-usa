import { useEffect } from 'react';

var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/histogram-bellcurve')(Highcharts);


const Chart = ({ chartConfig }) => {
  useEffect(() => {
    // Create the chart
    Highcharts.chart('container', chartConfig);
  }, [chartConfig]);

  return (
    <div 
      id="container"
      style={{"width":"100%", "height":"400px"}}
    ></div>
  );
}

export default Chart;