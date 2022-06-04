import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import Calender from "../../Components/Calender/Calender";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Trial = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4">
              Trial Balances
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
              <p className="m-2">From Date</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">From End</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center margin-custom">
              <button
                type="button"
                className="btn btn-primary focus-none float-end custom-btn"
              >
                Process
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center margin-custom">
              <button type="button" className="btn btn-info focus-none text-light  float-start custom-btn">
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <div className="form-check">
            <input
              className="form-check-input focus-none"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Includes Zero Balance
            </label>
          </div>
        </div>
        <Table />
      </Fade>
    </>
  );
};

export default Trial;
