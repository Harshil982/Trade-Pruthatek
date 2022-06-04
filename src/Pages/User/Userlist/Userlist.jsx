import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import Search from "../../Components/Search/Search";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Fade from "react-reveal/Fade";

const Userlist = () => {
  return (
    <>
      <Fade right>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
              <div className="container">
                <div className="row">
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
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
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <p className="m-2">STATUS</p>
                    <select
                      className="form-select bg-orange color-white height-button focus-none  "
                      aria-label="Default select example"
                    >
                      <option
                        className="bg-light text-dark ps-3"
                        value="1"
                        defaultValue
                      >
                        Select Status
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
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <p className="m-2">PARANTS</p>
                    <select
                      className="form-select bg-orange color-white height-button focus-none  "
                      aria-label="Default select example"
                    >
                      <option
                        className="bg-light text-dark ps-3"
                        value="1"
                        defaultValue
                      >
                        Select Parants
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
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                    <p className="m-2">TYPE</p>
                    <select
                      className="form-select bg-orange color-white height-button focus-none  "
                      aria-label="Default select example"
                    >
                      <option
                        className="bg-light text-dark ps-3"
                        value="1"
                        defaultValue
                      >
                        Select Type
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
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-center">
              <button
                type="button"
                className="btn bg-brown color-white focus-none margin-custom"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
              <Search />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center">
              <button
                type="button"
                className="btn bg-primary color-white w-100 my-2 my-sm-2 my-md-2 my-lg-0 my-xl-0 focus-none"
              >
                +Add Account
              </button>
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

export default Userlist;
