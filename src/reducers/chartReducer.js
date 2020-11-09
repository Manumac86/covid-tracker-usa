const initialState = {
  loading: false,
  usData: [],
  statesData: [],
  filteredStatesData: [],
  clickedDate: '',
  filteredData: {},
  chartConfig: {
    chart: {
      type: "histogram",
      scrollablePlotArea: {
        minWidth: 3000,
        scrollPositionX: 1
      }
    },
    title: {
      text: "USA Covid-19 Daily Stats"
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      type: "linear"
    },
    plotOptions: {
      series: {
        cursor: "pointer"
      },
      histogram: {
        borderRadius: 3,
      }
    },
    tooltip: {
      split: true
    },
    series: [{
        maxPointWidth: 40,
        name: "Confirmed",
        data: []
    }, {
        maxPointWidth: 40,
        name: "Deaths",
        data: []
    }]
  }
}

const chartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_DATA":
      return {
        ...state,
        loading: true,
      }
    case "REJECTED_DATA":
      return {
        ...state,
        loading: false,
      }
    case "SUCCEED_DATA":
      return {
        ...state,
        loading: false,
        usData: payload.arrangedUsData,
        statesData: payload.statesData,
        filteredData: payload.arrangedUsData,
        chartConfig: {
          ...state.chartConfig,
          chart: {
            type: "histogram",
            scrollablePlotArea: {
              minWidth: 3000,
              scrollPositionX: 1
            }
          },
          xAxis: {
            categories: payload.arrangedUsData.dates
          },
          series: [{
            maxPointWidth: 40,
            name: "Confirmed",
            data: payload.arrangedUsData.confirmed
          }, {
            maxPointWidth: 40,
            name: "Deaths",
            data: payload.arrangedUsData.deaths
          }]
        }
      }
    case "FILTER_DATA":
      const scrollablePlotArea = (payload.dates.length > 30) ? {
        minWidth: 3000,
        scrollPositionX: 1,
      } : {}
      return {
        ...state,
        loading: false,
        filteredData: payload,
        chartConfig: {
          ...state.chartConfig,
          chart: {
            type: "histogram",
            scrollablePlotArea: scrollablePlotArea
          },
          xAxis: {
            categories: payload.dates
          },
          series: [{
            maxPointWidth: 40,
            name: "Confirmed",
            data: payload.confirmed
          }, {
            maxPointWidth: 40,
            name: "Deaths",
            data: payload.deaths
          }]
        }
      }
    case 'ADD_CLICK_ACTION':
      return {
        ...state,
        chartConfig: {
          ...state.chartConfig,
          plotOptions: {
            series: {
              cursor: "pointer",
              point: {
                events: {
                  click: payload
                }
              }
            },
            histogram: {
              borderRadius: 3,
            }
          },
        }
      }
    case 'HISTOGRAM_DATE_CLICK':
      return {
        ...state,
        clickedDate: payload
      }
    case 'SET_FILTERED_STATES_DATA':
      return {
        ...state,
        filteredStatesData: payload
      }
    default:
      return state;
  }
}

export default chartReducer;