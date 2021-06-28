import React from "react";
const Row = (props) => {
  return (
    <div
      className={`record-table-row ${props.className ? props.className : ""}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
export default Row;
