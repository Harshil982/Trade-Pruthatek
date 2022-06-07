import React from 'react';

function MCXtable(props) {
    return (
        <>
            <h3 className="text-center my-4" >MCX</h3>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 border border-dark mt-3">
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
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text bg-transparent border-none"
                            id="basic-addon1"
                        >
                            Type :
                        </span>
                        <div class="form-check form-check-inline mt-2 ">
                            <input class="form-check-input" type="radio" name="Type" id="Lot" value="Yes" />
                            <label class="form-check-label" for="Lot">Lot</label>
                        </div>

                        <div class="form-check form-check-inline mt-2">
                            <input class="form-check-input" type="radio" name="Type" id="Percent" value="No" />
                            <label class="form-check-label" for="Percent">Percent</label>
                        </div>
                    </div>
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
                        <button className="btn btn-danger mb-4" >+ Add</button>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 border border-dark mt-3">
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
                            <input class="form-check-input" type="radio" name="margin-Type" id="margin-Lot" value="Yes" />
                            <label class="form-check-label" for="margin-Lot">Lot</label>
                        </div>

                        <div class="form-check form-check-inline mt-2">
                            <input class="form-check-input" type="radio" name="margin-Type" id="margin-Percent" value="No" />
                            <label class="form-check-label" for="margin-Percent">Percent</label>
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
                    <div className="d-flex justify-content-end" >
                        <button className="btn btn-danger mb-4" >+ Add</button>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 border border-dark mt-3">
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
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text bg-transparent border-none"
                            id="basic-addon1"
                        >
                            Type :
                        </span>
                        <div class="form-check form-check-inline mt-2 ">
                            <input class="form-check-input" type="radio" name="other-Type" id="other-allow" value="Yes" />
                            <label class="form-check-label" for="other-allow">Allow</label>
                        </div>

                        <div class="form-check form-check-inline mt-2">
                            <input class="form-check-input" type="radio" name="other-Type" id="other-block" value="No" />
                            <label class="form-check-label" for="other-block">Block</label>
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
                    </div>
                    <input type="checkbox" id="fresh-limit" /><label style={{marginLeft : "5px"}} htmlFor="fresh-limit" >Fresh Limit Allowed ?</label>
                </div>
            </div>
        </>
    );
}

export default MCXtable;