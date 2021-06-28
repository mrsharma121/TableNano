import React, { useEffect, useState } from "react";
import Table from "./Table";
import Row from "./Row";
import Column from "./Column";
import Suggestion from "./SuggestionBox";
import Pagination from "./Pagination";
import "./style.scss";
import "./master.scss";
const RecordTable = (props) => {
  const [state, setState] = useState({
    constantRowData: null,
    rowData: null,
    tableHead: [],
    totalRows: props.rowData.length,
    hideCol: [],
  });

  useEffect(() => {
    setState((prev) => {
      let customState = JSON.parse(JSON.stringify(prev));
      customState.rowData = props.rowData;
      customState.constantRowData = props.rowData;
      Object.keys(props.rowData[0]).map((key) =>
        customState.tableHead.push(key)
      );
      return customState;
    });
  }, []);

  const showHideSuggestions = (suggestions) => {
    setState((prev) => {
      let customState = JSON.parse(JSON.stringify(prev));
      customState.hideCol = suggestions;
      return customState;
    });
    return suggestions;
  };

  const handlePerPageData = (data) => {
    if (data >= 5) {
      setState((prev) => {
        let customState = JSON.parse(JSON.stringify(prev));
        customState.rowData = customState.constantRowData.slice(0, data);
        return customState;
      });
    }
  };

  const setPageData = (page) => {
    console.log(page);
    setState((prev) => {
      let customState = JSON.parse(JSON.stringify(prev));
      customState.rowData = customState.constantRowData.slice(page[0], page[1]);
      return customState;
    });
  };

  return (
    <div className="flex flex-center-center" style={{ position: "relative" }}>
      <Suggestion
        suggestions={state.tableHead}
        toggleData={["Task Name", "Sprint", "Epic"]}
        getBackToggleData={showHideSuggestions}
      />
      <Table>
        {state.rowData
          ? state.rowData.map((row, rowIndex) => (
              <>
                {rowIndex === 0 && (
                  <Row style={{ position: "sticky", top: "0" }}>
                    {Object.entries(row).map(
                      ([key, value], index) =>
                        !state.hideCol.includes(key) && (
                          <Column className="record-table-header-col font-normal color-black font-weight-medium">
                            {key}
                          </Column>
                        )
                    )}
                  </Row>
                )}
                <Row>
                  {Object.entries(row).map(
                    ([colkey, colval], colIndex) =>
                      !state.hideCol.includes(colkey) && (
                        <Column>{colval}</Column>
                      )
                  )}
                </Row>
              </>
            ))
          : ""}
      </Table>

      <Pagination
        dataPerPage={5}
        setPerPageData={handlePerPageData}
        totalRows={state.totalRows}
        getPageData={setPageData}
      />
    </div>
  );
};

export default RecordTable;
