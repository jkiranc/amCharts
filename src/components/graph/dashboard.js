import React from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


export default function dashboard() {
    return (
        <div>
            <div className="row" style={{ padding: "1% " }}>
                <div className="col-md-6 col-xl-3">
                    <div className="card-stats card" style={{ marginBottom: "0px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 5px" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="text-uppercase text-muted mb-0 card-title">Total Instances</h5>
                                    <span className="h2 font-weight-bold mb-0">11,634</span>
                                </div>
                                <div className="col-auto col">
                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow"><i className="ni ni-active-40" /></div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm" style={{ fontSize: "1.4rem!important" }}><span className="text-success mr-2"><FaArrowUp></FaArrowUp> 2.73%</span> <span className="text-nowrap" style={{ marginLeft: "9%" }}>Since last month</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="card-stats card" style={{ marginBottom: "0px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 5px" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="text-uppercase text-muted mb-0 card-title">Production Consumption (USD)</h5>
                                    <span className="h2 font-weight-bold mb-0">356.9K</span>
                                </div>
                                <div className="col-auto col">
                                    <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow"><i className="ni ni-chart-pie-35" /></div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm" style={{ fontSize: "1.4rem!important" }}><span className="text-success mr-2 text-success-red" style={{ color: "red!important" }}><FaArrowDown /> -3.48%</span> <span className="text-nowrap" style={{ marginLeft: "9%" }}>Since last month</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="card-stats card" style={{ marginBottom: "0px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 5px" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="text-uppercase text-muted mb-0 card-title">Total Consumption (USD)</h5>
                                    <span className="h2 font-weight-bold mb-0">1.03M</span>
                                </div>
                                <div className="col-auto col">
                                    <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow"><i className="ni ni-money-coins" /></div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm" style={{ fontSize: "1.4rem!important" }}><span className="text-success mr-2"><FaArrowDown /> 1.22%</span> <span className="text-nowrap" style={{ marginLeft: "9%" }}>Since last month</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="card-stats card" style={{ marginBottom: "0px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 5px" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="text-uppercase text-muted mb-0 card-title">Total Commit (USD)</h5>
                                    <span className="h2 font-weight-bold mb-0">3.98M</span>
                                </div>
                                <div className="col-auto col">
                                    <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow"><i className="ni ni-chart-bar-32" /></div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm" style={{ fontSize: "1.4rem!important" }}><span className="text-success mr-2"><FaArrowDown /> 5.36%</span> <span className="text-nowrap" style={{ marginLeft: "9%" }}>Since last month</span></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
