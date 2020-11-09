const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHART_DATA':
      return {
        ...state,
        chartConfig: {
          ...state.chartConfig,
          ...action.payload
        }
      }
    case 'SET_COVID_DATA':
      return {
        ...state,
        covidData: action.payload
      }
    case 'SET_STATES_DATA':
      return {
        ...state,
        statesData: action.payload
      }
    case 'SET_FILTERED_STATES_DATA':
      return {
        ...state,
        filteredStatesData: action.payload
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    case 'SET_CLICKED_DATE':
      return {
        ...state,
        clickedDate: action.payload,
      }
    case 'SET_IS_TABLE_VISIBLE':
      return {
        ...state,
        isTableVisible: action.payload,
      }
    case 'SET_DATA_LIMIT':
      return {
        ...state,
        dataLimit: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;