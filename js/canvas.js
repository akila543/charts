
window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Bike Details"
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "kms in sum",
    includeZero: true
	},
	toolTip:{
		shared:true
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "kms",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2017, 10, 5), y: 14 },
			{ x: new Date(2017, 09, 10), y: 47 },
			{ x: new Date(2017, 10, 10), y: 56 },
			{ x: new Date(2017, 12, 10), y: 58 },
			{ x: new Date(2017, 01, 11), y: 60 },
			{ x: new Date(2017, 03, 11), y: 97 },
			{ x: new Date(2017, 04, 11), y: 112 },
			{ x: new Date(2017, 05, 11), y: 132 },
			{ x: new Date(2017, 09, 11), y: 164 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Service Details",
		lineDashType: "dash",
		dataPoints: [
    { x: new Date(2017, 10, 5), y: ["firstservice","oil filter changed"] },
    { x: new Date(2017, 09, 10), y: null },
    { x: new Date(2017, 10, 10), y: null },
    { x: new Date(2017, 12, 10), y: null },
    { x: new Date(2017, 01, 11), y: null},
    { x: new Date(2017, 03, 11), y: ["second service","airfilter & oil filter changed"]  },
    { x: new Date(2017, 04, 11), y: null },
    { x: new Date(2017, 05, 11), y: null },
    { x: new Date(2017, 09, 11), y: null}
		]
	}]
});
chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}
}
