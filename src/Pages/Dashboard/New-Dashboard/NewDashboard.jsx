import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartShopping,
  faMessage,
  faCaretUp,
  faArrowUp,
  faArrowDown,
  faB,
  faGem,
  faUpDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./NewDashboard.css";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";
import ChartComp from "../../Components/theChart/theChart";
import UserLogo from "../../Components/UserLogo/UserLogo";
// import DetailTable from "../../Components/Detail-Table/Detail_Table";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";



const NewDashboard = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 text-center  my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2  my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
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
                    className={`nav-link mx-3 text-dark border rounder hover-effect-nav text-center ${path === "/trade/trades-dashboard" ? "bg-orange text-white" : ""} `}
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
                    Margin Reports
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

        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mt-2">
              <div className=" d-flex justify-content-center pos-rel set-width">
                <FontAwesomeIcon
                  icon={faEye}
                  className="bg-info p-2 btn-radius"
                  color="white"
                  size="1x"
                />
              </div>
              <div className="text-center border shadow-sm btn-radius set-width ">
                <p className="fs-4 mt-3 mb-0 text-info">17,000</p>
                <p className="my-0 mb-1">Master</p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mt-2">
              <div className=" d-flex justify-content-center pos-rel set-width">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="bg-primary p-2 btn-radius"
                  color="white"
                  size="1x"
                />
              </div>
              <div className="text-center border shadow-sm btn-radius set-width ">
                <p className="fs-4 mt-3 mb-0 text-primary">8000</p>
                <p className="my-0 mb-1">Broker</p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mt-2">
              <div className=" d-flex justify-content-center pos-rel set-width">
                <FontAwesomeIcon
                  icon={faMessage}
                  className="bg-brown p-2 btn-radius"
                  color="white"
                  size="1x"
                />
              </div>
              <div className="text-center border shadow-sm btn-radius set-width ">
                <p className="fs-4 mt-3 mb-0 color-brown">284</p>
                <p className="my-0 mb-1">Client</p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 mt-2">
              <div className=" d-flex justify-content-center pos-rel set-width">
                <FontAwesomeIcon
                  icon={faEye}
                  className="bg-warning p-2 btn-radius"
                  color="white"
                  size="1x"
                />
              </div>
              <div className="text-center border shadow-sm btn-radius set-width ">
                <p className="fs-4 mt-3 mb-0 text-warning">$7786</p>
                <p className="my-0 mb-1">Earnings</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
              <p className="fs-5 text-center mb-1 ft-bomb-0 ld">Accounts</p>
              <div className="bg-primary text-center py-3 accounts-radius">
                <p className="my-1 color-white fs-6">$14,45,000</p>
                <span className="accounts-radius color-white bg-info font-smaller px-2 py-1">
                  <FontAwesomeIcon icon={faCaretUp} /> $32 (2%)
                </span>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 text-center mx-0 px-1">
                    <button
                      type="button"
                      className="btn btn-primary w-100 my-2 btn-radius focus-none float-start"
                    >
                      <FontAwesomeIcon icon={faArrowUp} /> Deposit
                    </button>
                  </div>
                  <div className="col-6 text-center mx-0 px-1">
                    <button
                      type="button"
                      className="btn btn-info w-100 my-2 btn-radius color-white focus-none"
                    >
                      <FontAwesomeIcon icon={faArrowDown} /> Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-0 my-3">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="container p-0 ">
                <div className="row ">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-light btn-radius">
                    <div className="container p-0">
                      <div className="row">
                        <div className="col-3">
                          <FontAwesomeIcon
                            icon={faB}
                            className="bg-orange p-2 B-radius"
                            color="white"
                          />
                        </div>
                        <div className="col-9">
                          <div className="">
                            <p className="m-0 ">
                              BTC/USDT{" "}
                              <span className="float-end">$135.25</span>
                            </p>
                            <p className="my-0">
                              Bitcoin
                              <span className="float-end text-danger">
                                <FontAwesomeIcon icon={faArrowDown} />
                                $32(2%)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-light btn-radius">
                    <div className="container p-0">
                      <div className="row">
                        <div className="col-3">
                          <FontAwesomeIcon
                            icon={faGem}
                            className="bg-secondary p-2 B-radius"
                            color="white"
                          />
                        </div>
                        <div className="col-9">
                          <div className="">
                            <p className="m-0 ">
                              ETH/USDT{" "}
                              <span className="float-end">$215.00</span>
                            </p>
                            <p className="my-0">
                              Etheruem
                              <span className="float-end text-success">
                                <FontAwesomeIcon icon={faArrowUp} />
                                $32(2%)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-light btn-radius">
                    <div className="container p-0">
                      <div className="row">
                        <div className="col-3">
                          <FontAwesomeIcon
                            icon={faUpDown}
                            className="bg-warning p-2 B-radius"
                            color="white"
                          />
                        </div>
                        <div className="col-9">
                          <div className="">
                            <p className="m-0 ">
                              BNB/USDT{" "}
                              <span className="float-end">$135.25</span>
                            </p>
                            <p className="my-0">
                              BINANCE
                              <span className="float-end text-danger">
                                <FontAwesomeIcon icon={faArrowDown} />
                                $32(2%)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 bg-light btn-radius">
                    <div className="container p-0">
                      <div className="row">
                        <div className="col-3">
                          <FontAwesomeIcon
                            icon={faGem}
                            className="bg-secondary p-2 B-radius"
                            color="white"
                          />
                        </div>
                        <div className="col-9">
                          <div className="">
                            <p className="m-0 ">
                              ETH/USDT{" "}
                              <span className="float-end">$215.00</span>
                            </p>
                            <p className="my-0">
                              Etheruem
                              <span className="float-end text-success">
                                <FontAwesomeIcon icon={faArrowUp} />
                                $32(2%)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <p className="fs-4 ft-bomb-0 ld">Recent Transactions</p>

              <div className="container p-0">
                <div className="row w-100">
                  <div className="col-3">
                    <FontAwesomeIcon
                      icon={faB}
                      className="bg-warning p-2 B-radius"
                      color="white"
                    />
                  </div>
                  <div className="col-9">
                    <div className="">
                      <p className="m-0 ">Bitcon Buy</p>
                      <p className="my-0 d-flex justify-content-between">
                        <span>Today</span>
                        <span className="text-success">+2.05 BTC</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container p-0">
                <div className="row w-100">
                  <div className="col-3">
                    <FontAwesomeIcon
                      icon={faGem}
                      className="bg-secondary p-2 B-radius"
                      color="white"
                    />
                  </div>
                  <div className="col-9">
                    <div className="">
                      <p className="m-0 ">ETHEREUM SELL</p>
                      <p className="my-0 d-flex justify-content-between">
                        <span>2 Days ago</span>
                        <span className="text-success">+2.05 BTC</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container p-0 ">
                <div className="row w-100">
                  <div className="col-3">
                    <FontAwesomeIcon
                      icon={faGem}
                      className="bg-secondary p-2 B-radius"
                      color="white"
                    />
                  </div>
                  <div className="col-9">
                    <div className="">
                      <p className="m-0 ">ETHEREUM Buy</p>
                      <p className="my-0 d-flex justify-content-between">
                        <span>3 Days ago</span>
                        <span className="text-success">+2.05 BTC</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChartComp />

        {/* <DetailTable /> */}
      </Fade>
    </>
  );
};

export default NewDashboard;
