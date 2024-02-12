import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import MyStatusbar from './comps/MyStatusabar';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MainAppBar from './comps/mainAppBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Settings';
import { ThemeContext } from './context/ThemeContext';
import ThemeProvider from './context/ThemeProvider';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MyStatusbar backgroundColor='#666' barstyle='light-content' />
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              header: (props) =>
                <MainAppBar {...props} backgroundColor='#666' icon='cog' color='#fff' />
            }}
          >
            <Stack.Screen name="Home">
              {() =>
                <Home />
              }
            </Stack.Screen>
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
