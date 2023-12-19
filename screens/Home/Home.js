import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Productos from '../../components/Productos/Productos';
import { productos } from '../../constants/constants';

export default function Home({ navigation }) {
  return (
    <View>
      <Button title='Ver categorias' onPress={() => navigation.navigate("Categories")} />
      <Productos navigation={navigation} dataProductos={productos}/>
    </View>
  );
}

