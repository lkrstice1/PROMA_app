import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Kartica = (props) => {
    return(
        <View style={{...stil.kartica, ...props.stil}}>
            {props.children}
        </View>
    )
}

const stil = StyleSheet.create({
    kartica: {
        backgroundColor: "white",
        padding: 20,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.75,
        elevation: 7,
        borderRadius: 10
    },
    ekran: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#f5edb0'
    },
    tipke: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default Kartica