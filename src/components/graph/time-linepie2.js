import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class TimeLinePiee extends Component {

    componentDidMount() {

        var chartData = {
            "1995": [
                { "month": "JAN" },
                { "sector": "Prod", "size": 6.6 },
                { "sector": "qas", "size": 23.2 },
                { "sector": "stg", "size": 4.5 },
                { "sector": "dev", "size": 14.6 },
                { "sector": "sbx", "size": 9.3 }
            ],
            "1996": [
                { "month": "FEB" },
                { "sector": "Prod", "size": 6.4 },
                { "sector": "qas", "size": 22.4 },
                { "sector": "stg", "size": 4.2 },
                { "sector": "dev", "size": 14.8 },
                { "sector": "sbx", "size": 9.7 }
            ],
            "1997": [
                { "month": "MARCH" },
                { "sector": "Prod", "size": 6.1 },
                { "sector": "qas", "size": 20.9 },
                { "sector": "stg", "size": 4.2 },
                { "sector": "dev", "size": 13.7 },
                { "sector": "sbx", "size": 9.4 }
            ],
            "1998": [
                { "month": "APRIL" },
                { "sector": "Prod", "size": 6.2 },
                { "sector": "qas", "size": 21.4 },
                { "sector": "stg", "size": 4.2 },
                { "sector": "dev", "size": 14.5 },
                { "sector": "sbx", "size": 10.6 }
            ],
            "1999": [
                { "month": "MAY" },
                { "sector": "Prod", "size": 5.7 },
                { "sector": "qas", "size": 20 },
                { "sector": "stg", "size": 4.4 },
                { "sector": "dev", "size": 15.2 },
                { "sector": "sbx", "size": 10.5 }
            ],
            "2000": [
                { "month": "JUNE" },
                { "sector": "Prod", "size": 5.1 },
                { "sector": "qas", "size": 20.4 },
                { "sector": "stg", "size": 4 },
                { "sector": "dev", "size": 16.3 },
                { "sector": "sbx", "size": 10.7 }
            ],
            "2001": [
                { "month": "JULY" },
                { "sector": "Prod", "size": 5.5 },
                { "sector": "qas", "size": 20.3 },
                { "sector": "stg", "size": 3.1 },
                { "sector": "dev", "size": 16.3 },
                { "sector": "sbx", "size": 10.7 }
            ],
            "2002": [
                { "month": "AUG" },
                { "sector": "Prod", "size": 5.7 },
                { "sector": "qas", "size": 20.5 },
                { "sector": "stg", "size": 3.6 },
                { "sector": "dev", "size": 16.1 },
                { "sector": "sbx", "size": 10.7 }
            ],
            "2003": [
                { "month": "SEP" },
                { "sector": "Prod", "size": 4.9 },
                { "sector": "qas", "size": 19.4 },
                { "sector": "stg", "size": 3.3 },
                { "sector": "dev", "size": 16.2 },
                { "sector": "sbx", "size": 11 }
            ],
            "2004": [
                { "month": "OCT" },
                { "sector": "Prod", "size": 4.7 },
                { "sector": "qas", "size": 18.4 },
                { "sector": "stg", "size": 3.3 },
                { "sector": "dev", "size": 16.9 },
                { "sector": "sbx", "size": 10.6 }
            ],
            "2005": [
                { "month": "NOV" },
                { "sector": "Prod", "size": 4.3 },
                { "sector": "qas", "size": 18.1 },
                { "sector": "stg", "size": 3.9 },
                { "sector": "dev", "size": 15.7 },
                { "sector": "sbx", "size": 10.6 }
            ],
            "2006": [
                { "month": "DEC" },
                { "sector": "Prod", "size": 4 },
                { "sector": "qas", "size": 16.5 },
                { "sector": "stg", "size": 3.7 },
                { "sector": "dev", "size": 14.2 },
                { "sector": "sbx", "size": 12.1 }
            ]
        };

        // Create chart instance
        var chart = am4core.create("timelinepie2", am4charts.PieChart);

        // Add data
        chart.data = [
            { "month": "NOV" },
            { "sector": "Prod", "size": 6.6 },
            { "sector": "qas", "size": 23.2 },
            { "sector": "stg", "size": 4.5 },
            { "sector": "dev", "size": 14.6 },
            { "sector": "sbx", "size": 9.3 }
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
            chart.setTimeout(loop, 2000);
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
            <div id="timelinepie2" style={{ width: '100%', height: "410px", backgroundColor: "white", boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.1)" }}>
            </div>
        )
    }
}
