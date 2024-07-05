import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';

const Cotizacion = ({resultado}) => {
    const[fontsLoaded] = useFonts({
        LatoBlack : require("../assets/fonts/Lato-Black.ttf"),
        LatoRegular : require("../assets/fonts/Lato-Regular.ttf")
    })
    // Comprobamos si el objeto esta vacio 
    if(Object.keys(resultado).length === 0) return null;

    return (  
        <View style={styles.resultado}>
            {/* PRIMERO APLICALE STYLES TEXTO y LUEGO PRECIO */}
            <Text style={[styles.texto ,styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.texto}>Precio mas alto del dia: {' '}
                <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.texto}>Precio mas bajo del dia: {' '}
                <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Variacion las ultimas 24 horas: {' '}
                <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} % </Text>
            </Text>
            <Text style={styles.texto}>La ultima Actualizacion : {' '}
                <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>

        </View>
       

    );
}
const styles = StyleSheet.create({
    resultado:{
        backgroundColor: '#5E49E2',
        padding: 20,
    },
    texto:{
        color: '#FFF',
        fontFamily:'LatoRegular',
        fontSize: 18,
        marginBottom: 10
    },
    precio:{
        fontSize: 38
    },
    span:{
        fontFamily: 'LatoBlack'
    }
})
 
export default Cotizacion;