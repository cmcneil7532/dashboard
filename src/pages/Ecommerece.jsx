import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Ecommerece = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl bg-cyan-200 n lg w-full lg:w-80 p-8 pt-9 m-3 bg-light-grey bg-no-repeat bg-cover bg-center ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-xl text-stone-900 dark:text-gray-400">
                Earnings
              </p>
              <p className="text-2xl ">$900,555</p>
              <button className="mt-6">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download"
                  borderRadius="10px"
                  size="md"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md: w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full hover:drop-shadow-xl p-4"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="font-semi-bold text-lg">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/**Creating the Revenue portion on page */}
      <div className="flex gap-10 flex-qrap justify-center">
        {/**entire the revenues potion will inherit this css styles */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780 ">
          {/**------FOCUS ON THE REVNUE TITILE --- */}
          <div className="flex justify-between p-2 md:p-10">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-lg">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="dark:text-gray-400">Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/**---------------------------------- */}
          {/** Creating the budget and expenses display */}
          <div className="mt-10 gap-10 flex-wrap flex justify-center">
            {/**Implementing border to seperate values from our graph */}
            <div className="border-r-2 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-xl font-semibold">$93,000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                  <p className="mt-1 text-gray-400 text-md">Budget</p>
                </p>
              </div>
              <div className="mt-10">
                <p>
                  <span className="text-xl font-semibold">$83,000</span>
                  <p className="text-gray-400 text-md mt-1">Expenses</p>
                </p>
              </div>
              {/**Creating the line chart */}
              <div className="mt-5">
                <SparkLine
                  color={currentColor}
                  id="line-sparkline"
                  type="line"
                  height="80px"
                  currentColor={currentColor}
                  width="250px"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                  size="md"
                />
              </div>
            </div>
            <div className="mb-5">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Ecommerece;
