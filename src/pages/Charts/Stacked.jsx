import React from "react";
import { Stacked as StackedChart } from "../../components";
import { Header } from "../../components";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <StackedChart />
    </div>
  );
};

export default Stacked;
