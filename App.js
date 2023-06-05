import React from 'react';
import { View, StyleSheet } from 'react-native';
import Naslov from './components/Naslov';
import PocetniEkran from './screens/PocetniEkran';

export default function App() {
  return (
    <View style={stilovi.ekran}>
      <Naslov naslov={"PROMA"}/>
      <PocetniEkran />
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
