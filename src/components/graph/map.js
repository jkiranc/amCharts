import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './maps.css';

am4core.useTheme(am4themes_animated);

export default class Maps extends Component {

    componentDidMount() {
        let countryCodes = ["AF", "AO", "AR", "AM", "AU", "AT", "AZ", "BD", "BY", "BE", "BO", "BA", "BW", "BR", "BG", "KH", "CM", "CA", "CF", "TD", "CL", "CN", "CO", "CG", "CD", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "EC", "EG", "ER", "EE", "ET", "FI", "FR", "GE", "DE", "GR", "GL", "GP", "GT", "GN", "GW", "GY", "HT", "HN", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KP", "KR", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LT", "LU", "MK", "MG", "MY", "ML", "MT", "MR", "MX", "MD", "MN", "ME", "MA", "MZ", "MM", "NA", "NP", "NL", "NZ", "NI", "NE", "NG", "NO", "OM", "PK", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "RO", "RU", "SA", "SN", "RS", "SK", "SI", "SO", "ZA", "SS", "ES", "SD", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TN", "TR", "TM", "UA", "AE", "GB", "US", "UY", "UZ", "VE", "VN", "YE", "ZM", "ZW"];

        let chart = am4core.create("mapsdiv", am4maps.MapChart);


        try {
            chart.geodata = am4geodata_worldHigh;
        }
        catch (e) {
            chart.raiseCriticalError(new Error("Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."));
        }

        chart.projection = new am4maps.projections.Mercator();
        chart.padding(10, 20, 10, 20);
        chart.minZoomLevel = 0.9;
        chart.zoomLevel = 0.5;
        chart.maxZoomLevel = 1;

        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.include = ["AF"];


        let chart1 = am4core.create("hiddenchartdiv", am4maps.MapChart);
        chart1.padding(10, 20, 10, 20);
        chart1.geodata = am4geodata_worldHigh;
        chart1.projection = new am4maps.projections.Mercator();

        let polygonSeries1 = chart1.series.push(new am4maps.MapPolygonSeries());
        polygonSeries1.useGeodata = true;
        polygonSeries1.include = ["AF"];


        let label = chart.chartContainer.createChild(am4core.Label);
        label.x = 100;
        label.y = 100;
        label.fill = am4core.color("#000000");
        label.fontSize = 35;
        label.fontWeight = "bold";
        label.text = "Afghanistan";
        label.fillOpacity = 0.2;

        let slider = chart.createChild(am4core.Slider);
        slider.padding(0, 15, 0, 60);
        slider.background.padding(0, 15, 0, 60);
        slider.marginBottom = 15;
        slider.valign = "bottom";

        let currentIndex = -1;
        let colorset = new am4core.ColorSet();

        setInterval(function () {
            let next = slider.start + 1 / countryCodes.length;
            if (next >= 1) {
                next = 0;
            }
            slider.animate({ property: "start", to: next }, 300);
        }, 2000)

        slider.events.on("rangechanged", function () {
            changeCountry();
        })

        function changeCountry() {
            let totalCountries = countryCodes.length - 1;
            let countryIndex = Math.round(totalCountries * slider.start);

            let morphToPolygon;

            if (currentIndex != countryIndex) {
                polygonSeries1.data = [];
                polygonSeries1.include = [countryCodes[countryIndex]];

                currentIndex = countryIndex;

                polygonSeries1.events.once("validated", function () {

                    morphToPolygon = polygonSeries1.mapPolygons.getIndex(0);
                    if (morphToPolygon) {
                        let countryPolygon = polygonSeries.mapPolygons.getIndex(0);

                        let morpher = countryPolygon.polygon.morpher;
                        let morphAnimation = morpher.morphToPolygon(morphToPolygon.polygon.points);

                        let colorAnimation = countryPolygon.animate({ "property": "fill", "to": colorset.getIndex(Math.round(Math.random() * 20)) }, 1000);

                        let animation = label.animate({ property: "y", to: 1000 }, 300);

                        animation.events.once("animationended", function () {
                            label.text = morphToPolygon.dataItem.dataContext["name"];
                            label.y = -50;
                            label.animate({ property: "y", to: 200 }, 300, am4core.ease.quadOut);
                        })
                    }
                })
            }
        }
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <>
                <div id="mapsdiv"></div>
                <div id="hiddenchartdiv" ></div>
            </>
        )
    }
}
