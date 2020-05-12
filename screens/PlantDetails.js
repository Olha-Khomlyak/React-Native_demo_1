import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function PlantDatails({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Plant Datails Screen</Text>
        <Button
          title="Go to Plant Datails"
          onPress={() => navigation.navigate('ProductOverview')}
        />
      </View>
    );
  }