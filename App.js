import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList'; // Import the ToDoList component

function App() {
  // Define state variable to store the list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View>
      {/* Pass the tasks array to the ToDoList component using the tasks prop */}
      <ToDoList tasks={tasks} />
    </View>
  );
}

export default App;

