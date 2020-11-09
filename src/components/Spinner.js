import '../assets/css/Spinner.css'

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
