import React from "react";
// import "./Margin.css";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Tablemargintrading from "../../Components/Trading-Tables/Table-margin-trading";
import Fade from "react-reveal/Fade";

const Margin = () => {
  return (
    <>
      <Fade top right >
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 text-center my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <UserLogo />
            </div>
          </div>
        </div>
        <div className="text-start fw-bold my-5 ms-4">Margin Management</div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">MASTER</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select Master
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
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">CLIENT</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select Client
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
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">BROKER</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select Broker
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
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center my-1">
              <button
                type="button"
                className="btn btn-primary text-center btn-lg fs-6 focus-none px-4"
              >
                SUBMIT
              </button>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center my-1">
              <button
                type="button"
                className="btn btn-info text-center btn-lg fs-6 focus-none text-light"
              >
                CLEAR FILTER
              </button>
            </div>
          </div>
        </div>

        <Tablemargintrading />
      </Fade>
    </>
  );
};

export default Margin;
