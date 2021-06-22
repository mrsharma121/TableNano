import React from "react";

const Suggestion = (props) => {
  const toggleItSelf = () => {
    let state = JSON.parse(JSON.stringify(props.state));
    state.showSuggestionDisplay = !props.state.showSuggestionDisplay;
    props.setState(state);
  };

  const toggleColumn = (event) => {
    let val = null;
    props.setState((oldstate) => {
      let state = JSON.parse(JSON.stringify(oldstate));
      if (!event.target.checked) {
        state.rowData.map((row, index) => {
          row[event.target.value] = null;
        });
      } else {
        state.constantRowData.map((constantRow, index) => {
          Object.entries(constantRow).map(([key, value]) => {
            if (key === event.target.value) {
              val = value;
            }
          });
          state.rowData.map((row, index2) => {
            if (index2 === index) {
              row[event.target.value] = val;
            }
          });
        });
      }

      return state;
    });
  };

  return (
    <div>
      <input id="keyToggle" type="button" onClick={() => toggleItSelf()} />
      {props.state.showSuggestionDisplay ? (
        <div className="Suggestion-box">
          {props.state.tableHead.map((val, index) => (
            <div className="header-suggestion" key={index}>
              <input
                onChange={(event) => toggleColumn(event)}
                key={index}
                type="checkbox"
                value={val}
                defaultChecked={true}
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
