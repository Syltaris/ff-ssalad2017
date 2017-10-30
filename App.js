import React from 'react';
import ReactNative, { StyleSheet, Text, View, Alert, Image,
  TouchableHighlight, Platform, ScrollView, ImagePickerIOS  } from 'react-native';
import { Button, List, InputItem, WhiteSpace, ImagePicker, Grid, ListView,
  Icon, Flex, Modal, Checkbox, Toast, Badge, Card } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';
import { createForm } from 'rc-form';
import CameraRollPicker from 'react-native-camera-roll-picker';

const FRONT_COLOUR = "#EFEFEF";
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
        icon: <Image source={require("./res/img/japanmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
      {
        text: <Text style={{float: 'center'}}>美式</Text>,
        icon: <Image source={require("./res/img/americanmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
      {
        text: <Text style={{float: 'center'}}>韩式</Text>,
        icon: <Image source={require("./res/img/koreanmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
    ]
  },  {
    header: '四季',
    data: [{
        text: <Text style={{float: 'center'}}>春</Text>,
        icon: <Image source={require("./res/img/springmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },{
          text: <Text style={{float: 'center'}}>夏</Text>,
          icon: <Image source={require("./res/img/summermakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },{
          text: <Text style={{float: 'center'}}>秋</Text>,
          icon: <Image source={require("./res/img/autumnmakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },{
          text: <Text style={{float: 'center'}}>冬</Text>,
          icon: <Image source={require("./res/img/wintermakeup.jpg")} style={{width: ICON_WIDTH, height: ICON_HEIGHT}} />
      },
    ]
  }, {
    header: '艺人仿妆',
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
    <Text style={{fontSize: 50, fontFamily: FONT_TO_USE}}>完美由你掌握</Text>
    <Text style={{fontSize: 50}}> </Text>

    <Button style={{width: 150,}}
      title="REGISTER" onClick={() => navigation.navigate('Register')}><Text style={{fontSize: 20}}>注册</Text></Button>
      <WhiteSpace size="lg"/>
    <Button style={{width: 150}}
      title="REGISTER" onClick={() => navigation.navigate('Register')}><Text style={{fontSize: 20}}>登录</Text></Button>

  </View>
);

class RegistrationForm extends React.Component {

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <View >
        <View style={{alignItems: 'center', margin: 40}}>
          <TouchableHighlight
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
            value="女"
            placeholder="性别？">
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

const BottomNav = ({ navigation }) => (
  <Flex
    style={{height: 40 ,width: '100%', backgroundColor: ACCENT_COLOUR}}>
    <Flex.Item flex={1}
        flexDirection='horizontal'
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
      <TouchableHighlight onPress={() => navigation.navigate('Guides')}>
        <Image
          source={require('./res/icons/guides.png')}
          style={{width:30, height: 30, margin: 5}}/>
      </TouchableHighlight>
    </Flex.Item>
    <Flex.Item flex={1}
        flexDirection='horizontal'
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
      <TouchableHighlight >
        <Image
          source={require('./res/icons/orders.png')}
          style={{width:30, height: 30, margin: 5}}/>
      </TouchableHighlight>
    </Flex.Item>
    <Flex.Item flex={1}
        flexDirection='horizontal'
        style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
      <TouchableHighlight onPress={() => navigation.navigate('Camera')}>
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
);

const HomeScreen = ({ navigation }) => (
  <View style={{height: '100%'}}>
    <View flex={12}>
      <ReactNative.ScrollView>
        <GenerateCategoryList navigation={navigation}/>
      </ReactNative.ScrollView>
    </View>
    <BottomNav navigation = {navigation}/>
  </View>
);


class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showShoppingCart: false
    }
  }

  toggleShoppingCart = () => {
    this.setState((prevState) => ({
      showShoppingCart: !prevState.showShoppingCart
    }));
  }

  render() {
    return (
    <View>
      <View >
        <ReactNative.ScrollView style={{height: 511}}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Image source={require("./res/img/koreanmakeup.jpg")}
          style={{width: 300, height: 300, borderRadius: Platform.OS == 'ios' ? 150 : 300}}/>
          </View>
          <View>
            <Text style={{fontSize: 60, fontFamily: FONT_TO_USE, marginLeft: 20}}>Ulzzang </Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontFamily: FONT_TO_USE, marginLeft: 20}}>使用产品：</Text>
            <Text style={{fontSize: 18, fontFamily: FONT_TO_USE, marginLeft: 22}}>
              1. FF fresh and flawless primer
            </Text>
            <Text style={{fontSize: 18, fontFamily: FONT_TO_USE, marginLeft: 22}}>
              2. FF spot concealer E03
            </Text>
            <Text style={{fontSize: 18, fontFamily: FONT_TO_USE, marginLeft: 22}}>
              3. FF crimson lip stain
            </Text>
          </View>
        </ReactNative.ScrollView>
      </View>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 20,
          color: ACCENT_COLOUR,
          marginLeft: 20,
          borderRadius: Platform.OS == 'ios' ? 2 : 5}}>
           评价: </Text>
        <Flex style={{marginLeft: 15}}>
          <View style={{height: 20, width: 20, margin: 5,
            borderRadius: Platform.OS == 'ios' ? 5: 5, backgroundColor: ACCENT_COLOUR}}></View>
          <View style={{height: 20, width: 20, margin: 5,
            borderRadius: Platform.OS == 'ios' ? 5: 5, backgroundColor: ACCENT_COLOUR}}></View>
          <View style={{height: 20, width: 20, margin: 5,
            borderRadius: Platform.OS == 'ios' ? 5: 5, backgroundColor: ACCENT_COLOUR}}></View>
          <View style={{height: 20, width: 20, margin: 5,
            borderRadius: Platform.OS == 'ios' ? 5: 5, backgroundColor: ACCENT_COLOUR}}></View>
          <View style={{height: 20, width: 20, margin: 5,
            borderRadius: Platform.OS == 'ios' ? 5: 5, backgroundColor: ACCENT_COLOUR}}></View>
          <Text style={{fontSize: 20}}>4.9</Text>
        </Flex>

      </View>
      <Flex style={{height: 40, width: '100%', backgroundColor: ACCENT_COLOUR}}>
        <Flex.Item flex={1.5}
            flexDirection='horizontal'
            style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
          <TouchableHighlight>
            <Image
              source={require('./res/icons/heart.png')}
              style={{width:30, height: 30, margin: 5}}/>
          </TouchableHighlight>
        </Flex.Item>
        <Flex.Item flex={5}
            flexDirection='horizontal'
            style={{height: 41, justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
          <TouchableHighlight>
            <Text style={{fontSize: 22, fontFamily: FONT_TO_USE}}>加入购物车</Text>
          </TouchableHighlight>
        </Flex.Item>
        <Flex.Item flex={5}
            flexDirection='horizontal'
            style={{height: 41, justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
          <TouchableHighlight onPress={this.toggleShoppingCart.bind(this)}>
            <Text style={{fontSize: 22, fontFamily: FONT_TO_USE}}>立即购买</Text>
          </TouchableHighlight>
        </Flex.Item>
      </Flex>
      <View style={{position: 'absolute'}}>
        <Modal
          popup
          animationType="slide-up"
          maskClosable={false}
          visible={this.state.showShoppingCart}>
          <List renderHeader={()=>'确认订单'}>
            <View style={{backgroundColor: "#EEEEEE", padding: 5}}>
              <Text style={{fontSize: 16, marginLeft: 10}}>收件人： 啊脸</Text>
              <Text style={{fontSize: 16, marginLeft: 10}}>上海市静安区</Text>
              <Text style={{fontSize: 16, marginLeft: 10}}>四行仓库创意科技园2楼</Text>
              <WhiteSpace />
              <Text style={{fontSize: 16, marginLeft: 10}}>订单将于星期三 2017年11月1日送到</Text>
            </View>
            <Text style={{marginLeft: 20, marginTop: 10, fontSize: 20, fontFamily: FONT_TO_USE}}>
              1: Ulzzang
            </Text>
            <Checkbox.CheckboxItem
              style={{width: '100%', padding: 5}}
              checked={true}>
                <Text style={{fontSize: 15, fontFamily: FONT_TO_USE}}>
                  1. FF fresh and flawless primer
                </Text>
                <Text style={{fontSize: 15, fontFamily: FONT_TO_USE}}>
                  2. FF spot concealer E03
                </Text>
                <Text style={{fontSize: 15, fontFamily: FONT_TO_USE}}>
                  3. FF crimson lip stain
                </Text>
                <Text style={{fontSize: 15, fontFamily: FONT_TO_USE, color: '#8E8E8E', marginTop: 5}}>
                  小计： 1积分
                </Text>
            </Checkbox.CheckboxItem>
            </List>
          <View>
            <Text style={{textAlign: 'right', marginRight: 5,
              fontSize: 18, fontFamily: FONT_TO_USE}}>总数: 1积分</Text>
          </View>
          <Flex>
            <Flex.Item>
              <Button onClick={this.toggleShoppingCart.bind(this)}
                style={{margin: 5}} title="取消"><Text style={{color: ACCENT_COLOUR}}>取消</Text></Button>
            </Flex.Item>
            <Flex.Item>
              <Button onClick={() => {
                this.toggleShoppingCart();
                this.props.navigation.navigate('Guides');
                Toast.loading("正在处理...", 1);
                setTimeout(() => Toast.success("支付成功！", 1), 1200);
              }}
                style={{margin: 5, backgroundColor: ACCENT_COLOUR}} title="确认">确认</Button>
            </Flex.Item>
          </Flex>
        </Modal>
      </View>
    </View>
  )}
}

const GenerateNewBadge = () => (
  (Platform.OS == 'ios' ?
    (<Badge text="新！"
      style={{
        marginLeft: 50,
        borderRadius: 2}}/>) :
    (<Badge text="新！"
      corner
      style={{marginLeft: 40,
        width: 50,
        height: 80,
        borderRadius: 2}}/>))
);

const GuidesScreen = ({ navigation }) => (
  <View>
    <List style={{height: 562}}>
      <Card style={{margin: 5}}>
      <List.Item>
        <Flex flexDirection="horizontal"
          justify="between">
          <Flex.Item flex={1}>
            <Image
              source={require('./res/img/koreanmakeup.jpg')}
              style={{width: 80, height: 80, borderRadius: Platform.OS == 'ios' ? 40 : 80 }} />
          </Flex.Item>
          <Flex.Item flex={2}>
            <TouchableHighlight>
              <View>
                <Text style={{fontSize: 18}}>Ulzzang 指导书</Text>
                <Text style={{fontSize: 15, color: "#8E8E8E"}}>首先，将化妆淡点在脸上，然后用手涂抹均匀...</Text>
              </View>
          </TouchableHighlight>
          </Flex.Item>
          <Flex.Item flex={1}>
            <GenerateNewBadge />
          </Flex.Item>
        </Flex>
      </List.Item>
      </Card>
      <Card style={{margin: 5}}>
      <List.Item>
        <Flex flexDirection="horizontal"
          justify="between">
          <Flex.Item flex={1}>
            <Image style={{width: 100}}
              source={require('./res/img/guides2.png')}
              style={{width: 80, height: 80, borderRadius: Platform.OS == 'ios' ? 40 : 80 }} />
          </Flex.Item>
          <Flex.Item flex={3}>
            <TouchableHighlight
              onPress={() => navigation.navigate('Guides002')}>
              <View>
                <Text style={{fontSize: 18}}>胆大运动造型 指导书</Text>
                <Text style={{fontSize: 15, color: "#8E8E8E"}}>使用扫描或拍摄动作在眉头上施加hirage色的眼影...</Text>
              </View>
          </TouchableHighlight>
          </Flex.Item>
        </Flex>
      </List.Item>
      </Card>
    </List>
    <BottomNav navigation={navigation} />
  </View>
)

const ScreenPDF_002 = ({ navigation }) => (
  <ScrollView >
    <Image resizeMode="contain"
      style={{width: 400, height: 700}}
      source={require('./res/guides/Artboard1.png')} />
    <Image resizeMode="contain"
      style={{width: 400, height: 700}}
      source={require('./res/guides/Artboard3.png')} />
    <Image resizeMode="contain"
      style={{width: 400, height: 700}}
      source={require('./res/guides/Artboard4.png')} />
    <Image resizeMode="contain"
      style={{width: 400, height: 700}}
      source={require('./res/guides/Artboard5.png')} />
  </ScrollView>
);

class CameraScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      images: [],
    };
  }

  getSelectedImages() {
    this.props.navigation.navigate('FacialAnalysis');
    Toast.loading('正在处理', 3);
  }

  render() {
    return (
      <View>
        <View style={{alignItems: 'center', margin: 20}}>
          <Text style={{fontSize: 30, margin: 10}}>请选择照片：</Text>
          <CameraRollPicker
            scrollRenderAheadDistance={50}
            initialListSize={1}
            pageSize={1}
            removeClippedSubviews={false}
            groupTypes='SavedPhotos'
            batchSize={50}
            maximum={2}
            selected={this.state.selected}
            assetType='Photos'
            imagesPerRow={1}
            imageMargin={5}
            callback={this.getSelectedImages.bind(this)} />
        </View>
      </View>
    );
  }
};

class FacialAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFake: true
    };
  }

  componentDidMount() {
    setTimeout( () => (this.setState((prevState) => ({
      showFake: false,
    }))), 3500);

    setTimeout(() => Toast.success('成功！'), 3700);
  }

  render() {
    return (
      <View style={{height: 1010}}>
          <View style={{backgroundColor: "#8E8E8E", borderWidth: 2}}>
            <Flex flex={1} flexDirection='horizontal' style={{width: '100%'}}>
              <Flex.Item flex={1}>
                <Image source={require('./res/img/fake.png')} style={{width:100, height: 100,
                  borderRadius: Platform.OS == 'ios' ? 50 : 100, margin: 5}}/>
              </Flex.Item>
              <Flex.Item flex={2}>
                <Text style={{fontSize: 20}}>啊脸, 23</Text>
                <WhiteSpace/>
                <Text style={{fontSize: 20}}>上海市静安区</Text>
                <Text style={{fontSize: 20}}>四行仓库创意科技园2楼</Text>
              </Flex.Item>
            </Flex>
          </View>
          <View flex={1} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, marginLeft:10}}>点击脸部部位获取分析:</Text>
            {this.state.showFake ? <Image source={require('./res/img/fake.png')} style={{width:350, height: 350,
               margin: 20}}/> : <Image source={require('./res/img/faker.png')} style={{width:350, height: 350,
               margin: 20}}/>}
          </View>
          <View flex={1}>
            <BottomNav navigation={this.props.navigation} />
          </View>
      </View>
    )
  }
};

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
      headerTitle: '风格',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
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
  },
  Guides: {
    screen: GuidesScreen,
    navigationOptions: {
      headerTitle: '指导书',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
    }
  },
  Guides002: {
    screen: ScreenPDF_002,
    navigationOptions: {
      headerTitle: '指导书 > 胆大运动造型',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
    }
  },
  FacialAnalysis: {
    screen: FacialAnalysis,
    navigationOptions: {
      headerTitle: '脸部识别',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
    }
  },
  Camera: {
    screen: CameraScanner,
    navigationOptions: {
      headerTitle: '脸部识别',
      headerTitleStyle: {fontFamily: FONT_TO_USE},
      headerStyle: {backgroundColor: ACCENT_COLOUR},
    }
  },
});

export default RootNavigator;
