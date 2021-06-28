import React, { useState, useEffect, useRef } from "react";
import Row from "./Row";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

const Slider = (props) => {
  const [sliderSwitch, setSliderSwitch] = useState(false);

  let sliderWidth = useRef();

  useEffect(() => {
    setTimeout(() => {
      props.getBackSliderWidth(sliderWidth.current.offsetWidth);
    }, 0);
  }, [sliderSwitch]);

  return (
    <div
      className="inline-row bdr slider"
      style={{ width: `${sliderSwitch ? "fit-content" : "1vw"}` }}
      ref={sliderWidth}
    >
      <div
        className="flex flex-center-center  slider-toggler"
        onClick={() => setSliderSwitch((prev) => !prev)}
      >
        <div className="flex flex-center-center font-normal font-weight-medium">
          {sliderSwitch ? (
            <ArrowBackIosRoundedIcon stroke={"white"} strokeWidth={4} />
          ) : (
            <ArrowForwardIosRoundedIcon stroke={"white"} strokeWidth={4} />
          )}
        </div>
      </div>
      {props.data &&
        props.data.map((val, index) => (
          <>
            {index === 0 && (
              <Row>
                {/* <div className="flex flex-center-center slider-col">
                  <input type="text" />
                </div> */}
              </Row>
            )}
            {Object.entries(val).map(
              ([key, value], index) =>
                key.toLocaleLowerCase() === "task id" && (
                  <Row>{/* <div className="flex slider-col"></div> */}</Row>
                )
            )}
          </>
        ))}
    </div>
  );
};

export default Slider;
