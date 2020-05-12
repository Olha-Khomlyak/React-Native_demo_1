
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

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      
          <Home/>

      </SafeAreaView>
    );
  }
}

export default App;