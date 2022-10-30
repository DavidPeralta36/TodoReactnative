import React, { useRef,useState } from 'react'
import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,ScrollView, Animated  } from 'react-native';
import ButnSheet from './ButnSheet';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todo() {
  const [todoList, setTodoList] = useState([])
  const [todoBackup, setTodoBackup] = useState([]);

  const addTask = (task) => {
    setTodoList([
      {
        id: Date.now() + 1,
        task: task,
        active: true
      },
      ...todoList
    ]);
    setTodoBackup(todoList);
  }
  const toggleTask = (id) => {
    const newArr = [...todoList];
    const newTask = newArr.find((item)=> item.id === id);
    newTask.active = !newTask.active;
    setTodoList(newArr)
    setTodoBackup(todoList)
  }
  const deleteTask = () => {
    const newArr = [...todoList]
    setTodoList(newArr.filter((item)=>item.active))
    setTodoBackup(newArr.filter((item)=> item.active))
  }
  const activas = () => {
    const newArr = [...todoBackup]
    setTodoList(newArr.filter((item)=>!item.active))
  }
  const noActivas = () => {
    const newArr = [...todoBackup]
    setTodoList(newArr.filter((item)=>item.active))
  }
  const todas = () => {
    setTodoList(todoBackup)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Listas de tareas pendientes</Text>

        <View >
          <TodoInput todoList={todoList} addTask={addTask}/>
          <TodoList todoList = {todoList} toggleTask = {toggleTask}/>
        </View>

        <View style={styles.contadoresArea}>
          <Text style={styles.contadores} >Total tareas: {todoList.length}</Text>
          <Text style={styles.contadores} >Total de tareas completadas: {todoList.filter((item)=>!item.active).length}</Text>
          <Text style={styles.contadores} >Total de tareas por completar: {todoList.filter((item)=>item.active).length}</Text>
        </View>
        <ButnSheet todoList={todoList} 
          todoBackup={todoBackup} 
          noActivas={noActivas} 
          activas={activas}
          deleteTask={deleteTask}
          todas={todas} />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#3B0288',
    height:"100%",
    width:380
    },
    title:{
      color:"white",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom:20,
    },
    contadores:{
      color: "white"
    },
    contadoresArea:{
      marginLeft:-50
    },
    botnes:{
      marginLeft:-130
    },
    plantilla: {
      flex: 1,
      backgroundColor: '#113D8E',
      alignItems: 'center',
      justifyContent: 'center',
      height:250,
      width:250,
      margin:10,
      borderRadius:20,
      borderWidth:2,
      borderColor:"white",
    },
  });

export default Todo
