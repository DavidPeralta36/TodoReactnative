import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <Todo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3B0288',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50
  },
});
