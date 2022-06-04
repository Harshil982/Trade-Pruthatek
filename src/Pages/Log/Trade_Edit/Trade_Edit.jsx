import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
// import Calender from "../../Components/Calender/Calender";
import Search from "../../Components/Search/Search";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Trade_Edit = () => {
  return (
    <>
      <Fade right bottom>
      <div className="container">
          <div className="row my-2">
            <div className="col-12 col-sm-3 col-md-6 col-lg-4 col-xl-4">
              Trade Edit Log
            </div>
            <div className="col-4 col-sm-3 col-md-1 col-lg-5 col-xl-5"></div>

            <div className="col-6 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-center">
              <Notifications />
            </div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-2 col-xl-2 d-flex flex-row">
              <UserLogo />
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Segment
                </option>
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Script Name
                </option>
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Master
                </option>
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select Customer
                </option>
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-0 col-sm-0 col-md-4 col-lg-6 col-xl-6"></div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center my-1">
              <button
                type="button"
                className="btn btn-lg btn-primary focus-none"
              >
                Find Logs
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center my-1">
              <button type="button" className="btn btn-lg btn-info focus-none">
                Reset
              </button>
            </div>
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
        <div>
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

export default Trade_Edit;
