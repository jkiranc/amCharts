import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default class Sankey extends Component {

    componentDidMount() {

        var chart = am4core.create("sankeydiv", am4charts.SankeyDiagram);

        chart.data = [
            // these are just for color, as properties are taken from data object where the name is first mentioned.
            { from: "Cash in the U.S.", color: "#48addf" },
            { from: "Cash Overseas", color: "#000000" },

            { from: "Source", to: "Total non financial companies", value: 1768, color: "#48addf", labelText: "[font-size:1.1em][bold]2020 AZURE ENTERPRISE\nAGREEMENT COMMIT\n\n[/]ABC PVT LTD \n [bold]$1,768 Trillion[/b]", zIndex: 100 },

            { from: "Total non financial companies", to: "Non-tech companies", value: 907, color: "#48addf", labelText: "STORAGE\n [bold]$907 Billion[/]" },
            { from: "Total non financial companies", to: "Tech companies", value: 861, color: "#48addf", labelText: "VIRTUAL MACHINE\n [bold]861 Billion[/]" },

            { from: "Non-tech companies", to: "Cash in the U.S.", value: 324, color: "#48addf", zIndex: 101 },
            { from: "Non-tech companies", to: "Cash Overseas", value: 584, color: "#48addf" },

            { from: "Tech companies", to: "Rest of tech", value: 274, color: "#48addf", labelText: "COMPUTE\n[bold]$274 Billion[/]" },
            { from: "Tech companies", to: "Top 5 tech companies", value: 587, color: "#48addf", labelText: "NETWORKING\n[bold]$587 Billion[/]" },

            { from: "Rest of tech", to: "Cash in the U.S.", value: 74, color: "#48addf", zIndex: 100 },
            { from: "Rest of tech", to: "Cash Overseas", value: 200, color: "#48addf" },

            { from: "Top 5 tech companies", to: "Joytechs", value: 67, color: "#48addf" },
            { from: "Joytechs", to: "Cash in the U.S.", value: 10, color: "#48addf" },
            { from: "Joytechs", to: "Cash Overseas", value: 57, color: "#48addf", labelText: "JOYTECHS [bold]$67[/]B", labelLocation: 0, labelRotation: 0 },

            { from: "Top 5 tech companies", to: "Fireex", value: 68, color: "#48addf" },
            { from: "Fireex", to: "Cash in the U.S.", value: 8, color: "#48addf" },
            { from: "Fireex", to: "Cash Overseas", value: 60, color: "#48addf", labelText: "FIREEX [bold]$68[/]B", labelLocation: 0, labelRotation: 0 },

            { from: "Top 5 tech companies", to: "Globalworld", value: 85, color: "#48addf" },
            { from: "Globalworld", to: "Cash in the U.S.", value: 10, color: "#48addf" },
            { from: "Globalworld", to: "Cash Overseas", value: 75, color: "#48addf", labelText: "GLOBALWORLD [bold]$85[/]B", labelLocation: 0, labelRotation: 0 },

            { from: "Top 5 tech companies", to: "Betagate", value: 115, color: "#48addf" },
            { from: "Betagate", to: "Cash in the U.S.", value: 10, color: "#48addf" },
            { from: "Betagate", to: "Cash Overseas", value: 105, color: "#48addf", labelText: "BETAGATE [bold]$115[/]B", labelLocation: 0, labelRotation: 0 },

            { from: "Top 5 tech companies", to: "Apexi", value: 253, color: "#48addf" },
            { from: "Apexi", to: "Cash in the U.S.", value: 23, color: "#48addf" },
            { from: "Apexi", to: "Cash Overseas", value: 230, color: "#48addf", labelText: "APEXI [bold]$253[/]B", labelLocation: 0, labelRotation: 0 },

            { from: "Cash in the U.S.", color: "#48addf", labelRotation: -90, labelText: "CASH IN THE U.S.\n[bold]$460 BILLION", labelLocation: 0, value: 460, zIndex: 102 },
            { from: "Cash Overseas", color: "#000000", labelText: "[#48addf font-size:1.3em]CASH OVERSEAS\n[bold #48addf font-size:1.3em]$1,31 TRILLION", labelLocation: 0, labelRotation: -90, value: 1310 }
        ];

        chart.paddingRight = 30;
        chart.paddingTop = 80;
        chart.paddingBottom = 80;
        chart.nodeAlign = "bottom";

        chart.minNodeSize = 0.001;

        chart.dataFields.fromName = "from";
        chart.dataFields.toName = "to";
        chart.dataFields.value = "value";
        chart.dataFields.color = "color";

        var linkTemplate = chart.links.template;
        linkTemplate.colorMode = "gradient";
        linkTemplate.fillOpacity = 1;
        linkTemplate.strokeOpacity = 1;

        linkTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        linkTemplate.readerTitle = "drag me!";
        linkTemplate.showSystemTooltip = true;
        linkTemplate.tooltipText = "";
        linkTemplate.propertyFields.zIndex = "zIndex";
        linkTemplate.tension = 0.6;

        chart.nodes.template.width = 0;
        chart.nodes.template.nameLabel.disabled = true;
        chart.nodes.template.draggable = true;
        chart.nodes.template.inert = true;
        chart.nodes.template.togglable = false;

        // making links draggable
        linkTemplate.events.on("down", function (event) {
            var fromNode = event.target.dataItem.fromNode;
            var toNode = event.target.dataItem.toNode;

            var distanceToFromNode = am4core.math.getDistance(event.pointer.point, { x: fromNode.pixelX, y: fromNode.pixelY });
            var distanceToToNode = Infinity;
            if (toNode) {
                distanceToToNode = am4core.math.getDistance(event.pointer.point, { x: toNode.pixelX, y: toNode.pixelY });
            }

            if (distanceToFromNode < distanceToToNode) {
                fromNode.dragStart(event.pointer);
            }
            else {
                toNode.dragStart(event.pointer);
            }
        })


        // add labels
        var labelBullet = chart.links.template.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.propertyFields.text = "labelText";
        labelBullet.propertyFields.locationX = "labelLocation";
        labelBullet.propertyFields.rotation = "labelRotation";
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.textAlign = "start";
        labelBullet.label.dx = -50;

        // add labels which will animate
        var bullet = chart.links.template.bullets.push(new am4charts.LabelBullet());
        bullet.label.text = "${value}";
        bullet.label.fill = am4core.color("#ffffff");
        bullet.label.isMeasured = false;
        bullet.isMeasured = false;

        // create animations
        chart.events.on("inited", function () {
            for (var i = 0; i < chart.links.length; i++) {
                var link = chart.links.getIndex(i);
                var bullet = link.bullets.getIndex(1);
                bullet.opacity = 0;

                if (link.dataItem.toNode && link.dataItem.value > 10) {

                    bullet.label.fontSize = link.dataItem.value / 10;
                    firstHalfAnimation(bullet);
                }
                else {
                    link.bullets.removeValue(bullet);
                }
            }
        })

        function firstHalfAnimation(bullet) {
            var duration = 6000 * Math.random() + 3000;
            var animation = bullet.animate([{ property: "locationX", from: 0.2, to: 0.5 }, { property: "opacity", from: 0, to: 0.3 }], duration)
            animation.events.on("animationended", function (event) {
                secondHalfAnimation(event.target.object, duration);
            })
        }

        function secondHalfAnimation(bullet, duration) {
            var animation = bullet.animate([{ property: "locationX", from: 0.5, to: 0.8 }, { property: "opacity", from: 0.3, to: 0 }], duration)
            animation.events.on("animationended", function (event) {
                setTimeout(function () {
                    firstHalfAnimation(event.target.object)
                }, Math.random() * 5000);
            })
        }

    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="sankeydiv" style={{ width: '100%', height: "408px", marginTop: "2%", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 5px" }}>
            </div>
        )
    }
}
