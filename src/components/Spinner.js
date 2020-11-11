/**
 * Styles
 */
import '../assets/css/Spinner.css'

/**
 * The Spinner component.
 * Shows a spinner for loading states.
 *
 * @return {JSX} 
 */
const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
