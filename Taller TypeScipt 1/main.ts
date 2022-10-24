import { Serie } from "./Serie.js";
import { series } from "./Data.js";
let bodyS: HTMLElement = document.getElementById("series")!;
const averageSeasons: HTMLElement = document.getElementById("seasonAverage")!;

setCells(series);
averageSeasons.innerHTML = `${getSeasonAverage(series)}`

function setCells(seriess: Serie[]): void {
    console.log("Poniendo las series")
    seriess.forEach(serie => {
        let cell = document.createElement("tr");
        cell.innerHTML = `<td class="table-light">${serie.id}</td>
                        <td class="table-light">${serie.name}</td>
                        <td class="table-light">${serie.channel}</td>
                        <td class="table-light">${serie.seasons}</td>`;
       bodyS.appendChild(cell);
    });
}

function getSeasonAverage(seriess: Serie[]): number {
    let average: number = 0;
    seriess.forEach(serie => {
        average += serie.seasons;
    });
    return average / seriess.length;
}


