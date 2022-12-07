import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const ColorPicker = () => {
  //Givig the ability to change the preview pen with our inline color pickers
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentColor.hex;
  };

  return (
    <div className="p-2 md:p-10 m-2 md:m-10 bg-white rounded-3xl mt-24">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        {/**This self closed div will represent our preciew color to get a visual of what the color look like */}
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="font-semibold text-2xl">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              inline={true}
              showButtons={false}
              modeSwitcher={false}
              //Providing the change to allow the preview to change
              change={change}
            />
          </div>
          <div>
            <p className="font-semibold text-2xl">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              inline={true}
              showButtons={false}
              modeSwitcher={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
