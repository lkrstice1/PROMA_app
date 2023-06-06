import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Kartica from '../components/Kartica';
import BrojOkvir from '../components/BrojOkvir';

const generirajBroj = (min, max, zanemari) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndBroj = Math.floor(Math.random() * (max - min) + min);
    if(rndBroj === zanemari){
        return generirajBroj(min, max, zanemari)
    } else {
        return rndBroj
    }
}

const EkranIgre = (props) => {
    const [pokusaj, postaviPokusaj] = useState(generirajBroj(1, 100, props.broj))
    const [runde, postaviRunde] = useState(0)
    const trenutniMin = useRef(1);
    const trenutniMax = useRef(100);

    const {broj, kraj} = props

    useEffect( () => {
        if(pokusaj === broj){
            kraj(runde)
        }
    }, [pokusaj, broj, kraj])

    const iduciPokusaj = (pomoc) => {

        if((pomoc === 'manji' && pokusaj < props.brojKorisnika) ||
        (pomoc === 'veci' && pokusaj > props.brojKorisnika)) {
            Alert.alert(
                'Bez varanja',
                'Odaberite ispravni uvjet',
                [{text: 'OK'}]
            );
            return;
        }
        let noviBroj
        if(pomoc === 'manji'){
            trenutniMax.current = pokusaj
        } else if(pomoc === 'veci'){
            trenutniMin.current = pokusaj
        }
        noviBroj = generirajBroj(trenutniMin.current, trenutniMax.current, pokusaj)
        postaviPokusaj(noviBroj)
        postaviRunde( runde => runde + 1)
    }
    return(
        <View style={stil.ekran}>
        <Text>Pokušaj računala:</Text>
        <BrojOkvir>{pokusaj}</BrojOkvir>
        <Kartica style={stil.tipke}>
            <Button title='MANJI' 
                onPress={() => iduciPokusaj('manji')} 
            />
            <Button title='VEĆI' 
                onPress={() => iduciPokusaj('veci')} 
            />
        </Kartica>
    </View>
    );
};

const stil = StyleSheet.create({
    ekran:{},
    tipke: {}
})

export default EkranIgre;