import React from "react"
import { View } from 'react-native';
import WButton from "./components/WButton";
import Version from "./components/WVersion";
import logo from './img/prato.jpeg';

import './App.css';

const AppTitle = (props) => <div className='App-title'>{props.title}</div>
//const Version = (props) => <div>{props.version}</div>

export default function TelaInicial({ navigation }) {

    return (
        <View>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <AppTitle title="Fidelity App" />
                

                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <WButton className='btn btn-primary' title='Check In' onClick={() => navigation.navigate('Checkin')}>
                        Check In
                    </WButton>
                    <WButton className='btn btn-primary' title='cadastro' onClick={() => navigation.navigate('Cadastro')}>
                        Cadastro
                    </WButton>
                    <WButton className='btn btn-primary' title='Historico' onClick={() => navigation.navigate('Historico')}>
                        Historico
                    </WButton>
                </View>
            <Version version='20231111.2' codename='start' lastupdate='nov-23' />
            </header>


        </View>);
}
