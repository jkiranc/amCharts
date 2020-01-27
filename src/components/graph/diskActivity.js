import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class DiskUsage extends Component {

    componentDidMount() {

        var chart = am4core.create("diskUsageDiv", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();

        // Add data
        var jsondata1 = [{
            "country": "VM 1",
            "visits": 96
        }, {
            "country": "VM 2",
            "visits": 77
        }, {
            "country": "VM 3",
            "visits": 67
        }, {
            "country": "VM 4",
            "visits": 96
        }, {
            "country": "VM 5",
            "visits": 44
        }];
        // add data

        chart.data = jsondata1;
        var dataAvailable = "one";

        // setInterval(function () {
        //     if (dataAvailable === "one") {
        //         chart.data = jsondata2;
        //         dataAvailable = "two";
        //     } else if (dataAvailable === "two") {
        //         chart.data = jsondata3;
        //         dataAvailable = "three";
        //     } else if (dataAvailable === "three") {
        //         chart.data = jsondata4;
        //         dataAvailable = "four";
        //     } else if (dataAvailable === "four") {
        //         chart.data = jsondata1;
        //         dataAvailable = "one";
        //     }

        // }, 3000);
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

        // on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        chart.scrollbarX.startGrip.disabled = true;
        chart.scrollbarX.endGrip.disabled = true;
        // Cursor
        chart.cursor = new am4charts.XYCursor();

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
            <div id="diskUsageDiv" style={{ width: '100%', height: "276px", backgroundColor: "white", marginTop: "2%", boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.1)" }}>
            </div>
        )
    }
}
