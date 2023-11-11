import React, { Children } from "react";
import { View, Text, StyleSheet } from 'react-native';



const WCard = (props) => {

    return (
        <View style={styles.cardForm}>
            <View style={styles.cardTitle}>
                <Text style={{color: '#fafafa', fontSize: 20}}>{props.title}</Text>
            </View>

            <View style={styles.cardBody}>
                {props.children}
            </View> 

            <View style={styles.cardFooter}>
                <Text style={{color: '#fafafa', fontSize: 15}}>{props.footer}</Text>
            </View>

            
        </View>
    )
}


export default WCard


const styles = StyleSheet.create({
    cardForm: {
        borderRadius: 30,
        backgroundColor: '#ff9a0a',
        marginBottom: 50,

    },
    cardTitle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 15,
        backgroundColor: '#aa4',
    },

    cardBody: {
        height: 250,
        padding: 15,
        fontSize: 14,
        margin: 15,
    },

    cardFooter: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 15,
        backgroundColor: '#aa4',
        fontSize: 14
    }
})

