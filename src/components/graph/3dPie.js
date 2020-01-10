import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class threeDPie extends Component {

    componentDidMount(){        
    
        var chart = am4core.create("threeDPiediv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
        {
            country: "Lithuania",
            litres: 501.9
        },
        {
            country: "Czech Republic",
            litres: 301.9
        },
        {
            country: "Ireland",
            litres: 201.1
        },
        {
            country: "Germany",
            litres: 165.8
        },
        {
            country: "Australia",
            litres: 139.9
        },
        {
            country: "Austria",
            litres: 128.3
        }
        ];

        chart.innerRadius = am4core.percent(40);
        chart.depth = 120;

        chart.legend = new am4charts.Legend();

        var series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
        
    }

    componentWillUnmount(){
        if (this.chart){
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="threeDPiediv" style={{ width: '40%', height: "400px"}}>
            </div>
        )
    }
}
