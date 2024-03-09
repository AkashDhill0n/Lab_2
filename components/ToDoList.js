import React from 'react';
import { View, Text } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View>
      {/* Dynamically render each task as a list item */}
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
    </View>
  );
}

export default ToDoList;


