import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");

  const buttonOne = () => {
    num1 = parseInt(textOne);
    num2 = parseInt(textTwo);
    res = num1 + num2
    Alert.alert("Result", res.toString());
  };

  const buttonTwo = () => {
    num1 = parseInt(textOne);
    num2 = parseInt(textTwo);
    res = num1 - num2;
    Alert.alert("Result", res.toString());
  };

  return (
    <View style={styles.container}>
      <Text>I can do addition and substraction</Text>
      <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={textOne => setTextOne(textOne)} value={textOne} keyboardType="numeric"/>
      <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={textTwo => setTextTwo(textTwo)} value={textTwo} keyboardType="numeric"/>
      <Button onPress={buttonOne} title="+" />
      <Button onPress={buttonTwo} title="-" />
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
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});


/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");

  const buttonOne = () => {
    const num1 = parseInt(textOne);
    const num2 = parseInt(textTwo);
    const result = num1 + num2;
    Alert.alert("Result", result.toString());
  };

  const buttonTwo = () => {
    const num1 = parseInt(textOne);
    const num2 = parseInt(textTwo);
    const result = num1 - num2;
    Alert.alert("Result", result.toString());
  };

  return (
    <View style={styles.container}>
      <Text>I can do addition and subtraction</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTextOne(text)}
        value={textOne}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setTextTwo(text)}
        value={textTwo}
        keyboardType="numeric"
      />
      <Button onPress={buttonOne} title="+" />
      <Button onPress={buttonTwo} title="-" />
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
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
*/