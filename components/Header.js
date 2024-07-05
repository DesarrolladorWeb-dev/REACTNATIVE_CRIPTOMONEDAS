import React from 'react'
import { useFonts } from 'expo-font';



import {Text , StyleSheet, Platform, View} from 'react-native'
const Header = () => {
    const[fontsLoaded] = useFonts({
        LatoBlack : require("../assets/fonts/Lato-Black.ttf"),
        LatoRegular : require("../assets/fonts/Lato-Regular.ttf")
    })
    return (
        <View>
             <Text style={styles.encabezado} >Criptomonedas</Text>
        
        </View>
       
      )
}
  
    
    
  


 
const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 50, 
        fontFamily: "LatoBlack",
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF'
    }
})


export default Header;