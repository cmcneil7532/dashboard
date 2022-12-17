import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import { IoIosMore } from "react-icons/io";

import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  dropdownData,
  weeklyStats,
  medicalproBranding,
  earningData,
  SparklineAreaData,
  recentTransactions,
} from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Ecommerece = () => {
  const { currentColor, currentMode } = useStateContext();
  //Pass in the currentMode this will decide when out page is on light or dark mode the color of text
  const DropDownMenu = ({ currentMode }) => (
    //px and py are padding inside the dropDown menu
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent
        id="ddelement"
        dataSource={dropdownData}
        fields={{ text: "Time", value: "Id" }}
        style={{
          border: "none",
          //If current mode is dark set it to white otherwise keep it the default black
          color: currentMode === "Dark" && "White",
        }}
        value="1"
        popupHeight="200px"
        popWidth="100px"
      />
    </div>
  );
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center  w-full">
        <div className="dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl bg-cyan-200 w-full lg:w-80 p-8 pt-9 m-3 bg-light-grey bg-no-repeat bg-cover bg-center ">
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
      <div className="flex gap-10 flex-wrap justify-center">
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
        {/**Creating a recent transactions page on the side of the revenue updates. */}
        <div className="flex gap-10 m-4 flex-wrap justify-center">
          {/**Creating the backgound for all the conent that will be in the box */}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            {/**This particular div will adjust the recent transactions and drop downmenu to fit accordinigly */}
            <div className="flex justify-between items-center gap-2">
              <p className="font-semibold text-xl">Recent Transactions</p>
              {/**Pass in the DropDownMenu component thats in the render section */}
              <DropDownMenu currentMode={currentMode} />
            </div>
            <div className="md:w-400 mt-10">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="hover:drop-shadow-md text-2xl rounded-md p-4"
                      style={{
                        backgroundColor: item.iconBg,
                        color: item.iconColor,
                      }}
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/**Create the weekly stats medical prg banding and daily activity */}

        <div className="flex justify-center flex-wrap gap-10">
          {/**VERY IMPORTANT when making the widths for the individual panels reminder to ad the width  */}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-5 m-3 md:w-400">
            <div className="flex justify-between items-center gap-2">
              <p className="font-semibold text-xl">Weekly Stats</p>
              <IoIosMore />
            </div>
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="text-lg p-4 text-white rounded-md"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          {/**Creating the medicak pro banding panel */}
          <div className="w-400 p-5 m-3 rounded-2xl dark:bg-secondary-dark-bg bg-white dark:text-gray-200">
            <div className="flex justify-between items-center gap-2">
              <p className="font-semibold text-xl"> Medical Pro Banding</p>
              <IoIosMore />
            </div>
            <div className="">
              <button
                type="button"
                style={{ backgroundColor: "orange" }}
                className="hover:drop-shadow-md mt-10 rounded-lg p-2 text-xs text-white"
              >
                16 DEC, 2022
              </button>

              <div className=" border-b-1 flex justify-between items-center">
                {medicalproBranding.data.map((item, index) => (
                  <div key={index}>
                    <div className="border-r-1 mt-5">
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="mr-4">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/**Creating of the teams section inside the medical probanding section */}
              <div className="border-b-1 border-color pb-3 mt-2">
                <p className="font-semibold text-lg mb-2">Teams</p>
                <div className="flex gap-4">
                  {medicalproBranding.teams.map((item) => (
                    <div key={item.name}>
                      <p
                        style={{ backgroundColor: item.color, color: "white" }}
                        className="p-1 rounded-lg"
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerece;
