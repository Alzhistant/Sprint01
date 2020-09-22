function SentinelDDCalc(){
var lat1 = 45.000
var lon1 = -122.000

var lat2 = 45.000
var lon2 = -122.000

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
if(SentinelDDCalc()>=500) SendNotification(expoPushToken,"Paciente fuera de area"," ",'default','high');