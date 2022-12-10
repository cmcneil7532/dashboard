import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

import { pieChartData } from "../../data/dummy";

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Pie Chart" />
      <AccumulationChartComponent
        id="pie"
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#333735" : "#fff"}
      >
        <Inject
          services={[AccumulationDataLabel, AccumulationTooltip, PieSeries]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            type="Pie"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
