import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';


export default class PlantDatails extends Component {
  static navigationOptions = {
    title: "",
    headerStyle: {
      shadowOpacity: 0,
    },
    headerTintColor: '#000'

  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <View style={styles.details}>
            <Text style={{ color: "#fff", fontSize: 17, fontWeight: 'bold' }}>Details</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
            <Image source={require('../assets/leaf.png')} style={{ height: 100, resizeMode: 'contain' }} />
            <Image source={require('../assets/dots.png')} style={{ height: 70, resizeMode: 'contain' }} />
          </View>
          <Text style={styles.header}>Plant Details</Text>
          <Text style={styles.text}>Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa.</Text>

          <View style={{ alignItems: 'flex-end', paddingTop: 40 }}>
            <Image source={require('../assets/pot.png')} style={{ height: 100, resizeMode: 'contain' }} />
            <Text style={styles.header}>Plant Details</Text>
          </View>
          <Text style={styles.text}>Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa.</Text>
        </View>
        <View style={{ justifyContent: 'center',alignSelf: 'center',height: 50, position: 'absolute', bottom: 10, }}>
          < Icon
            size={40}
            name='angle-down'
            type='font-awesome'
            color='#000'
            onPress={() => this.props.navigation.navigate('ProductOverview')}
          />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  details: {
    backgroundColor: '#32A05F',
    color: '#fff',
    fontWeight: 'bold',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
    paddingVertical: 15,
    width: 150
  },
  header: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 10,
    fontFamily: 'Georgia'
  },
  text: {
    fontSize: 17,
    paddingTop: 10,
    fontFamily: 'Georgia',
    color:'gray'

  }
})