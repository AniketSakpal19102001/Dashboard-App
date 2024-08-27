import React from "react";
import Chart from "react-google-charts";

const FeedbackColumnChart = ({ data }) => {
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
        chart: {
          // title: "Customer Feedback by Product",
          // subtitle: "Positive vs Negative Reviews",
        },
      }}
    />
  );
};

export default FeedbackColumnChart;
