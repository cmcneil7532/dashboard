import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  //Importing Searh from Syncfustion to allow us to search
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";

export const Employee = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10  bg-white rounded-3xl mt-24">
      <Header category="Page" title="Employees" />
      {/**Creating the grid template to look at employees */}
      {/**Pass in the employees data API inside the GridComponet */}
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging={true}
        allowSorting={true}
        //Search Toolbar
        toolbar={["Search"]}
        width="auto"
      >
        <Inject services={[Page, Search, Toolbar]} />
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Employee;
