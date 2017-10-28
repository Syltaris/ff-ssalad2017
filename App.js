import React from 'react';
import ReactNative, { StyleSheet, Text, View, Alert, Image, TouchableHighlight  } from 'react-native';
import { Button, List, InputItem, WhiteSpace, ImagePicker } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import { createForm } from 'rc-form';
import {CameraKitCamera} from 'react-native-camera-kit';

const FRONT_COLOUR = "#FFE8D8";
const ACCENT_COLOUR = "#FFBAC0";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const LoginScreen =({ navigation }) => (
  <View flex={1} style={{alignItems: 'center', backgroundColor: FRONT_COLOUR}}>
    <Image source={require('./logo.png')} style={{width: 250, height: 250, marginTop: 100}} />
    <Text style={{fontSize: 50, fontFamily: 'sans-serif-condensed'}}>F*** F***</Text>
    <Text style={{fontSize: 50}}> </Text>

    <Button title="REGISTER" onClick={() => navigation.navigate('Register')}>REGISTER</Button>
  </View>
);

class RegistrationForm extends React.Component {
  openCamera() {
    return (
      <CameraKitCamera
        ref={cam => this.camera = cam}
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
        cameraOptions={{
          flashMode: 'auto',             // on/off/auto(default)
          focusMode: 'on',               // off/on(default)
          zoomMode: 'on',                // off/on(default)
          ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
          ratioOverlayColor: '#00000077' // optional
        }}
        onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
    />);
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <View >
        <WhiteSpace/>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight
            onPress={this.openCamera.bind(this)}
            style={{ width: 200, height: 200, borderRadius: 200,
              alignItems: 'center', justifyContent: 'center', backgroundColor: ACCENT_COLOUR }}>
            <Image
              style={{ width: '95%', height: '95%', borderRadius: 200 }}
              source={require('./res/img/profile_default.jpg')}/>
          </TouchableHighlight>
        </View>
        <WhiteSpace/>
        <List renderHeader={() => 'Your Profile'}>
          <InputItem
            clear
            placeholder="Jane Doe">
            Name
          </InputItem>
          <InputItem
            clear
            placeholder="23">
            Age
          </InputItem>
          <InputItem
            clear
            placeholder="F">
            Sex
          </InputItem>
          <InputItem
            clear
            placeholder="Shanghai">
            Location
          </InputItem>
        </List>
        <WhiteSpace/>
      </View>
    );
  }
}
const RegistrationFormWrapped = createForm()(RegistrationForm);
const RegisterScreen = ({ navigation }) => (
  <View flex={1} style={{backgroundColor: FRONT_COLOUR}}>
      <RegistrationFormWrapped />
      <Button title="SUBMIT" onClick={() => navigation.navigate('Home')}>SUBMIT</Button>
  </View>
);

const HomeScreen = ({ navigation }) => (
  <View style={{height: '100%'}}>
    <View flex={1}
      style={{backgroundColor: ACCENT_COLOUR, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('./res/img/logo.jpeg')}
        style={{ height: 45, width: 45}}></Image>
    </View>
    <View flex={12}><Text>OK</Text></View>
    <Button title="REGISTER" onClick={() => navigation.navigate('Login')}>BACK</Button>
  </View>
);

const submitProfile = () => {
  Alert.alert('Submitted profile!');
}

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: RegisterScreen,
    // navigationOptions: {
    //   headerRight: (<ReactNative.Button
    //     title="Done"
    //     onKeyPress={(submitProfile)}/>)
    // }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default RootNavigator;
