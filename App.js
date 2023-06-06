import React, { useState }from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Naslov from './components/Naslov';
import PocetniEkran from './screens/PocetniEkran';
import EkranIgre from './screens/EkranIgre';
import KrajIgre from './screens/KrajIgre';

export default function App() {
  const [brKorisnika, postaviBroj] = useState()
  const [brojRundi, postaviRunde] = useState(0)
  const [podaciUcitani, postaviPodatke] = useState(false)

  if(!podaciUcitani){
    return(
      <AppLoading
        startAsync={dohvatiFont}
        onFinish={() => postaviPodatke(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  const dohvatiFont = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
    })
  }

  const pocetakIgre = (broj) => {
    postaviBroj(broj)
  }

  const krajIgre = (runde) => {
    postaviRunde(runde)
  }

  const novaIgra = () => {
    postaviBroj(null)
    postaviRunde(0)
  }

  let sadrzaj = <PocetniEkran pocetak={pocetakIgre}/>

  if(brKorisnika && brojRundi <= 0){
    sadrzaj = <EkranIgre kraj={krajIgre} broj={brKorisnika} />
  } else if (brojRundi > 0) {
    sadrzaj = <KrajIgre nova={novaIgra} broj={brKorisnika} runde={brojRundi}/>
  }
  
  return (
    <View style={styles.ekran}>
      <Naslov naslov={"PROMA"}/>
      {sadrzaj}
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
