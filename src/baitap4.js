import React from 'react';
import { View, FlatList, ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';

const Baitap4 = () => {
  const data = [...Array(100).keys()].map((_, index) => ({
    id: index,
    name: `Item ${index + 1}`,
  }));

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  itemContainer: {
    backgroundColor: '#b3d9ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

export default Baitap4;