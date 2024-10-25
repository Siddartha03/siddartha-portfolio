import React from "react";
import CountUp from "react-countup";
import "./Counter.scss";

export default function Counter({ number = 0, title = "", suffix = "" }) {
  return (
    <div className="number">
      <span>{title}</span>
      {number > 0 ? (
        <CountUp
          duration={5}
          className="counter"
          end={number}
          suffix={suffix}
        />
      ) : (
        "-"
      )}
    </div>
  );
}
