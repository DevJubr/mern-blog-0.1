import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartComponent = () => {
  // Sample data for the chart
  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Sales",
        data: [56, 40, 45, 90, 49, 60, 70, 91, 125, 100, 95, 80],
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ChartComponent;
