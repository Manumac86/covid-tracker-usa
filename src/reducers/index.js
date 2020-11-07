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
    default:
      return state;
  }
}

export default reducer;