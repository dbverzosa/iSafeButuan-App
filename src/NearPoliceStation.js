// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Button, Linking, Modal, TouchableWithoutFeedback } from 'react-native';
// import * as Location from 'expo-location';

// const policeStations = [
//   { name: 'Police Station 1', address: "Brgy. Urduja, A.D Curato St. ", latitude: 8.946990, longitude: 125.543130 },
//   { name: 'Police Station 2', address: "Langihan, Langihan Road", latitude: 8.958280, longitude: 125.534150 },
//   { name: 'Police Station 3', address: "Libertad, Capitol-Bonbon Road ", latitude: 8.940105, longitude: 125.524707 },
//   { name: 'Police Station 4', address: "Ampayon, Purok 3B", latitude: 8.94917000, longitude: 125.54361000 },
//   { name: 'Police Station 5', address: "San Mateo", latitude: 8.94917000, longitude: 125.54361000 }
// ];

// const NearPoliceStation = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [nearestStation, setNearestStation] = useState(null);
//   const [modalVisible, setModalVisible] = useState(true); // Set modalVisible to true initially

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
//       2;
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
//     <Modal animationType="slide" transparent={true} visible={modalVisible}>
//       <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//         <View style={styles.modalBackground}>
//           <TouchableWithoutFeedback>
//             <View style={styles.modalContent}>
//               <Text>Your Location:</Text>
//               {location ? (
//                 <Text>
//                   Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
//                 </Text>
//               ) : (
//                 <Text>{errorMsg || 'Loading...'}</Text>
//               )}
//               {nearestStation ? (
//                 <View style={styles.buttonContainer}>
//                   <Text style={styles.stationName}>Nearest Police Station: {nearestStation.name}</Text>
//                   <Text style={styles.stationAddress}>Address: {nearestStation.address}</Text>

//                   <Button
//   title='Open Map to View Route'
//   onPress={() =>
//     Linking.openURL(
//       `https://www.google.com/maps/dir/?api=1&origin=${location.coords.latitude},${location.coords.longitude}&destination=${nearestStation.latitude},${nearestStation.longitude}`
//     )
//   }
//   style={styles.openMapButton}
// />

//                   {/* <Button
//                     title='Open Map to View Route'
//                     onPress={() =>
//                       Linking.openURL(
//                         `https://www.google.com/maps/dir/?api=1&origin=${location.coords.latitude},${location.coords.longitude}&destination=${nearestStation.latitude},${nearestStation.longitude}`
//                       )
//                     }
//                     style={styles.openMapButton}
//                   /> */}
//                 </View>
//               ) : (
//                 <Text>Finding nearest police station...</Text>
//               )}


//               <Button title="Close" onPress={() => setModalVisible(false)} color="gray" style={styles.closeButton} />
//             </View>
//           </TouchableWithoutFeedback>
//         </View>
//       </TouchableWithoutFeedback>
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
//   buttonContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   openMapButton: {
//     marginBottom: 10,
//   },
//   closeButton: {
//     marginTop: 10,
//   },
//   stationName: {
//     marginBottom: 2,
//   },
//   stationAddress: {
//     marginBottom: 10,
//   },

// });

// export default NearPoliceStation;



import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Linking, Modal } from 'react-native';
import * as Location from 'expo-location';

const policeStations = [
  { name: 'Police Station 1', address: "Brgy. Urduja, A.D Curato St. ", latitude: 8.947267450070672, longitude: 125.54318039494116 },
  { name: 'Police Station 2', address: "Langihan, Langihan Road", latitude: 8.9585497462401, longitude: 125.53409939494121 },
  { name: 'Police Station 5', address: "San Mateo", latitude: 8.784988553682185, longitude: 125.56336840847509 },
  { name: 'Police Station 4', address: "Butuan City Police Station - 4", latitude: 8.957153451127628, longitude: 125.60556262377617 },
  { name: 'Police Station 3', address: "Libertad, Capitol-Bonbon Road ", latitude: 8.940454257853974, longitude: 125.52469632377606 }
];  

const NearPoliceStation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);
  const [modalVisible, setModalVisible] = useState(true); // Set modalVisible to true by default

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert to radians
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Convert to radians
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  
  const openMap = () => {
    if (nearestStation && location) {
      const destination = encodeURIComponent(nearestStation.address);
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${nearestStation.name}&travelmode=driving`;
      Linking.openURL(url);
    }
  };
  const findNearestStation = () => {
    if (location) {
      let minDistance = Number.MAX_VALUE;
      let nearest = null;
      for (const station of policeStations) {
        const distance = calculateDistance(
          location.coords.latitude,
          location.coords.longitude,
          station.latitude,
          station.longitude
        );
        if (distance < minDistance || (distance === minDistance && station.name === "Police Station 4")) {
          minDistance = distance;
          nearest = station;
        }
      }
      setNearestStation(nearest);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location) {
      findNearestStation();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>User Location:</Text>
            {location ? (
              <Text>
                Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
              </Text>
            ) : (
              <Text>{errorMsg || 'Loading...'} </Text>
            )}
            {nearestStation ? (
              <View>
                <Text>Nearest Police Station:</Text>
                <Text>{nearestStation.name}</Text>
                <Button title="Open Map" onPress={openMap} />
              </View>
            ) : (
              <Text>Finding nearest police station...</Text>
            )}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default NearPoliceStation;
