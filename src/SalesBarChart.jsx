import React from "react";
import Chart from "react-google-charts";

const SalesBarChart = ({ data }) => {
  const chartData = [
    ["Region", "Total Sales", "Units Sold"],
    ...data.salesData.map((item) => [
      item.region,
      item.totalSales,
      item.unitsSold,
    ]),
  ];

  return (
    <Chart
      width={"95%"}
      height={"95%"}
      // width={"600px"}
      // height={"400px"}
      chartType="Bar"
      loader={<div>Loading Chart...</div>}
      data={chartData}
      options={{
        chart: {
          // title: "Sales Data by Region",
        },
      }}
    />
  );
};

export default SalesBarChart;
