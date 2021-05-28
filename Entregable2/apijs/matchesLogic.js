let matchTotales = matches.matches;

let partidosTotales = document.getElementById("table-body");

// for (let i = 0; i < matchTotales.length; i++) {
//     // console.log(matchTotales[i].awayTeam.name);
//     let result = `${matchTotales[i].score.fullTime.homeTeam} - ${matchTotales[i].score.fullTime.awayTeam}`;
//     let homeT = `${matchTotales[i].homeTeam.name}`;
//     let awayT = `${matchTotales[i].awayTeam.name}`;
//     let tr = document.createElement("tr");
//     tr.innerHTML = [`<td>${homeT}</td>
// <td>${result}</td>
// <td>${awayT}</td>`];
//     partidosTotales.appendChild(tr)

// };

let radio_ganados = document.getElementById("radio-ganados");
let radio_empatados = document.getElementById("radio-empatados");
let radio_perdidos = document.getElementById("radio-perdidos");
let elementosRadio = document.getElementsByClassName("clase-radio");
let inputBuscador = document.getElementById("filtro");

let botonPulsado = function () {
    let equipo = inputBuscador.value;
    let partidos = obtenerPartidos(equipo);
    console.log(partidos);
    let partidosObtenidos = partidosFiltradosPorVED(partidos);
    // limpiarPagina();
    // pintarPartidosObtenidos(partidosObtenidos);
};


let obtenerPartidos = function (equipoSeleccionado) {
    partidosTotales.innerHTML = "";
    let partidosDelEquipo = [];
    if (equipoSeleccionado == undefined || equipoSeleccionado == "") {
        for (let i = 0; i < matchTotales.length; i++) {
            let result = `${matchTotales[i].score.fullTime.homeTeam} - ${matchTotales[i].score.fullTime.awayTeam}`;
            let homeT = `${matchTotales[i].homeTeam.name}`;
            let awayT = `${matchTotales[i].awayTeam.name}`;
            let tr = document.createElement("tr");
            tr.innerHTML = [`<td>${homeT}</td>
        <td>${result}</td>
        <td>${awayT}</td>`];
            partidosTotales.appendChild(tr)

        };
    }
    for (i = 0; i < matchTotales.length; i++) {
        if (matchTotales[i].homeTeam.name == equipoSeleccionado || matchTotales[i].awayTeam.name == equipoSeleccionado) {
            partidosDelEquipo.push(matchTotales[i]);

        }
    }
    return partidosDelEquipo;
};

let partidosFiltradosPorVED = function (partidosSeleccionados) {
    let partidosFiltrados = [];
    for (i = 0; i < partidosSeleccionados.length; i++) {
        if (radio_ganados.checked == true && (partidosSeleccionados[i].homeTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "HOME_TEAM" || partidosSeleccionados[i].awayTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "AWAY_TEAM")) {
            partidosFiltrados.push(partidosSeleccionados[i]);
        }
    }
    console.log(partidosFiltrados);
    return partidosFiltrados;
};




// llAMADO DE FUNCIONES
obtenerPartidos()
