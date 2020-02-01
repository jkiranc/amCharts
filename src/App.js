import React from 'react';

import Draggable from './components/graph/draggablePie';
import SemiPie from './components/graph/semiPie';
import XYChart from './components/graph/xyGraph';
import BarChart from './components/graph/barChart';
import ThreeDPie from './components/graph/3dPie';
import PieOfPie from './components/graph/pieOfPie';
import BentGant from './components/graph/bent-gantt-chart';
import Fishbone from './components/graph/fishbone-timeline';
import DrillDownTreeMap from './components/graph/drill-down-treemap';
import Sankey from './components/graph/sankey';
import TimeLinePie from './components/graph/time-LinePie';
import TimeLinePiee from './components/graph/time-linepie2';
import Map from './components/graph/map';
import MapTwo from './components/graph/MapsTwo';
import RangeChart from './components/graph/rangeChart';
import DynamicChart from './components/graph/dynamic';
import MemoryUsage from './components/graph/memoryUsage';
import NetworkActivity from './components/graph/NetworkActivity';
import DiskUsage from './components/graph/diskActivity';
import LiveNetworkActivity from './components/graph/LiveNetworkActivity';
import Canvas from './components/graph/CanvasJS';
import DiskActivityCanvas from './components/graph/DiskActivityCanvas';
import MemoryUsageCanvas from './components/graph/MemoryUsageCanvas';


import Dashboard from './components/graph/dashboard';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import notificationicon from './images/notification.svg';
import alerticon from './images/alert.svg';
import wftlogo from './images/wftlogo.png';



function App() {
  return (
    <div className="App">
      {/* <div className="row" style={{ padding: "1%", paddingTop: "2%" }} >
        <div className="col-lg-5">
          <div className="row" style={{ marginTop: "-5%" }}>
            <div className="col-lg-12"><DynamicChart /></div>
            <div className="col-lg-12"><RangeChart /></div>
            <div className="col-lg-12"><BarChart /></div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row" style={{ marginTop: "-2%" }}>
            <div className="col-lg-12"><TimeLinePie /></div>
            <div className="col-lg-12"><Sankey /></div>
          </div>
        </div>
      </div> */}

      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cost">Cost</Link>
              </li>
              <li>
                <Link to="/performance">Performance</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/cost">
              <Cost />
            </Route>
            <Route path="/performance">
              <Performance />
            </Route>
          </Switch>
        </div>
      </Router> */}

      <Performance />
    </div>
  );
}


export default App;

function Cost() {
  return (
    <div className="row" style={{ padding: "1%", paddingTop: "2%" }} >
      <div className="col-lg-5">
        <div className="row" style={{ marginTop: "-5%" }}>
          <div className="col-lg-12"><DynamicChart /></div>
          <div className="col-lg-12"><RangeChart /></div>
          <div className="col-lg-12"><BarChart /></div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="row" style={{ marginTop: "-2%" }}>
          <div className="col-lg-12"><TimeLinePie /></div>
          <div className="col-lg-12"><Sankey /></div>
        </div>
      </div>
    </div>
  );
}

function Performance() {
  return (
    <div className="container1">
      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-2" style={{ paddingLeft: "0px" }}>
          <Sidebar />
        </div>
        <div className="col-lg-10" style={{ padding: "0px" }}>
          <Navbar />
          <div className="row" style={{ padding: "1%", margin: "0px" }}>
            <div className="col-lg-5"><h6>Cost by Region</h6><MapTwo /></div>
            <div className="col-lg-7"><h6>Cost by landscape</h6><TimeLinePiee /></div>
            <div className="col-lg-6"><h6 style={{ marginTop: "2%" }}>CPU Usage</h6><Canvas /></div>
            <div className="col-lg-6"><h6 style={{ marginTop: "2%" }}>Memory Usage</h6><MemoryUsageCanvas /></div>
            <div className="col-lg-6"><h6 style={{ marginTop: "2%" }}>Network Activity</h6><LiveNetworkActivity /></div>
            <div className="col-lg-6"><h6 style={{ marginTop: "2%" }}>Disk Activity</h6><DiskActivityCanvas /></div>
            {/* <div className="col-lg-6"><MemoryUsage /></div>
        <div className="col-lg-6"><NetworkActivity /></div>
        <div className="col-lg-6"><DiskUsage /></div> */}
          </div>
        </div>
      </div>
    </div>

  );
}

function Sidebar() {
  return (
    <div style={{ backgroundColor: "#244A90", height: "100vh", color: "white", width: "100%", position: "absolute" }}>
      <div className="logo">
        <img src={wftlogo} style={{ width: "100%" }}></img>
      </div>
      <div className="side-options">
        <div className="subscriptions" style={{ marginTop: "10%" }}>
          <h5 style={{ textAlign: "left", marginLeft: "8%", marginTop: "5%" }}>SUBSCRIPTION</h5>
          <p style={{ textAlign: "left", marginLeft: "12%", marginTop: "7%" }}>WFT-SAP-EA</p>
        </div>
        <div className="landscapes">
          <h5 style={{ textAlign: "left", marginLeft: "8%", marginTop: "-3%" }}>LANDSCAPES</h5>
          <ul>
            <li className="liClass">PROD</li>
            <li className="liClass">QAS</li>
            <li className="liClass">STG</li>
            <li className="liClass">DEV</li>
            <li className="liClass">SBX</li>
          </ul>
        </div>
        <div className="virtual-machines">
          <h5 style={{ textAlign: "left", marginLeft: "8%", marginTop: "-3%" }}>VIRTUAL MACHINES</h5>
          <div className="lableClass">
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM1</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM2</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM3</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM4</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM5</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM6</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM7</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM8</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM9</span>
            </label>
            <br />
            <label className="labelClass">
              <input type="checkbox" />
              <span>VM10</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div style={{ backgroundColor: "#3c3c3c", height: "6vh", color: "white" }}>
      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-10">
          <h3 className="wftheading">Wharfedale Cloud Analyzer</h3>
        </div>
        <div className="col-lg-2" style={{ padding: "0px" }}>
          <div className="actions-notify">
            <img className="alerticon" src={alerticon}></img>
            <img className="alerticon" src={notificationicon}></img>
          </div>
        </div>
      </div>
    </div>
  )
};