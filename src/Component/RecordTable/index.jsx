import React, { useEffect, useState } from "react";
import Table from "./Table";
import Row from "./Row";
import Column from "./Column";
import "./style.scss";
import Suggestion from "./SuggestionBox";
const RecordTable = (props) => {

  const [state,setState] = useState({
    rowData:null,
    tableHead:[],
    showSuggestionDisplay:false,
  })

  useEffect(()=>{
    let mounted = true
    if(mounted){
      let customState = JSON.parse(JSON.stringify(state));
      customState.rowData = props.rowData;
      Object.keys(props.rowData[0]).map((key) =>(
        customState.tableHead.push(key)
      ))
      setState(customState);
    }
    return function cleanup(){
      mounted = false
    }
  },[])

  
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
      <Table>
        {
          <>
            <Row>
              {state.tableHead.map((val,index) =>(
                      <Column>{val}</Column>
                    ))}
            </Row>
          </>
        }
        {
          state.rowData ? state.rowData.map((row,rowIndex) =>(
            <Row>
                {Object.values(row).map((col,colIndex) =>(
                    <Column>{col}</Column>
                  ))}
            </Row>
          ))
       :'' }
      </Table>


      <Suggestion
      state = {state}
      setState = {setState}
      />
     
    </div>
  );
};

export default RecordTable;

