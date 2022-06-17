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

function overallMinWins() {
    var minHomeWins = Math.min(...homeWinsBySeason);
    var minAwayWins = Math.min(...awayWinsBySeason);
    if (minHomeWins <= minAwayWins) { return minHomeWins; }
    return minAwayWins;
}

function overallMaxWins() {
    var maxHomeWins = Math.max(...homeWinsBySeason);
    var maxAwayWins = Math.max(...awayWinsBySeason);
    if (maxHomeWins >= maxAwayWins) { return maxHomeWins; }
    return maxAwayWins;
}