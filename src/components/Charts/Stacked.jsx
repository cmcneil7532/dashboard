import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      //getting rid of borders
      chartArea={{ border: { width: 0 } }}
      //toolTip enabling allows the user to hover over each column to get greater detail of month
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      {/**ALWAYS USE THE INJECT COMPONENT TO RENDER YOUR GRAPHS WHEN USING SYNCFUSION */}
      {/**Inside the inject will have attributes to allow for visual display */}
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, key) => (
          <SeriesDirective key={key} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
