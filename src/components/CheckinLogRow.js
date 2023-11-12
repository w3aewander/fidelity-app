import React from "react";
import { View, Text, StyleSheet } from "react-native";


const CheckinLogRow = ({log}) => {
    return (
        <View style={styles.Table}>
            <View style={styles.Thead}>
                <Text style={styles.Tr}>Data do checkin</Text>
            </View>
            {log.map(
                (v, i) => <View style={styles.Tr} key={i}><Text style={styles.Td}>{v.date}</Text></View>)
        }</View>)
}

const styles = StyleSheet.create({
    Table: {
        flex: 1,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#fafafa',
        width: 400,
        minWidth: 400,
        maxWidth: 400,
        height: 'auto',
        padding: 0,
    },
    Tr: {
        display: 'table-row',
        padding: 0,
        borderWidth: 1,
        borderColor: '#fafafa',
        width: 'auto',
    },
    Thead: {
        flex: 1,
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
    }

})
export default CheckinLogRow