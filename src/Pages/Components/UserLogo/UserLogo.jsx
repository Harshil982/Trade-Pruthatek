import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faAngleDown,
  // faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import './UserLogo.css'
import { Link } from "react-router-dom";

const UserLogo = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <FontAwesomeIcon icon={faCircleUser} size="2x" className="mt-1" />
        <div className="dropdown ms-1 bg-transparent">
          <Link
            className="btn fw-bold focus-none mt-0"
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
          {/* <button
            type="button"
            className="btn-sm bg-danger text-light w-75 focus-none mt-3 float-start border-none"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2" />
            Logout
          </button> */}

          <ul className="dropdown-menu drop-down " aria-labelledby="dropdownMenuLink">
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
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserLogo;
