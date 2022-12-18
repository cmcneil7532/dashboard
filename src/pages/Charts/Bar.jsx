import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  ColumnSeries,
  DataLabel,
  Tooltip,
  Legend
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryYAxis,
  barPrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Olympic Medals" />
      <ChartComponent
        id="area-chart"
        height="420px"
        //Makes the x axis values more precise
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        //Hover over each point to get mpre precise deatils
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{background: 'white'}}
      >
        <Inject services={[Category, ColumnSeries, Tooltip, DataLabel, Legend]} />

        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
