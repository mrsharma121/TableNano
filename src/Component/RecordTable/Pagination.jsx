import React from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { useState } from "react";
import { useEffect } from "react";
import { CompassCalibrationOutlined } from "@material-ui/icons";

const Pagination = (props) => {
  const [dataPerPage, setDataPerPage] = useState(
    props.dataPerPage ? props.dataPerPage : 10
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState({});

  useEffect(() => {
    setTimeout(() => {
      props.setPerPageData(dataPerPage);
    }, 0);
    setCurrentPage(1);
    setIndexing();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleDataPerPage);
    return () => window.removeEventListener("keydown", handleDataPerPage);
  }, [dataPerPage]);

  useEffect(() => {
    console.log(pages);
    setTimeout(() => {
      props.getPageData(pages[currentPage]);
    }, 0);
  }, [currentPage]);

  const handleDataPerPage = (event) => {
    if (event.key === "Enter") {
      setTimeout(() => {
        props.setPerPageData(dataPerPage);
        setCurrentPage(1);
      }, 0);
      setIndexing();
    }
  };

  const pageMovement = (order) => {
    setCurrentPage((prev) => {
      if (order === "+" && currentPage !== Object.keys(pages).length) {
        prev = prev + 1;
      } else if (order === "-" && currentPage > 1) {
        prev = prev - 1;
      }
      return prev;
    });
  };

  const setIndexing = () => {
    setPages((prev) => {
      let custom = prev;
      let firstIndex = 0;
      let secondIndex = Number(dataPerPage);
      Object.keys(custom).map((key) => {
        delete custom[key];
      });
      for (
        let i = 1;
        i <= Math.ceil(props.totalRows / Number(dataPerPage));
        i++
      ) {
        custom[i] = [firstIndex, secondIndex];
        firstIndex = secondIndex;
        secondIndex = secondIndex + Number(dataPerPage);
      }
      console.log(custom);
      return custom;
    });
  };

  return (
    <div className="flex flex-center w100  ph pagination">
      <div className="flex ">
        <div className="flex flex-center-center">
          <div
            className="flex flex-center-center ph-small arrow"
            onClick={() => pageMovement("-")}
          >
            <ArrowBackIosRoundedIcon />
          </div>
        </div>
        <input
          type="number"
          value={dataPerPage}
          onChange={(event) => setDataPerPage(event.target.value)}
          className="ph-small font-normal color-black"
        />

        <div className="flex font-normal font-weight-medium">
          {pages &&
            Object.entries(pages).map(([key, val], index) => (
              <div className="flex flex-center-center">
                <div
                  className={`flex flex-center-center ph-small arrow page ${
                    currentPage === key ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage((prev) => key)}
                >
                  {key}
                </div>
              </div>
            ))}

          {/* <div className="flex flex-center-center ">
            <div className="flex flex-center-center ph-small arrow page active">
              2
            </div>
          </div>
          <div className="flex flex-center-center">
            <div className="flex flex-center-center ph-small arrow page">3</div>
          </div> */}
        </div>
        <div className="flex flex-center-center" style={{ marginLeft: "1vw" }}>
          <div
            className="flex flex-center-center ph-small arrow"
            onClick={() => pageMovement("+")}
          >
            <ArrowForwardIosRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
