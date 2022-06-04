import React from "react";
import "./Trade_Report.css";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Trade_Report = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              TRADE REPORT
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

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3">
              <div className="container-fluid ps-0">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 ">
                    <div className="input-group">
                      <label
                        className="input-group-text bg-transparent border-none"
                        htmlFor="inputGroupSelect01"
                      >
                        Recent Type
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
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
                              Bill Summary
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
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
                              Hodiyu
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
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
                              Brokerage
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                          <div className="form-check my-1">
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
                              Position
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Reports
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Summary Bill (T Format)</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Valan
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">APROI NSE</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-6 my-2">
              <div className="form-check my-1 float-end">
                <input
                  className="form-check-input focus-none"
                  type="radio"
                  name="flexRadioDefault01"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Customer
                </label>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="form-check my-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault01"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label focus-none"
                  htmlFor="flexRadioDefault1"
                >
                  Self
                </label>
              </div>
            </div>

            <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Customer *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder="Select Client"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Master *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder="Select Master"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Script *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder="Select Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      htmlFor="inputGroupSelect01"
                    >
                      Without Bokerage
                    </label>
                  </div>
                </div>
                <div className="col-6 col-sm-8 col-md-8 col-lg-10 col-xl-10">
                  <div className="container">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input focus-none"
                            type="radio"
                            name="flexRadioDefault0000"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Segment
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Segment</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3">
              <div className="container-fluid ps-0">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 ">
                    <div className="input-group">
                      <label
                        className="input-group-text bg-transparent border-none"
                        htmlFor="inputGroupSelect01"
                      >
                        Data Filter
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
                            <input
                              className="form-check-input focus-none"
                              type="radio"
                              name="flexRadioDefault99"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              All Date
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
                            <input
                              className="form-check-input focus-none"
                              type="radio"
                              name="flexRadioDefault99"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Data Wise
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Broker
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Select Broker</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      htmlFor="inputGroupSelect01"
                    >
                      Expiry Date
                    </label>
                  </div>
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10">
                  <div className="container">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input focus-none"
                            type="radio"
                            name="flexRadioDefault789"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-end my-2">
              <button
                type="button"
                className="btn bg-brown mx-4 color-white btn-lg focus-none button-effect my-1"
              >
                View Report
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Trade_Report;
