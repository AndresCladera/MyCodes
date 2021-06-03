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

promedioGoles(clasificacion);
// promedioGolesEnContra(clasificacion);
