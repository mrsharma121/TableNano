// import './App.css';
import RecordTable from "./Component/RecordTable/index";
import {rowData} from "../src/Component/MockData";
import React, {useState} from "react";


function App() {

  return (
    <div className="App">
      <RecordTable
        rowData = {rowData}
      />
    </div>
  );
}

export default App;
