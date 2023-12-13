import React from 'react';
import { View } from 'react-native';
import Productos from '../../components/Productos/Productos';
import { productos } from '../../constants/constants';

export default function Home() {
  return (
    <View>
      <Productos dataProductos={productos} />
    </View>
  );
}

