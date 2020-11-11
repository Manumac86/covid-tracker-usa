/**
 * Dependencies
 */
import { useEffect } from 'react';

/**
 * The Chart.
 * 
 * @type {Highcharts} 
 */
var Highcharts = require('highcharts');

/**
 * Load Highcharts modules after Highcharts is loaded
 */
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/histogram-bellcurve')(Highcharts);

/**
 * The Chart Component
 *
 * @param {Object} chartConfig  The chart config options object.
 * @return {JSX} 
 */
const Chart = ({ chartConfig }) => {
  /**
   * Create the chart after the chartConfig loads or changes.
   */
  useEffect(() => {
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