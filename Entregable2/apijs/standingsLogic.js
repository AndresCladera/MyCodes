// let clasificacion = standings.standings[0].table;

let imgDraw = "./images/draw.jpg";
let imgLose = "./images/lose.jpg";
let imgWin = "./images/win.jpg";
let tbody = document.getElementById("table-body");

let rankingUrl =
    "http://api.football-data.org/v2/competitions/2014/standings";

fetch(rankingUrl, {
    method: "GET",
    headers: {
        "X-Auth-Token": "f4db1fef6dcb4d3494491b461a6c076e",
    }
})
    .then((response) => response.json())
    .then((data) => {
        let clasificacion = data.standings[0].table;
        init(clasificacion);
    })

function init(standing) {
    for (let i = 0; i < standing.length; i++) {
        // console.log(standing[i]);
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${standing[i].position}</td>
    <td><img class="logo" src="${standing[i].team.crestUrl}"></td>
    <td>${standing[i].team.name}</td>
    <td>${standing[i].playedGames}</td>
    <td>${standing[i].points}</td>
    <td>${standing[i].won}</td>
    <td>${standing[i].draw}</td>
    <td>${standing[i].lost}</td>
    <td>${standing[i].goalsFor}</td>
    <td>${standing[i].goalsAgainst}</td>
    <td>${standing[i].goalDifference}</td>
    <td>${standing[i].form}</td>`;
        tbody.appendChild(tr)

    }
}




