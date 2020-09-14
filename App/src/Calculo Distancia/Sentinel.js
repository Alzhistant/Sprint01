function SentinelDDCalc(){
var refC = '45.000 -122.000'; //coordenada de referencia
var coordP = '45.000 -122.000'; //coordenadas del paciente

//separando latitud y longitud de las coordenadas anteriores
var arrRef = refC.split(' ');
var arrP = arrP.split(' ');

var lat1 = parseFloat(arrRef[0]);
var lon1 = parseFloat(arrRef[1]);

var lat2 = parseFloat(arrP[0]);
var lon2 = parseFloat(arrP[1]);

var R = 6371e3; // radio de la tierra en metros
var φ1 = lat1 * Math.PI/180; // cambio de valores (φ, λ) en radianes
var φ2 = lat2 * Math.PI/180;
var Δφ = (lat2-lat1) * Math.PI/180;
var Δλ = (lon2-lon1) * Math.PI/180;

var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

var d = R * c; // en metros

return d;
}

//si la distancia entre las coordenadas es menor a 500 metros se manda la alerta
if(d<500) alert(0);
else alert(1);