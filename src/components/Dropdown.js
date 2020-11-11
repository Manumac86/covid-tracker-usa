import '../assets/css/Dropdown.css';

const Dropdown = ({ handleChange }) => {
  return (
    <div className="Dropdown">
      <h3 className="Dropdown__Title">Filter data</h3>
      <select
        className="btn btn-primary"
        id="numberOfDays"
        defaultValue={'all'}
        name="numberOfDays"
        onChange={handleChange}
      >
        <option className="btn btn-primary" value="all">All</option>
        <option className="btn btn-primary" value="7Days">7 Days</option>
        <option className="btn btn-primary" value="30Days">30 Days</option>
      </select>
    </div>
  );
}

export default Dropdown;
