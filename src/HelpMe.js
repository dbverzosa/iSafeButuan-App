// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import * as Location from 'expo-location';


// const HelpMe = ({ onConfirm }) => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
  
//     useEffect(() => {
//       const getUserLocation = async () => {
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           setErrorMsg('Permission to access location was denied');
//           return;
//         }
  
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//       };
  
//       getUserLocation();
//     }, []);
  
//     const handleConfirm = () => {
//       if (!location) {
//         Alert.alert('Location not available', 'Please wait for the location to be fetched.');
//         return;
//       }
  
//       onConfirm({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     };
  
//     return (
//       <View>
//         {errorMsg ? (
//           <Text style={styles.errorText}>{errorMsg}</Text>
//         ) : location ? (
//           <View>
//              <Text style={styles.locationText}>Your location coordinates:</Text>
//             <Text style={styles.locationText}>
//               Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
//             </Text>
//             <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
//               <Text style={styles.buttonText}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <Text>Loading location...</Text>
//         )}
//       </View>
//     );
//   };

  
// const styles = StyleSheet.create({
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   locationText: {
//     fontSize: 16,
//   },
//   confirmButton: {
//     backgroundColor: '#1565c0',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default HelpMe;





import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

const policeStations = [
  { name: 'Police Station 1', address: "Brgy. Urduja, A.D Curato St. ", latitude: 8.946990, longitude: 125.543130 },
  { name: 'Police Station 2', address: "Langihan, Langihan Road", latitude: 8.958280, longitude: 125.534150 },
  { name: 'Police Station 5', address: "San Mateo", latitude: 8.784988553682185, longitude: 125.56336840847509 },
  { name: 'Police Station 4', address: "Butuan City Police Station - 4", latitude: 8.957153451127628, longitude: 125.60556262377617 },
  { name: 'Police Station 3', address: "Libertad, Capitol-Bonbon Road ", latitude: 8.940454257853974, longitude: 125.52469632377606 }
];

const HelpMe = ({ onConfirm }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

    getUserLocation();
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 -
      Math.cos(dLat) / 2 +
      (Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        (1 - Math.cos(dLon))) /
      2;
    return R * 2 * Math.asin(Math.sqrt(a));
  };

  useEffect(() => {
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
        if (distance < minDistance) {
          minDistance = distance;
          nearest = station;
        }
      }
      setNearestStation(nearest);
    }
  }, [location]);

  const handleConfirm = () => {
    if (!location) {
      Alert.alert('Location not available', 'Please wait for the location to be fetched.');
      return;
    }
  
    onConfirm({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      nearestStation: nearestStation
    });
  };
  

  return (
    <View>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <View>
           <Text style={styles.locationText}>Your location coordinates:</Text>
          <Text style={styles.locationText}>
            Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
          </Text>
          {nearestStation ? (
            <View>
              <Text style={styles.locationText}>Nearest police station: {nearestStation.address}</Text>
             
            </View>
          ) : (
            <Text>Finding nearest police station...</Text>
          )}
          <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#1565c0',
    padding: 10,
    marginTop: 40,
    borderRadius: 5,
    marginBottom: 40,
  },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default HelpMe;
  
