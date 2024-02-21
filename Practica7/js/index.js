var fechaActual = new Date();

var nombresMeses = [
    "en", "feb", "mar", "abr", "may", "jun",
    "jul", "ag", "sep", "oct", "nov", "dic"
];

var dia = fechaActual.getDate();
var mes = fechaActual.getMonth(); 
var año = fechaActual.getFullYear();

var nombreMes = nombresMeses[mes];

var fechaFormateada = dia + ' ' + nombreMes + ' ' + año;

document.getElementById("fecha").innerHTML = fechaFormateada;