
import React, { Component } from 'react';
import { StackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Linking
} from 'react-native';

import Screen from "./app/components/Screen";
import Swiper from "./app/components/Swiper";
import Boiler from "./app/components/Boiler";
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import HomeScreen from './HomeScreen'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'
import BLOG from './BLOG'
import SettingsScreen from './SettingsScreen'
import FAQ from './FAQ'

import {Container, Content, Header, Body, Icon} from 'native-base'


class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Screen navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Screen: {
    screen: Screen,
    navigationOptions: {
      title: "Screen"
    }
  },
  Swiper: {
    screen: Swiper,
    navigationOptions: {
      title: "Swiper"
    }
  },
  Boiler: {
    screen: Boiler,
    navigationOptions: {
      title: "HomeScreen"
    }
  }
});

const CustomDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{height: 150, backgroundColor: '#330066'}}>
      <Body>
        <Image source={require('./pblogo.png')}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const MyApp = createDrawerNavigator({

  Home: {
    screen: HomeScreen
  },
  AboutUs: {
    screen: AboutUs
  },
  Services:{
   screen: Services
  },
  ContactUs: {
    screen: ContactUs
  },
  BLOG: {
    screen: BLOG
  },
  Settings: {
    screen: SettingsScreen
  },
  FAQ: {
    screen: FAQ
  }
},{
  initialRouteName:'Home',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});