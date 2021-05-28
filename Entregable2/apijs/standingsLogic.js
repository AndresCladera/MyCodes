let clasificacion = standings.standings[0].table;
// console.log(clasificacion);

let imgDraw = "./images/draw.jpg";
let imgLose = "./images/lose.jpg";
let imgWin = "./images/win.jpg";

// for (let i = 0; i < standing.length; i++) {
//     let form = standing[i].form;
//     console.log(form);
//     let formString = form.split(",");
//     let formIcons = [];
//     for (let i = 0; i < formString.length; i++) {
//         if (formString[i] == "W") {
//             formIcons.push(imgWin);
//         } else if (formString[i] == "D") {
//             formIcons.push(imgDraw);
//         } else if (formString[i] == "L") {
//             formIcons.push(imgLose);
//         }
//     }
// }

let tbody = document.getElementById("table-body");
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
init(clasificacion);

function lanzamiento(liquido) {
    console.log(`has lanzado un recipiente lleno de ${liquido}`);
}
lanzamiento("cerveza");