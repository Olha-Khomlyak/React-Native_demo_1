import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Home extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Text>Lets start</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main :{
        backgroundColor:'red',
        justifyContent:'center'
    }
})


export default Home;

