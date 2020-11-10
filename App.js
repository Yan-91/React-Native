import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const logar = () => {
    alert('${email} ${senha}');
  }
     fetch('',{
        method : 'POST',
        body :{
          email : email,
          senha : senha
        },
        headers : {
          'content-type' : 'application/json',
        }

     })
     .then(response => response.json())
     .then(data => alert(data))
  return (
    <View style={styles.container}>
      

      <Text>Email</Text>
      <TextInput
      style={{ height: 40, width : 200, borderColor: 'black', backgroundColor : "white", borderWidth: 1 }}
      onChangeText={text => setEmail
        (text)}
      value={email}
    />
    <Text>Senha</Text>
    <TextInput
      style={{ height: 40, width : 200, borderColor: 'black', backgroundColor : "white", borderWidth: 1 }}
      onChangeText={text => setSenha
        (text)}
      value={senha}
    />
    <Button
  onPress={logar}
  title="Logar"
  color="#841584"
  accessibilityLabel="Logar"
/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
