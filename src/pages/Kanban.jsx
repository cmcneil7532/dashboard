import React from "react";
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";

import { Header } from "../components";
const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl mt-24">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        //Fetch the data to put inside the grid
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "id" }}
        keyField="Status"
      >
        {/** Loop over the columns directive */}
        <ColumnsDirective>
          {/** Map out the  */}
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
