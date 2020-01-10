import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class TimeLinePie extends Component {

    componentDidMount() {

        var chartData = {
            "1995": [
                { "month": "JAN" },
                { "sector": "Sandbox", "size": 6.6 },
                { "sector": "Support", "size": 23.2 },
                { "sector": "Stack", "size": 4.5 },
                { "sector": "Testing", "size": 14.6 },
                { "sector": "Production", "size": 9.3 },
                { "sector": "Quality Assurance", "size": 22.5 }],
            "1996": [
                { "month": "FEB" },
                { "sector": "Sandbox", "size": 6.4 },
                { "sector": "Support", "size": 22.4 },
                { "sector": "Stack", "size": 4.2 },
                { "sector": "Testing", "size": 14.8 },
                { "sector": "Production", "size": 9.7 },
                { "sector": "Quality Assurance", "size": 22 }],
            "1997": [
                { "month": "MARCH" },
                { "sector": "Sandbox", "size": 6.1 },
                { "sector": "Support", "size": 20.9 },
                { "sector": "Stack", "size": 4.2 },
                { "sector": "Testing", "size": 13.7 },
                { "sector": "Production", "size": 9.4 },
                { "sector": "Quality Assurance", "size": 22.1 }],
            "1998": [
                { "month": "APRIL" },
                { "sector": "Sandbox", "size": 6.2 },
                { "sector": "Support", "size": 21.4 },
                { "sector": "Stack", "size": 4.2 },
                { "sector": "Testing", "size": 14.5 },
                { "sector": "Production", "size": 10.6 },
                { "sector": "Quality Assurance", "size": 23 }],
            "1999": [
                { "month": "MAY" },
                { "sector": "Sandbox", "size": 5.7 },
                { "sector": "Support", "size": 20 },
                { "sector": "Stack", "size": 4.4 },
                { "sector": "Testing", "size": 15.2 },
                { "sector": "Production", "size": 10.5 },
                { "sector": "Quality Assurance", "size": 24.7 }],
            "2000": [
                { "month": "JUNE" },
                { "sector": "Sandbox", "size": 5.1 },
                { "sector": "Support", "size": 20.4 },
                { "sector": "Stack", "size": 4 },
                { "sector": "Testing", "size": 16.3 },
                { "sector": "Production", "size": 10.7 },
                { "sector": "Quality Assurance", "size": 24.6 }],
            "2001": [
                { "month": "JULY" },
                { "sector": "Sandbox", "size": 5.5 },
                { "sector": "Support", "size": 20.3 },
                { "sector": "Stack", "size": 3.1 },
                { "sector": "Testing", "size": 16.3 },
                { "sector": "Production", "size": 10.7 },
                { "sector": "Quality Assurance", "size": 25.8 }],
            "2002": [
                { "month": "AUG" },
                { "sector": "Sandbox", "size": 5.7 },
                { "sector": "Support", "size": 20.5 },
                { "sector": "Stack", "size": 3.6 },
                { "sector": "Testing", "size": 16.1 },
                { "sector": "Production", "size": 10.7 },
                { "sector": "Quality Assurance", "size": 26 }],
            "2003": [
                { "month": "SEP" },
                { "sector": "Sandbox", "size": 4.9 },
                { "sector": "Support", "size": 19.4 },
                { "sector": "Stack", "size": 3.3 },
                { "sector": "Testing", "size": 16.2 },
                { "sector": "Production", "size": 11 },
                { "sector": "Quality Assurance", "size": 27.5 }],
            "2004": [
                { "month": "OCT" },
                { "sector": "Sandbox", "size": 4.7 },
                { "sector": "Support", "size": 18.4 },
                { "sector": "Stack", "size": 3.3 },
                { "sector": "Testing", "size": 16.9 },
                { "sector": "Production", "size": 10.6 },
                { "sector": "Quality Assurance", "size": 28.1 }],
            "2005": [
                { "month": "NOV" },
                { "sector": "Sandbox", "size": 4.3 },
                { "sector": "Support", "size": 18.1 },
                { "sector": "Stack", "size": 3.9 },
                { "sector": "Testing", "size": 15.7 },
                { "sector": "Production", "size": 10.6 },
                { "sector": "Quality Assurance", "size": 29.1 }],
            "2006": [
                { "month": "DEC" },
                { "sector": "Sandbox", "size": 4 },
                { "sector": "Support", "size": 16.5 },
                { "sector": "Stack", "size": 3.7 },
                { "sector": "Testing", "size": 14.2 },
                { "sector": "Production", "size": 12.1 },
                { "sector": "Quality Assurance", "size": 29.1 }]
        };

        // Create chart instance
        var chart = am4core.create("timelinepie", am4charts.PieChart);

        // Add data
        chart.data = [
            { "sector": "Sandbox", "size": 6.6 },
            { "sector": "Testing", "size": 0.6 },
            { "sector": "Support", "size": 23.2 },
            { "sector": "Stack", "size": 4.5 },
            { "sector": "Testing", "size": 14.6 },
            { "sector": "Production", "size": 9.3 },
            { "sector": "Quality Assurance", "size": 22.5 }
        ];

        // Add label
        chart.innerRadius = 100;
        var label = chart.seriesContainer.createChild(am4core.Label);
        label.text = "JAN";
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fontSize = 50;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "size";
        pieSeries.dataFields.category = "sector";

        // Animate chart data
        var currentYear = 1995;
        function getCurrentData() {
            label.text = chartData[currentYear][0]['month'];
            var data = chartData[currentYear];
            currentYear++;
            if (currentYear > 2006)
                currentYear = 1995;
            return data;
        }

        function loop() {
            //chart.allLabels[0].text = currentYear;
            var data = getCurrentData();
            for (var i = 0; i < data.length; i++) {
                chart.data[i].size = data[i].size;
            }
            chart.invalidateRawData();
            chart.setTimeout(loop, 4000);
        }

        loop();



    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="timelinepie" style={{ width: '100%', height: "330px", backgroundColor: "white", boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.1)" }}>
            </div>
        )
    }
}
