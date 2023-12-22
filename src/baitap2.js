import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const baitap2 = () => {
  const ClickButton = () => {
    console.log("Lưu Văn Tín, 20CT112, MSSV: 12001347");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={ClickButton}>
        <Text style={styles.buttonText}>Hiển Thị</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default baitap2;