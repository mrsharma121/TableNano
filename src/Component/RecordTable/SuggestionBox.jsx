import React, { useState, useRef, useEffect } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

const Suggestion = (props) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [toggleList, setToggleList] = useState(props.toggleData);
  let menuref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("down", close);
  });

  useEffect(() => {
    setTimeout(() => {
      props.getBackToggleData(toggleList);
    }, 0);
  }, [toggleList]);

  const close = (event) => {
    if (!menuref.current.contains(event.target)) {
      setShowSuggestion(false);
    }
  };

  const updateToggleList = (event) => {
    setToggleList((prev) => {
      let arr = JSON.parse(JSON.stringify(prev));
      if (!event.target.checked) {
        arr.push(event.target.value);
      } else {
        arr.splice(arr.indexOf(event.target.value), 1);
      }
      return arr;
    });
  };

  return (
    <div className="flex suggestion" ref={menuref}>
      <div
        className={`flex flex-center-center suggestion-lock
        `}
        onClick={() =>
          setShowSuggestion((prev) => {
            return !prev;
          })
        }
      >
        <AddRoundedIcon stroke={"#8f97a6"} strokeWidth={1} />
      </div>

      {showSuggestion && (
        <div className="suggestion-list">
          {props.suggestions.map((value, index) => (
            <div className="suggestion-label">
              <input
                onChange={(event) => updateToggleList(event)}
                type="checkbox"
                value={value}
                defaultChecked={!toggleList.includes(value)}
                id={value}
              />
              <label
                htmlFor={value}
                className="flex w100 ph font-normal font-weight-medium "
              >
                <span className="flex flex-center-center custom-check">
                  <CheckRoundedIcon stroke={"white"} strokeWidth={3} />
                </span>
                <span className="flex flex-center-center mlr-large">
                  {value}
                </span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Suggestion;
