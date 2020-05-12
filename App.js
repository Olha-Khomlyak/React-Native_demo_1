
import React, { Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './screens/Home';
import Navigator from './navigation/HomeStack'

class App extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}

export default App;