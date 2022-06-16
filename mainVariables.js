//SVG STYLE
var svgWidth = 1480;
var svgHeight = 730;
var defaultBorderRadius = "10px";

//TEXT STYLE
var defaultFontFamily = "Rockwell";
var headerTextFontSize = "60px";
var sectionTextFontSize = "40px";
var normalTextFontSize = "30px";
var smallTextFontSize = "20px";
var ultrasmallTextFontSize = "13px";

//====================CLUB PAGES ATTRIBUTES====================//

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
var goalDifferenceTextX = 1000;

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

//GOAL DIFFERENCE BARCHART ATTRIBUTES
var goalDifferenceBarchartX = goalDifferenceTextX - 50;
var goalDifferenceBarchartY = svgHeight / 3 + 75;
var barchartHeight = 350;
var barchartWidth = 400;


//WDL BAR ATTRIBUTES
var WDLBarchartX = 50;
var WDLBarchartY = svgHeight / 3 + 30;
var WDLBarchartWidth = 150;
var WDLBarchartHeight = 400;

//==========OTHER VARIABLES==========//
var totalGamesPlayed = 36;


//====================LEAGUE PAGE ATTRIBUTES====================//
var HNLsvgWidth = 1465;
var HNLsvgHeight = 2000;
var leagueLogoWidth = 450;
var leagueLogoHeight = 150;
var leagueLogoX = 50;
var leagueLogoY = svgHeight / 15;
var commonTitleTextY = svgHeight / 3;
var commonClubRatioElementX = svgWidth / 4 - 250;
var defaultClubRatioElementWidth = 350;
var defaultClubRatioElementHeight = 350;


//==========GOAL RATIO SCATTERPLOT ATTRIBUTES==========//
var goalRatioScatterplotY = 400;




//==========CLEANSHEETS BARCHART ATTRIBUTES==========//
var cleansheetsBarchartY = goalRatioScatterplotY + 350;





