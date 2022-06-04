import React from "react";
import "./Create.css";
import Notifications from "../Components/Notifications/Notifications";
import UserLogo from "../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Stop = () => {
  return (
    <>
      <Fade right>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              Create Market
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

        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 text-center">
              <div className="container-fluid">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-lg custom-w btn-danger b-r-none text-start py-0 fs-6 focus-none"
                  >
                    SELL<br></br>144.40
                  </button>
                  <div className="position-absolute top-50 start-50 translate-middle z-i bg-light small-font mt-2 px-1">
                    5.60
                  </div>
                  <button
                    type="button"
                    className="btn btn-lg custom-w btn-primary b-r-none text-end py-0 fs-6 focus-none"
                  >
                    BUY<br></br>150.00
                  </button>
                </div>
              </div>

              <div className="container my-4 border-bottom pb-4">
                <Link
                  className="mx-3 no-dec p-2 text-dark border rounder hover-effect-nav my-1 text-center here"
                  to="/trade/create-market"
                >
                  Market
                </Link>
                <Link
                  className="mx-3 no-dec p-2 text-dark border rounder hover-effect-nav my-1 text-center here"
                  to="/trade/create-limit"
                >
                  Limit
                </Link>
                <Link
                  className="mx-3 no-dec p-2 text-dark border rounder hover-effect-nav my-1 text-center here"
                  to="/trade/create-stop"
                >
                  Stop
                </Link>
              </div>

              <div className="container my-3">
                <div className="row">
                  <div className="col-6">
                    <div className="input-group my-0">
                      <p className="" id="basic-addon1">
                        Price
                      </p>
                    </div>
                    <div className="my-0">
                      <input
                        type="number"
                        className="form-control focus-none"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group my-0">
                      <p className="" id="basic-addon1">
                        Ticks
                      </p>
                    </div>
                    <div className="my-0">
                      <input
                        type="number"
                        className="form-control focus-none"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="input-group my-0">
                  <p className="" id="basic-addon1">
                    Units
                  </p>
                </div>
                <div className="my-0">
                  <input
                    type="number"
                    className="form-control focus-none"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div className="container-fluid my-3">
                <div className="row">
                  <div className="col-5">
                    <div className="form-check d-flex justify-content-start">
                      <input
                        className="form-check-input focus-none"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label ms-2"
                        for="flexCheckDefault"
                      >
                        Take Profit
                      </label>
                    </div>
                    <ul className="list-group my-2">
                      <li className="list-group-item text-start text-muted">
                        75
                      </li>
                      <li className="list-group-item text-start text-muted">
                        143.65
                      </li>
                      <li className="list-group-item text-start text-muted">
                        5.26
                      </li>
                      <li className="list-group-item text-start text-muted">
                        0.01
                      </li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <p className="mb-4 hidden">3</p>
                    <p>Ticks</p>
                    <p className="mt-3">Price</p>
                    <p className="mt-3">$</p>
                    <p className="mt-3">%</p>
                  </div>
                  <div className="col-5">
                    <div className="form-check d-flex justify-content-end">
                      <input
                        className="form-check-input focus-none"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label ms-2"
                        for="flexCheckDefault"
                      >
                        Take Profit
                      </label>
                    </div>
                    <ul className="list-group my-2">
                      <li className="list-group-item text-start text-muted">
                        25
                      </li>
                      <li className="list-group-item text-start text-muted">
                        144.65
                      </li>
                      <li className="list-group-item text-start text-muted">
                        1.75
                      </li>
                      <li className="list-group-item text-start text-muted">
                        0.00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" className="btn btn-danger btn-lg w-100">
                  SELL 7.01 NASDAQ: AAPL @ 150.00 LIMIT
                </button>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Stop;
