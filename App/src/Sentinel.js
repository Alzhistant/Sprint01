function SentinelDDCalc(latP,lonP,latR,lonR,radioM){
	var lat1 = latP
	var lon1 = lonP

	var lat2 = latR
	var lon2 = lonR

	var R = 6371e3; // radio de la tierra en metros
	var fi1 = lat1 * Math.PI/180; // cambio de valores (fi, lambda) en radianes
	var fi2 = lat2 * Math.PI/180;
	var Dfi = (lat2-lat1) * Math.PI/180;
	var Dlam = (lon2-lon1) * Math.PI/180;

	var a = Math.sin(Dfi/2) * Math.sin(Dfi/2) +
			  Math.cos(fi1) * Math.cos(fi2) *
			  Math.sin(Dlam/2) * Math.sin(Dlam/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c; // en metros
	
	//si la distancia entre las coordenadas es mayor o igual a radioM se manda la alerta
	if(d>=radioM){
		SendNotification(expoPushToken,"Paciente fuera de area"," ",'default','high');
		return d;
	}
	else
		return d;
}