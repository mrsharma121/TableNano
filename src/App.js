// import './App.css';
import RecordTable from "./Component/RecordTable/index";
import {rowData} from "../src/Component/MockData";
import React from "react";
import Input from "./Component/Input";
import CheckBox from "./Component/Checkbox"
import Modal from "./Component/Modal"

function App() {

  return (
    <div className="App" style={{border:"1px solid black",padding:"2vw"}}>
      <RecordTable
        rowData = {rowData}
      />

      <div style = {{width:"40vw",display:"block",float:"left"}} >
    <Input
    value = "Tushar"
    label = {{
      name :"Name",
      position:"left",//left/top
    }}
    // getBackValue = {}
    // identity = {"Name"}
    valid = {true}
    customStyle = {{
    inputStyle : {backgroundColor: "red"},
    defaultInputStyle : {backgroundColor : "inherit"},
    errorStyle : {
      errorText : {},
      errorIcon : {},
      errorBox : {}
    }
    }}
     />
      </div>


    <CheckBox
    identity = {["Name"]}
    checked = {true}
    valid = {true}
    // getBackValue = {}
    // customStyle = {{
    //   classes : "",
    //   inlineStyle : ""
    // }}
    />

    <Modal
        // customStyle = {{
        //   classes : "",
        //   inlineStyle : ""
        // }}
    />
    </div>

  );
}

export default App;
