function clearUnnecessaryArcs() {
    svg.selectAll("path").each(function () {
        var id = d3.select(this).attr("id");

        if (id != "pie0_arc0" &&
            id != "pie0_arc1" &&
            id != "pie1_arc0" &&
            id != "pie1_arc1") {
            d3.select(this).remove();
        }
    });
}

function overallMinMatches() {
    var minHomeWins = Math.min(...homeWinsBySeason);
    var minAwayWins = Math.min(...awayWinsBySeason);
    var minDraws = Math.min(...drawsBySeason);
    if (minHomeWins < minAwayWins && minHomeWins < minDraws) { return minHomeWins; }
    else if (minAwayWins < minAwayWins && minAwayWins < minDraws) { return minAwayWins; }
    return minDraws;
}

function overallMaxMatches() {
    var maxHomeWins = Math.max(...homeWinsBySeason);
    var maxAwayWins = Math.max(...awayWinsBySeason);
    var maxDraws = Math.max(...drawsBySeason);
    if (maxHomeWins > maxAwayWins && maxHomeWins > maxDraws) { return maxHomeWins; }
    else if (maxAwayWins > maxAwayWins && maxAwayWins > maxDraws) { return maxAwayWins; }
    return maxDraws;
}

function clearBarchart() {
    matchesBySeasonsContainer.selectAll("rect")
        .transition()
        .duration(1500)
        .style("opacity", function () {
            if (d3.select(this).attr("id") != "button0" &&
                d3.select(this).attr("id") != "button1" &&
                d3.select(this).attr("id") != "button2" &&
                d3.select(this).attr("id") != "button3") {
                return 0;
            }
        });
}

var barWidth = 45;

function displayHomeWins() {
    clearBarchart();
    matchesBySeasonsContainer.selectAll("mybar")
        .data(leagueDataBySeasons)
        .enter()
        .append("rect")
        .attr("x", function (d) { return matchesXScale(d.seasonyear) - barWidth / 2; })
        .attr("y", function (d) { return matchesYScale(d.hometeamwins); })
        .attr("width", barWidth)
        .attr("height", function (d) { return defaultLeagueStatsElementHeight - matchesYScale(d.hometeamwins); })
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .style("fill", "green")
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);
}

function displayAwayWins() {
    clearBarchart();
    matchesBySeasonsContainer.selectAll("mybar")
        .data(leagueDataBySeasons)
        .enter()
        .append("rect")
        .attr("x", function (d) { return matchesXScale(d.seasonyear) - barWidth / 2; })
        .attr("y", function (d) { return matchesYScale(d.awayteamwins); })
        .attr("width", barWidth)
        .attr("height", function (d) { return defaultLeagueStatsElementHeight - matchesYScale(d.awayteamwins); })
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .style("fill", "blue")
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);
}

function displayDraws() {
    clearBarchart();
    matchesBySeasonsContainer.selectAll("mybar")
        .data(leagueDataBySeasons)
        .enter()
        .append("rect")
        .attr("x", function (d) { return matchesXScale(d.seasonyear) - barWidth / 2; })
        .attr("y", function (d) { return matchesYScale(d.draws); })
        .attr("width", barWidth)
        .attr("height", function (d) { return defaultLeagueStatsElementHeight - matchesYScale(d.draws); })
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .style("fill", "magenta")
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);
}

function displayOverallMatches() {
    var newBarWidth = barWidth / 2;
    clearBarchart();
    matchesBySeasonsContainer.selectAll("mybar")
        .data(leagueDataBySeasons)
        .enter()
        .append("rect")
        .attr("x", function (d) { return matchesXScale(d.seasonyear) - 1.5 * newBarWidth; })
        .attr("y", function (d) { return matchesYScale(d.hometeamwins); })
        .attr("width", newBarWidth)
        .attr("height", function (d) { return defaultLeagueStatsElementHeight - matchesYScale(d.hometeamwins); })
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);
    matchesBySeasonsContainer.selectAll("mybar")
        .data(leagueDataBySeasons)
        .enter()
        .append("rect")
        .attr("x", function (d) { return matchesXScale(d.seasonyear) - newBarWidth / 2; })
        .attr("y", function (d) { return matchesYScale(d.awayteamwins); })
        .attr("width", newBarWidth)
        .attr("height", function (d) { return defaultLeagueStatsElementHeight - matchesYScale(d.awayteamwins); })
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .style("fill", "blue")
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);
    matchesBySeasonsContainer.selectAll("mybar")
        .data(leagueDataBySeasons)
        .enter()
        .append("rect")
        .attr("x", function (d) { return matchesXScale(d.seasonyear) + newBarWidth / 2; })
        .attr("y", function (d) { return matchesYScale(d.draws); })
        .attr("width", newBarWidth)
        .attr("height", function (d) { return defaultLeagueStatsElementHeight - matchesYScale(d.draws); })
        .style("fill", "green")
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .style("fill", "magenta")
        .style("opacity", 0)
        .transition()
        .duration(1500)
        .style("opacity", 1);


}