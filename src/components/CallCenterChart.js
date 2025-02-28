import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CallCenterChart() {
  const data = {
    labels: ["Buwelo", "Concentrix", "Ideal", "Tep", "WNS"],
    datasets: [
      {
        label: "Nov QA Score",
        data: [87.28, 86.5, 88.2, 85.9, 87.0],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dec QA Score",
        data: [89.76, 88.1, 89.3, 87.5, 88.4],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Jan QA Score",
        data: [90.72, 89.5, 90.0, 88.9, 89.8],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Feb QA Score",
        data: [null, null, null, null, null], // Placeholder for February
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px", margin: "auto", paddingTop: "20px" }}>
      <h3 style={{ color: "white", backgroundColor: "black", padding: "10px", textAlign: "center" }}>
        Call Centers Monthly QA Scores
      </h3>
      <Bar data={data} options={options} /> {/* ✅ Ensure data is passed here */}
    </div>
  );
}

export default CallCenterChart;
