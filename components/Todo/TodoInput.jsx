import React from 'react'
import { useState, } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import { Icon } from '@rneui/themed';
import AwesomeAlert from 'react-native-awesome-alerts';

const TodoInput = ({addTask}) => {
    const [task, setTask] = useState("")
    
    //#region alertas
    const [oculto, setOculto] = useState(true)
    const [oculto2, setOculto2] = useState(true)

    const showAlert = () => {
      setOculto(false)
    };
    const hideAlert = () => {
      setOculto(true)
    };

    const showAlert2 = () => {
      setOculto2(false)
      setTimeout(hideAlert2, 1000)
    };
    const hideAlert2 = () => {
      setOculto2(true)
    };
    //#endregion

    const handleChange = (task) => {
        setTask(task)
        console.log(task)
      }
    
    const handleKey = (e) => {
          addTask(task)
          setTask("")
          showAlert2()
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

        <TouchableOpacity style={styles.taskBtn} onPress={() => {(task.length === 0)?setOculto(!oculto):handleKey()}} >
          <Icon
            onPress={() => {(task.length === 0)?setOculto(!oculto):handleKey()}}
            name='check'
            type="font-awesome"
            size={15}
            reverse
            color= '#9F73AB'
            />
        </TouchableOpacity>

        <AwesomeAlert
          show={oculto?false : true}
          //contentContainerStyle={{backgroundColor:'white'}} se puede modificar desde la carpetaraiz
          showProgress={false}
          title="Oops..."
          message="Introduce una tarea"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          //showCancelButton={true}
          showConfirmButton={true}
          //cancelText="No, cancel"
          confirmText="Entendido"
          confirmButtonColor="#A3C7D6"
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
        <AwesomeAlert
          show={oculto2?false : true}
          //contentContainerStyle={{backgroundColor:'white'}}
          showProgress={false}
          title="Guardada"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
        />
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
      backgroundColor: "#624F82",
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
      backgroundColor: "#9F73AB",
      marginLeft:10
    },
    loginText:{
      color:"white"
    },
  });


export default TodoInput