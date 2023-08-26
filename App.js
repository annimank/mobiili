import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [correctNumber, setCorrectNumber] = useState(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setCorrectNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(1);
  }, []);

  const button = () => {
    const guessInt = parseInt(guess);
    setAttempts(attempts + 1);

    if (guessInt === correctNumber) {
      Alert.alert(`Amazing! You guessed the correct number ${correctNumber} in ${attempts} attempts.`);
      console.log('correct')
    } else if (guessInt > correctNumber) {
      Alert.alert('Too big');
      console.log('big')
    } else {
      Alert.alert('Too smal');
      console.log('small')
    }
 
  };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.headerText}>Guessing game</Text>
        <Text>Guess a number between 1 and 100</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.input}
          onChangeText={guess => setGuess(guess)}
          value={guess}
          placeholder='Make a guess here'
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={button} title="Guess" />
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
  text: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
