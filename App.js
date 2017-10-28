import React from 'react';
import { StyleSheet, Text, View, Alert, Image  } from 'react-native';
import { Button } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>HOMESCREN</Text>
    <Button title="REGISTER" onClick={() => navigation.navigate('Login')}>BACK</Button>
  </View>
);

const LoginScreen =({ navigation }) => (
  <View flex={1} style={{alignItems: 'center', backgroundColor: '#FFE8D8'}}>
    <Image source={require('./logo.png')} style={{width: 250, height: 250, marginTop: 100}} />
    <Text style={{fontSize: 50, fontFamily: 'sans-serif-condensed'}}>F*** F***</Text>
    <Text style={{fontSize: 50}}> </Text>

    <Button title="REGISTER" onClick={() => navigation.navigate('Home')}>REGISTER</Button>
  </View>
);

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
});

export default RootNavigator;
