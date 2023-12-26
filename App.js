import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { BasketContext } from './Context';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <BasketContext>
      <StatusBar style="auto" />
      <StackNavigator />
    </BasketContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});