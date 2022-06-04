import React, { useState } from "react";
import "./Navbar.css";
import tradeLogo from "./STOCK COIN LOGO-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faAngleDown,
  faEye,
  faDollarSign,
  faUser,
  faBook,
  faAddressBook,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState();

  const menuOpen = (currentSelectedItem) => {
    setSelectedTab(currentSelectedItem);
  };

  console.log(selectedTab);

  return (
    <>
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-center">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column fix">
          <Link to="/trade/trades-dashboard">
            <img
              src={tradeLogo}
              alt="Trade Logo"
              className="my-2 img-fluid"
              width="175"
              height=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/dashboard"
                        ? "radius-navbar-remove bg-orange color-white border border-none"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/dashboard");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faArrowTrendUp}
                            color={
                              selectedTab === "/dashboard" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">Dashboard</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/dashboard" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/dashboard" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/trades-dashboard"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Dashboard
                      </li>
                    </Link>
                    <Link
                      to="/trade/create-market"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Create
                      </li>
                    </Link>
                    {/* <Link
                      to="/trade/executed"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Executed Options
                      </li>
                    </Link>
                    <Link
                      to="/trade/running"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Running Orders
                      </li>
                    </Link>
                    <Link
                      to="/trade/summary"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Summary Reports
                      </li>
                    </Link>
                    <Link
                      to="/trade/m2m"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        M2M Alerts
                      </li>
                    </Link>
                    <Link
                      to="/trade/user-dashboard"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        User
                      </li>
                    </Link>
                    <Link
                      to="/trade/trade-entry"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Trade Entry
                      </li>
                    </Link> */}
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/trades"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/trades");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0 ">
                          <FontAwesomeIcon
                            icon={faEye}
                            color={
                              selectedTab === "/trades" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">Trading</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/trades" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/trades" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/watchlist-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Watchlist
                      </li>
                    </Link>
                    <Link
                      to="/trade/trades-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/portfolio-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Portfolio/Position
                      </li>
                    </Link>
                    <Link
                      to="/trade/banned-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Banned/Blocked Scripts
                      </li>
                    </Link>
                    <Link
                      to="/trade/margin-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Margin Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/forex"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/forex");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            color={selectedTab === "/forex" ? "white" : "#8E8E8E"}
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">Forex/Comex</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={selectedTab === "/forex" ? "white" : "#8E8E8E"}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/forex" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/watchlist-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Watchlist
                      </li>
                    </Link>
                    <Link
                      to="/trade/trades-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/portfolio-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Portfolio/Position
                      </li>
                    </Link>
                    <Link
                      to="/trade/margin-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Margin Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/user"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/user");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faUserCircle}
                            color={selectedTab === "/user" ? "white" : "#8E8E8E"}
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">User</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={selectedTab === "/user" ? "white" : "#8E8E8E"}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/user" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/all-user"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        All UserList
                      </li>
                    </Link>
                    <Link
                      to="/trade/userlist"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        UserList
                      </li>
                    </Link>
                    <Link
                      to="/trade/add-account"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Add Account
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/log"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/log");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faBook}
                            color={selectedTab === "/log" ? "white" : "#8E8E8E"}
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">Log</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={selectedTab === "/log" ? "white" : "#8E8E8E"}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/log" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/trade-edit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Trade Edit/ Delete Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/user-edit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        User Edit Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/auto"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Auto Square Up Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/cross"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Cross Trade Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/rejection"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Rejection Log
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/accounts"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/accounts");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faUser}
                            color={
                              selectedTab === "/accounts" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">Accounts</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/accounts" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/accounts" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/cash-ledge"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Cash Ledge
                      </li>
                    </Link>
                    <Link
                      to="/trade/cash-entry"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Cash Entry
                      </li>
                    </Link>
                    <Link
                      to="/trade/jv"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">JV</li>
                    </Link>
                    <Link
                      to="/trade/jv-broker"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        JV Broker
                      </li>
                    </Link>
                    <Link
                      to="/trade/deposit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Deposit Entry
                      </li>
                    </Link>
                    <Link
                      to="/trade/valan"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Valan
                      </li>
                    </Link>
                    <Link
                      to="/trade/jvbrocker-delete"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        JV Brocker Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <div className=" ">
                  <button
                    className={`btn  height-navbar-button border  ${
                      selectedTab === "/report"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar border-light shadow-sm"
                    } focus-none mt-4 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/report");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faAddressBook}
                            color={
                              selectedTab === "/report" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8 text-start">Report</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/report" ? "white" : "#8E8E8E"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/report" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/trade-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Track Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/ledge-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Ledge Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/deposit-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Deposit Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/trial"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trial Balances
                      </li>
                    </Link>
                    <Link
                      to="/trade/client-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Client Cr/Dr Report
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              {/* <Footer /> */}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
