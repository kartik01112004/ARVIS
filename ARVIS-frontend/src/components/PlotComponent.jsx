import React from "react";
import Plot from "react-plotly.js";

const PlotComponent = ({ data }) => {
  const columns = Object.keys(data);

  return (
    <Plot
      data={[
        {
          x: data[columns[0]],
          y: data[columns[1]],
          type: "bar",
          marker: { color: "#4CAF50" }, // Green bars
        },
      ]}
      layout={{
        title: "Business Data Visualization",
        xaxis: { title: columns[0] },
        yaxis: { title: columns[1] },
      }}
      config={{ responsive: true }}
    />
  );
};

export default PlotComponent;
