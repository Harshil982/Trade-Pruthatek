import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import Calender from "../../Components/Calender/Calender";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Valan = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-6 col-lg-2 col-xl-2">
              Valan
            </div>
            <div className="col-9 col-sm-9 col-md-6 col-lg-7 col-xl-7 text-start">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-check">
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
                        Open
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
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
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center my-2">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
              <UserLogo />
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <p>Market Type</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
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
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <p>Valan Name</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Valan Name
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
              <p className="m-2">From End</p>
              <Calender />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
              <p className="m-2">From End</p>
              <Calender />
            </div>
          </div>
        </div>

        <div className="container my-5 ">
          <div className="row">
            <div className="col-12">
              <button
                type="button"
                className="float-end btn btn-lg mx-5 bg-danger focus-none text-light"
              >
                +ADD
              </button>
            </div>
          </div>
        </div>

        <Table />
      </Fade>
    </>
  );
};

export default Valan;
