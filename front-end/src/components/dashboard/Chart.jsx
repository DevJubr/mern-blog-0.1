import Chart from "react-apexcharts";

const ChartComponent = () => {
  const ChartOptions = {
    series: [
      {
        name: "visitors",
        data: [55, 20, 44, 54, 65, 46, 74, 57, 53, 55, 34, 66],
      },
    ],
    options: {
      color: ["#120031"],
      chart: {
        background: "#0000",
      },
      dataLabels: {
        enabled: false,
      },
      stock: {
        curve: "soomth",
      },
      xaxis: {
        categories: [
          1992, 1993, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <div style={{ width: "100%", margin: "8rem 0 0 0" }}>
      <Chart
        options={ChartOptions.options}
        series={ChartOptions.series}
        type="bar"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default ChartComponent;
