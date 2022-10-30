import React, { useState } from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import { StyleSheet , ScrollView, TouchableOpacity, Text, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const ButnSheet = ({ activas, noActivas, deleteTask, todas, todoList}) => {
    const [isVisible, setIsVisible] = useState(false);

    //#region 
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
    };
  
    const hideAlert2 = () => {
      setOculto2(true)
    };
    //#endregion
 
      
const list = [
  {
    title: 'Cancelar',
    containerStyle: { backgroundColor: '#E9967A' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
  {
    title: 'Todas',
    containerStyle: { backgroundColor: '#FFFFFF',borderWidth:0.5, borderColor:'#2376A2' },
    titleStyle: { color: '#5B3500',  },
    onPress: () => {todas()}
  },
  {
    title: 'Completadas',
    containerStyle: { backgroundColor: '#FFFFFF',borderWidth:0.5, borderColor:'#2376A2' },
    titleStyle: { color: '#5B3500',  },
    onPress: () => {activas()},
  },
  {
    title: 'No completadas',
    containerStyle: { backgroundColor: '#FFFFFF',borderWidth:0.5, borderColor:'#2376A2' },
    titleStyle: { color: '#5B3500',  },
    onPress: () => {noActivas()},
  },
  {
    containerStyle: { backgroundColor: '#CD5C5C',borderWidth:0.5, borderColor:'#2376A2' },
    title: 'Borrar completadas',
    titleStyle: { color: '#fff',  },
    onPress: () => {
      if(todoList.filter((item)=>!item.active).length === 0){
        showAlert2()
      }else{
        showAlert()
      }
      
    },
  }
];

  return (
    <ScrollView>
        <View style={{width:250}}>
            <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.button}>
                <Text style={{color:"#4D2D02"}} >Opciones </Text>
            </TouchableOpacity>
        </View>

        <AwesomeAlert
          show={oculto?false : true}
          //contentContainerStyle={{backgroundColor:'white'}} se puede modificar desde la carpetaraiz
          showProgress={false}
          title="Cuidado"
          message="¿Esta seguro de querer eliminar las tareas?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, regresar"
          confirmText="Borrar"
          confirmButtonTextStyle={{color:'#fff'}}
          confirmButtonColor="#CD5C5C"
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            deleteTask();
            hideAlert()
          }}
        />
        <AwesomeAlert
          show={oculto2?false : true}
          //contentContainerStyle={{backgroundColor:'white'}} se puede modificar desde la carpetaraiz
          showProgress={false}
          title="Ve mas despacio.."
          message="No hay listas completadas por eliminar"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          //showCancelButton={true}
          showConfirmButton={true}
          //cancelText="No, regresar"
          confirmText="Entendido"
          confirmButtonTextStyle={{color:'#633C00'}}
          confirmButtonColor="#A3C7D6"
          onConfirmPressed={() => {
            hideAlert2()
          }}
        />

        <BottomSheet modalProps={{}} isVisible={isVisible}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}
            >
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    button: {
      backgroundColor:'#A3C7D6',
      width:120,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      marginTop:20
    },
    });
    
export default ButnSheet