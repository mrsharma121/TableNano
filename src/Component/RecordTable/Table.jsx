import React from "react";

function Table(props) {
  return (
    <div
      className={`inline-row w100 record-table ${
        props.className ? props.className : ""
      }`}
      {...props.style}
    >
      {props.children}
    </div>
  );
}

export default Table;
