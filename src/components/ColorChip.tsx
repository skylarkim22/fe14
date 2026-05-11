import { useState } from "react";

export default function ColorChip() {
  const [fill, setFill] = useState(() => {
    if (typeof window !== "undefined") {
      const fillColor = localStorage.getItem("fillColor");
      if (fillColor) return fillColor;
    }
    return "#000000";
  });
  const [border, setBorder] = useState(() => {
    if (typeof window !== "undefined") {
      const borderColor = localStorage.getItem("borderColor");
      if (borderColor) return borderColor;
    }
    return "#000000";
  });
  const handlerChangeFill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setFill(color);
    localStorage.setItem("fillColor", color);
  };

  const handlerChangeBorder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setBorder(color);
    localStorage.setItem("borderColor", color);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-6">
        <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
          <span>채우기</span>
          <input
            type="color"
            name="fill"
            id="fill"
            value={fill}
            onChange={handlerChangeFill}
          />
        </div>
        <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
          <span>테두리</span>
          <input
            type="color"
            name="border"
            id="border"
            value={border}
            onChange={handlerChangeBorder}
          />
        </div>
      </div>
      <div
        className={`h-24 w-48 rounded-md border-4`}
        style={{ backgroundColor: fill, borderColor: border }}
      ></div>
    </>
  );
}
