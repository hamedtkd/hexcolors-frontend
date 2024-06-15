import { CopyIcon, EyeDropper } from "@/assets/icons";
import { useState } from "react";
import ColorPicker from "react-pick-color";
import './style.css'
export default function ColorInput() {
  const [hexColor, setHexColor] = useState("#000");

  const sampleColor = async () => {
    if ("EyeDropper" in window) {
      const eyeDropper = new (window as any).EyeDropper();
      try {
        const result = await eyeDropper.open();
        if (result && result.sRGBHex) {
          setHexColor(result.sRGBHex);
        }
      } catch (error) {
        console.error("Error using EyeDropper: ", error);
      }
    } else {
      console.error("EyeDropper API is not supported in this browser.");
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(hexColor);
  };

  return (
    <div className="flex gap-8">
      {/* <input
       className="!size-24 "
        onChange={(e) => setHexColor(e.target.value)}
        defaultValue={hexColor}
        type="color"
      /> */}
      {/* <SketchPicker /> */}

      <div className="w-96 " style={{ backgroundColor: `${hexColor}` }}></div>
      <div className="!rounded-xl border pb-4 ">
        <ColorPicker
          theme={{
            background: "transparent",
            inputBackground: "transparent",

            borderRadius: "6px",

          }}
          hideAlpha
          className="custom-input-color !border-0 input[name='hex']:bg-red-500 !shadow-none [&_*]:!text-base  [&_input]: [&_input]:!py-0 [&_input]:!outline-none [&_input]:!ring-0 [&_input]:focus:!border-none  [&_input]:!h-6"
          color={hexColor}
          onChange={(color) => setHexColor(color.hex)}
        />
        <div className="flex justify-end px-[.6rem] gap-6 mt-4">
          <button onClick={sampleColor}>
            <span role="svg" aria-label="eyedropper">
              <EyeDropper />
            </span>{" "}
          </button>
          <button onClick={handleCopy}>
            <span role="svg" aria-label="copy">
              <CopyIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
