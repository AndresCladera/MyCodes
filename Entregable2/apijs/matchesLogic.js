let partidosTotales = document.getElementById("table-body");


let radio_ganados = document.getElementById("radio-ganados");
let radio_empatados = document.getElementById("radio-empatados").addEventListener("click",console.log("empatados"));
let radio_perdidos = document.getElementById("radio-perdidos");
let elementosRadio = document.getElementsByClassName("clase-radio");
let inputBuscador = document.getElementById("filtro");
let mensajeError = document.getElementById("error");

let obtenerInformacion = () => {
    let rankingUrl =
        "https://api.football-data.org/v2/competitions/2014/matches";

    fetch(rankingUrl, {
        method: "GET",
        headers: {
            "X-Auth-Token": "f4db1fef6dcb4d3494491b461a6c076e",
        },
    })
        .then((response) => response.json())
        .then((data) => {

            let matchTotales = data.matches;

            let partidosObtenidos = obtenerPartidos(matchTotales);
            if (partidosObtenidos.length != 0) {
                let partiditosFiltrados = partidosFiltradosPorVED(partidosObtenidos);
                pintarPartidosObtenidos(partiditosFiltrados);
            }
        })
}


let botonPulsado = function () {
    obtenerInformacion();

};




let obtenerPartidos = function (todosLosPartidos) {
    partidosTotales.innerHTML = "";
    let partidosDelEquipo = [];
    if (inputBuscador.value == undefined || inputBuscador.value == "") {
        pintarPartidosObtenidos(todosLosPartidos);
        return [];
    }
    else {
        for (i = 0; i < todosLosPartidos.length; i++) {
            if (todosLosPartidos[i].homeTeam.name == inputBuscador.value || todosLosPartidos[i].awayTeam.name == inputBuscador.value) {
                partidosDelEquipo.push(todosLosPartidos[i]);

            }
        }
        return partidosDelEquipo;
    }

};

let partidosFiltradosPorVED = function (partidosSeleccionados) {
    if (partidosSeleccionados.length == 0) {
        borrarTabla();
        mensajeError.innerHTML = "No se ha obtenido resultados";
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
obtenerInformacion();
