import React from 'react';
import ReactNative, { StyleSheet, Text, View, Alert, Image, TouchableHighlight, Platform  } from 'react-native';
import { Button, List, InputItem, WhiteSpace, ImagePicker, Grid, ListView } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import { createForm } from 'rc-form';
import {CameraKitCamera} from 'react-native-camera-kit';

const FRONT_COLOUR = "#FFE8D8";
const ACCENT_COLOUR = "#DB2981";
const FONT_TO_USE = Platform.OS == 'ios' ? "Helvetica" : "sans-serif-condensed";
const LOGO_URI = './res/img/fflogo.png';

const mainMenu_headers = [{
  header: '运动',
  data: [{
      text: <Text style={{float: 'center'}}>沙滩</Text>,
      icon: <Image source={require("./res/img/JAPAN.png")} style={{width: 100, height: 75}} />
    },{
      text: <Text style={{float: 'center'}}>游泳</Text>,
      icon: <Image source={require("./res/img/JAPAN.png")} style={{width: 100, height: 75}} />
    },{
      text: <Text style={{float: 'center'}}>健身</Text>,
      icon: <Image source={require("./res/img/JAPAN.png")} style={{width: 100, height: 75}} />
    },{
      text: <Text style={{float: 'center'}}>防水</Text>,
      icon: <Image source={require("./res/img/JAPAN.png")} style={{width: 100, height: 75}} />
    },
    ]
  }, {
    header: '异国',
    data: [{
        text: <Text style={{float: 'center'}}>日式</Text>,
        icon: <Image source={require("./res/img/JAPAN.png")} style={{width: 100, height: 75}} />
      },
      {
        text: <Text style={{float: 'center'}}>美式</Text>,
        icon: <Image source={require("./res/img/USA.png")} style={{width: 100, height: 75}} />
      },
      {
        text: <Text style={{float: 'center'}}>韩式</Text>,
        icon: <Image source={require("./res/img/KOREA.png")} style={{width: 100, height: 75}} />
      },
    ]
  },  {
    header: '四季',
    data: [{
        text: <Text style={{float: 'center'}}>春</Text>,
        icon: <Image source={require("./res/img/spring.jpeg")} style={{width: 100, height: 75}} />
      },{
          text: <Text style={{float: 'center'}}>夏</Text>,
          icon: <Image source={require("./res/img/summer.jpeg")} style={{width: 100, height: 75}} />
      },{
          text: <Text style={{float: 'center'}}>秋</Text>,
          icon: <Image source={require("./res/img/autumn.jpeg")} style={{width: 100, height: 75}} />
      },{
          text: <Text style={{float: 'center'}}>冬</Text>,
          icon: <Image source={require("./res/img/winter.jpeg")} style={{width: 100, height: 75}} />
      },
    ]
  }, {
    header: '艺人方庄',
    data: [{
        text: <Text style={{float: 'center'}}>王霏霏</Text>,
        icon: <Image source={require("./res/img/wff.jpeg")} style={{width: 100, height: 75}} />
    },{
        text: <Text style={{float: 'center'}}>AngelaBaby</Text>,
        icon: <Image source={require("./res/img/abb.jpeg")} style={{width: 100, height: 75}} />
    },{
        text: <Text style={{float: 'center'}}>凯莉詹娜</Text>,
        icon: <Image source={require("./res/img/kj.jpeg")} style={{width: 100, height: 75}} />
    },{
        text: <Text style={{float: 'center'}}>泰勒·斯威夫特</Text>,
        icon: <Image source={require("./res/img/ts.jpeg")} style={{width: 100, height: 75}} />
    },]
  }, {
    header: '简单',
    data: []
  }, {
    header: '优雅',
    data: []
  }, {
    header: '正式',
    data: []
  },{
    header: '特别节目',
    data: []
  }
];

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
    <Image source={require('./res/img/fflogo.png')} style={{width: 130, height: 250, marginTop: 100}} />
    <Text style={{fontSize: 50, fontFamily: FONT_TO_USE}}>要化妆就要追求完美无瑕</Text>
    <Text style={{fontSize: 50}}> </Text>

    <Button title="REGISTER" onClick={() => navigation.navigate('Register')}>注册</Button>
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
            style={{ width: 200, height: 200, borderRadius: Platform.OS == 'ios' ? 94 :  200,
              alignItems: 'center', justifyContent: 'center', backgroundColor: ACCENT_COLOUR }}>
            <Image
              style={{ width: '95%', height: '95%', borderRadius: Platform.OS == 'ios' ? 92 :  200 }}
              source={require('./res/img/profile_default.jpg')}/>
          </TouchableHighlight>
        </View>
        <WhiteSpace/>
        <List renderHeader={() => '个人资料'}>
          <InputItem
            clear
            value="啊脸"
            placeholder="名字">
            姓名
          </InputItem>
          <InputItem
            clear
            value="23"
            placeholder="你几岁？">
            岁数
          </InputItem>
          <InputItem
            clear
            value="F"
            placeholder="F">
            性别
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

const GenerateCategoryList = () => {
  return mainMenu_headers.map((category) => (
    <View>
      <View>
        <Text style={{fontFamily:FONT_TO_USE, fontSize: 16, padding: 5}}>{category.header}</Text>
      </View>
      <View>
        <Grid data={category.data}
          isCarousel
          hasLine = 'false'
          columnNum='3'
          carouselMaxRow = '1'/>
      </View>
    </View>
  ))
};

const HomeScreen = ({ navigation }) => (
  <View style={{height: '100%'}}>
    <View flex={12}>
      <ReactNative.ScrollView>
        <GenerateCategoryList />
      </ReactNative.ScrollView>
    </View>
    <Button title="REGISTER" onClick={() => navigation.navigate('Login')}>BACK</Button>
  </View>
);

const DetailsScreen = ({ navigation }) => (
  <View>
    <Text>Details</Text>
  </View>
)

const submitProfile = () => {
  Alert.alert('Submitted profile!');
}

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: '风格',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
    }
  },
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


  Details: {
    screen: DetailsScreen,
  }

});

export default RootNavigator;
