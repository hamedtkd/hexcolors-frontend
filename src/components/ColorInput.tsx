import { useState } from "react";

export default function ColorInput() {
  const [hexColor, setHexColor] = useState("#000");
  return (
    <div>
      <input
       className="!size-24 "
        onChange={(e) => setHexColor(e.target.value)}
        defaultValue={hexColor}
        type="color"
      />
    </div>
  );
}
