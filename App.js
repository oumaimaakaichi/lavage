import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import OnBoardScreen from './Screens/Homme'
import OnBoardScreenL from './Screens/HommeInscr';
export default function App() {
  return (
    <View style={styles.container}>
    <OnBoardScreenL />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
