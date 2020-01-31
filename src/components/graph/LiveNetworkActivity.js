import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class Network extends Component {

    componentDidMount() {

        let chart = am4core.create("livenetworkdiv", am4charts.XYChart);
        // chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        let data = [];
        let open = 100;
        let close = 250;

        for (var i = 1; i < 300; i++) {
            open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
            close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
            data.push({ date: new Date(2020, 0, i), open: open, close: close });
        }
        var jsondata = data.slice(31, 290);
        // console.log(data);
        var initialData = data.slice(0, 30);
        chart.data = initialData
        var newData = initialData
        var dateval = 1;
        var createDate = setInterval(function () {
            dateval++;
            var dataAdd = jsondata.shift()
            // chart.data.shift();
            newData.shift();
            console.log(dataAdd)
            newData.push(dataAdd)
            chart.data = newData;
            stopinterval();
            // console.log("im running")
        }, 3000);

        function stopinterval() {
            if (dateval === 289) {
                clearInterval(createDate);
            }
        }

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.openValueY = "open";
        series.dataFields.valueY = "close";
        series.tooltipText = "Received: {openValueY.value} Sent: {valueY.value}";
        series.sequencedInterpolation = true;
        series.fillOpacity = 0.3;
        series.defaultState.transitionDuration = 1000;
        series.tensionX = 0.8;

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "open";
        series2.sequencedInterpolation = true;
        series2.defaultState.transitionDuration = 1500;
        series2.stroke = chart.colors.getIndex(6);
        series2.tensionX = 0.8;

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarX = new am4core.Scrollbar();

        chart.scrollbarX.background.fill = am4core.color("#ffffff");
        chart.scrollbarX.thumb.background.fill = am4core.color("#ffffff");
        chart.scrollbarX.startGrip.background.fill = am4core.color("#ffffff");
        chart.scrollbarX.endGrip.background.fill = am4core.color("#ffffff");
        chart.scrollbarX.stroke = am4core.color("#ffffff");
    }
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="livenetworkdiv" style={{ width: '100%', height: "320px", backgroundColor: "white", marginTop: "2%", boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.1)" }}>
            </div>
        )
    }
}
