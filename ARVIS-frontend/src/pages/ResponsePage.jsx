import { useNavigate } from "react-router-dom";

const ResponsePage = ({ responseData }) => {
  const navigate = useNavigate();

  const handleVisualizeClick = () => {
    // Pass the data to the visualization page
    navigate("/visualization", { state: { data: responseData } });
  };

  return (
    <div className="response-page">
      <h2>Response Data</h2>
      {/* Display responseData here */}

      <button onClick={handleVisualizeClick} className="visualize-btn">
        Visualize Data
      </button>
    </div>
  );
};
export default ResponsePage;
