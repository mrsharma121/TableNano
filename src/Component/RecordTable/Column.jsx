import React from "react";

function Column(props) {
  return (
    <div
      className={`record-table-column ${
        props.className ? props.className : ""
      }`}
      {...props.style}
    >
      {props.children}
    </div>
  );
}

export default Column;
