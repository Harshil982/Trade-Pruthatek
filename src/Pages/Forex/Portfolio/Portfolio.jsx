import React from "react";
import "./Portfolio.css";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import Search from "../../Components/Search/Search";
import Calender from "../../Components/Calender/Calender";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 fw-bold text-start p-0">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-5 col-xl-6">
                    <div className="form-check ">
                      <input
                        className="form-check-input focus-none bg-orange"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        ALL
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input focus-none bg-orange color-black"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        OUTSTANDING
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-6">
                    <div className="form-check ">
                      <input
                        className="form-check-input focus-none bg-orange"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        CLIENT WISE
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input focus-none bg-orange color-black"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        SCRIPT
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-4 my-2">
              <Search />
            </div>

            {/* <div className="container">
              <div className="row"> */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 text-center  my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
                  <Notifications />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
                  <UserLogo />
                {/* </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <p className="m-2">MARKET</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  SELECT MARKET
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
              <p className="m-2">SCRIPT</p>
              <select
                className="form-select bg-orange color-white height-button focus-none  "
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  SELECT SCRIPT
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <p className="m-2">EXPIRY DATE</p>
              <Calender />
            </div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
              <button
                type="button"
                className="btn btn-primary text-center btn-lg fs-6 focus-none"
              >
                GET POSITION
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
              <button
                type="button"
                className="btn btn-info text-center btn-lg fs-6 focus-none text-light"
              >
                ROLL OVER ALL
              </button>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
              <button
                type="button"
                className="btn btn-danger text-center btn-lg fs-6 focus-none"
              >
                CLOSE POSITION
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-2 fw-bold">
              <p>TOTAL MTM</p>
              <p>$0.000000</p>
            </div>
            <div className="col-2 fw-bold">
              <p>TOTAL QTY</p>
              <p>$0.000000</p>
            </div>
          </div>
        </div>
        <div className="ms-4">
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

export default Portfolio;
