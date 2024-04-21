// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, FlatList } from 'react-native';
// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";
// import firestore from "@react-native-firebase/firestore";
// import HelpMe from './HelpMe';


// export default function Dashboard (){

//     const navigation = useNavigation();

//     const [incident, setIncident] = useState("");
//     const [location, setLocation] = useState("");
//     const [modalVisibleSubmit, setModalVisibleSubmit] = useState(false);
//     const [modalVisiblePast, setModalVisiblePast] = useState(false);
//     const [pastIncidents, setPastIncidents] = useState([]);
//     const [modalVisibleHelp, setModalVisibleHelp] = useState(false);

//     useEffect(() => {
//         const fetchPastIncidents = async () => {
//             try {
//                 const currentUser = auth().currentUser;
//                 if (!currentUser) {
//                     Alert.alert("Error", "User not authenticated.");
//                     return;
//                 }

//                 const query = firestore().collection("incidents").where("userId", "==", currentUser.uid);
//                 const snapshot = await query.get();

//                 const pastIncidentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 setPastIncidents(pastIncidentsData);
//             } catch (error) {
//                 console.error("Error fetching past incidents:", error);
//                 Alert.alert("Error", "Failed to fetch past incidents.");
//             }
//         };

//         fetchPastIncidents();
//     }, []);

//     const handleSubmit = async () => {
//         try {
//             const currentUser = auth().currentUser;
//             if (!currentUser) {
//                 Alert.alert("Error", "User not authenticated.");
//                 return;
//             }

//             await firestore().collection("incidents").add({
//                 userId: currentUser.uid,
//                 incident,
//                 location,
//                 timestamp: firestore.FieldValue.serverTimestamp()
//             });

//             Alert.alert("Success", "Incident details submitted successfully.");
//             setIncident("");
//             setLocation("");
//             setModalVisibleSubmit(false); // Close the modal after submitting
//         } catch (error) {
//             console.error("Error submitting incident details:", error);
//             Alert.alert("Error", "Failed to submit incident details.");
//         }
//     };

//     const handleLogout = async () =>{
//         try {
//             await auth().signOut();

//             //Resets the navigation stack to "Login" and remove the OTP-related screens
//             navigation.reset({
//                 index:0,
//                 routes: [{name: "Login"}],
//             });
            
//         } catch (error) {
//             console.log("There is an error during logout: ", error);
//         }
//     };

//     const handleConfirmHelp = async (locationData) => {
//         try {
//           const currentUser = auth().currentUser;
//           if (!currentUser) {
//             Alert.alert("Error", "User not authenticated.");
//             return;
//           }
      
//           await firestore().collection('emergencies').add({
//             userId: currentUser.uid,
//             latitude: locationData.latitude,
//             longitude: locationData.longitude,
//             status: false, // Default status value
//             timestamp: firestore.FieldValue.serverTimestamp(),
//           });
      
//           Alert.alert('Location submitted', 'Police is on the way.');
//         } catch (error) {
//           console.error('Error submitting location:', error);
//           Alert.alert('Error', 'Failed to submit location. Please try again.');
//         }
//       };
      

//     return (
//         <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
//             <Text
//                 style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,}}
//             >
//                 Welcome to the Dashboard
//             </Text>

//             <TouchableOpacity
//   onPress={() => setModalVisibleHelp(true)}
//   style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}
// >
//   <Text
//     style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
//   >
//     Help Me
//   </Text>
// </TouchableOpacity>

// <Modal
//   animationType="slide"
//   transparent={true}
//   visible={modalVisibleHelp}
//   onRequestClose={() => setModalVisibleHelp(false)}
// >
//   <View style={styles.modalContainer}>
//     <Text style={styles.heading}>Confirm you are in trouble</Text>
//     <HelpMe onConfirm={handleConfirmHelp} />
  
//     <TouchableOpacity onPress={() => setModalVisibleHelp(false)} style={styles.cancelButton}>
//       <Text style={styles.buttonText}>Close</Text>
//     </TouchableOpacity>
//   </View>
// </Modal>

//             <TouchableOpacity
//                 onPress={() => setModalVisibleSubmit(true)}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Submit Incident Details
//                 </Text>
//             </TouchableOpacity>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisibleSubmit}
//                 onRequestClose={() => setModalVisibleSubmit(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Submit Incident Details</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Incident"
//                         value={incident}
//                         onChangeText={setIncident}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Location"
//                         value={location}
//                         onChangeText={setLocation}
//                     />
//                     <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
//                         <Text style={styles.buttonText}>Submit</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => setModalVisibleSubmit(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>

//             <TouchableOpacity
//                 onPress={() => setModalVisiblePast(true)}
//                 style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}
//             >
//                 <Text
//                     style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
//                 >
//                     View Past Incidents
//                 </Text>
//             </TouchableOpacity>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisiblePast}
//                 onRequestClose={() => setModalVisiblePast(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Past Incidents</Text>
//                     <FlatList
//                         data={pastIncidents}
//                         keyExtractor={(item) => item.id}
//                         renderItem={({ item }) => (
//                             <View style={styles.incidentItem}>
//                                 <Text>{item.incident}</Text>
//                                 <Text>{item.location}</Text>
//                                 <Text>{item.timestamp && item.timestamp.toDate().toString()}</Text>
//                             </View>
//                         )}
//                     />
//                     <TouchableOpacity onPress={() => setModalVisiblePast(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Close</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>

//             <TouchableOpacity
//                 onPress={handleLogout}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Logout
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//         marginHorizontal: 20,
//         marginTop: 150,
//         marginBottom: 20,
//         padding: 20,
//         borderRadius: 10,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20
//     },
//     input: {
//         height: 40,
//         width: "100%",
//         borderColor: "#cccccc",
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 20
//     },
//     submitButton: {
//         backgroundColor: "#841584",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginBottom: 10
//     },
//     cancelButton: {
//         backgroundColor: "#cccccc",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginTop: 10
//     },
//     buttonText: {
//         color: "white",
//         fontSize: 18,
//         fontWeight: "bold"
//     },
//     incidentItem: {
//         marginBottom: 10,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: "#cccccc",
//         borderRadius: 5,
//         width: "100%"
//     }
// });
/////////-----------------------original--------------//////////////









// ////----------------------ORIGINAL WORKING ALREADY----------------///////////////
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, FlatList } from 'react-native';
// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";
// import firestore from "@react-native-firebase/firestore";
// import HelpMe from './HelpMe';


// export default function Dashboard (){

//     const navigation = useNavigation();

//     const [incident, setIncident] = useState("");
//     const [location, setLocation] = useState("");
//     const [modalVisibleSubmit, setModalVisibleSubmit] = useState(false);
//     const [modalVisiblePast, setModalVisiblePast] = useState(false);
//     const [pastIncidents, setPastIncidents] = useState([]);
//     const [modalVisibleHelp, setModalVisibleHelp] = useState(false);

//     useEffect(() => {
//         const fetchPastIncidents = async () => {
//             try {
//                 const currentUser = auth().currentUser;
//                 if (!currentUser) {
//                     Alert.alert("Error", "User not authenticated.");
//                     return;
//                 }

//                 const query = firestore().collection("incidents").where("userId", "==", currentUser.uid);
//                 const snapshot = await query.get();

//                 const pastIncidentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 setPastIncidents(pastIncidentsData);
//             } catch (error) {
//                 console.error("Error fetching past incidents:", error);
//                 Alert.alert("Error", "Failed to fetch past incidents.");
//             }
//         };

//         fetchPastIncidents();
//     }, []);

//     const handleSubmit = async () => {
//         try {
//             const currentUser = auth().currentUser;
//             if (!currentUser) {
//                 Alert.alert("Error", "User not authenticated.");
//                 return;
//             }

//             await firestore().collection("incidents").add({
//                 userId: currentUser.uid,
//                 incident,
//                 location,
//                 timestamp: firestore.FieldValue.serverTimestamp()
//             });

//             Alert.alert("Success", "Incident details submitted successfully.");
//             setIncident("");
//             setLocation("");
//             setModalVisibleSubmit(false); // Close the modal after submitting
//         } catch (error) {
//             console.error("Error submitting incident details:", error);
//             Alert.alert("Error", "Failed to submit incident details.");
//         }
//     };

//     const handleLogout = async () =>{
//         try {
//             await auth().signOut();

//             //Resets the navigation stack to "Login" and remove the OTP-related screens
//             navigation.reset({
//                 index:0,
//                 routes: [{name: "Login"}],
//             });
            
//         } catch (error) {
//             console.log("There is an error during logout: ", error);
//         }
//     };

//     const handleConfirmHelp = async (locationData) => {
//         try {
//           const currentUser = auth().currentUser;
//           if (!currentUser) {
//             Alert.alert("Error", "User not authenticated.");
//             return;
//           }
      
//           await firestore().collection('emergencies').add({
//             userId: currentUser.uid,
//             latitude: locationData.latitude,
//             longitude: locationData.longitude,
//             status: false, // Default status value
//             timestamp: firestore.FieldValue.serverTimestamp(),
//           });
      
//           Alert.alert('Location submitted', 'Police is on the way.');
//         } catch (error) {
//           console.error('Error submitting location:', error);
//           Alert.alert('Error', 'Failed to submit location. Please try again.');
//         }
//       };
      

//     return (
//         <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
//             <Text style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,}} >
//                 Welcome to the Dashboard
//             </Text>

//             <TouchableOpacity onPress={() => setModalVisibleHelp(true)} style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }} >
//                 <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }} >
//                     Help Me
//                 </Text>
//             </TouchableOpacity>

//             <Modal animationType="slide" transparent={true} visible={modalVisibleHelp} onRequestClose={() => setModalVisibleHelp(false)} >
//                     <View style={styles.modalContainer}>
//                         <Text style={styles.heading}>Confirm you are in trouble</Text>
//                         <HelpMe onConfirm={handleConfirmHelp} />
                    
//                         <TouchableOpacity onPress={() => setModalVisibleHelp(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//             </Modal>





//             <TouchableOpacity onPress={() => setModalVisibleSubmit(true)} style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"}} >
//                 <Text style={{color: "white", fontSize: 22, fontWeight: "bold",}} >
//                     Submit Incident Details
//                 </Text>
//             </TouchableOpacity>

//             <Modal animationType="slide" transparent={true} visible={modalVisibleSubmit} onRequestClose={() => setModalVisibleSubmit(false)}>
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Submit Incident Details</Text>
//                     <TextInput style={styles.input} placeholder="Incident" value={incident} onChangeText={setIncident} />
//                     <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
//                     <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
//                         <Text style={styles.buttonText}>Submit</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => setModalVisibleSubmit(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>





//             <TouchableOpacity onPress={() => setModalVisiblePast(true)}  style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}>
//                 <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }} >
//                     View Past Incidents
//                 </Text>
//             </TouchableOpacity>

//             <Modal animationType="slide" transparent={true} visible={modalVisiblePast} onRequestClose={() => setModalVisiblePast(false)}>
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Past Incidents</Text>
//                     <FlatList  data={pastIncidents} keyExtractor={(item) => item.id}
//                         renderItem={({ item }) => (
//                             <View style={styles.incidentItem}>
//                                 <Text>{item.incident}</Text>
//                                 <Text>{item.location}</Text>
//                                 <Text>{item.timestamp && item.timestamp.toDate().toString()}</Text>
//                             </View>
//                         )}
//                     />
//                     <TouchableOpacity onPress={() => setModalVisiblePast(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Close</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>

//             <TouchableOpacity onPress={handleLogout} style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"}}  >
//                 <Text style={{color: "white", fontSize: 22, fontWeight: "bold", }} >
//                     Logout
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//         marginHorizontal: 20,
//         marginTop: 150,
//         marginBottom: 20,
//         padding: 20,
//         borderRadius: 10,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20
//     },
//     input: {
//         height: 40,
//         width: "100%",
//         borderColor: "#cccccc",
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 20
//     },
//     submitButton: {
//         backgroundColor: "#841584",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginBottom: 10
//     },
//     cancelButton: {
//         backgroundColor: "#cccccc",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginTop: 10
//     },
//     buttonText: {
//         color: "white",
//         fontSize: 18,
//         fontWeight: "bold"
//     },
//     incidentItem: {
//         marginBottom: 10,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: "#cccccc",
//         borderRadius: 5,
//         width: "100%"
//     }
// });
// ////----------------------ORIGINAL WORKING ALREADY----------------///////////////








////----------------------Version 2----------------///////////////
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import HelpMe from './HelpMe';


// Mapping of barangays to police station numbers
const barangayToStation = {
    'Agao': 1, 'Datu Silongan': 1, 'Diego Silangan': 1, 'Humabon': 1, 'Leon Kilat': 1, 'Sikatuna': 1, 'Rajah Soliman': 1, 'Urduja': 1,
    'Dagohoy': 1, 'Golden Ribbon': 1, 'JP Rizal': 1, 'Lapu-Lapu': 1, 'Pangabugan': 1, 'New Society Village': 1, 'Baan Km3': 1, 'Baan Riverside': 1,
    'Banza': 1, 'Mahogany': 1, 'Maug': 1, 'Maon': 1, 'San Vicente': 1, 'Bit-os': 1, 'Villa kanangga': 1, 'Imadejas': 1, 'Tandang Sora': 1,
    'Mahay': 1, 'Buhangin': 1, 'San Ignacio': 1,
    'Holy Redeemer': 2, 'Limaha': 2, 'Agusan Pequeño': 2, 'Babag': 2, 'Bading': 2, 'Fort Poyohon': 2, 'Doongan': 2, 'Obrero': 2, 'Ong Yiu': 2, 'Pagatpatan': 2,
    'Ambago': 3, 'Bayanihan': 3, 'Lumbocan': 3, 'Bancasi': 3, 'Dumalagan': 3, 'Libertad': 3, 'Masao': 3, 'Pinamanculan': 3, 'Bonbon': 3, 'Kinamlutan': 3,
    'Ampayon': 4, 'Anticala': 4, 'Antongalon': 4, 'Aupagan': 4, 'Baobaoan': 4, 'Basag': 4, 'Bilay': 4, 'Bobon': 4, 'Bugsukan': 4, 'Cabcabon': 4, 'Camahayan': 4, 'De Oro': 4, 'Don Francisco': 4, 'Lemon': 4, 'Los Angeles': 4, 'Maguinda': 4, 'Maibu': 4, 'Pianing': 4, 'Pigdaulan': 4, 'Salvacion': 4, 'Sto. Niño': 4, 'Sumile': 4, 'Sumilihon': 4, 'Tagabaca': 4, 'Taguibo': 4, 'Taligaman': 4, 'Tiniwisan': 4,
    'Amparo': 5, 'Bitan-agan': 5, 'Dankias': 5, 'Florida': 5, 'Mandamo': 5, 'Manila de Bugabos': 5, 'MJ Santos': 5, 'Nongnong': 5, 'San Mateo': 5, 'Tungao': 5,
  };

  // Array of police stations
const policeStations = [
    { name: 'Police Station 1', address: "Brgy. Urduja, A.D Curato St. ", latitude: 8.946990, longitude: 125.543130 },
    { name: 'Police Station 2', address: "Langihan, Langihan Road", latitude: 8.958280, longitude: 125.534150 },
    { name: 'Police Station 5', address: "San Mateo", latitude: 8.784988553682185, longitude: 125.56336840847509 },
    { name: 'Police Station 4', address: "Butuan City Police Station - 4", latitude: 8.957153451127628, longitude: 125.60556262377617 },
    { name: 'Police Station 3', address: "Libertad, Capitol-Bonbon Road ", latitude: 8.940454257853974, longitude: 125.52469632377606 }
];


  
export default function Dashboard (){

    const navigation = useNavigation();

    const [incident, setIncident] = useState("");
    const [location, setLocation] = useState("");
    const [locationDetails, setLocationDetails] = useState("");
    const [selectedBarangay, setSelectedBarangay] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [status, setStatus] = useState('Pending');
    const [uniformed, setUniformed] = useState(false);
    const [acceptUniformed, setAcceptUniformed] = useState(false);
    const [plainClothes, setPlainClothes] = useState(false);
    const [acceptPlainClothes, setAcceptPlainClothes] = useState(false);
    const [timeResponse, setTimeResponse] = useState('');
    const [report, setReport] = useState(false);

    const [modalVisibleSubmit, setModalVisibleSubmit] = useState(false);
    const [modalVisiblePast, setModalVisiblePast] = useState(false);
    const [pastIncidents, setPastIncidents] = useState([]);
    const [modalVisibleHelp, setModalVisibleHelp] = useState(false);

  const barangays = Object.keys(barangayToStation);

  const handleSelectBarangay = (barangay) => {
    setSelectedBarangay(barangay);
    setShowDropdown(false);
  };


  useEffect(() => {
    const fetchPastIncidents = async () => {
        try {
            const currentUser = auth().currentUser;
            if (!currentUser) {
                Alert.alert("Error", "User not authenticated.");
                return;
            }

            const query = firestore().collection("incidents").where("userId", "==", currentUser.uid);
            const snapshot = await query.get();

            const pastIncidentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPastIncidents(pastIncidentsData);
        } catch (error) {
            console.error("Error fetching past incidents:", error);
            Alert.alert("Error", "Failed to fetch past incidents.");
        }
    };

    fetchPastIncidents();
}, []);



    const handleSubmit = async () => {


        try {
            const currentUser = auth().currentUser;
            if (!currentUser) {
                Alert.alert("Error", "User not authenticated.");
                return;
            }
            const stationNumber = barangayToStation[selectedBarangay];
            if (stationNumber) {
            await firestore().collection("incidents").add({
                userId: currentUser.uid,
                incident,
                locationDetails,
                location,
                status,
                uniformed,
                acceptUniformed,
                plainClothes,
                acceptPlainClothes,
                timeResponse,
                report,
                location: stationNumber.toString(),
                timestamp: firestore.FieldValue.serverTimestamp()
            });

            Alert.alert("Success", "Incident details submitted successfully.");
            setIncident("");
            setLocationDetails('');
            setLocation("");
            setSelectedBarangay('');
            setLocation('');
            setStatus(false);
            setAcceptUniformed(false);
            setUniformed(false);
            setPlainClothes(false);
            setAcceptPlainClothes(false);
            setTimeResponse(0);
            setReport(false);
            setModalVisibleSubmit(false); // Close the modal after submitting

            Alert.alert('Success', 'Incident submitted successfully.');
        } else {
          Alert.alert('Error', 'Please select a barangay.');
        }
        } catch (error) {
            console.error("Error submitting incident details:", error);
            Alert.alert("Error", "Failed to submit incident details.");
        }
    };

    const handleLogout = async () =>{
        try {
            await auth().signOut();

            //Resets the navigation stack to "Login" and remove the OTP-related screens
            navigation.reset({
                index:0,
                routes: [{name: "Home"}], ////------needed to change to home.js---////
            });
            
        } catch (error) {
            console.log("There is an error during logout: ", error);
        }
    };

    // const handleConfirmHelp = async (locationData) => {
    //     try {
    //       const currentUser = auth().currentUser;
    //       if (!currentUser) {
    //         Alert.alert("Error", "User not authenticated.");
    //         return;
    //       }
      
    //       await firestore().collection('emergencies').add({
    //         userId: currentUser.uid,
    //         latitude: locationData.latitude,
    //         longitude: locationData.longitude,
    //         status: false, // Default status value
    //         timestamp: firestore.FieldValue.serverTimestamp(),
    //       });
      
    //       Alert.alert('Location submitted', 'Police is on the way.');
    //     } catch (error) {
    //       console.error('Error submitting location:', error);
    //       Alert.alert('Error', 'Failed to submit location. Please try again.');
    //     }
    //   };

    const handleConfirmHelp = async (locationData) => {
        try {
            const currentUser = auth().currentUser;
            if (!currentUser) {
                Alert.alert("Error", "User not authenticated.");
                return;
            }

            const calculateDistance = (lat1, lon1, lat2, lon2) => {
                const R = 6371; // Radius of the earth in km
                const dLat = deg2rad(lat2 - lat1);  // deg2rad below
                const dLon = deg2rad(lon2 - lon1);
                const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2)
                    ;
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const d = R * c; // Distance in km
                return d;
            }
            
            const deg2rad = (deg) => {
                return deg * (Math.PI / 180)
            }
            

            // Find the nearest police station
            let minDistance = Number.MAX_VALUE;
            let nearestStation = null;
            for (const station of policeStations) {
                const distance = calculateDistance(
                    locationData.latitude,
                    locationData.longitude,
                    station.latitude,
                    station.longitude
                );
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestStation = station;
                }
            }

            // Store the emergency and the nearest police station
            await firestore().collection('emergencies').add({
                userId: currentUser.uid,
                latitude: locationData.latitude,
                longitude: locationData.longitude,
                status: false, // Default status value
                nearestPoliceStation: nearestStation,
                timestamp: firestore.FieldValue.serverTimestamp(),
            });

            Alert.alert('Location submitted', 'Police is on the way.');
        } catch (error) {
            console.error('Error submitting location:', error);
            Alert.alert('Error', 'Failed to submit location. Please try again.');
        }
    };


    return (
        <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
            <Text style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150, textAlign: "center"}} >
                Dashboard
            </Text>
            <View  style={{ marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => setModalVisibleHelp(true)} style={{ backgroundColor: "#1565c0", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }} >
                    <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }} >
                        Help Me
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisibleHelp} onRequestClose={() => setModalVisibleHelp(false)} >
                    <View style={styles.modalContainer}>
                        <Text style={styles.headingConfirm}>Confirm you are in trouble</Text>
                        <HelpMe onConfirm={handleConfirmHelp} />
                    
                        <TouchableOpacity onPress={() => setModalVisibleHelp(false)} style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
            <View  style={{ marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => setModalVisibleSubmit(true)} style={{backgroundColor: "#1565c0", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"}} >
                    <Text style={{color: "white", fontSize: 22, fontWeight: "bold",}} >
                        Submit Incident Details
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisibleSubmit} onRequestClose={() => setModalVisibleSubmit(false)}>
                <View style={styles.modalContainer}>
                    <Text style={styles.heading}>Submit Incident Details</Text>
                    <TextInput style={styles.input} placeholder="Incident" value={incident} onChangeText={setIncident} />
                    <TextInput style={styles.input} placeholder="Specific Location / Landmark " value={locationDetails} onChangeText={setLocationDetails} />

                    <View style={styles.dropdownContainer}>
                        <Text style={styles.label}>Select Barangay where Incident Happens:</Text>
                        <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)} style={styles.dropdown}>
                        <Text>{selectedBarangay || 'Select a barangay'}</Text>
                        <Text>▼</Text>
                        </TouchableOpacity>
                        {showDropdown && (
                        <FlatList
                        data={barangays.sort()}
                            renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelectBarangay(item)}>
                                <Text style={styles.barangayItem}>{item}</Text>
                            </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item}
                            style={styles.dropdownList}
                        />
                        )}
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisibleSubmit(false)} style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View  style={{ marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => setModalVisiblePast(true)}  style={{ backgroundColor: "#1565c0", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }} >
                        History Reports
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisiblePast} onRequestClose={() => setModalVisiblePast(false)}>
                <View style={styles.modalContainer}>
                    <Text style={styles.heading}>History Reports</Text>
                    <FlatList  data={pastIncidents} keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.incidentItem}>
                                <Text>Incident : {item.incident}</Text>
                                <Text>Details : {item.locationDetails}</Text>
                                <Text>Status : {item.status}</Text>
                                <Text>Date : {item.timestamp && item.timestamp.toDate().toString()}</Text>
                            </View>
                        )}
                    />
                    <TouchableOpacity onPress={() => setModalVisiblePast(false)} style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View  style={{ marginHorizontal: 20 }}>
                <TouchableOpacity onPress={handleLogout} style={{backgroundColor: "#1565c0", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"}}  >
                    <Text style={{color: "white", fontSize: 22, fontWeight: "bold", }} >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
        marginTop: 100,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    headingConfirm: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "red",
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "#cccccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    submitButton: {
        backgroundColor: "#1565c0",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10
    },
    cancelButton: {
        backgroundColor: "#cccccc",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    incidentItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 5,
        width: "100%"
    },
    
  dropdownContainer: {
    width: '100%',
    marginBottom: 20,
  },
  barangayItem: {
    marginVertical: 5,
    fontSize: 16,
  },
  label: {
    marginBottom: 5,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdownList: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    maxHeight: 150,
    width: '100%',
  },
});
////----------------------VERSION 2----------------///////////////



















































    // const handleConfirmHelp = async (locationData) => {
    //     try {
    //       const currentUser = auth().currentUser;
    //       if (!currentUser) {
    //         Alert.alert("Error", "User not authenticated.");
    //         return;
    //       }
      
    //       await firestore().collection('emergencies').add({
    //         userId: currentUser.uid,
    //         latitude: locationData.latitude,
    //         longitude: locationData.longitude,
    //         timestamp: firestore.FieldValue.serverTimestamp(),
    //       });
      
    //       Alert.alert('Location submitted', 'Police is on the way.');
    //     } catch (error) {
    //       console.error('Error submitting location:', error);
    //       Alert.alert('Error', 'Failed to submit location. Please try again.');
    //     }
    //   };



// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, FlatList } from 'react-native';
// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";
// import firestore from "@react-native-firebase/firestore";

// export default function Dashboard (){

//     const navigation = useNavigation();

//     const [incident, setIncident] = useState("");
//     const [location, setLocation] = useState("");
//     const [modalVisible, setModalVisible] = useState(false);
//     const [pastIncidents, setPastIncidents] = useState([]);

//     useEffect(() => {
//         const fetchPastIncidents = async () => {
//             try {
//                 const currentUser = auth().currentUser;
//                 if (!currentUser) {
//                     Alert.alert("Error", "User not authenticated.");
//                     return;
//                 }

//                 const query = firestore().collection("incidents").where("userId", "==", currentUser.uid);
//                 const snapshot = await query.get();

//                 const pastIncidentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 setPastIncidents(pastIncidentsData);
//             } catch (error) {
//                 console.error("Error fetching past incidents:", error);
//                 Alert.alert("Error", "Failed to fetch past incidents.");
//             }
//         };

//         fetchPastIncidents();
//     }, []);

//     const handleSubmit = async () => {
//         try {
//             const currentUser = auth().currentUser;
//             if (!currentUser) {
//                 Alert.alert("Error", "User not authenticated.");
//                 return;
//             }

//             await firestore().collection("incidents").add({
//                 userId: currentUser.uid,
//                 incident,
//                 location,
//                 timestamp: firestore.FieldValue.serverTimestamp()
//             });

//             Alert.alert("Success", "Incident details submitted successfully.");
//             setIncident("");
//             setLocation("");
//             setModalVisible(false); // Close the modal after submitting
//         } catch (error) {
//             console.error("Error submitting incident details:", error);
//             Alert.alert("Error", "Failed to submit incident details.");
//         }
//     };

//     const handleLogout = async () =>{
//         try {
//             await auth().signOut();

//             //Resets the navigation stack to "Login" and remove the OTP-related screens
//             navigation.reset({
//                 index:0,
//                 routes: [{name: "Login"}],
//             });
            
//         } catch (error) {
//             console.log("There is an error during logout: ", error);
//         }
//     };

//     return (
//         <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
//             <Text
//                 style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,}}
//             >
//                 Welcome to the Dashboard
//             </Text>

//             <TouchableOpacity
//                 onPress={() => setModalVisible(true)}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Submit Incident Details
//                 </Text>
//             </TouchableOpacity>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Submit Incident Details</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Incident"
//                         value={incident}
//                         onChangeText={setIncident}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Location"
//                         value={location}
//                         onChangeText={setLocation}
//                     />
//                     <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
//                         <Text style={styles.buttonText}>Submit</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>

//             <TouchableOpacity
//                 onPress={handleLogout}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Logout
//                 </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 onPress={() => setModalVisible(true)}
//                 style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}
//             >
//                 <Text
//                     style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
//                 >
//                     View Past Incidents
//                 </Text>
//             </TouchableOpacity>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Past Incidents</Text>
//                     <FlatList
//                         data={pastIncidents}
//                         keyExtractor={(item) => item.id}
//                         renderItem={({ item }) => (
//                             <View style={styles.incidentItem}>
//                                 <Text>{item.incident}</Text>
//                                 <Text>{item.location}</Text>
//                                 <Text>{item.timestamp && item.timestamp.toDate().toString()}</Text>
//                             </View>
//                         )}
//                     />
//                     <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Close</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//         marginHorizontal: 20,
//         marginTop: 150,
//         marginBottom: 20,
//         padding: 20,
//         borderRadius: 10,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20
//     },
//     input: {
//         height: 40,
//         width: "100%",
//         borderColor: "#cccccc",
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 20
//     },
//     submitButton: {
//         backgroundColor: "#841584",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginBottom: 10
//     },
//     cancelButton: {
//         backgroundColor: "#cccccc",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginTop: 10
//     },
//     buttonText: {
//         color: "white",
//         fontSize: 18,
//         fontWeight: "bold"
//     },
//     incidentItem: {
//         marginBottom: 10,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: "#cccccc",
//         borderRadius: 5,
//         width: "100%"
//     }
// });


////------------v2
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal } from 'react-native';
// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";
// import firestore from "@react-native-firebase/firestore";

// export default function Dashboard (){

//     const navigation = useNavigation();

//     const [incident, setIncident] = useState("");
//     const [location, setLocation] = useState("");
//     const [modalVisible, setModalVisible] = useState(false);

//     const handleSubmit = async () => {
//         try {
//             const currentUser = auth().currentUser;
//             if (!currentUser) {
//                 Alert.alert("Error", "User not authenticated.");
//                 return;
//             }

//             await firestore().collection("incidents").add({
//                 userId: currentUser.uid,
//                 incident,
//                 location,
//                 timestamp: firestore.FieldValue.serverTimestamp()
//             });

//             Alert.alert("Success", "Incident details submitted successfully.");
//             setIncident("");
//             setLocation("");
//             setModalVisible(false); // Close the modal after submitting
//         } catch (error) {
//             console.error("Error submitting incident details:", error);
//             Alert.alert("Error", "Failed to submit incident details.");
//         }
//     };

//     const handleLogout = async () =>{
//         try {
//             await auth().signOut();

//             //Resets the navigation stack to "Login" and remove the OTP-related screens
//             navigation.reset({
//                 index:0,
//                 routes: [{name: "Login"}],
//             });
            
//         } catch (error) {
//             console.log("There is an error during logout: ", error);
//         }
//     };

//     return (
//         <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
//             <Text
//                 style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,}}
//             >
//                 Welcome to the Dashboard
//             </Text>

//             <TouchableOpacity
//                 onPress={() => setModalVisible(true)}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Submit Incident Details
//                 </Text>
//             </TouchableOpacity>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <Text style={styles.heading}>Submit Incident Details</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Incident"
//                         value={incident}
//                         onChangeText={setIncident}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Location"
//                         value={location}
//                         onChangeText={setLocation}
//                     />
//                     <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
//                         <Text style={styles.buttonText}>Submit</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
//                         <Text style={styles.buttonText}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>

//             <TouchableOpacity
//                 onPress={handleLogout}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Logout
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//         marginHorizontal: 20,
//         marginTop: 150,
//         marginBottom: 20,
//         padding: 20,
//         borderRadius: 10,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20
//     },
//     input: {
//         height: 40,
//         width: "100%",
//         borderColor: "#cccccc",
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 20
//     },
//     submitButton: {
//         backgroundColor: "#841584",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginBottom: 10
//     },
//     cancelButton: {
//         backgroundColor: "#cccccc",
//         padding: 10,
//         borderRadius: 5,
//         alignItems: "center",
//         marginTop: 10
//     },
//     buttonText: {
//         color: "white",
//         fontSize: 18,
//         fontWeight: "bold"
//     }
// });
////----------end of v2

// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";

// export default function Dashboard (){

//     const navigation = useNavigation();

//     const handleLogout = async () =>{
//         try {
//             await auth().signOut();

//             //Resets the navigation stack to "Login" and remove the OTP-related screens
//             navigation.reset({
//                 index:0,
//                 routes: [{name: "Login"}],
//             });
            
//         } catch (error) {
//             console.log("There is an error duing logout: ", error);
//         }


//     };

//     return (
//         <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
//             <Text
//                 style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,}}
//             >
//                 Welcome to the Dashboard


//             </Text>

//             <TouchableOpacity
//                 onPress={handleLogout}
//                 style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
//                 }} 
//             >
//                 <Text 
//                     style={{color: "white", fontSize: 22, fontWeight: "bold",
//                     }}
//                 >
//                     Logout
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }