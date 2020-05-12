import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';


export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Green Home',
    };


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
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Image
                            source={require('../assets/fig-tree.png')}
                        />
                    </View>
                </View>
                <Button
                    title="Go to Plant Datails"
                    onPress={() => this.props.navigation.navigate('PlantDatails')}
                />
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
        borderBottomLeftRadius: 130,
        paddingLeft: 40
    },
    label: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: 40
    }
})
