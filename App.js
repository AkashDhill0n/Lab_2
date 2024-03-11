import { StyleSheet, Text, View } from 'react-native';
import Form from './components/ToDoForm';
import TaskList from './components/ToDoList1';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState([]);



  const addTask = (task) =>{
    setTask((newTask) => { return [{ taskName: task, taskId: Math.random().toString() }, ...newTask] });
  }

  return (
    
    <View style={styles.container}>
      <Header/>
      <TaskList tasks={task} setTask={setTask}/>
      <Form addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

