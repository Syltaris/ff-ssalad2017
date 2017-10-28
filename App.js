import React from 'react';
import ReactNative, { StyleSheet, Text, View, Alert, Image, TouchableHighlight, Platform  } from 'react-native';
import { Button, List, InputItem, WhiteSpace, ImagePicker, Grid, ListView, Icon, Flex } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import { createForm } from 'rc-form';
import {CameraKitCamera} from 'react-native-camera-kit';

const FRONT_COLOUR = "#FFE8D8";
const ACCENT_COLOUR = "#DB2981";
const FONT_TO_USE = Platform.OS == 'ios' ? "Helvetica" : "sans-serif-condensed";
const LOGO_URI = './res/img/fflogo.png';

const ICON_HEIGHT = 90;
const ICON_WIDTH = 120;

const ICON_VIEW_HEIGHT = 110;
const ICON_VIEW_WIDTH = 120;


const mainMenu_headers = [{
  header: '运动',
  data: [{
      text: <Text style={{float: 'center'}}>沙滩</Text>,
      icon: <Image source={require("./res/img/beachmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
      text: <Text style={{float: 'center'}}>游泳</Text>,
      icon: <Image source={require("./res/img/swimmingmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
      text: <Text style={{float: 'center'}}>健身</Text>,
      icon: <Image source={require("./res/img/workoutmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
      text: <Text style={{float: 'center'}}>防水</Text>,
      icon: <Image source={require("./res/img/waterproofmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },
    ]
  }, {
    header: '异国',
    data: [{
        text: <Text style={{float: 'center'}}>日式</Text>,
        icon: <Image source={require("./res/img/JAPAN.png")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
      {
        text: <Text style={{float: 'center'}}>美式</Text>,
        icon: <Image source={require("./res/img/USA.png")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
      {
        text: <Text style={{float: 'center'}}>韩式</Text>,
        icon: <Image source={require("./res/img/KOREA.png")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
    ]
  },  {
    header: '四季',
    data: [{
        text: <Text style={{float: 'center'}}>春</Text>,
        icon: <Image source={require("./res/img/spring.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },{
          text: <Text style={{float: 'center'}}>夏</Text>,
          icon: <Image source={require("./res/img/summer.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },{
          text: <Text style={{float: 'center'}}>秋</Text>,
          icon: <Image source={require("./res/img/autumn.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },{
          text: <Text style={{float: 'center'}}>冬</Text>,
          icon: <Image source={require("./res/img/winter.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
    ]
  }, {
    header: '艺人方庄',
    data: [{
        text: <Text style={{float: 'center'}}>王霏霏</Text>,
        icon: <Image source={require("./res/img/wff.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>AngelaBaby</Text>,
        icon: <Image source={require("./res/img/abb.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>凯莉詹娜</Text>,
        icon: <Image source={require("./res/img/kj.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>泰勒·斯威夫特</Text>,
        icon: <Image source={require("./res/img/ts.jpeg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },]
  }, {
    header: '简单',
    data: [{
        text: <Text style={{float: 'center'}}>自然</Text>,
        icon: <Image source={require("./res/img/natural-makeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>快速化妆</Text>,
        icon: <Image source={require("./res/img/1minmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>校风妆</Text>,
        icon: <Image source={require("./res/img/backtoschool.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },]
  }, {
    header: '优雅',
    data: [{
        text: <Text style={{float: 'center'}}>梦幻</Text>,
        icon: <Image source={require("./res/img/dreamy.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>派对</Text>,
        icon: <Image source={require("./res/img/partymakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },]
  }, {
    header: '正式',
    data: [{
        text: <Text style={{float: 'center'}}>婚礼彩妆</Text>,
        icon: <Image source={require("./res/img/weddingmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>上班妆</Text>,
        icon: <Image source={require("./res/img/businessmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>面试妆</Text>,
        icon: <Image source={require("./res/img/interview-makeup-header.png")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>拍摄妆</Text>,
        icon: <Image source={require("./res/img/photoshootmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },]
  },{
    header: '特别节目',
    data: [{
        text: <Text style={{float: 'center'}}>情人节</Text>,
        icon: <Image source={require("./res/img/valentinesmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>圣诞节</Text>,
        icon: <Image source={require("./res/img/christmasmakeupasian.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },{
        text: <Text style={{float: 'center'}}>万圣节</Text>,
        icon: <Image source={require("./res/img/halloweenmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
    },]
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
        <View style={{alignItems: 'center', margin: 40}}>
          <TouchableHighlight
            onPress={this.openCamera.bind(this)}
            style={{ width: 250, height: 250 }}>
            <Image
              style={{ width: '95%', height: '95%',
              borderWidth:5,
              borderColor: ACCENT_COLOUR,
              borderRadius: Platform.OS == 'ios' ? 120 :  250 }}
              source={require('./res/img/profile_default.jpg')}/>
          </TouchableHighlight>
        </View>
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
      <Button title="SUBMIT" onClick={() => navigation.navigate('Home')}>提交</Button>
  </View>
);

const GenerateHorizontalList = (props) => {
  return props.data.map((category, i) => (
    <View
      key={Math.random().toString(36).substring(7)}
      style={{width: ICON_VIEW_WIDTH, height: ICON_VIEW_HEIGHT, alignItems: 'center'}}>
      <TouchableHighlight
        onPress={() => {props.navigation.navigate('Details')}}>
        {category.icon}
      </TouchableHighlight>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text key={Math.random().toString(36).substring(7)}>
          {category.text}
        </Text>
      </View>
    </View>
  ));
};

const GenerateCategoryList = (props) => {
  return mainMenu_headers.map((category) => (
    <View key={Math.random().toString(36).substring(7)}>
      <View key={Math.random().toString(36).substring(7)}>
        <Text key={Math.random().toString(36).substring(7)}
          style={{fontFamily:FONT_TO_USE, fontSize: 16, padding: 5}}>{category.header}</Text>
      </View>
      <View key={Math.random().toString(36).substring(7)}
        style={{backgroundColor: "#FEFEFE"}}>
        <ReactNative.ScrollView
          showsHorizontalScrollIndicator={false}
          key={Math.random().toString(36).substring(7)}
          horizontal={true}>
          <GenerateHorizontalList key={Math.random().toString(36).substring(7)}
            data={category.data}
            navigation={props.navigation}/>
        </ReactNative.ScrollView>
      </View>
    </View>
  ))
};

const HomeScreen = ({ navigation }) => (
  <View style={{height: '100%'}}>
    <View flex={12}>
      <ReactNative.ScrollView>
        <GenerateCategoryList navigation={navigation}/>
      </ReactNative.ScrollView>
    </View>
    <Flex
      style={{height: 40 ,width: '100%', backgroundColor: ACCENT_COLOUR}}>
      <Flex.Item flex={1}
          flexDirection='horizontal'
          style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
        <TouchableHighlight>
          <Image
            source={require('./res/icons/guides.png')}
            style={{width:30, height: 30, margin: 5}}/>
        </TouchableHighlight>
      </Flex.Item>
      <Flex.Item flex={1}
          flexDirection='horizontal'
          style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
        <TouchableHighlight>
          <Image
            source={require('./res/icons/orders.png')}
            style={{width:30, height: 30, margin: 5}}/>
        </TouchableHighlight>
      </Flex.Item>
      <Flex.Item flex={1}
          flexDirection='horizontal'
          style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
        <TouchableHighlight>
          <Image
            source={require('./res/icons/camera.png')}
            style={{width:30, height: 30, margin: 5}}/>
        </TouchableHighlight>
      </Flex.Item>
      <Flex.Item flex={1}
          flexDirection='horizontal'
          style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
        <TouchableHighlight onPress={() => navigation.navigate('Register')}>
          <Image
            source={require('./res/icons/profile.png')}
            style={{width:30, height: 30, margin: 5}}/>
        </TouchableHighlight>
      </Flex.Item>
    </Flex>
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
    navigationOptions: {
      headerTitle: '风格 > 韩国',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
    }
  }
});

export default RootNavigator;
