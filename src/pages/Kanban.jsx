import React from "react";
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";

import { Header } from "../components";
const Kanban = () => {
  return (
    <div>
      <Header category="App" title="Kanba" />
    </div>
  );
};

export default Kanban;
