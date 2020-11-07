const DropdownComponent = () => {
  return (
    <div className="App-Dropdown">
      <select
        name="numberOfDays"
        id="numberOfDays"
      >
        <option value="7 days">7 Days</option>
        <option value="30 days">30 Days</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}

export default DropdownComponent;
