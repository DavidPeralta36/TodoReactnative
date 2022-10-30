import React, { useState } from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import { StyleSheet , ScrollView, TouchableOpacity, Text, View} from 'react-native';


const ButnSheet = ({ activas, noActivas, deleteTask, todas}) => {
    const [isVisible, setIsVisible] = useState(false);
 
      
const list = [
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
    containerStyle: { backgroundColor: '#FFFFFF',borderWidth:0.5, borderColor:'#2376A2' },
    title: 'Borrar completadas',
    titleStyle: { color: '#5B3500',  },
    onPress: () => {deleteTask()},
  },
  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  }
];
  return (
    <ScrollView>
        <View style={{width:250}}>
            <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.button}>
                <Text style={{color:"#4D2D02"}} >Opciones </Text>
            </TouchableOpacity>
        </View>
        
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
      backgroundColor:'#52BE80',
      width:120,
      height:40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      marginTop:20
    },
    });
    
export default ButnSheet