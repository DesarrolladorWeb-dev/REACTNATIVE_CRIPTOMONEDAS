import React,{useState, useEffect} from 'react'
import { useFonts } from 'expo-font';
import {Picker} from '@react-native-picker/picker';
import  axios from 'axios';
import {Text , StyleSheet, TouchableHighlight, View, Alert} from 'react-native'
const Formulario = ({moneda, criptomoneda, guardarMoneda, guardarCriptomoneda,guardarConsultarAPI }) => {
    const[fontsLoaded] = useFonts({
        LatoBlack : require("../assets/fonts/Lato-Black.ttf"),
        LatoRegular : require("../assets/fonts/Lato-Regular.ttf")
    })

    const [criptomonedas, guardarCriptomonedas] = useState([])

    useEffect(() => {
        const consultarApi = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            // console.log(resultado.data.Data);
            guardarCriptomonedas(resultado.data.Data);
            }
         consultarApi();
    },[]);
//    Alamacena las selecciones del usuario
    const obtenerMoneda = moneda => {
        guardarMoneda(moneda)

    }
    // Almacenar las Criptomonedas
      const obtenerCriptomoneda = cripto => {
        guardarCriptomoneda(cripto)
    }
    const cotizarPrecio = () =>{
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta();
            return
        }
        //Camviar el state de consultar api
        guardarConsultarAPI(true)
    }
    const mostrarAlerta = ()=>{
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios',
            // NUMERO DE BOTONS
            [
                {text: 'OK'}
            ]
        )
    }

    return (
        <View>
             <Text style={styles.label}>Moneda</Text>
             
            <Picker
                selectedValue={moneda}
                onValueChange={moneda => obtenerMoneda(moneda) }
                itemStyle={{heigth: 120}}
            >
                    <Picker.Item label="--Selecccione--" value="" />
                    <Picker.Item label="Dolar de Estador Unidos" value="USD" />
                    <Picker.Item label="Peso Mexicano" value="MXN" />
                    <Picker.Item label="Euro" value="EUR" />
                    <Picker.Item label="Libra Esterlina" value="GBP" />

            </Picker>   
             <Text style={styles.label}>Criptomonedas</Text>
             <Picker
                selectedValue={criptomoneda}
                onValueChange={cripto => obtenerCriptomoneda(cripto) }
                itemStyle={{heigth: 120}}

            >
                    <Picker.Item label="--Selecccione--" value=""  />
                    {criptomonedas.map( cripto => (
                        <Picker.Item key={cripto.CoinInfo.Id}  label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                    ))}
            
            </Picker> 
                <TouchableHighlight
                        style={styles.btnCotizar}
                        onPress={() => cotizarPrecio()}
                    >
                        <Text style={styles.textoCotizar}>Cotizar</Text>
                    </TouchableHighlight>

        </View>
       
      )
}
  
    
    

const styles = StyleSheet.create({
    label: {
        fontFamily: "LatoBlack",
        textTransform : 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnCotizar:{
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20
    },
    textoCotizar:{
        color:'#FFF',
        fontSize:18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign:'center'
    }
});
 
export default Formulario;