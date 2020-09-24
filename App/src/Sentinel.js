import React, {Component} from 'react';
import {Platform, SyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

function SentinelDDCalc(latP,lonP){
	var radioM = 500;
	
	constructor(props){
		super(props);
		
		this.state = {
			latitude: 0;
			longitude: 0;
		}
	}
	
	componentDidMount(){
		this.watchId = navigator.geolocation.watchPosition{
			(position) => {
				this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				)};
			},
			(error) => {
				this.setState({ error: error.message })
			},
			{ enableHighAccuracy: false, timeout: 1, maximumAge: 1, distanceFilter: 1}
		}
	}
	
	var lat1 = latP;
	var lon1 = lonP;

	var lat2 = this.state.latitude;
	var lon2 = this.state.longitude;

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