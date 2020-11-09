import './DateTable.css';

const DateTable = ({ data, date }) => {
  return (
    <div>
      <h2>Date: {date}</h2>
      <div className="tableHeader">
        <div>State</div>
        <div>Daily Positive</div>
        <div>Total Positive</div>
        <div>Total Recovered</div>
        <div>Daily Deaths</div>
        <div>Total Deaths</div>
      </div>
      {data.map(item => <div className="tableRow" key={item.state}>
          <div>{item.state}</div>
          <div>{item.positiveIncrease}</div>
          <div>{item.positive}</div>
          <div>{item.recovered}</div>
          <div>{item.deathIncrease}</div>
          <div>{item.death}</div>
        </div>
      )}
    </div>
  );
}

export default DateTable;
