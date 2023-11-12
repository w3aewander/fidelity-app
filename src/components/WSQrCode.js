import React from "react";
import { View } from "react-native";


const WSQrCode = (props) => {

    const gapi = 'https://chart.googleapis.com/chart?cht=qr&chs=350x350&chl=';
    const dados = `${props.name}:${props.email}:${props.celular}`;

    const dadosQrCode = gapi + dados;

    return (<View  style={{margin: 5, justifyContent: 'center', alignItems: 'center' }}>
        <img src={dadosQrCode} alt="qrcode" />
    </View>)
}

export default WSQrCode

