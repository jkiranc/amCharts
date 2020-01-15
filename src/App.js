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
import Map from './components/graph/map';
import RangeChart from './components/graph/rangeChart';
import DynamicChart from './components/graph/dynamic';

import Dashboard from './components/graph/dashboard';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './App.css';




function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
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


      <div className="row" style={{ padding: "1%" }}>
        <div className="col-lg-4"><Map /></div>
        <div className="col-lg-8"><Draggable /></div>
      </div>

      {/*    */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Draggable />
        <SemiPie />
        <TimeLinePie />
      </div> */}
      {/* <Draggable />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <XYChart />
        <BarChart />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ThreeDPie />
        <BentGant />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <DrillDownTreeMap />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Fishbone />
      </div> */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Sankey />
      </div>
      <RangeChart /> */}
      {/* <Map /> */}
      {/* <SemiPie />
      <XYChart />
      <BarChart />
      <ThreeDPie />
      <BentGant />
      <Fishbone />
      <DrillDownTreeMap />
      <Sankey /> */}
      {/* <PieOfPie />  */}
    </div>
  );
}

export default App;
