import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Toolbar,
  Selection,
  Sort,
  Filter,
  Edit,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gripcomp"
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        width="auto"
        // Tool Bar will have a delte icon
        toolbar={["Delete"]}
        //Edit settings to allow person to make changes
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <Inject services={[Toolbar, Page, Edit, Selection, Sort, Filter]} />
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Customers;
