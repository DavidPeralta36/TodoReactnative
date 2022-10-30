import React, { useRef,useState } from 'react'
import { StyleSheet, Text, View,  } from 'react-native';
import { CheckBox } from '@rneui/themed';


const TodoList = ({todoList, toggleTask}) => {
  return (
    <View style={styles.container}>
          {
            todoList.map(({id, task, active}) => (
              <View key={id} style={styles.taskContainer} >
                <CheckBox
                  center
                  checked={!active}
                  onPress={() => toggleTask(id)}
                  containerStyle ={styles.checkbox}
                  uncheckedColor={'red'}
                  checkedColor={'#118997'}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <Text style={active? styles.tarea : styles.tarea2}>{task}</Text>
              </View>
            ))
          }
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    },
    tarea:{
      color:"#fff",
      marginLeft:-10,
    },
    tarea2:{
      color:"#47250C",
      marginLeft:-10,
      textDecorationLine:"line-through"
    },
    checkbox:{
      backgroundColor:"#C5A4EA",
      height:50,
      paddingTop:13
    },
    taskContainer:{
      flexDirection: "row",
      width: 255,
      height: 50,
      backgroundColor: "#C5A4EA",
      marginLeft:-5,
      borderRadius:10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom:10
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
      width: 35,
      borderRadius: 10,
      height: 35,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E013D1",
      marginLeft:10
    },
    loginText:{
      color:"white"
    },
  });


export default TodoList