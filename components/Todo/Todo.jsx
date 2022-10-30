import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView  } from 'react-native';
import ButnSheet from './ButnSheet';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import AwesomeAlert from 'react-native-awesome-alerts';

function Todo() {
  const [todoList, setTodoList] = useState([])

  //#region alerta
  const [todoBackup, setTodoBackup] = useState([]);

  const [oculto, setOculto] = useState(false)
  const showAlert = () => {
    setOculto(false)
  };
  const hideAlert = () => {
    setOculto(true)
  };

//#endregion

  //#region funciones

  const addTask = (task) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now() + 1,
        task: task,
        active: true
      }
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
//#endregion

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>Listas de tareas pendientes</Text>

        <View >
          <TodoInput todoList={todoList} addTask={addTask}/>
          <TodoList todoList = {todoList} toggleTask = {toggleTask}/>
        </View>

        <View style={styles.contadoresArea}>
          <View style={styles.contador}>
            <Text style={styles.contadoresText} >Total tareas:</Text>
            <Text style={styles.contadoresNum1} >{todoList.length}</Text>
          </View>
          <View style={styles.contador}>
            <Text style={styles.contadoresText} >Total de tareas completadas:</Text>
            <Text style={styles.contadoresNum2} >{todoList.filter((item)=>!item.active).length}</Text>
          </View>
          <View style={styles.contador}>
            <Text style={styles.contadoresText} >Total de tareas por completar:</Text>
            <Text style={styles.contadoresNum3} >{todoList.filter((item)=>item.active).length}</Text>
          </View>
        </View>

        <ButnSheet todoList={todoList} 
          todoBackup={todoBackup} 
          noActivas={noActivas} 
          activas={activas}
          deleteTask={deleteTask}
          todas={todas} />

        <AwesomeAlert
          show={oculto?false : true}
          showProgress={false}
          title="Bienvenido"
          message="Agrega tus tareas pendientes"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Gracias"
          confirmButtonColor="#A3C7D6"
          onConfirmPressed={() => {
            hideAlert();
          }}
        /> 

      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#3F3B6C',
    height:"100%",
    width:380
    },
    contador: {
      alignItems: 'center',
      justifyContent: "flex-start",
      height:30,
      width:"100%",
      flexDirection:'row'
      },
    title:{
      color:"white",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom:20,
    },
    contadoresText:{
      color: "white",
      fontSize: 15,
    },
    contadoresNum1:{
      justifyContent:"flex-end",
      marginLeft:140,
      fontSize:25,
      color:"#fff"
    },
    contadoresNum2:{
      justifyContent:"flex-end",
      marginLeft:27,
      fontSize:25,
      color:"#fff"
    },
    contadoresNum3:{
      justifyContent:"flex-end",
      marginLeft:18,
      fontSize:25,
      color:"#fff"
    },
    contadoresArea:{
      marginLeft:-30
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
