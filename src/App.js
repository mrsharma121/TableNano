// import './App.css';
import RecordTable from "./Component/RecordTable/index";
import {rowData} from "../src/Component/MockData";
import React from "react";


function App() {

  return (
    <div className="App" style={{border:"1px solid black",padding:"2vw"}}>
      <RecordTable
        rowData = {rowData}
      />
    </div>
  );
}

export default App;
