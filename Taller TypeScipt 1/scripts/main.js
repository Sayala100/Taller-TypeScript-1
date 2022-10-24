import { series } from "./Data.js";
var bodyS = document.getElementById("series");
var averageSeasons = document.getElementById("seasonAverage");
setCells(series);
averageSeasons.innerHTML = "".concat(getSeasonAverage(series));
function setCells(seriess) {
    console.log("Poniendo las series");
    seriess.forEach(function (serie) {
        var cell = document.createElement("tr");
        cell.innerHTML = "<td class=\"table-light\">".concat(serie.id, "</td>\n                        <td class=\"table-light\">").concat(serie.name, "</td>\n                        <td class=\"table-light\">").concat(serie.channel, "</td>\n                        <td class=\"table-light\">").concat(serie.seasons, "</td>");
        bodyS.appendChild(cell);
        cell.children[1].classList.add("active");
    });
}
function getSeasonAverage(seriess) {
    var average = 0;
    seriess.forEach(function (serie) {
        average += serie.seasons;
    });
    return average / seriess.length;
}
