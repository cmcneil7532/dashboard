import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
  Category,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";

import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  //Inject my useStateContext to determine our dark or light mode
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 p-10 md:m-10 mt-24n bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="ColorMapping" />
      <ChartComponent
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        id="Chart"
        legendSettings={{ mode: "Range", background: "white" }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[ColumnSeries, Tooltip, Legend, Category]} />

        <SeriesCollectionDirective>
          {/**Map dipsplay our data */}
          <SeriesDirective
            dataSource={colorMappingData[0]}
            yName="y"
            xName="x"
            type="Column"
            name="USA"
            cornerRadius={{ topRight: 10, topLeft: 10 }}
          />
        </SeriesCollectionDirective>
        {/**Create range color for better visualixstion depeneding on Temperature */}
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
