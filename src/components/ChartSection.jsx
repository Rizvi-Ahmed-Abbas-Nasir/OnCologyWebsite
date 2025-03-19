import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartSection() {
  const [activeButton, setActiveButton] = useState("monthly");
  const [chartData, setChartData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    handleButtonClick("monthly"); 
  }, []);

  const handleButtonClick = (range) => {
    setActiveButton(range);
    if (range === "weekly") {
      setChartData([220, 215, 235, 300, 270, 250, 220]); 
    } else if (range === "monthly") {
      setChartData([2800, 3200, 3500, 3600, 3000, 3200, 3100, 3300, 2800, 3200, 3400, 3100]);
    } else {
      setChartData([17500, 19000, 16000, 18500, 20000, 21000]);
    }
  };

  useEffect(() => {
    gsap.to(".chart_section", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const salesData = {
    labels:
      activeButton === "weekly"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : activeButton === "monthly"
        ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        : ["Jan-Jun", "Jul-Dec", "Jan-Jun", "Jul-Dec", "Jan-Jun", "Jul-Dec"],
    datasets: [
      {
        label: "Cancer Deaths",
        data: chartData,
        fill: true,
        backgroundColor: "rgba(234, 88, 12, 0.3)",
        borderColor: "white",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} deaths`, 
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 25000, // Adjust the max value for better scaling
        ticks: {
          stepSize: 500,
          callback: (tickValue) => `${tickValue}`,
        },
      },
    },
  };

  return (
    <div ref={containerRef} className="chart-container">
      <div className="chart_section">
        <h3>Cancer-related Deaths</h3>
        <p>
          <span className="chart-title">People Death's</span>
        </p>

        <div className="chart-controls">
          <div>
            {["weekly", "monthly", "6-month"].map((range) => (
              <button
                key={range}
                className={`chart-button ${activeButton === range ? "active" : ""}`}
                onClick={() => handleButtonClick(range)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="py-5" style={{ height: "550px" }}>
          {chartData.length > 0 ? (
            <Line data={salesData} options={chartOptions} />
          ) : (
            <p className="text-white text-center">Loading Chart...</p>
          )}
        </div>
      </div>
    </div>
  );
}
