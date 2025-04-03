import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DurationExercise from './DurationExercise'; 
import RepetitionExercise from './RepetitionExercise'; 

const Stack = createStackNavigator();

const exercises = [
  { name: "Push-Ups", type: "Repetition", suggested: "Jump Rope" },
  { name: "Jump Rope", type: "Duration", suggested: "Pull-ups" },
  { name: "Pull-ups", type: "Repetition", suggested: "Biking" },
  { name: "Biking", type: "Duration", suggested: "Push-Ups" },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
        Exercises
      </Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ backgroundColor: '#7888BA', padding: 15, margin: 10, borderRadius: 25, alignItems: 'center' }}
            onPress={() =>
              navigation.navigate(
                item.type === "Repetition" ? "RepetitionExercise" : "DurationExercise",
                { exerciseName: item.name, suggestedExercise: item.suggested }
              )
            }
          >
            <Text style={{ color: "#FFF", fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7888BA',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});


