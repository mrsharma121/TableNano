import React, { useEffect, useState } from "react";
import Table from "./Table";
import Row from "./Row";
import Column from "./Column";
import Suggestion from "./SuggestionBox";
import "./style.scss";
const RecordTable = (props) => {
  const [state, setState] = useState({
    rowData: null,
    constantRowData: null,
    tableHead: [],
    showSuggestionDisplay: false,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      let customState = JSON.parse(JSON.stringify(state));
      customState.rowData = props.rowData;
      customState.constantRowData = props.rowData;
      Object.keys(props.rowData[0]).map((key) =>
        customState.tableHead.push(key)
      );
      setState(customState);
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  // rowData.map(({["Task ID"]:TaskID ,  ...item})=>(
  //   console.log(item)
  // ))

  // Object.keys(rowData[0]).map((value, keyIndex)=>(
  //   tableHead.push(value)
  //   ))

  // const toggleHeader = (e) =>{
  //   if (!e.target.checked){
  //       var index = filteredData.indexOf(e.target.value)
  //       // console.log(index)
  //       // if(index > -1){
  //       //   tableHead.splice(index, 1)
  //       // }
  //       // console.log(tableHead)
  //     // console.log(e.target.value)
  //   }
  // }

  return (
    <div>
      <Suggestion state={state} setState={setState} />
      <Table>
        {state.rowData
          ? state.rowData.map((row, rowIndex) => (
              <>
                {rowIndex === 0 && (
                  <Row>
                    {Object.entries(row).map(
                      ([key, value], index) =>
                        value !== null && <Column>{key}</Column>
                    )}
                  </Row>
                )}
                <Row>
                  {Object.values(row).map(
                    (col, colIndex) => col !== null && <Column>{col}</Column>
                  )}
                </Row>
              </>
            ))
          : ""}
      </Table>
    </div>
  );
};

export default RecordTable;
