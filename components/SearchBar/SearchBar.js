import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';

export default function SearchBar({ dataProducts, setSearchedProducts, setError }) {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    const searchTerm = dataProducts.filter((p) =>
      p.titulo.toLowerCase().includes(term.toLowerCase())
    );

    if (searchTerm.length > 0) {
      setSearchedProducts(searchTerm);
      setError(false);
    } else {
      setSearchedProducts([]);
      setError(true);
    }
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={term}
        onChangeText={setTerm}
      />
      <Pressable onPress={handleSearch}>
        <Text style={styles.searchButton}>Buscar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#3FA7D6',
    color: 'white',
    borderRadius: 5,
  },
});
