/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState("");

  const button = () => {
    guessInt= parseInt(guess);
    rand = Math.floor(Math.random() * 100) + 1;
    if (guessInt == rand) {
      Alert.alert("Amazinggg");
    } else if (guessInt > rand) {
      Alert.alert("Too bigg");
    } else {
      Alert.alert("Too smalll");
    }

  };

  return (
    <View style={styles.container}>
      <Text>Guessing game</Text>
      <Text>Guess a number between 1 and 100</Text>
      <TextInput style={styles.input} onChangeText={guess => setGuess(guess)} value={guess} keyboardType="numeric"/>
      <Button onPress={button} title="Make a guess" />
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
/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');

  const button = () => {
    const guessInt = parseInt(guess);
    const rand = Math.floor(Math.random() * 100) + 1;
    if (guessInt === rand) {
      Alert.alert('Amazinggg');
    } else if (guessInt > rand) {
      Alert.alert('Too bigg');
    } else {
      Alert.alert('Too smalll');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Guessing game</Text>
      <Text>Guess a number between 1 and 100</Text>
      <TextInput
        style={styles.input}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={button} title="Make a guess" />
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

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [correctNumber, setCorrectNumber] = useState(null);

  const button = () => {
    const guessInt = parseInt(guess);
    const rand = Math.floor(Math.random() * 100) + 1;
    setCorrectNumber(rand); // Save the correct number

    if (guessInt === rand) {
      Alert.alert('Amazinggg');
    } else if (guessInt > rand) {
      Alert.alert('Too bigg');
    } else {
      Alert.alert('Too smalll');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Guessing game</Text>
      <Text>Guess a number between 1 and 100</Text>
      <TextInput
        style={styles.input}
        onChangeText={guess => setGuess(guess)}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={button} title="Make a guess" />
      
      {/* Display the correct number when an incorrect guess is made */}
      {correctNumber !== null && (
        <Text>Correct number: {correctNumber}</Text>
      )}
      
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
