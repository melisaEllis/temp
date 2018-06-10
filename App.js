
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Screen from "./app/components/Screen";
import Swiper from "./app/components/Swiper";
import Boiler from "./app/components/Boiler";


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
      title: "Boiler"
    }
  }
});

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