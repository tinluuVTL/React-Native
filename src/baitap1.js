// Các Component Cơ Bản

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Bai1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Xin chào đây là react native</Text>
      {/* <Text style={styles.text}>Lưu văn Tín 20CT112</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Bai1;