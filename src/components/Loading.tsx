import spinner from "../assets/spinner.svg";
const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner-container">
        <img src={spinner} alt="loading spinner" className="spinner" />
      </div>
    </div>
  );
};

export default Loading;
