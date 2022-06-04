//SVG STYLE
var svgWidth = "100%";
var svgHeight = 730;
var defaultBorderRadius = "10px";

//TEXT STYLE
var defaultFontFamily = "Rockwell";
var headerTextFontSize = "60px";
var sectionTextFontSize = "40px";
var normalTextFontSize = "30px";
var smallTextFontSize = "20px";

//==========CLUB PAGES ATTRIBUTES==========//

//CLUB EMBLEMS
var clubEmblemWidth = 150;
var clubEmblemHeight = 150;
var clubEmblemX = 50;
var clubEmblemY = svgHeight / 15;

//CLUB HEADER TEXT
var clubHeaderTextX = 250;
var clubHeaderTextY = svgHeight / 5;

//CLUBS PAGE - TEXT COORDINATES
var commonTextY = svgHeight / 3;
var WDLTextX = 25;
var playersTextX = 600;

//CLUBS PAGE - COMMON PIE CHARTS COORDINATES
var commonPieChartX = 660;
var upperPieChartY = 375;
var lowerPieChartY = upperPieChartY + 225;

//PIECHART ATTRIBUTES
var innerRadius = 0;
var outerRadius = 100;
var outerRadiusOnHover = 115;
var defaultArc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var arcOnHover = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadiusOnHover);


//PIECHART COLOR
var color = ["#b5a6a5", "black"];

