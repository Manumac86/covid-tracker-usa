import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import './assets/css/index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

const initialState = {
  "isLoading": false,
  "isTableVisible": false,
  "clickedDate": '',
  "dataLimit": "all",
  "chartConfig": {
    "chart": {
      "type": "histogram",
      "scrollablePlotArea": {
        "minWidth": 3000,
        "scrollPositionX": 1
      }
    },
    "title": {
      "text": "USA Covid Stats by Date"
    },
    "xAxis": {
      "categories": []
    },
    "yAxis": {
      "type": "logarithmic"
    },
    "plotOptions": {
      "series": {
        "cursor": "pointer"
      }
    },
    "tooltip": {
      "split": true
    },
    "series": [{
        "name": "Confirmed",
        "data": []
    }, {
        "name": "Deaths",
        "data": []
    }]
  },
  "statesData": [],
  "filteredStatesData": [],
  "filteredData": [],
  "covidData": [],
}

const store = createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
