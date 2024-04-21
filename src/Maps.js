// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';


// const Maps = () => {
//   const [mapRegion, setMapRegion] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

  

//   const userLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       setErrorMsg('Permission to access location was denied');
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     setMapRegion({
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });
//     console.log(location.coords.latitude, location.coords.longitude);
//   };

//   useEffect(()=>{
//     userLocation();
//   }, []);

//   return (
//     <View style={styles.container}>
      
//         <MapView style={styles.map} region={mapRegion}>
//           <Marker coordinate={mapRegion} title="You are here" />
//         </MapView>
//         <Button title='Get Location' onPress={userLocation}/>

//         <Text>{errorMsg || 'Loading...'}</Text>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default Maps;


// import React, {useState, useEffect} from 'react';
// import MapView, {Marker} from 'react-native-maps';
// import { StyleSheet,Text, Dimensions, View } from 'react-native';
// import { useEffect, useState } from 'react';
// import * as Location from 'expo-location';


// export default function Maps() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });




import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Maps;
