import React from "react";
import Chart from "react-google-charts";

const FeedbackStackedColumnChart = ({ data }) => {
  const chartData = [
    ["Product", "Positive Reviews", "Negative Reviews"],
    ...data.customerFeedback.map((item) => [
      item.product,
      item.positiveReviews,
      item.negativeReviews,
    ]),
  ];

  return (
    <Chart
      width={"95%"}
      height={"95%"}
      // width={"600px"}
      // height={"400px"}
      chartType="ColumnChart"
      loader={<div>Loading Chart...</div>}
      data={chartData}
      options={{
        // title: "Customer Feedback by Product",
        isStacked: true,
        hAxis: { title: "Product" },
        vAxis: { title: "Number of Reviews" },
      }}
    />
  );
};

export default FeedbackStackedColumnChart;
