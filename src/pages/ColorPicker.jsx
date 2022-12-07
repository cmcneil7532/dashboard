import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const ColorPicker = () => {
  return (
    <div className="p-2 md:p-10 m-2 md:m-10 bg-white rounded-3xl mt-24">
      <Header category="App" title="Color Picker" />
      <ColorPickerComponent />
    </div>
  );
};

export default ColorPicker;
