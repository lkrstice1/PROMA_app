import React, { useState } from "react";
import { Keyboard, View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback } from "react-native";
import Kartica from "../components/Kartica";
import UnosBroja from "../components/UnosBroja";

const PocetniEkran = (props) => {
    const [unos, postaviUnos] = useState('')
    const [odabir, postaviOdabir] = useState(false)
    const [odabraniBroj, postaviOdabraniBroj] = useState()

    let prikazBroja;

    if(odabir) {
        prikazBroja = <Kartica><Text>Odabrni broj: {odabraniBroj}</Text></Kartica>
    }
    const resetPoljeUnos = () => {
        postaviUnos('');
        postaviOdabir(false)
    }

    const prihvatiOdabir = () => {
        const broj = parseInt(unos);
        if(isNaN(broj) || broj <= 0 || broj > 99){
            return;
        }
        postaviOdabir(true)
        postaviOdabraniBroj(parseInt(broj))
        postaviUnos('')
    }

    const unosBrojaProvjera = unosTekst => {
        postaviUnos(unosTekst.replace(/[^0-9]/g, ''))
    }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Započni novu igru</Text>
            <Kartica stil={stil.unos}>
                <Text>Odaberi jedan broj</Text>
                <UnosBroja 
                    blurOnSumbit 
                    keyboardType="numeric" 
                    maxLength={2} 
                    stil={stil.unosBroja} 
                    value = {unos}
                    onChangeText={unosBrojaProvjera}
                />
                <View style={stil.tipke}>
                    <Button title="Odustani" onPress={resetPoljeUnos}/>
                    <Button title="Prihvati" onPress={prihvatiOdabir}/>
                </View>
            </Kartica>
            {prikazBroja}
        </View>
        </TouchableWithoutFeedback>
    )
}
const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#f5edb0"
    },
    naslov: {
        fontSize: 20,
        marginVertical: 10
    },
    unosBroja: {
        width: 50,
    },
    tipke: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    
})

export default PocetniEkran