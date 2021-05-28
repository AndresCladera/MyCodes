let obtenerPartidos = function (equipoSeleccionado) {
    let partidosBuscados = [];
    for (let i = 0; i < match.length; i++) {
        // console.log(match[i].awayTeam.name);
        if (match[i].homeTeam.name == equipoSeleccionado || match[i].awayTeam.name == equipoSeleccionado) {
            // console.log(match[i]);
            partidosBuscados.push(match[i]);
        }
    }
    return partidosBuscados;

};

let filtrarPartidosPorLocalidad = function (equipoEnFiltro) {
    let partidosEnRadio = [];
    for (let i = 0; i < equipoEnFiltro.length; i++) {
        if (radio_local.checked == true && equipoEnFiltro[i].homeTeam.name == equipoEnFiltro) {
            partidosEnRadio.push(equipoEnFiltro);
        // } else if (radio_visitante.checked == true && equipoEnFiltro[i].awayTeam.name == equipoEnFiltro){
        //     partidosEnRadio.push(equipoEnFiltro);
        // } else if (radio_local.checked == false && radio_visitante.checked == false) {
        //     partidosCasa == equipoEnFiltro;
        }
    }
    if (partidosEnRadio.length == 0) {
        return resultados;
    }
    return partidosEnRadio
};


