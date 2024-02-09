import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SENAI Segundo DES</Text>
      <StatusBar style="auto" />

      <Image style={StyleSheet.logo}>
      source={(
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fpt%2FYyOt&psig=AOvVaw3yA6TeAsNI5mtX87ZAD9Tb&ust=1707567488108000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPC1pt-enoQDFQAAAAAdAAAAABAE' 
      )}

<statusbar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
