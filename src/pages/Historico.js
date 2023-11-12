import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WButton from "../components/WButton";


import '../App.css'

const Historico = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={{width: 280, padding: 10, textAlign: 'center', color: '#fafafa'}}>
                    Histórico de Checkins
                </Text>
                <Text>
                    Aqui serão registrados os Históricos de uso do App
                </Text>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: 15 }}> 
                <WButton 
                   className={'btn btn-primary'}
                   title = 'Tela Inicial'
                   onClick={ () => navigation.navigate('TelaInicial') }>  
                   Tela Inicial  
                </WButton> 

                </View>
                

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(225, 45, 9)',
        height: '100vh',
        minheight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    }
})


export default Historico