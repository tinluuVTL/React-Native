import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = (props) => {
  const { name, price } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Tên sản phẩm: {name}</Text>
      <Text style={styles.price}>Giá sản phẩm: {price}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <ProductCard name="Sản phẩm A" price="100.000đ" />
      <ProductCard name="Sản phẩm B" price="200.000đ" />
      <ProductCard name="Sản phẩm C" price="300.000đ" />
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center'

    },
    


  
  });
export default App;