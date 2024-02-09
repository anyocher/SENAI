import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ana Clara Ortiz Ochner</Text>
      <p></p>
    
      <Text>Nascida em Mogi Guaçu, e atualmente morando em jaguariúna</Text>
      <p></p>
      
      <Text>Estudante de desenvolvimento de sistemas no Senai-Jaguariúna, e cursando o 3°ano do ensino médio</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.gifer.com/1lhZ.gif',
        }}
      />
      <StatusBar style="auto" />
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 166,
    height: 158,
  },
 
});