const DropdownComponent = ({ handleChange }) => {
  return (
    <div className="App-Dropdown">
      <strong>Filter data: </strong>
      <select
        id="numberOfDays"
        defaultValue={'all'}
        name="numberOfDays"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="7Days">7 Days</option>
        <option value="30Days">30 Days</option>
      </select>
    </div>
  );
}

export default DropdownComponent;
