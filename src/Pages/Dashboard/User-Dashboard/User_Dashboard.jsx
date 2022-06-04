import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const User_Dashboard = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-3 fw-bold text-start p-0 fs-5">USER</div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center  my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
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
                    className="nav-link mx-3 text-dark border rounder hover-effect-nav text-center"
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
                    Summary Reports
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

export default User_Dashboard;
