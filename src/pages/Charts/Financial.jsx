import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Category,
  Tooltip,
  Crosshair,
  Zoom,
  DateTime,
  Logarithmic,
} from "@syncfusion/ej2-react-charts";

import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";

import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

//Create a filter value where I only want to grab values greater than a certain year
const yearRange = new Date("2012-04-02");
const filteredYears = (year) => {
  if (year.x >= yearRange) {
    //As any of the values are true I will get back the Highsest stock value, lowest stock value, and what the stock opened at
    return year.high, year.low, year.x;
  }
};
//Creating a variable which will filter through the finacialChartData and grab only the value I conditioned in the filteredYears funtion above
const returnValue = financialChartData.filter(filteredYears);

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Q1 Data" />
      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 1 } }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[
            HiloSeries,
            Category,
            Tooltip,
            Crosshair,
            Zoom,
            DateTime,
            Logarithmic,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="Price"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
