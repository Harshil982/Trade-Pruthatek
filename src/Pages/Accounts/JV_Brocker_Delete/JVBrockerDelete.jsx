import React from "react";
// import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
// import Calender from "../../Components/Calender/Calender";
// import Search from "../../Components/Search/Search";
// import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const JVBrockerDelete = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              JV Brocker Delete
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
          {/* Brocker */}

          <div className="row align-items-center my-3">
            <div className="col-3">Brocker</div>
            <div className="col-5">
              <select
                className="form-select input-border focus-none"
                id="inputGroupSelect01"
              >
                <option className="">Title</option>
                <option className="">second</option>
                <option className="">third</option>
              </select>
            </div>
            <div className="col-3"></div>
            <div className="col-1"></div>
          </div>

          {/* date */}
          <div className="row align-items-center my-3">
            <div className="col-3">Date</div>
            <div className="col-5">
              <input type="date" className="w-100 p-1 " />
            </div>
            <div className="col-3"></div>
            <div className="col-1"></div>
          </div>

          {/* buttons */}
          <div className="row align-items-center my-3">
            <div className="col-3"></div>
            <div className="col-2">
              <button type="button" class="btn btn-primary w-100">
                Get
              </button>
            </div>
            <div className="col-1"></div>
            <div className="col-6"></div>
          </div>
        </div>

        <div className="container mt-5">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">From User</th>
                <th scope="col">To User</th>
                <th scope="col">Remark</th>
                <th scope="col">Account</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </Fade>
    </>
  );
};

export default JVBrockerDelete;
