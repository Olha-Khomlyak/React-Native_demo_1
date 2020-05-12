import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';


export default class HomeScreen extends Component {

    static navigationOptions = {
       title: "",
       headerStyle: {
        shadowOpacity: 0,
      },
    };

/* <Button
                    title="Go to Plant Datails"
                    onPress={() => this.props.navigation.navigate('PlantDatails')}
                /> */
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.plant}>
                    <Text style={styles.label}>Fiddle Leaf Fig</Text>
                    <Text style={styles.label}>Topiary</Text>
                    <Text style={{ paddingVertical: 10, color: 'gray' }}>10" Nursery Pot </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={{ color: '#32A05F', fontSize: 20, fontWeight: 'bold', paddingRight: 3 }}>$</Text>
                        <Text style={{ color: '#32A05F', fontSize: 30, fontWeight: 'bold' }}>85</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                        <Icon
                            size={20}
                            name='shopping-cart'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ backgroundColor: '#32A05F', borderRadius: 50, padding: 20 }}
                            onPress={() => this.props.navigation.navigate('PlantDatails')}
                        />
                        <Image
                            source={require('../assets/fig-tree.png')}
                        />
                    </View>
                </View>
                <Text style={{color:'#fff', fontWeight:'bold',paddingHorizontal:40, paddingTop:20}}> Planting</Text>
                <View style={{ flexDirection: 'row', paddingTop:10 ,paddingHorizontal:40, justifyContent:'space-between'}}>

                    <View style={{backgroundColor:'#279152',paddingTop:20,paddingBottom:30,  width:130, borderTopLeftRadius:25, borderTopRightRadius:25,bottom:0}}>
                        <View style={{ flexDirection: "row", alignItems: 'baseline',paddingLeft:25 }}>
                            <Text style={{fontSize:30, fontWeight:'bold', color:"#fff"}}>250 </Text>
                            <Text style={{color:'#fff'}}> ml</Text>
                        </View>
                        <Text style={{color:'#fff', paddingLeft:25}}> water</Text>
                    </View>

                    <View style={{backgroundColor:'#279152',paddingTop:20,paddingBottom:30,  width:130, borderTopLeftRadius:25, borderTopRightRadius:25,bottom:0}}>
                        <View style={{ flexDirection: "row", alignItems: 'baseline', paddingLeft:25}}>
                            <Text style={{fontSize:30, fontWeight:'bold', color:"#fff"}}>18 </Text>
                            <Text style={{color:'#fff'}}>˚C</Text>
                        </View>
                        <Text style={{color:'#fff', paddingLeft:25}}> Sunshine</Text>
                    </View>
                    
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#32A05F'
    },
    plant: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 100,
        paddingLeft: 40
    },
    label: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: 40
    }
})
