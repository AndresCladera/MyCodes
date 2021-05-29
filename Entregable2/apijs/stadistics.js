let clasificacion = standings.standings[0].table;
console.log(clasificacion);

for (let i = 0; i < clasificacion.length; i++) {
    // console.log(clasificacion[i].goalsFor);
    // console.log(clasificacion[i].won);
};
let tbody = document.getElementById("table-body");
promedioGoles = function (equipos) {
    let equiposConPromedio = equipos.map((equipo) => {
        let escudo = equipo.team.crestUrl;
        let nombre = equipo.team.name;
        let promedioGolesEquipo = equipo.goalsFor / equipo.playedGames;
        let promedioRedondeado = promedioGolesEquipo.toFixed(2);

        return { logo: escudo, nombreEquipo: nombre, promedioGoles: promedioRedondeado }
    })

    let equiposOrdenados = equiposConPromedio.sort((a, b) => {
        return b.promedioGoles - a.promedioGoles;
    });
    console.log(equiposOrdenados);


    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td><img class="logo" src="${equiposOrdenados[i].logo}"></td>
        <td/>${equiposOrdenados[i].nombreEquipo}</td>
        <td>${equiposOrdenados[i].promedioGoles}</td>`;
        tbody.appendChild(tr)

    }
};
// let promedioGolesECEquipo = (clasificacion[i].goalsAgainst / clasificacion[i].playedGames);
// let tbody2 = document.getElementById("table-body2");
// promedioGolesEnContra = function (equipo) {
//     let equiposGoleados = [];
//     for (let i = 0; i < 5; i++) {
//         // let promedioGolesECEquipo = (equipo[i].goalsAgainst / equipo[i].playedGames);
//         equiposGoleados.push(equipo[i].team.crestUrl, equipo[i].team.name, equipo[i].goalsAgainst)

//         // let tr = document.createElement("tr");
//         // tr.innerHTML = `<td><img class="logo" src="${equipo[i].team.crestUrl}"></td>
//         // <td/>${equipo[i].team.name}</td>
//         // <td>${equipo[i].goalsAgainst}</td>
//         // <td>${equipo[i].playedGames}</td>
//         // <td>${promedioGolesECEquipo.toFixed(2)}</td>`;
//         // tbody2.appendChild(tr)s
//     }
// };

promedioGoles(clasificacion);
// promedioGolesEnContra(clasificacion);