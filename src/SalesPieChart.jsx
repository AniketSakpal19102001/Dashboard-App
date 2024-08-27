import React from "react";
import Chart from "react-google-charts";

const SalesPieChart = ({ data }) => {
  const chartData = [
    ["Region", "Total Sales"],
    ...data.salesData.map((item) => [item.region, item.totalSales]),
  ];

  return (
    <Chart
      // width={"600px"}
      // height={"400px"}
      width={"95%"}
      height={"95%"}
      chartType="PieChart"
      loader={<div>Loading Chart...</div>}
      data={chartData}
      options={{
        // title: "Sales Data by Region",
        pieSliceText: "label",
        legend: { position: "labeled" },
      }}
    />
  );
};

export default SalesPieChart;
