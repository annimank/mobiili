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
      <View style={styles.header}>
        <Text>I can do addition and substraction</Text>
      </View>
      <View style={styles.textInput}>
        <TextInput onChangeText={textOne => setTextOne(textOne)} value={textOne} placeholder="Enter number 1" keyboardType="numeric" />
        <TextInput onChangeText={textTwo => setTextTwo(textTwo)} value={textTwo} placeholder="Enter number 2" keyboardType="numeric" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={buttonOne} title="+" />
        <Button onPress={buttonTwo} title="-" />
      </View>
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
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 0,
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 4,
    alignItems: 'center',
    width: 220,
  },
  textInput: {
    width: 220,
    borderColor: 'gray',
    borderWidth: 4,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
});
