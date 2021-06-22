import React, { useState } from "react";

const Suggestion = (props) => {


  const toggleItSelf=()=>{
    let state = JSON.parse(JSON.stringify(props.state));
    state.showSuggestionDisplay = !props.state.showSuggestionDisplay;
    props.setState(state)
  }

  const toggleColumn=(val)=>{
    let state = JSON.parse(JSON.stringify(props.state));
   const  index = state.tableHead.indexOf(val)
    state.tableHead.splice(index,1)
    console.log(state.tableHead)
  }
  


  return (
    <div>
      <input
        id="keyToggle"
        type="button"
        // value= {tableHead}
        onClick={() => toggleItSelf()}
      />
      {props.state.showSuggestionDisplay ? (
        <div className="Suggestion-box">
          {props.state.tableHead.map((val, index) => (
            <div className="header-suggestion">
              <input
                onClick={() => toggleColumn()}
                key = {index}
                type="checkbox"
                value={val}
                defaultChecked ={true}
              />
              {val}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Suggestion;
