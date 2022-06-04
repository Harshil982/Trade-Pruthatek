import React from "react";
import "./Banned.css";
import Table from "../../Components/Trading-Tables/Table-banned-trading";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Banned = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 text-center  my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <UserLogo />
            </div>
          </div>
        </div>
        <div className="text-start fw-bold my-5">Banned/blocked Scripts</div>

        <Table />
      </Fade>
    </>
  );
};

export default Banned;
