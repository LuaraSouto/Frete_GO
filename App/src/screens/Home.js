import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/authContext'
//import CustomButton from '../components/CustomButton';
import MapView from 'react-native-maps';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);
  // <Text style={styles.text}>Olá, {state.name}</Text>
  return (
    <View style={styles.container}>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
      <View style={styles.search}>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 30,
    margin: 40
  },
 
  search:{
    height: '40%',
  
  }
})

export default Home;