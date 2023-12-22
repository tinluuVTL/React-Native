import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
const TaskItem = ({task}) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/a.jpg')} style={styles.icon} />
      <Text style={[styles.taskName, completed && styles.completedTask]}>
        {task.name}
      </Text>
      <TouchableOpacity onPress={toggleCompleted}>
        {completed ? (
          <Image
            source={require('../assets/images/check2.jpg')}
            style={styles.checkmark}
          />
        ) : (
          <View style={styles.checkbox}/>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  taskName: {
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
  },
  checkmark: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default TaskItem;
