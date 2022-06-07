import React from "react";
import "./Trades.css";
import Table from "../../Components/Trading-Tables/Table-trades-trading";
import Search from "../../Components/Search/Search";
import Calender from "../../Components/Calender/Calender";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Trades = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-3 fw-bold text-start p-0">
              <div className="form-check">
                <input
                  className="form-check-input focus-none"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  PENDING ORDERS
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input focus-none"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  EXECUTED ORDERS
                </label>
              </div>
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
              <UserLogo />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2">
              <p className="m-2">TRADE AFTER</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2">
              <p className="m-2">TRADE BEFORE</p>
              <Calender />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <p className="m-2">SELECT MARKET</p>
              <select
                className="form-select bg-orange color-white height-button focus-none border-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select Market
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
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <p className="m-2">SELECT SCRIPT</p>
              <select
                className="form-select bg-orange color-white height-button focus-none border-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select...
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
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 ">
              <p className="m-2">ORDER TYPE</p>
              <select
                className="form-select bg-orange color-white height-button focus-none border-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Order Type
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
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center my-1">

            </div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center my-1">
              <button
                type="button"
                className="btn btn-bg-custom float-end btn-lg fs-6 focus-none text-light "
              >
                FIND ORDER
              </button>
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center my-1">
              <button
                type="button"
                className="btn btn-info float-start btn-lg fs-6 focus-none text-light "
              >
                CLEAR FILTER
              </button>
            </div>
          </div>
        </div>
        <div className="ms-3">
          SHOW
          <span>
            <SelectEntry />
          </span>
          ENTRIES
        </div>
        <Table />
      </Fade>
    </>
  );
};

export default Trades;
