import React,{useState} from "react";
import "./Add_Account.css";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";
import MCXtable from "./MCXtable";
import NSEtable from "./NSEtable";
import Forextable from "./Forex";

const Add_Account = () => {
  const [MCX, setMCX] = useState(false)
  const [NSE, setNSE] = useState(false)
  const [Forex, setForex] = useState(false)
  return (
    <>
      <Fade right>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              ADD ACCOUNT
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

        <h3 className="text-center my-3 fw-bold">Basic Details</h3>

        <div className="container my-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  style={{width : "10vw"}}
                  id="basic-addon1"
                >
                  Username *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                  style={{width : "10vw"}}
                >
                  Password *
                </span>
                <input
                  type="password"
                  className="form-control input-border focus-none"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  style={{width : "10vw"}}
                  id="basic-addon1"
                >
                  Account Code *
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-transparent border-none"
                  style={{width : "10vw"}}
                  id="basic-addon1"
                >
                  Account Name*
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  style={{width : "10vw"}}
                  htmlFor="inputGroupSelect01"
                >
                  Account Type
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Select Account Type</option>
                  <option value="1">Master One</option>
                  <option value="2">Master Two</option>
                  <option value="3">Master Three</option>
                  <option value="4">Master four</option>
                  <option value="5">Master five</option>
                  <option value="6">Master six</option>
                  <option value="7">Master seven</option>
                  <option value="Broker">Broker</option>
                  <option value="User">User</option>
                  <option value="telemaster">telemaster</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
              <div className="input-group mb-3">
                <span
                  className="input-group-text bg-transparent border-none"
                  style={{width : "10vw"}}
                  id="basic-addon1"
                >
                  My Partnership
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
            {/* <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Account Type
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Select Account Type</option>
                  <option value="1">Master One</option>
                  <option value="2">Master Two</option>
                  <option value="3">Master Three</option>
                  <option value="4">Master four</option>
                  <option value="5">Master five</option>
                  <option value="6">Master six</option>
                  <option value="7">Master seven</option>
                  <option value="Broker">Broker</option>
                  <option value="User">User</option>
                  <option value="telemaster">telemaster</option>
                </select>
              </div>
            </div> */}

            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 my-3">
              <div className="container-fluid ps-0">
                <div className="row"> */}
            {/* <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                    <div className="input-group">
                      <label
                        className="input-group-text bg-transparent border-none"
                        htmlFor="inputGroupSelect01"
                      >
                        Opening Balance
                      </label>
                    </div>
                  </div> */}
            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"> */}
            {/* <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 ">
                          <div className="form-check my-1">
                            <input
                              className="form-check-input focus-none"
                              type="radio"
                              name="flexRadioDefault1000"
                              id="flexRadioDefault01"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault01"
                            >
                              Credit
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-check my-1">
                            <input
                              className="form-check-input focus-none"
                              type="radio"
                              name="flexRadioDefault1000"
                              id="flexRadioDefault02"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault02"
                            >
                              Debit
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> */}
            {/* </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 my-3">
              <input
                type="text"
                className="form-control input-border focus-none"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div> */}

            {/* <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Password *
                </span>
                <input
                  type="password"
                  className="form-control input-border focus-none"
                  placeholder="Enter Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div> */}

            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 px-4 mt-4">
              Segments
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 my-3 px-0">
              <div className="container">
                {/* <p className="px-0">Segments</p> */}
                <div className="row">
                  <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="form-check ">
                      <input
                        className="form-check-input focus-none"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={MCX}
                        onChange={() => setMCX(prev => !prev)}
                      />
                      <label
                        className="form-check-label "
                        htmlFor="flexRadioDefault1"
                      >
                        MCX
                      </label>
                    </div>
                    <button className="btn btn-orange bg-orange w-50 color-white text-center cursor-pointer py-3 input-border" disabled={MCX ? false : true} >
                      MCX View
                    </button>
                  </div>
                  <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="form-check ">
                      <input
                        className="form-check-input focus-none"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value={NSE}
                        onChange={() => setNSE(prev => !prev)}
                      />
                      <label
                        className="form-check-label focus-none"
                        htmlFor="flexRadioDefault2"
                      >
                        NSE
                      </label>
                    </div>
                    <button className="btn btn-orange bg-orange w-50 color-white text-center cursor-pointer py-3 input-border" disabled={NSE ? false : true} >
                      NSE View
                    </button>
                  </div>
                  <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="form-check ">
                      <input
                        className="form-check-input focus-none"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        value={Forex}
                        onChange = {() => setForex(prev => !prev)}
                      />
                      <label
                        className="form-check-label "
                        htmlFor="flexRadioDefault3"
                      >
                        Forex
                      </label>
                    </div>
                    <button className="btn btn-orange bg-orange w-50 color-white text-center cursor-pointer py-3 input-border" disabled={Forex ? false : true} >
                      Forex
                    </button>
                  </div>
                  {/* <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                    <div className="form-check ">
                      <input
                        className="form-check-input focus-none"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label "
                        htmlFor="flexRadioDefault1"
                      >
                        NCDS
                      </label>
                    </div>
                    <div className="bg-orange w-50 color-orange py-3 input-border">
                      s
                    </div>
                  </div> */}
                </div>
              </div>
            </div>


            {/* <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  My Partnership
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div> */}
            <MCXtable />
            <NSEtable />
            <Forextable />

            <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Remarks
                </span>
                <textarea
                  // type=""
                  className="form-control input-border focus-none"
                  placeholder=""
                  aria-label="Remarks"
                  aria-describedby="basic-addon1"
                  style={{ height: "2vw" }}
                />
              </div>
            </div>
            <h5 className="px-4 my-4 ">Other Details</h5>
            <div className="other-details row" >
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    Order Between High Low :
                  </span>
                  <div class="form-check form-check-inline mt-2 ">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Yes" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="No" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    Apply Auto Square :
                  </span>
                  <div class="form-check form-check-inline mt-2 ">
                    <input class="form-check-input" type="radio" name="Apply Auto Square" id="apply-auto-square-Yes" value="Yes" />
                    <label class="form-check-label" for="apply-auto-square-Yes">Yes</label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="radio" name="Apply Auto Square" id="apply-auto-square-No" value="No" />
                    <label class="form-check-label" for="apply-auto-square-No">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-details row" >
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    Intra Day Auto Square :
                  </span>
                  <div class="form-check form-check-inline mt-2 ">
                    <input class="form-check-input" type="radio" name="Intra Day Auto Square" id="intraday-Yes" value="Yes" />
                    <label class="form-check-label" for="intraday-Yes">Yes</label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="radio" name="Intra Day Auto Square" id="intraday-No" value="No" />
                    <label class="form-check-label" for="intraday-No">No</label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    Only Position SquareOff :
                  </span>
                  <div class="form-check form-check-inline mt-2 ">
                    <input class="form-check-input" type="radio" name="Only Position SquareOff" id="Position-Yes" value="Yes" />
                    <label class="form-check-label" for="Position-Yes">Yes</label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="radio" name="Only Position SquareOff" id="Position-No" value="No" />
                    <label class="form-check-label" for="Position-No">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-details row" >
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    M2M Linked with Ledger :
                  </span>
                  <div class="form-check form-check-inline mt-2 ">
                    <input class="form-check-input" type="radio" name="M2M" id="M2M-Yes" value="Yes" />
                    <label class="form-check-label" for="M2M-Yes">Yes</label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="radio" name="M2M" id="M2M-No" value="No" />
                    <label class="form-check-label" for="M2M-No">No</label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    Band Script Allow :
                  </span>
                  <div class="form-check form-check-inline mt-2 ">
                    <input class="form-check-input" type="radio" name="Band Script Allow" id="Band-Script-Yes" value="Yes" />
                    <label class="form-check-label" for="Band-Script-Yes">Yes</label>
                  </div>

                  <div class="form-check form-check-inline mt-2">
                    <input class="form-check-input" type="radio" name="Band Script Allow" id="Band-Script-No" value="No" />
                    <label class="form-check-label" for="Band-Script-No">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-details row" >
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    Alert :
                  </span>
                  <input
                    type="number"
                    className="form-control input-border focus-none"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-transparent border-none fw-bold"
                    id="basic-addon1"
                  >
                    M2M PL :
                  </span>
                  <input
                    type="number"
                    className="form-control input-border focus-none"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 text-end">
              <button
                type="button"
                className="btn bg-brown color-white btn-lg focus-none button-effect my-5"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Add_Account;
