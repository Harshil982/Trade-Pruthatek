import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";

const Trades_Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 fw-bold text-start p-0 fs-5">TRADES</div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
            <Search />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center my-3  my-sm-3 my-md-3 my-lg-0 my-xl-0">
            <Notifications />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 d-flex flex-row my-3  my-sm-3 my-md-3 my-lg-0 my-xl-0">
            <FontAwesomeIcon icon={faCircleUser} size="2x" className="mt-1" />
            <div className="dropdown ms-1 bg-transparent">
              <Link
                className="btn fw-bold focus-none"
                to="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Timothy
                <span className="ps-2">
                  <FontAwesomeIcon icon={faAngleDown} className="fw-bold" />
                </span>
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Trades_Dashboard;
