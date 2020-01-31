import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints1 = [];
var dataPoints2 = [];
var updateInterval = 3000;
// initial value
var yValue1 = 600;
var yValue2 = 605;

var time = new Date;
// starting at 9.30 am
time.setHours(9);
time.setMinutes(30);
time.setSeconds(0);
time.setMilliseconds(0);
class DiskActivityCanvas extends Component {
    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }
    componentDidMount() {
        this.updateChart(20);
        setInterval(this.updateChart, updateInterval);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }
    updateChart(count) {
        count = count || 1;
        var deltaY1, deltaY2;
        for (var i = 0; i < count; i++) {
            time.setTime(time.getTime() + updateInterval);
            deltaY1 = .5 + Math.random() * (-.5 - .5);
            deltaY2 = .5 + Math.random() * (-.5 - .5);

            // adding random value and rounding it to two digits. 
            yValue1 = Math.round((yValue1 + deltaY1) * 100) / 100;
            yValue2 = Math.round((yValue2 + deltaY2) * 100) / 100;

            // pushing the new values
            dataPoints1.push({
                x: time.getTime(),
                y: yValue1
            });
            dataPoints2.push({
                x: time.getTime(),
                y: yValue2
            });
        }
        // updating legend text with  updated with y Value 
        this.chart.options.data[0].legendText = "Read " + yValue1;
        this.chart.options.data[1].legendText = "Write " + yValue2;
        this.chart.render();
    }
    render() {
        const options = {
            zoomEnabled: true,
            title: {
                text: ""
            },
            theme: "light2",
            axisX: {
                title: ""
            },
            axisY: {
                prefix: "",
                includeZero: false
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "top",
                fontSize: 22,
                fontColor: "dimGrey",
                itemclick: this.toggleDataSeries
            },
            data: [{
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####",
                xValueFormatString: "hh:mm:ss TT",
                showInLegend: true,
                name: "Read",
                dataPoints: dataPoints1
            },
            {
                type: "line",
                xValueType: "dateTime",
                yValueFormatString: "####",
                showInLegend: true,
                name: "Write",
                dataPoints: dataPoints2
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                    onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default DiskActivityCanvas;