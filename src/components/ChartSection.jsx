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
  const [activeButton, setActiveButton] = useState("weekly");
  const [chartData, setChartData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    handleButtonClick("weekly"); // Initialize chart data
  }, []);

  const handleButtonClick = (range) => {
    setActiveButton(range);
    if (range === "weekly") {
      setChartData([1200, 1900, 3000, 2500, 2800, 3500, 4100]);
    } else if (range === "monthly") {
      setChartData([1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500, 10500, 11500, 12500]);
    } else {
      setChartData([5000, 7000, 6000, 8000, 9000, 10000]);
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
        label: "Sales 2022",
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
          label: (tooltipItem) => `${tooltipItem.raw} sales`,
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
        max: 13000,
        ticks: {
          stepSize: 1000,
          callback: (tickValue) => `${tickValue / 1000}k`,
        },
      },
    },
  };

  return (
    <div ref={containerRef} className="chart-container">
      <div className="chart_section">
        <h3>OnCology </h3>
        <p>
            <span className="chart-title">People Death's</span>
          </p>

        {/* Buttons and Title */}
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
