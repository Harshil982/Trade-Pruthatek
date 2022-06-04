import React from "react";
import "./Deposit.css";

import { Link } from "react-router-dom";
import DateComp from "../../Components/Date/Date";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Deposit = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              DEPOSIT RECIPT
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
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                    <div className="input-group">
                      <label
                        className="input-group-text bg-transparent border-none"
                        htmlFor="inputGroupSelect01"
                      >
                        Transaction Type
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
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
                              Deposit Recipt
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
                              Deposit Payment
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Account Code
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Select From Account</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-end text-sm-end text-md-end my-1">
              <span className="color-brown fw-bold"> Balance:</span>
              <span className="color-blue fw-bold"> 0.00(Cr)</span>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 my-3 mb-4">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Account Name
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Select Customer</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-end text-sm-end text-md-end my-3">
              <span className="color-brown fw-bold"> Balance:</span>
              <span className="color-blue fw-bold"> 0.00(Cr)</span>
            </div>

            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1">
              <label
                className="input-group-text bg-transparent border-none"
                htmlFor="inputGroupSelect01"
              >
                Date
              </label>
            </div>
            <div className="col-5">
              <DateComp />
            </div>
            <Link to="/" className="col-3 color-blue fw-bold dec-none">
              Show entries
            </Link>

            <div className="col-12 my-4">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Amount
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder=""
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
                  Remarks
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="col-12 text-end my-2">
              <button
                type="button"
                className="btn bg-orange mx-4 color-white btn-lg focus-none custom-btn my-1"
              >
                Save
              </button>
              <button
                type="button"
                className="btn bg-brown mx-4 color-white btn-lg focus-none custom-btn button-effect my-1"
              >
                Delete
              </button>
              <button
                type="button"
                className="btn bg-primary mx-4 color-white btn-lg focus-none custom-btn  my-1"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Deposit;