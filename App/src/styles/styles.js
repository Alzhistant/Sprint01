import { StyleSheet } from 'react-native';

export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    botonPrimario: {
        borderRadius: 5,
        padding: 15,
        margin: 5,
        backgroundColor: '#2288DC',
        minWidth: '80%',
        maxWidth: '80%',
        alignItems: 'center'
    },
    botonPeligro: {
        borderRadius: 5,
        padding: 15,
        margin: 5,
        backgroundColor: '#ff4444',
        minWidth: '80%',
        maxWidth: '80%',
        alignItems: 'center'
    },
    textoBoton: {
        color: 'white',
    },
    mapStyle: {
        width: '90%',
        height: '80%',
    }
});