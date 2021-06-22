import React from "react";
import { rowData } from "../MockData";
const Row = ({children}) => {
  return (
    <tr  className="record-table-row">
        {children}
    
    </tr>
  );
};
export default Row;

// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');
// *{
//     box-sizing: border-box;
//     margin: 0%;
//     padding: 0%;
//     font-family: 'Poppins', sans-serif;
// }

// .tableHead{
//     background-color: grey;
//     font-weight: bold;
// }

// table{
//     width: 200vw;
//     overflow-x: scroll;
// }









{/* <table>
<tr key={"tableHead"}>
  {Object.keys(rowData[0]).map((header) => (
    <th className="tableHead">{header}</th>
  ))}
</tr>
{rowData.map((item) => (
  <tr key={item.id}>
    {Object.values(item).map((val) => (
      <td>{val}</td>
    ))}
  </tr>
))}
</table> */}