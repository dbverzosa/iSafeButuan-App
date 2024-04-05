import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

export default function Dashboard (){

    const navigation = useNavigation();

    const [incident, setIncident] = useState("");
    const [location, setLocation] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [pastIncidents, setPastIncidents] = useState([]);

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

            await firestore().collection("incidents").add({
                userId: currentUser.uid,
                incident,
                location,
                timestamp: firestore.FieldValue.serverTimestamp()
            });

            Alert.alert("Success", "Incident details submitted successfully.");
            setIncident("");
            setLocation("");
            setModalVisible(false); // Close the modal after submitting
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
                routes: [{name: "Login"}],
            });
            
        } catch (error) {
            console.log("There is an error during logout: ", error);
        }
    };

    return (
        <View style={{flex:1, padding: 0, backgroundColor: "#BEBDB8"}}>
            <Text
                style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,}}
            >
                Welcome to the Dashboard
            </Text>

            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
                }} 
            >
                <Text 
                    style={{color: "white", fontSize: 22, fontWeight: "bold",
                    }}
                >
                    Submit Incident Details
                </Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.heading}>Submit Incident Details</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Incident"
                        value={incident}
                        onChangeText={setIncident}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Location"
                        value={location}
                        onChangeText={setLocation}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity
                onPress={handleLogout}
                style={{backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center"
                }} 
            >
                <Text 
                    style={{color: "white", fontSize: 22, fontWeight: "bold",
                    }}
                >
                    Logout
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}
            >
                <Text
                    style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
                >
                    View Past Incidents
                </Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.heading}>Past Incidents</Text>
                    <FlatList
                        data={pastIncidents}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.incidentItem}>
                                <Text>{item.incident}</Text>
                                <Text>{item.location}</Text>
                                <Text>{item.timestamp && item.timestamp.toDate().toString()}</Text>
                            </View>
                        )}
                    />
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        marginTop: 150,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
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
        backgroundColor: "#841584",
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
    }
});


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