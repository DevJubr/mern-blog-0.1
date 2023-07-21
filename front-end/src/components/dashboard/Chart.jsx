import Chart from "react-apexcharts";

const ChartComponent = () => {
  const ChartOptions = {
    series: [
      {
        name: "visitors",
        data: [155, 200, 844, 454, 665, 446, 674, 657, 653, 355, 234, 466],
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
