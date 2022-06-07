import React from 'react';

function SecondReport(props) {
    return (
        <div>
            <p className="fs-4 text-center my-3">Leadger Report</p>
            <div className="row text-primary fw-bold ">
                <p className="col-12 col-xl-6 text-start" >Period : 06/06/2022 - 11/06/2022</p>
                <p className="col-12 col-xl-6 text-end" >Run Date / Time : 07/06/2022 11:30:06</p>
            </div>
            <div className="table-responsive ms-1">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr className="table-border-none text-center border border-dark" style={{ backgroundColor: "#F1C27D" }}>
                            <th scope="col" className="">
                                Client Name / Code
                            </th>
                            <th scope="col" className="">
                                Tr date
                            </th>
                            <th scope="col" className="">
                                Book Name
                            </th>
                            <th scope="col" className="">
                                V No
                            </th>
                            <th scope="col" className="">
                                Remarks
                            </th>
                            <th scope="col" className="">
                                Debit
                            </th>
                            <th scope="col" className="">
                                Credit
                            </th>
                            <th scope="col" className="">
                                Balance
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
                            <td className="py-0 text-end">
                                12000000.0
                            </td>
                            <td className="py-0 text-end">
                                12000000.0
                            </td>
                            <td className="py-0 text-end">
                                12000000.0
                            </td>
                            <td className="py-0 text-end">
                                12000000.0
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
                            <td className="py-0 text-end">
                                0.0
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
                            <td className="py-0 text-end">
                                0.0
                            </td>
                        </tr>
                        <tr className="text-center fw-bold border-0" style={{ backgroundColor: "skyblue" }} >
                            <td className="py-0 ">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                Total
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                0.0
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                        </tr>
                        <tr className="text-center fw-bold border-0" style={{ backgroundColor: "skyblue" }} >
                            <td className="py-0 ">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                            <td className="py-0 text-end">
                                Closing Balance
                            </td>
                            <td className="py-0 text-end">
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SecondReport;