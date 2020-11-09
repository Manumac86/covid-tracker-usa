export const setChartData = payload => ({
  type: 'SET_CHART_DATA',
  payload
});

export const setCovidData = payload => ({
  type: 'SET_COVID_DATA',
  payload
});

export const setStatesData = payload => ({
  type: 'SET_STATES_DATA',
  payload
});

export const setIsLoading = payload => ({
  type: 'SET_IS_LOADING',
  payload
})

export const setClickedDate = payload => ({
  type: 'SET_CLICKED_DATE',
  payload
})

export const setFilteredStatesData = payload => ({
  type: 'SET_FILTERED_STATES_DATA',
  payload
})

export const setIsTableVisible = payload => ({
  type: 'SET_IS_TABLE_VISIBLE',
  payload
})

export const setDataLimit = payload => ({
  type: 'SET_DATA_LIMIT',
  payload
})
