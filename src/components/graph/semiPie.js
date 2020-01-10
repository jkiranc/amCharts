import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class SemiPie extends Component {

    componentDidMount(){        
    
        // cointainer to hold both charts
        var chart = am4core.create("semiPiediv", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
        {
            country: "Lithuania",
            value: 401
        },
        {
            country: "Czech Republic",
            value: 300
        },
        {
            country: "Ireland",
            value: 200
        },
        {
            country: "Germany",
            value: 165
        },
        {
            country: "Australia",
            value: 139
        },
        {
            country: "Austria",
            value: 128
        }
        ];
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;  

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "country";

        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;

        chart.legend = new am4charts.Legend();
        
    }

    componentWillUnmount(){
        if (this.chart){
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="semiPiediv" style={{ width: '40%', height: "400px"}}>
            </div>
        )
    }
}
