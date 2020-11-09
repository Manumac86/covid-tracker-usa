/**
 * Dependencies.
 */
import { connect } from 'react-redux';

import { setDataLimit } from '../actions';
/**
 * Components.
 */
import DropdownComponent from '../components/DropdownComponent';

const Dropdown = ({ setDataLimit }) => {
  
  /**
   * Set the state with the selected value of the dropdown
   * to change the limit of the data shown in the Chart.
   * 
   * @param {SyntheticEvent} event  The change event from the dropdown.
   */
  const handleDropdownChange = (event) => {
    setDataLimit(event.target.value);
  }
  return (
    <DropdownComponent handleChange={handleDropdownChange}/>
  );
}

const mapDispatchToProps = {
  setDataLimit,
}

export default connect(null, mapDispatchToProps)(Dropdown);
