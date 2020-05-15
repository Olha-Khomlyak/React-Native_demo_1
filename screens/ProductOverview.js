import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


export default class ProductOverview extends Component {
  static navigationOptions = {
    title: "",
    headerStyle: {
      shadowOpacity: 0,
      backgroundColor: '#32A05F'
    },
    headerTintColor: '#000',
    headerLeft: (
      <Text style={{ color: '#fff', fontSize: 17, paddingLeft: 40 }}>☘️ greenery nyc</Text>
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#32A05F' ,justifyContent:"space-between"}}>
        <View style={{ paddingHorizontal: 40, paddingTop: 40 }}>
          <Text style={styles.h1}>Product</Text>
          <Text style={styles.h1}>overview</Text>
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                size={20}
                name='droplet'
                type='feather'
                color='#fff'
              />
              <Text style={styles.boxText}>water</Text>
            </View>
            <Text style={styles.text}>every 7 days</Text>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, paddingTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                size={20}
                name='dot-circle-o'
                type='font-awesome'
                color='#fff'
              />
              <Text style={styles.boxText}>Humidity</Text>
            </View>
            <Text style={styles.text}>up to 82%</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, paddingTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                size={20}
                name='ruler'
                type='entypo'
                color='#fff'
              />
              <Text style={styles.boxText}>Size</Text>
            </View>
            <Text style={styles.text}>38"-48" tall</Text>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <View style={styles.details}>
            <Icon
              size={20}
              name='plus'
              type='feather'
              color='#fff'
              containerStyle={{ paddingHorizontal: 50 }}
            />
            <Text style={{ color: "#fff", fontSize: 17, fontWeight: 'bold' }}>Delivery Information</Text>
          </View>
          <View style={styles.details}>
            <Icon
              size={20}
              name='plus'
              type='feather'
              color='#fff'
              containerStyle={{ paddingHorizontal: 50 }}
            />
            <Text style={{ color: "#fff", fontSize: 17, fontWeight: 'bold' }}>Return Policy</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between',alignItems:"center"}}>
          < Icon
            size={40}
            name='angle-down'
            type='font-awesome'
            color='#fff'
            containerStyle={{ paddingLeft: 40 }}
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <View style={{ flexDirection: 'row', backgroundColor: '#000', padding: 30, borderTopLeftRadius: 50 }}>
            <Icon
              size={20}
              name='shopping-cart'
              type='font-awesome'
              color='#fff'
            />
            <Text style={{ color: '#fff' }}> add to card</Text>
          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#fff"
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
    paddingLeft: 5
  },
  text: {
    color: "#fff",
    fontSize: 17,
  },
  details: {
    backgroundColor: '#279152',
    color: '#fff',
    fontWeight: 'bold',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
    paddingVertical: 15,
    width: "90%",
    flexDirection: "row",
    marginTop: 10
  },

})