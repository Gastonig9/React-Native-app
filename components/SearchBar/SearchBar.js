import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleSearch } from '../../features/products/productSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const handleSearchPress = () => {
    dispatch(handleSearch(term))
    setTerm("")
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={term}
        onChangeText={setTerm}
      />
      <Pressable onPress={handleSearchPress}>
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
