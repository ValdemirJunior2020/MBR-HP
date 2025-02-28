import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function QAChart() {
    const data = {
        labels: ["Nov", "Dec", "Jan", "Feb"], // Added February
        datasets: [
          {
            label: "QA Scores",
            data: [87.28, 89.76, 90.72, null], // Placeholder for February
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
          },
        ],
      };
      

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows custom height
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div style={{ width: "50%", height: "300px", margin: "auto" }}>
      <h3 style={{ textAlign: "center" }}>Quality Assurance Scores Over Time</h3>
      <div style={{ height: "250px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default QAChart;
