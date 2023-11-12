import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import WButton from "../components/WButton";

import '../App.css'





const Checkin = ({ navigation }) => {
    
    const [qrcode, setQrCode] = useState('');
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={{width: 280, padding: 10, textAlign: 'center', color: '#fafafa'}}>
                    Exiba o qrcode para AppMaster para computar o checkin
                </Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 15 }}> 
                <WButton 
                   className={'btn btn-primary'}
                   title = 'Tela Inicial'
                   onClick={ () => navigation.navigate('TelaInicial') }>  
                   Tela Inicial  
                </WButton> 
                <WButton 
                   className={'btn btn-primary'}
                   title = 'Gerar QrCode'
                   onClick={ () => navigation.navigate('Cadastro') }>   
                   Gerar QrCode 
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


export default Checkin