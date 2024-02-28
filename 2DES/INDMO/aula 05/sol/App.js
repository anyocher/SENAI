import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch,ImageBackground, ScrollView } from 'react-native';

const  icon = require('./assets/icon.png');
const backgroundImage = require('./assets/funfo.gif');

export default function App() {
  
const [habilitado, setHabilitado] = new useState(false);

const habilitar = () => {
  setHabilitado(!habilitado);
}

  return (
    <ImageBackground source={backgroundImage} style={styles.funfo}>
    <View style={styles.container}>
      <Image
      source={icon}
      style={styles.icon}
      />
      <Switch
      value={habilitado}
      onValueChange={habilitar}
      />
      <Image
      source={{
        uri: (habilitado)
        ? "./assets/sun.png"
        : "./assets/moon.png"
      }}
      style={[styles.sol, {opacity: 0.8}]}
      />
      <Image
      source={{
       

      }}
      style={styles.pessoa}
      />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  funfo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor:'rgba(255, 255, 255, 0.5)', // Adicionando transparência ao contêiner
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width: '68px',
    height: '68px'
  },
  sol: {
    width: '80px',
    height: '80px'
  },
  pessoa: {
    width: '200px',
    height: '200px'
  }
});