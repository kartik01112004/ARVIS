import React from "react";
import "./VisualizationPage.css"; // Import the new CSS for styling
import { Bar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

const VisualizationPage = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve data passed via routing

  // Check if data is present
  if (!data) {
    return <div className="no-data">No data available for visualization.</div>;
  }

  // Example data for visualization
  const chartData = {
    labels: data.map((row) => row.label), // Assuming 'label' is the X-axis value in data
    datasets: [
      {
        label: "Business Data",
        data: data.map((row) => row.value), // Assuming 'value' is the Y-axis value
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="visualization-page">
      <h2>Data Visualization</h2>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default VisualizationPage;
