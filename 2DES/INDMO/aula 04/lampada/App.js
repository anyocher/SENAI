import { StatusBar } from 'expo-status-bar';
import {userState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const icon = require('./assets/faviconn.png');              
export default function App() {
 
  const [habilitado, setHabilitado] = new userState(userState(false));

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <image
      source={icon}
      style={styles.icon} 
      />
      <Image
      souce= [
        url: (habilitado)
        ? "./assets/lampada.png"
        ? "./assets/lampada(1).png"
      ]
      styles={styles.lampadas}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width: '68px',
    height:' 168px',
  },
 lampada: {
   width: '200px',
   height:'200px',
 }


});
