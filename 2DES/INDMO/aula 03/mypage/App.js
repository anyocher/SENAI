import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <Image source={{uri: 'https://img-21.ccm2.net/thFzgToENagoR8q-HAQ1rXi6WiM=/674a4bcbfddc473fb325b64e094ede49/ccm-faq/1296080.jpg'}} style={styles.logo}/>
     <br></br>
     <Text style={styles.textoo}>Ana Clara Ortiz Ochner</Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Dados Pessoais:</Text>
     <br></br>
     <Text style={styles.textoDados}>16 anos</Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Formação Academica: </Text>
     <br></br>
     <Text style={styles.textoDados}>Estudante do ensino medio, 3°ano e tecnico de desenvolvimento de Sistemas</Text>
     <br></br>
     <br></br>



     <Text style={styles.contato}>Contato</Text>

     <Button title="Github" onPress={() => Linking.openURL('https://github.com/anyocher')}/>

      <StatusBar style="auto" />
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255) ',
    alignItems: 'center',
    letterSpacing: 5,
  },
  logo:{
    width: 150,
    height: 150,
  },
   textoo: {
      color: 'rgb(16,196,225)',
      fontSize: 50,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    subtexto: {
      color: 'rgb(100,19,237)',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    textoDados: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 5,
    },
    contato: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 5,
    }

});
