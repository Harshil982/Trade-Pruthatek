import React from "react";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const JV_Broker = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              JV Broker
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
            <div className="col-12 my-5 ">
              <div className="input-group ">
                <label
                  className="input-group-text bg-transparent border-none me-5"
                  htmlFor="inputGroupSelect01"
                >
                  Broker
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option defaultValue>Broker</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-6 text-end my-4">
              <button
                type="button"
                className="btn bg-brown color-white btn-lg focus-none button-effect"
              >
                Process
              </button>
            </div>
            <div className="col-6 text-start my-4">
              <button
                type="button"
                className="btn bg-blue color-white btn-lg focus-none button-effect"
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

export default JV_Broker;