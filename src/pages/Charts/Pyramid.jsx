import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
  PyramidSeries,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";

import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";
const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="mt-24 p-2 m-2 md:p-10 md:m-10 rounded-3xl bg-white">
      <Header category="Chart" title="Food Pyramid" />
      <AccumulationChartComponent
        id="Chart"
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#333735" : "#fff"}
        legendSettings={{ background: "white", title: "Food" }}
      >
        <Inject
          services={[
            AccumulationLegend,
            AccumulationTooltip,
            AccumulationDataLabel,
            PyramidSeries,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            type="Pyramid"
            xName="x"
            yName="y"
            name="Calories Recommended"
            //Pyramid width 45% of what the origianl width was
            width="45%"
            height="85%"
            neckWidth="15%"
            //Gap between each segment
            gapRatio={0.03}
            explode={true}
            explodeOffset="20"
            explodeAll={false}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
