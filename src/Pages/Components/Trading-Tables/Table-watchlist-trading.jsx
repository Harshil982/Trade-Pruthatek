import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Table-trading.css";
import { Link } from "react-router-dom";

const Table = () => {
  const data = "helloo";
  return (
    <>
      <div className="table-responsive ms-3">
        <table className="table my-5 table-borderless">
          <thead>
            <tr className="table-border-none">
              <th scope="col" className="bg-light ">
                NSEFUT SYM
              </th>
              <th scope="col" className="bg-light ">
                BIO RATE
              </th>
              <th scope="col" className="bg-light ">
                ASK RATE
              </th>
              <th scope="col" className="bg-light ">
                LTP
              </th>
              <th scope="col" className="bg-light ">
                CHANGE%
              </th>
              <th scope="col" className="bg-light ">
                NET CHANGE
              </th>
              <th scope="col" className="bg-light ">
                HIGH
              </th>
              <th scope="col" className="bg-light ">
                LOW
              </th>
              <th scope="col" className="bg-light ">
                OPEN
              </th>
              <th scope="col" className="bg-light ">
                CLOSE
              </th>
              <th scope="col" className="bg-light ">
                REMOVE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="td-border py-0 ">
                <Link
                  to="/trade/detail-graph"
                  className="no-dec text-dark"
                  state={data}
                >
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec c color-white">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  NIFTY 31MAR2022
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
              <td className="td-border py-0  bg-primary text-center ">
                <Link to="/trade/detail-graph" className="no-dec color-white">
                  17,518.00
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-danger text-center">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretDown} color="red" /> 1 48.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  NIFTY 31MAR2022
                </Link>
              </td>
              <td className="td-border py-0  bg-danger text-center">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 1 48.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 1 48.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretDown} color="red" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
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
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  0.96
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,533.50
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,436.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,501.05
                </Link>
              </td>
              <td className="td-border py-0 ">
                <Link to="/trade/detail-graph" className="no-dec text-dark">
                  17,368.05
                </Link>
              </td>
              <td className="td-border py-0 ">
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
