import '../assets/css/DateTable.css';

const DateTable = ({ data, date }) => {
  return (
    <div>
      <p className="DataTable__Title">States Data for {date}</p>
      <div className="DataTable__Header">
        <div>State</div>
        <div>Daily Positive</div>
        <div>Daily Deaths</div>
        <div>Total Positive</div>
        <div>Total Recovered</div>
        <div>Total Deaths</div>
      </div>
      {
        data.map(item => (
          <div className="DataTable__Row" key={item.state}>
            <div>{item.state}</div>
            <div>{item.positiveIncrease}</div>
            <div>{item.deathIncrease}</div>
            <div>{item.positive}</div>
            <div>{item.recovered}</div>
            <div>{item.death}</div>
          </div>
        ))
      }
    </div>
  );
}

export default DateTable;
