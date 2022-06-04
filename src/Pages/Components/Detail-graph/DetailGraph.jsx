import React from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import ChartComp from "../theChart/theChart";
import { useLocation } from "react-router-dom";

const DetailGraph = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Fade bottom>
        <div className="w-100 bg-dark text-center color-white fs-2 py-3 mb-3">
          <button
            className="btn btn-light fs-5 px-4 focus-none"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <p className="mt-3">Detail Graph {location.state}</p>
        </div>
        <ChartComp />
      </Fade>
    </>
  );
};

export default DetailGraph;
