import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RepetitionExercise({ route, navigation }) {
  const { exerciseName, suggestedExercise } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exerciseName}</Text>
      <Text style={styles.count}>Reps: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.suggestedButton} 
        onPress={() => navigation.navigate('DurationExercise', { exerciseName: suggestedExercise })}
      >
        <Text style={styles.buttonText}>Try {suggestedExercise}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7888BA',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25, 
    alignItems: 'center',
    width: 200,
  },
  homeButton: {
    backgroundColor: '#F63C80',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: 200,
  },
  suggestedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: 200,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
