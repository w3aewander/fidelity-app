import React from "react";
import { View, Text, StyleSheet, TextInput as Entry } from "react-native";


import '../App.css'

import WCard from "../components/WCard";
import WButton from "../components/WButton";


const Cadastro = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ width: 380, padding: 10, textAlign: 'center', color: '#fafafa', fontSize: 30 }}>
                    Exiba o qrcode para App Fidelity Master para checkin
                </Text>

                <WCard title="Meu Cadastro" footer={new Date().toLocaleDateString()}>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Nome</Text>
                        <Entry style={styles.textField} Text="Seu nome aqui" with={20} />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Email</Text>
                        <Entry style={styles.textField} Text="Seu e-mail aqui" width={20} />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}> Celular: (WhatsApp)</Text>
                        <Entry style={styles.textField} Text="27 99999-9999" placeholder="(27) 98765-4321" placeholderTextColor='#aaa' />
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <WButton title="Enviar cadastro" className='btn btn-primary' onClick={ () => alert('Cadastro aqui')}> Enviar cadastro </WButton>
                    </View>
                </WCard>

                <View style={{justifyContent: 'center', alignItems : 'center'}}>

                    <WButton
                        className={'btn btn-primary'}
                        title='Cadastro'
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
    label: {
        fontSize: 15,
        fontWeight: 400,
    },
    textField: {
        backgroundColor: '#fafafa',
        padding: 5,
        fontSize: 15,
    },

    formGroup: {
        padding: 4,
    },


})

export default Cadastro
