import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WButton from "../components/WButton";
import checkinlog from '../data/checkin_log.json'
import CheckinLogRow from "../components/CheckinLogRow";

import '../App.css'

const Historico = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Title}>
                    Históricos de uso do App
                </Text>

                <View>

                <CheckinLogRow log={checkinlog} />
                   
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <WButton
                        className={'btn btn-primary'}
                        title='Tela Inicial'
                        onClick={() => navigation.navigate('TelaInicial')}>
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
    },
    Title: {
        fontSize: 25,
        color: '#fafafa',
        justifyContent: 'center',
        textAlign: 'center',
    }
})


export default Historico