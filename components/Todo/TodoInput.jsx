import React from 'react'
import { useState } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Icon } from '@rneui/themed';
import SweetAlert from 'react-native-sweet-alert';

const TodoInput = ({todoList ,addTask}) => {
    const [task, setTask] = useState("")

    
    const handleChange = (task) => {
        setTask(task)
        console.log(task)
      }
    
    const handleKey = (e) => {
          addTask(task)
          setTask("")
    }
    
  return (
    <>
      <View style={styles.contendor}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Nueva tarea..."
            placeholderTextColor="white"
            onChangeText={handleChange} value={task}
          />
        </View> 
        <TouchableOpacity style={styles.taskBtn} onPress={() => {handleKey()}} >
        <Icon
            onPress={() => {handleKey()}}
            name='check'
            type="font-awesome"
            size={15}
            reverse
            color= '#E013D1'
            />
        </TouchableOpacity>
      </View>
      
    </>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    contendor:{
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20
    },
    inputView: {
      backgroundColor: "#2C4AC1",
      borderRadius: 10,
      width: 210,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    TextInput: {
      height: 50,
      width:210,
      flex: 1,
      color:'white',
      padding: 10,
      marginLeft: 20,
      alignItems: "center",
    },
    taskBtn: {
      width: 50,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E013D1",
      marginLeft:10
    },
    loginText:{
      color:"white"
    },
  });


export default TodoInput