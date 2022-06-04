import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Calender from "../../Components/Calender/Calender";
import Notifications from "../../Components/Notifications/Notifications";
import Search from "../../Components/Search/Search";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";
import "./Trade_Entry.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Trade_Entry = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-3 fw-bold text-start p-0 fs-5">TRADE ENTRY</div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <UserLogo />
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg border-dash-nav mb-2">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mt-2">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mb-2">
                <li className="nav-item">
                  <Link
                    className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center"
                    to="/trade/trades-dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center"
                    to="/trade/executed"
                  >
                    Executed Options
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center" to="/trade/running">
                    Running Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center" to="/trade/summary">
                    Summary Reports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center" to="/trade/m2m">
                    M2M Alerts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center"
                    to="/trade/user-dashboard"
                  >
                    User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center"
                    to="/trade/trade-entry"
                  >
                    Trade Entry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container my-3">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <p className="m-2">From End</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <p className="m-2">Segment</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <p className="my-2 px-3">Trade Type</p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 ">
                    <div className="form-check my-2">
                      <input
                        className="form-check-input focus-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Buy
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check my-2">
                      <input
                        className="form-check-input focus-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Sell
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <p className="my-2 px-3">Trade Brokerage</p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 ">
                    <div className="form-check my-2">
                      <input
                        className="form-check-input focus-none"
                        type="radio"
                        name="flexRadioDefault0"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Without brokerage
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <p className="m-2">Script Name</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark border rounded hover-effect-nav ps-3"
                  value="1"
                  defaultValue
                >
                  Script
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Three
                </option>
              </select>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <p className="m-2">Lot</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark border rounded hover-effect-nav ps-3"
                  value="1"
                  defaultValue
                >
                  Lot
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <p className="m-2">Qty</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark border rounded hover-effect-nav ps-3"
                  value="1"
                  defaultValue
                >
                  Qty
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 ">
              <p className="m-2">Price</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark border rounded hover-effect-nav ps-3"
                  value="1"
                  defaultValue
                >
                  Price
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
              <p className="m-2">Client</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark border rounded hover-effect-nav ps-3"
                  value="1"
                  defaultValue
                >
                  Select Client
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark border rounded hover-effect-nav ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-8 col-lg-10 col-xl-10"></div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center my-1">
              <button
                type="button"
                className="btn btn-lg bg-brown color-white w-100"
              >
                Submit
              </button>
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
      </Fade>
    </>
  );
};

export default Trade_Entry;
