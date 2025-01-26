import React, { useState } from "react";
import { Range } from "react-range";

export const TwoThumbs = ({ rtl }) => {
  const [values, setValues] = useState([1599, 289999]);

  return (
    <div>
      <Range
        step={100}
        min={1599}
        max={289999}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children, index }) => {
          const { key, ...restProps } = props; // Destructure and exclude the key

          return (
            <div
              key={index} // Pass the key directly
              {...restProps} // Spread the remaining props
              style={{
                ...restProps.style,
                height: "6px",
                background: "linear-gradient(to right, #ddd, #888, #ddd)",
                position: "relative",
                margin: "30px 0",
                direction: rtl ? "rtl" : "ltr",
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props, isDragged, index }) => {
          const { key, ...restProps } = props; // Destructure and exclude the key

          return (
            <div
              key={index} // Pass the key directly
              {...restProps} // Spread the remaining props
              style={{
                ...restProps.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            ></div>
          );
        }}
      />
      <p className="font-bold text-[#5D5A5C] text-center">
        TK.
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[100px] max-w-xs mr-5"
          value={values[0]}
          onChange={(e) => setValues([e.target.value, values[1]])}
        />
        TK.{" "}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[100px] max-w-xs"
          value={values[1]}
          onChange={(e) => setValues([values[0], e.target.value])}
        />
      </p>
    </div>
  );
};
