import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextImput, FlatList, Image} from "react-native";
import {db} from "./firebaseconfig";
import { colletiion, addDoc, getDocs} from "firebase/firebase";

export default App(){
  const [nomePet, SetNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const adicionarPet= async () => {
  await addDoc(collection(db,"pets"),)
  }
}