import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Header } from "../components";
const Calendar = () => {
  return (
    //On regular devices margin of 2 and paddin of 2 on medium devices margin of 10 and padding of 10
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="560px"
        //Passing in our data dummy into our schedule component
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
