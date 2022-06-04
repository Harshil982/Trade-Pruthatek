import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Calender from "../../Components/Calender/Calender";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Auto = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4">
              Auto Square Up Log
            </div>
            <div className="col-4 col-sm-3 col-md-1 col-lg-5 col-xl-5"></div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-center">
              <Notifications />
            </div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-2 col-xl-2">
              <UserLogo />
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">From End</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">From End</p>
              <Calender />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center margin-custom">
              <button
                type="button"
                className="btn btn-primary focus-none float-end"
              >
                Find Logs
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center margin-custom">
              <button type="button" className="text-light btn btn-info focus-none float-start">
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-0 col-sm-0 col-md-4 col-lg-6 col-xl-6"></div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center my-1"></div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center my-1">
              <Search />
            </div>
          </div>
        </div>
        <div className="ms-4">
          SHOW
          <span>
            <SelectEntry />
          </span>
          ENTRIES
        </div>
        <Table />
        <div className="fw-bold my-2">Sharing 0 to of 0 entries</div>
      </Fade>
    </>
  );
};

export default Auto;
