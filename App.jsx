import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Coca-Cola 1', price: 10.99 },
    { id: '2', name: 'Hamburguer 2', price: 19.99 },
    { id: '3', name: 'Pizza 3', price: 8.99 },
    { id: '4', name: 'Pastel 4', price: 15.99 },
  ]);

  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R${item.price}</Text>
    </View>
  );

  const handleBuyButtonPress = () => {
    // Implementar o botão "comprar" pressione aqui
    alert('Botão comprar pressionado!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Minha Lista</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.buyButton}
        onPress={handleBuyButtonPress}
      >
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#333',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;