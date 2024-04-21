// import React from 'react';
// import { View, Text, StyleSheet, Modal, Button } from 'react-native';

// const Hotlines = ({ visible, onClose }) => {
//   return (
//     <Modal animationType="slide" transparent={true} visible={visible}>
//       <View style={styles.modalBackground}>
//         <View style={styles.modalContent}>
         
//           <Text style={styles.title}>BFP:</Text>
//           <Text>TNT: 09317218876</Text>
//           <Text>TM: 09552148542</Text>
//           <Text>Landline: (085) 2250500, (085) 3428217</Text>
          
//           <Text style={styles.title}>Butuan CDRRMO:</Text>
//           <Text>Smart: 09217687287</Text>
//           <Text>Globe: 09561333998</Text>
//           <Text>Landline: (085) 8152607</Text>
//           <Text>Radio Frequency: 155.570 MHz</Text>
          
//           <Button title="Close" onPress={onClose} />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
// });

// export default Hotlines;

import React from 'react';
import { View, Text, StyleSheet, Modal, Button, Linking } from 'react-native';

const Hotlines = ({ visible, onClose }) => {
  const callNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const textNumber = (number) => {
    Linking.openURL(`sms:${number}`);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>BFP:</Text>
          <View style={styles.buttonContainer}>
            <Button title="Call TNT : 09317218876" onPress={() => callNumber('09317218876')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Text TNT : 09317218876" onPress={() => textNumber('09317218876')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Call TM : 09552148542" onPress={() => callNumber('09552148542')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Text TM : 09552148542" onPress={() => textNumber('09552148542')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Call Landline 1 : (085) 2250500" onPress={() => callNumber('(085) 2250500')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Call Landline 2 : (085) 3428217" onPress={() => callNumber('(085) 3428217')} style={styles.button} />
          </View>

          <Text style={styles.title}>Butuan CDRRMO:</Text>
          <View style={styles.buttonContainer}>
            <Button title="Call Smart : 09217687287" onPress={() => callNumber('09217687287')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Text Smart : 09217687287" onPress={() => textNumber('09217687287')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Call Globe : 09561333998" onPress={() => callNumber('09561333998')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Text Globe : 09561333998" onPress={() => textNumber('09561333998')} style={styles.button} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Call Landline : (085) 8152607" onPress={() => callNumber('(085) 8152607')} style={styles.button} />
          </View>
          <Text>RADIO FREQUENCY: 155.570 MHz</Text>

          <Button title="Close" onPress={onClose} color="gray"/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    marginVertical: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default Hotlines;




// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// import * as SMS from 'expo-sms';



// const Hotlines = () => {
//     const [number, setNumber] = useState('');
//     const [message, setMessage] = useState('');
  
//     const checkSMS = async () => {
//       const isAvailable = await SMS.isAvailableAsync();
//       if (isAvailable) {
//         alert('SMS is available on this device');
//       } else {
//         alert('SMS is not available on this device');
//       }
//     };
  
//     const sendSMS = async () => {
//       const { result } = await SMS.sendSMSAsync(
//         [number],
//         message
//       );
  
//       if (result === 'sent') {
//         alert('SMS sent successfully');
//       } else {
//         alert('Failed to send SMS');
//       }
//     };
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Expo SMS Demo</Text>
//         <Button title='Check SMS Availability' onPress={checkSMS} />
//         <TextInput
//           style={styles.input}
//           placeholder='Enter phone number'
//           value={number}
//           onChangeText={setNumber}
//           keyboardType='phone-pad'
//         />
//         <TextInput
//           style={[styles.input, { height: 100 }]}
//           placeholder='Enter message'
//           value={message}
//           onChangeText={setMessage}
//           multiline
//         />
//         <Button title='Send Message' onPress={sendSMS} />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       padding: 20,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//     },
//     input: {
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       padding: 10,
//       marginBottom: 20,
//       width: '100%',
//     },
//   });

// export default Hotlines;


////////sms check if sms is available
// // import React, { useState } from 'react';
// // import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// // import * as SMS from 'expo-sms';

// // const ExpoSMSDemo = () => {
// //   const [number, setNumber] = useState('');
// //   const [message, setMessage] = useState('');

// //   const checkSMS = async () => {
// //     const isAvailable = await SMS.isAvailableAsync();
// //     if (isAvailable) {
// //       alert('SMS is available on this device');
// //     } else {
// //       alert('SMS is not available on this device');
// //     }
// //   };

// //   const sendSMS = async () => {
// //     const { result } = await SMS.sendSMSAsync(
// //       [number],
// //       message
// //     );

// //     if (result === 'sent') {
// //       alert('SMS sent successfully');
// //     } else {
// //       alert('Failed to send SMS');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Expo SMS Demo</Text>
// //       <Button title='Check SMS Availability' onPress={checkSMS} />
// //       <TextInput
// //         style={styles.input}
// //         placeholder='Enter phone number'
// //         value={number}
// //         onChangeText={setNumber}
// //         keyboardType='phone-pad'
// //       />
// //       <TextInput
// //         style={[styles.input, { height: 100 }]}
// //         placeholder='Enter message'
// //         value={message}
// //         onChangeText={setMessage}
// //         multiline
// //       />
// //       <Button title='Send Message' onPress={sendSMS} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 5,
// //     padding: 10,
// //     marginBottom: 20,
// //     width: '100%',
// //   },
// // });

// // export default ExpoSMSDemo;

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Button, Linking } from 'react-native';
// import * as Location from 'expo-location';

// const Hotlines = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   const getUserLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       setErrorMsg('Permission to access location was denied');
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     setLocation(location);
//   };

//   useEffect(() => {
//     getUserLocation();
//   }, []);

//   const openMap = async () => {
//     if (location) {
//       const defaultLat = 8.946990;
//       const defaultLon = 125.543130;
//       const url = `https://www.google.com/maps/dir/?api=1&origin=${location.coords.latitude},${location.coords.longitude}&destination=${defaultLat},${defaultLon}`;
//       Linking.openURL(url);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>User Location:</Text>
//       {location ? (
//         <Button title='Open Map' onPress={openMap} />
//       ) : (
//         <Text>{errorMsg || 'Loading...'}</Text>
//       )}
//       <Button title='Get Location' onPress={getUserLocation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Hotlines;



// //get the current location of the user
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Button, Linking } from 'react-native';
// import * as Location from 'expo-location';

// const policeStations = [
//   { name: 'Police Station 1', latitude: 8.946990, longitude: 125.543130 },
//   { name: 'Police Station 2', latitude: 8.958280, longitude: 125.534150 },
//   { name: 'Police Station 3', latitude: 8.940105, longitude: 125.524707 },
//   { name: 'Police Station 4', latitude: 8.94917000, longitude:125.54361000 },
//   { name: 'Police Station 5', latitude: 8.94917000, longitude: 125.54361000 }
// ];

// const Hotlines = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [nearestStation, setNearestStation] = useState(null);

//   const getUserLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       setErrorMsg('Permission to access location was denied');
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     setLocation(location);
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a =
//       0.5 -
//       Math.cos(dLat) / 2 +
//       (Math.cos(lat1 * (Math.PI / 180)) *
//         Math.cos(lat2 * (Math.PI / 180)) *
//         (1 - Math.cos(dLon))) /
//         2;
//     return R * 2 * Math.asin(Math.sqrt(a));
//   };

//   const findNearestStation = () => {
//     if (location) {
//       let minDistance = Number.MAX_VALUE;
//       let nearest = null;
//       for (const station of policeStations) {
//         const distance = calculateDistance(
//           location.coords.latitude,
//           location.coords.longitude,
//           station.latitude,
//           station.longitude
//         );
//         if (distance < minDistance) {
//           minDistance = distance;
//           nearest = station;
//         }
//       }
//       setNearestStation(nearest);
//     }
//   };

//   useEffect(() => {
//     getUserLocation();
//   }, []);

//   useEffect(() => {
//     if (location) {
//       findNearestStation();
//     }
//   }, [location]);

//   return (
//     <View style={styles.container}>
//       <Text>User Location:</Text>
//       {location ? (
//         <Text>
//           Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
//         </Text>
//       ) : (
//         <Text>{errorMsg || 'Loading...'}</Text>
//       )}
//       {nearestStation ? (
//         <View>
//           <Text>Nearest Police Station:</Text>
//           <Text>{nearestStation.name}</Text>
//           <Button
//             title='Open Map'
//             onPress={() =>
//               Linking.openURL(
//                 `https://www.google.com/maps/dir/?api=1&origin=${location.coords.latitude},${location.coords.longitude}&destination=${nearestStation.latitude},${nearestStation.longitude}`
//               )
//             }
//           />
//         </View>
//       ) : (
//         <Text>Finding nearest police station...</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Hotlines;
