import React from 'react';

function NSEtable(props) {
    return (
        <>
            <h3 className="text-center my-4" >NSE</h3>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 border border-dark">
                    <h5 className="text-center mt-2">Brokerage Details</h5>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Copy Settings From
                            </label>
                            <select
                                className="form-select input-border focus-none"
                                id="inputGroupSelect01"
                            >
                                <option className="">Select ID</option>
                                <option value="1">Master One</option>
                                <option value="2">Master Two</option>
                                <option value="3">Master Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Min script rate :
                            </label>
                            <input
                                type="number"
                                className="form-control input-border focus-none"
                                placeholder="Min script rate"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mt-3">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Delivery Commision :
                            </label>
                            <input
                                type="number"
                                className="form-control input-border focus-none"
                                placeholder="Delivery Commision"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mt-3">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Intraday Commision :
                            </label>
                            <input
                                type="number"
                                className="form-control input-border focus-none"
                                placeholder="Intraday Commision"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>

                    <p className="mt-3 fw-bold px-2" >Script wise brokerage</p>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-0 mb-4">
                                <div className="input-group">
                                    <label
                                        className="input-group-text bg-transparent border-none px-0"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Select Script :
                                    </label>
                                    <select
                                        className="form-select input-border focus-none"
                                        id="inputGroupSelect01"
                                    >
                                        <option className="">Select Script</option>
                                        <option value="1">Master One</option>
                                        <option value="2">Master Two</option>
                                        <option value="3">Master Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="input-group">
                                <label
                                    className="input-group-text bg-transparent border-none px-0"
                                    htmlFor="inputGroupSelect01"
                                >
                                    Delivery Com :
                                </label>
                                <input
                                    type="text"
                                    className="form-control input-border focus-none"
                                    placeholder="Delivery Com"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="input-group">
                                <label
                                    className="input-group-text bg-transparent border-none px-0"
                                    htmlFor="inputGroupSelect01"
                                >
                                    Intraday Com :
                                </label>
                                <input
                                    type="text"
                                    className="form-control input-border focus-none"
                                    placeholder="Intraday Com"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" >
                        <button className="btn btn-success mb-4" >+ Add</button>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 border border-dark">
                    <h5 className="text-center mt-2">Margin Details</h5>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Copy Settings From
                            </label>
                            <select
                                className="form-select input-border focus-none"
                                id="inputGroupSelect01"
                            >
                                <option className="">Select ID</option>
                                <option value="1">Master One</option>
                                <option value="2">Master Two</option>
                                <option value="3">Master Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text bg-transparent border-none"
                            id="basic-addon1"
                        >
                            Type :
                        </span>
                        <div class="form-check form-check-inline mt-2 ">
                            <input class="form-check-input" type="radio" name="NSE-margin-Type" id="NSE-margin-Lot" value="Yes" />
                            <label class="form-check-label" for="NSE-margin-Lot">Lot</label>
                        </div>

                        <div class="form-check form-check-inline mt-2">
                            <input class="form-check-input" type="radio" name="NSE-margin-Type" id="NSE-margin-Percent" value="No" />
                            <label class="form-check-label" for="NSE-margin-Percent">Percent</label>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Total Lot Wise
                            </label>
                            <input
                                type="text"
                                className="form-control input-border focus-none"
                                placeholder="MCX Lot Wise"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-0 mb-4">
                                <div className="input-group">
                                    <label
                                        className="input-group-text bg-transparent border-none px-0"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Select Script :
                                    </label>
                                    <select
                                        className="form-select input-border focus-none"
                                        id="inputGroupSelect01"
                                    >
                                        <option className="">Select Script</option>
                                        <option value="1">Master One</option>
                                        <option value="2">Master Two</option>
                                        <option value="3">Master Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="input-group">
                                <label
                                    className="input-group-text bg-transparent border-none px-0"
                                    htmlFor="inputGroupSelect01"
                                >
                                    Max order :&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <input
                                    type="text"
                                    className="form-control input-border focus-none"
                                    placeholder="Max Order"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="input-group">
                                <label
                                    className="input-group-text bg-transparent border-none px-0"
                                    htmlFor="inputGroupSelect01"
                                >
                                    Position Limit :
                                </label>
                                <input
                                    type="text"
                                    className="form-control input-border focus-none"
                                    placeholder="Position Limit"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label
                            className="input-group-text bg-transparent border-none px-0"
                            htmlFor="inputGroupSelect01"
                        >
                            L/Q/V :&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <select
                            className="form-select input-border focus-none"
                            id="inputGroupSelect01"
                        >
                            <option className="">Select Script</option>
                            <option value="1">Master One</option>
                            <option value="2">Master Two</option>
                            <option value="3">Master Three</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-end" >
                        <button className="btn btn-success mt-3 mb-4" >+ Add</button>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 border border-dark">
                    <h5 className="text-center mt-2">Other Details</h5>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Copy Settings From
                            </label>
                            <select
                                className="form-select input-border focus-none"
                                id="inputGroupSelect01"
                            >
                                <option className="">Select ID</option>
                                <option value="1">Master One</option>
                                <option value="2">Master Two</option>
                                <option value="3">Master Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group mb-3 mt-2">
                        <span
                            className="input-group-text bg-transparent border-none"
                            id="basic-addon1"
                        >
                            Type :
                        </span>
                        <div class="form-check form-check-inline mt-2 ">
                            <input class="form-check-input" type="radio" name="NSE-other-Type" id="NSE-other-allow" value="Yes" />
                            <label class="form-check-label" for="NSE-other-allow">Allow</label>
                        </div>

                        <div class="form-check form-check-inline mt-2">
                            <input class="form-check-input" type="radio" name="NSE-other-Type" id="NSE-other-block" value="No" />
                            <label class="form-check-label" for="NSE-other-block">Block</label>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Allow Scripts
                            </label>
                            <input
                                type="text"
                                className="form-control input-border focus-none"
                                placeholder="Allow Scripts"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-12 mt-4 mb-4">
                        <div className="input-group">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                No. of scripts
                            </label>
                            <input
                                type="text"
                                className="form-control input-border focus-none"
                                placeholder="No. of scripts"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mt-3">
                            <label
                                className="input-group-text bg-transparent border-none"
                                htmlFor="inputGroupSelect01"
                            >
                                Min rate Script Block :
                            </label>
                            <input
                                type="text"
                                className="form-control input-border focus-none"
                                placeholder="Min rate Script Block"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <input type="checkbox" id="NSE-fresh-limit" /><label style={{marginLeft : "5px"}} htmlFor="NSE-fresh-limit" >Fresh Limit Allowed ?</label>

                </div>
            </div>
        </>
    );
}

export default NSEtable;