import { StyleSheet } from 'react-native';

export const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
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
    },
    botonCirculo: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black"
    },
    textInputRegister:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#000000',
        borderBottomColor: '#778899',
        borderBottomWidth: 1,
    }
})

export const BotonRegister = StyleSheet.create({
    container: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 60,
        paddingRight: 60,
        alignItems: 'center',
      },
      button: {
        borderRadius: 5,
        padding: 15,
        margin: 5,
        minWidth: '80%',
        maxWidth: '80%',
        alignItems: 'center'
      },
      textoBoton: {
        color: 'black',
    },
})
;