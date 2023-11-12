import React from "react";
import { View, Text, StyleSheet } from "react-native";


const CheckinLogRow = ({ log }) => {

    const msg = (log.length >= 10)
        ? "Parabéns! Você conquistou um almoço grátis."
        : "Seus pontos estão sendo computados no programa de fidelidade."

    return (
        <View>

            <View style={styles.Msg}>
                <Text style={styles.MsgText}>{msg}</Text>
            </View>

            <View >
                <View style={styles.Thead}>
                    <Text style={styles.TheadText}>Data do checkin</Text>
                </View>
                {log.map(
                    (v, i) => <View style={styles.Tr} key={i}><Text style={styles.Td}>{v.date}</Text></View>)
                }<View style={styles.Tfooter}>
                    <Text style={styles.TfooterText}>Pontos: {log.length}</Text>
                </View>

            </View>
        </View>)
}

const styles = StyleSheet.create({
    Table: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 390,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#fafafa',
        width: 400,
        minWidth: 400,
        maxWidth: 400,
        height: 'auto',
    },
    Tr: {
        display: 'table-row',
        padding: 0,
        borderWidth: 1,
        borderColor: '#fafafa',
        width: 'auto',
    },
    Thead: {
        padding: 0,
        fontSize: 15,
        backgroundColor: '#fda',

    },
    Th: {
        padding: 0,
        color: '#fafafa',
    },
    Td: {
        color: '#fafafa',
        fontSize: '1rem',
        padding: 4,
    },
    TheadText: {
        padding: 4,
        fontSize: 20,
        backgroundColor: '#fd8',
    },
    Tfooter: {
        padding: 0,
        fontSize: 25,
        backgroundColor: '#fd8',
    },
    TfooterText: {
        fontSize: 20,
        color: '#000',
        padding: 4,
    },
    Msg: {
        marginTop: 10,
        marginBottom: 10,
    },
    MsgText: {
        fontSize: 15,
        padding: 4,
        color: '#fff',
    }

})
export default CheckinLogRow