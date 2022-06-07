import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretUp,
    faCaretDown,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
// import "./Table-trading.css";
import { Link } from "react-router-dom";

function Report(props) {
    return (
        <div>
            <p className="fs-4 text-center my-3">Summary Bill</p>
            <div className="row text-primary fw-bold ">
                <p className="col-12 col-xl-4 text-center" >Period : 06/06/2022 - 11/06/2022</p>
                <p className="col-12 col-xl-4 text-center" >JUN01 (MCX)</p>
                <p className="col-12 col-xl-4 text-center" >Run Date / Time : 07/06/2022 11:30:06</p>
            </div>
            <div className="table-responsive ms-1">
                <table className="table my-5 table-bordered border-dark">
                    <thead>
                        <tr className="table-border-none text-center border border-dark" style={{ backgroundColor: "#F1C27D" }}>
                            <th scope="col" className="">
                                Account
                            </th>
                            <th scope="col" className="">
                                Debit
                            </th>
                            <th scope="col" className="">
                                Acoount
                            </th>
                            <th scope="col" className="">
                                Credit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="py-0 text-end text-center ">
                                0.0
                            </td>
                            <td className="py-0 text-end text-center">
                                0.0
                            </td>
                            <td className="py-0 text-end text-center">
                                0.0
                            </td>
                            <td className="py-0 text-end text-center">
                                0.0
                            </td>
                        </tr>
                        <tr className="fw-bold fs-6 text-end" style={{backgroundColor : "#D3D3D3"}}>
                            <td className="py-0 ">
                                Total
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-bordered border-dark">
                    <thead>
                        <tr className="table-border-none text-center border border-dark" style={{ backgroundColor: "#F1C27D" }}>
                            <th scope="col" className="">
                                DEMODL11
                            </th>
                            <th scope="col" className="">
                                Debit
                            </th>
                            <th scope="col" className="">
                                Credit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-0 mt-2">
                            <td className="py-0 ">
                                TOTAL M2M
                            </td>
                            <td className="py-0 text-end">
                                1200000000.0
                            </td>
                            <td className="py-0 text-end">
                                12000000.0
                            </td>
                        </tr>
                        <tr className="border-0 mt-2" >
                            <td className="py-0 ">
                                TOTAL BROKERAGE
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                        </tr>
                        <tr className="border-0 mt-2" >
                            <td className="py-0 ">
                                TOTAL BROKER BROKERAGE
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                        </tr>
                        <tr className="border-0" >
                            <td className="py-0 ">
                                TOTAL PARTERNSHIP PASSION
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                        </tr>
                        <tr className="text-center fw-bold" style={{backgroundColor : "#FFFF66"}} >
                            <td className="py-0 ">
                                Net Figure
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Report;