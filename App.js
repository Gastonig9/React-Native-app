import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from './assets/fonts/fonts'
import { useFonts } from 'expo-font'
import Home from './screens/Home/Home';

const App = () => {

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Cargando fuentes...</Text>
      </View>
    );
  }

  return (
    <View>
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginVertical: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default App;
