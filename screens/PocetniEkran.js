import React, { useState } from "react";
import { Keyboard, View, StyleSheet, Text, Button, TouchableWithoutFeedback, Alert } from "react-native";
import Kartica from "../components/Kartica";
import UnosBroja from "../components/UnosBroja";
import BrojOkvir from "../components/BrojOkvir";

const PocetniEkran = (props) => {
    const [unos, postaviUnos] = useState('')
    const [odabir, postaviOdabir] = useState(false)
    const [odabraniBroj, postaviOdabraniBroj] = useState()

    let prikazBroja;

    if(odabir) {
        prikazBroja = (
            <Kartica stil={stil.karticaBroj}>
                <Text>Odabrani broj: </Text>
                <BrojOkvir>{odabraniBroj}</BrojOkvir>
                <Button title="Pocetak igre" onPress={() => {props.pocetak(odabraniBroj)}} />
            </Kartica>)
    }
    const resetPoljeUnos = () => {
        postaviUnos('');
        postaviOdabir(false)
    }

    const prihvatiOdabir = () => {
        const broj = parseInt(unos);
        if(isNaN(broj) || broj <= 0 || broj > 99){
            Alert.alert(
                'Neispravan unos!',
                'Unesite broj u rasponu od 1-99',
                [{text: 'U redu', style: 'default', onPress: resetPoljeUnos}]
            )
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
                    style={stil.unosBroja} 
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
    unos: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    },
    tipke: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    unosBroja: {
        width: 50,
    },
    karticaBroj: {
        marginTop: 50,
        alignItems: 'center'
    }
    
})

export default PocetniEkran;