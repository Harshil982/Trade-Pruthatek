import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Table-trading.css";
import { Link } from "react-router-dom";

const TradingWatchlistTable = () => {
  const data = "helloo";
  return (
    <>
      <div className="table-responsive ms-3">
        <table className="table my-5 table-borderless bg-dark">
          <thead>
            <tr className="table-border-none text-center">
              <th scope="col" className="td-border bg-dark text-white ">
                NSEFUT SYM
              </th>
              <th scope="col" className="td-border bg-dark text-white fixed-width-Trade">
                BIO RATE
              </th>
              <th scope="col" className="td-border bg-dark text-white  fixed-width-Trade">
                ASK RATE
              </th>
              <th scope="col" className="td-border bg-dark text-white  fixed-width-Trade">
                LTP
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                CHANGE%
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                NET CHANGE
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                HIGH
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                LOW
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                OPEN
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                CLOSE
              </th>
              <th scope="col" className="td-border bg-dark text-white ">
                REMOVE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="td-border py-0 ">
                <Link
                  to="/trade/detail-graph"
                  className="no-dec text-white"
                  state={data}
                >
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec c color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  0.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-danger text-center">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  0.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-danger text-center">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  0.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretDown} color="red" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-danger text-center">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white fixed-width-Trade">
                  0.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            {/* <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-danger text-center">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretDown} color="red" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,519.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-white">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 text-center">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button text-center"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TradingWatchlistTable;
