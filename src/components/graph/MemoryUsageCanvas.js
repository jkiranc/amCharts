import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var updateInterval = 500;
class MemoryUsageCanvas extends Component {
    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
    }
    componentDidMount() {
        setInterval(this.updateChart, updateInterval);
    }
    updateChart() {
        var dpsColor, dpsTotal = 0, deltaY, yVal;
        var dps = this.chart.options.data[0].dataPoints;

        for (var i = 0; i < dps.length; i++) {
            deltaY = Math.round(2 + Math.random() * (-2 - 2));
            yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 100 ? dps[i].y + deltaY : 100) : 0;
            dpsColor = yVal >= 90 ? "#e40000" : yVal >= 70 ? "#ec7426" : yVal >= 50 ? "#81c2ea" : "#88df86 ";
            dps[i] = { label: "VM " + (i + 1), y: yVal, color: dpsColor };
            dpsTotal += yVal;
        }
        this.chart.options.data[0].dataPoints = dps;
        this.chart.options.title.text = "Memory Usage " + Math.round(dpsTotal / 6) + "%";
        this.chart.render();
    }
    render() {
        const options = {
            theme: "light2",
            title: {
                text: "Memory Usage",
                fontSize: 12,
            },
            subtitles: [{
                text: "Top 10 Vms by % Memory Usage"
            }],
            axisY: {
                title: "Memory Usage (%)",
                suffix: "%",
                maximum: 100
            },
            data: [{
                type: "column",
                yValueFormatString: "#,###'%'",
                indexLabel: "{y}",
                dataPoints: [
                    { label: "VM 1", y: 68 },
                    { label: "VM 2", y: 23 },
                    { label: "VM 3", y: 35 },
                    { label: "VM 4", y: 78 },
                    { label: "VM 5", y: 57 },
                    { label: "VM 6", y: 15 },
                    { label: "VM 6", y: 78 },
                    { label: "VM 6", y: 67 },
                    { label: "VM 6", y: 71 },
                    { label: "VM 6", y: 45 }
                ]
            }]
        }

        return (
            <div>
                <CanvasJSChart options={options}
                    onRef={ref => this.chart = ref}
                    style={{ width: '100%', height: "276px", backgroundColor: "white", marginTop: "2%", boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.1)" }} />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default MemoryUsageCanvas;