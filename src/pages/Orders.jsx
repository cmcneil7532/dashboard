import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ContextMenuItems, ordersGrid } from "../data/dummy";

import { Header } from "../components";
export const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl mt-24">
      <Header category="Page" title="Orders" />
      {/**Creating the grid template to look at orders */}
      {/**Pass in the orders data API inside the GridComponet */}
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        //Spread the items so you dont have to scroll and put next items on the following page
        allowPaging={true}
        // Allow to interact with the tabs to sort them
        allowSorting={true}
      >
        <Inject
          services={[
            Resize,
            Sort,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            ContextMenu,
          ]}
        />
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Orders;
