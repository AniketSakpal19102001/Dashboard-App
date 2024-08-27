import SalesBarChart from "./SalesBarChart";
import SalesPieChart from "./SalesPieChart";
import FeedbackColumnChart from "./FeedbackColumnChart";
import FeedbackStackedColumnChart from "./FeedbackStackedColumnChart";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Dashboard() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const data = {
    salesData: [
      { region: "North", totalSales: 50000, unitsSold: 1500 },
      { region: "South", totalSales: 30000, unitsSold: 1000 },
      { region: "East", totalSales: 45000, unitsSold: 1200 },
      { region: "West", totalSales: 60000, unitsSold: 1700 },
    ],
    customerFeedback: [
      { product: "Product A", positiveReviews: 120, negativeReviews: 30 },
      { product: "Product B", positiveReviews: 90, negativeReviews: 50 },
      { product: "Product C", positiveReviews: 150, negativeReviews: 20 },
    ],
  };

  const [visibleCharts, setVisibleCharts] = useState({
    salesBarChart: true,
    salesPieChart: true,
    columnChart: true,
    stackedColumnChart: true,
  });

  const handleCheckboxChange = (chartType) => {
    setVisibleCharts((prev) => ({
      ...prev,
      [chartType]: !prev[chartType],
    }));
  };
  const charts1 = [
    { type: "salesBarChart", component: <SalesBarChart data={data} /> },
    {
      type: "salesPieChart",
      component: <SalesPieChart data={data} />,
    },
  ];
  const charts2 = [
    { type: "columnChart", component: <FeedbackColumnChart data={data} /> },
    {
      type: "stackedColumnChart",
      component: <FeedbackStackedColumnChart data={data} />,
    },
  ];

  function sidebar() {
    setToggleFilter(!toggleFilter);
  }

  return (
    <>
      {toggleFilter && (
        <div className="fixed w-full h-full flex justify-end top-0">
          <div className=" bg-white shadow-black shadow-xl  w-1/3 h-full border-black ">
            <div className="bg-blue-700 w-full py-2 px-3 text-white flex justify-between items-center">
              <p>Filter</p>{" "}
              <p onClick={sidebar} className="cursor-pointer">
                <IoCloseSharp />
              </p>
            </div>
            <div className="flex flex-col mx-3 py-2">
              <p className="py-2">Sales By Region</p>

              <label className="mx-3">
                <input
                  type="checkbox"
                  checked={visibleCharts.salesBarChart}
                  onChange={() => handleCheckboxChange("salesBarChart")}
                />
                Show Bar Chart
              </label>
              <label className="mx-3">
                <input
                  type="checkbox"
                  checked={visibleCharts.salesPieChart}
                  onChange={() => handleCheckboxChange("salesPieChart")}
                />
                Show Pie Chart
              </label>
              <p className="py-2">Customer Feedback By Product</p>
              <label className="mx-3">
                <input
                  type="checkbox"
                  checked={visibleCharts.columnChart}
                  onChange={() => handleCheckboxChange("columnChart")}
                />
                Show Column Chart
              </label>
              <label className="mx-3">
                <input
                  type="checkbox"
                  checked={visibleCharts.stackedColumnChart}
                  onChange={() => handleCheckboxChange("stackedColumnChart")}
                />
                Show Stacked Column Chart
              </label>
            </div>
          </div>
        </div>
      )}
      <div className="h-auto bg-slate-200 py-2">
        <div className="mx-5">
          <p className="py-5">Sales By Region</p>
          <div className="w-full  grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {charts1
              .filter((chart) => visibleCharts[chart.type])
              .map((chart, index) => (
                <div
                  key={index}
                  className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center"
                >
                  {chart.component}
                </div>
              ))}
            <div className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <button
                className="border-slate-200 border-2 bg-white text-slate-500 px-3 rounded-md"
                onClick={sidebar}
              >
                &#43; Add Widget
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-slate-200 py-2">
        <div className="mx-5">
          <p className="py-5">Customer Feedback By Products</p>
          <div className="w-full  grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {charts2
              .filter((chart) => visibleCharts[chart.type])
              .map((chart, index) => (
                <div
                  key={index}
                  className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center"
                >
                  {chart.component}
                </div>
              ))}
            <div className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <button
                className="border-slate-200 border-2 bg-white text-slate-500 px-3 rounded-md"
                onClick={sidebar}
              >
                &#43; Add Widget
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-auto bg-slate-200 py-2">
        <div className="mx-5">
          <p className="py-5">Sales By Region</p>
          <div className="w-full  grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <div className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <SalesBarChart data={data} />
            </div>
            <div className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <SalesPieChart data={data} />
            </div>
            <div className="h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <button className="border-slate-200 border-2 bg-white text-slate-500 px-3 rounded-md">
                &#43; Add Widget
              </button>
            </div>
          </div>
        </div>
        <div className="mx-5 py-1">
          <p className="py-5">Customer Feedback By Products</p>
          <div className="w-full  grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <div className=" h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <FeedbackColumnChart data={data} />
            </div>
            <div className=" h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <FeedbackStackedColumnChart data={data} />
            </div>
            <div className=" h-96 lg:h-80 xl:h-64 bg-white mx-3 rounded-lg flex justify-center items-center">
              <button className="border-slate-200 border-2 bg-white text-slate-500 px-3 rounded-md">
                &#43; Add Widget
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
