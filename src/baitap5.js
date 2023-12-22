import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const img = () => {
  return (
    <Image
      style={{ flex: 1, width: undefined, height: undefined }}
      resizeMode="contain"
      source={{ uri: 'https://thpttranhungdao.edu.vn/wp-content/uploads/2022/11/Anh-Dep-Lam-Hinh-Nen.jpg' }}
      // source={require('./hinhanh.jpg')}
    />
  );
};

const text = () => {
  return (
    <Text style={{ textAlign: 'center', color: 'black' }}>
      Lưu Văn Tín {'\n'}
      21 Tuổi {'\n'}
      Lớp 20CT112
    </Text>
  );
};

const ClickButton = () => {
  console.log("Xin chào react native");
};

const button = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={ClickButton}>
      <Text style={styles.buttonText}>Hiển Thị</Text>
    </TouchableOpacity>
  );
};

const baitap5 = () => {
  return (
    <View style={styles.container}>
      {img()}
      {text()}
      {button()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:100,
    width: '100%',
    aspectRatio: 1,
  },
  button: {
    backgroundColor: 'aqua',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
});

export default baitap5;