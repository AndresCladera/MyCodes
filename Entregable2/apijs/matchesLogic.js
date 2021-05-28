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
let mensajeError = document.getElementById("error");

let botonPulsado = function () {
    let equipo = inputBuscador.value;
    let partidos = obtenerPartidos(equipo);
    console.log(partidos);
    let partidosObtenidos = partidosFiltradosPorVED(partidos);
    pintarPartidosObtenidos(partidosObtenidos);
};


let obtenerPartidos = function (equipoSeleccionado) {
    partidosTotales.innerHTML = "";
    let partidosDelEquipo = [];
    if (equipoSeleccionado == undefined || equipoSeleccionado == "") {
        pintarPartidosObtenidos(matchTotales);
    }
    else {
        for (i = 0; i < matchTotales.length; i++) {
            if (matchTotales[i].homeTeam.name == equipoSeleccionado || matchTotales[i].awayTeam.name == equipoSeleccionado) {
                partidosDelEquipo.push(matchTotales[i]);

            }
        }
        return partidosDelEquipo;
    }

};

let partidosFiltradosPorVED = function (partidosSeleccionados) {
    if (partidosSeleccionados.length == 0){
        borrarTabla();
        mensajeError.innerHTML= "No se ha obtenido resultados";
    }
    let partidosFiltrados = [];
    for (i = 0; i < partidosSeleccionados.length; i++) {
        if (radio_ganados.checked == true && (partidosSeleccionados[i].homeTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "HOME_TEAM" || partidosSeleccionados[i].awayTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "AWAY_TEAM")) {
            partidosFiltrados.push(partidosSeleccionados[i])

        } else if (radio_empatados.checked == true && (partidosSeleccionados[i].homeTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "DRAW" || partidosSeleccionados[i].awayTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "DRAW")) {
            partidosFiltrados.push(partidosSeleccionados[i])

        } else if (radio_perdidos.checked == true && (partidosSeleccionados[i].homeTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "AWAY_TEAM" || partidosSeleccionados[i].awayTeam.name == inputBuscador.value && partidosSeleccionados[i].score.winner == "HOME_TEAM")) {
            partidosFiltrados.push(partidosSeleccionados[i])

        } else if (radio_ganados.checked == false && radio_perdidos.checked == false && radio_empatados.checked == false) { partidosFiltrados = partidosSeleccionados }
    }
    return partidosFiltrados;
};


let pintarPartidosObtenidos = function (partidosEquipo) {
    borrarTabla();
    for (i = 0; i < partidosEquipo.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = [`<td>${partidosEquipo[i].homeTeam.name}</td>
        <td>${partidosEquipo[i].score.fullTime.homeTeam} - ${partidosEquipo[i].score.fullTime.awayTeam}</td>
        <td>${partidosEquipo[i].awayTeam.name}</td>`];
        partidosTotales.appendChild(tr);

    }
};

let borrarTabla = function () {
    partidosTotales.innerHTML = "";
}


// llAMADO DE FUNCIONES
obtenerPartidos();