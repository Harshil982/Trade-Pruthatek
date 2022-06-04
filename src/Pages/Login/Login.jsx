import React from "react";
import logo from "../Navbar/STOCK COIN LOGO-01.png";
import "./Login.css";
import right from "./login-top-right.svg";
import left from "./login-top-left.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <>
      <div className="container-fluid p-0 d-flex flex-column">
        <div className="row row-cols-3 m-0">
          <div className="col">
            <img src={left} className="img-fluid" alt="" />
          </div>
          <div className="col"></div>
          <div className="col">
            <img src={right} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid mx-0 px-0 ">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-4 col-xl-4 mx-0 px-0">
            <div className="col p-0">
              <div className="left-bar float-start bar"></div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 flex-div height-login">
            <div className="flex-item">
              <img src={logo} className="img-fluid " alt="..." />

              <div class="input-group bg-light raduis-login my-4">
                <span
                  class="input-group-text bg-transparent border-none bg-light"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  class="form-control border-none bg-light raduis-login focus-none"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group bg-light raduis-login my-4">
                <span
                  class="input-group-text bg-transparent border-none bg-light"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  class="form-control border-none bg-light raduis-login focus-none"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="my-4 text-center">
                <button
                  type="button"
                  className="btn bg-orange button-radius focus-none px-4"
                >
                  Sign Up
                </button>
              </div>
              <div>
                <p className="fs-no color-red">No real money involved.</p>
                <p className="fs-this">
                  This is a virtual Trading Application which has all the
                  features to trade.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-4 col-xl-4 mx-0 px-0">
            <div className="col p-0">
              <div className="right-bar float-end bar"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-5">here</div>

      <div className="container-fluid vh-100 p-0 d-flex flex-column">
        <div className="row row-cols-3 m-0">
          <div className="col">
            <img src={left} className="img-fluid" alt="" />
          </div>
          <div className="col"></div>
          <div className="col">
            <img src={right} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row row-cols-3 m-0 flex-grow-1">
          <div className="col p-0">
            <div className="left-bar float-start bar"></div>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <div className="logo">
              <img src={Logo} className="img-fluid login-logo" alt="" />
            </div>
            <div className="mt-5">
              <form action="">
                <div className="position-relative d-flex align-items-center">
                  <div className="text-field border border-secondary"></div>
                  <img src={userlogo} className="icon" alt="" />
                  <input
                    type="text"
                    className="icon placeholder"
                    placeholder="Enter User ID"
                  />
                </div>
                <div className="position-relative d-flex align-items-center mt-4">
                  <div className="text-field border border-secondary"></div>
                  <img src={lock} className="icon" alt="" />
                  <input
                    type="password"
                    className="icon placeholder"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button className="submit-btn" type="submit">
                    <span className="signin-text">sign in</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="md:align-self-start mt-5">
              <p className="info mt-3">No real money involved.</p>
              <p className="extra-info">
                This is a Virtual Trading Application which has all the features
                to trade.
              </p>
            </div>
          </div>
          <div className="col p-0">
            <div className="right-bar float-end bar"></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
