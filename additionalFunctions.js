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

function clearUnnecessaryRectangles() {
    svg.selectAll("path").each(function () {
        var id = d3.select(this).attr("id");

        if (id != "rect0" && id != "rect1") {
            d3.select(this).remove();
        }
    });
}