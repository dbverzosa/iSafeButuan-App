import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import firestore from "@react-native-firebase/firestore";


export default function Detail ({route, navigation}){
    const { uid } = route.params;
    const [name, setName] = useState("Concerned Citizen");
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");
    const [incidentDetails, setIncidentDetails] = useState("");
    const [incidentLocation, setIncidentLocation] = useState("");


    const saveDetails = async () => {
        try {
            await firestore().collection("users").doc(uid).set({
                name,
                contact,
                location,
                // incidentDetails,
                // incidentLocation,
            });

            //After saving details, navigate to dashboard

            navigation.navigate("Dashboard");

        }catch (error){
            console.log("Error Saving Details: ", error);
        }
    };

    return (
        <View
            style={{flex: 1, padding: 10, backgroundColor: "#BEBDB8"}}
        >
            <Text
                style={{fontSize: 32, fontWeight: "bold", marginBottom: 40, marginTop: 150,
                }}
            >
                Enter your details:
            </Text>
                <TextInput style={{ height:50, width: "100%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
                  placeholder = "Name"
                  value={name}
                  onChangeText={setName}
                />
                 <TextInput style={{ height:50, width: "100%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
                  placeholder = "Contact Number"
                  value={contact}
                  onChangeText={setContact}
                />
                  <TextInput style={{ height:50, width: "100%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
                  placeholder = "Where do you live?"
                  value={location}
                  onChangeText={setLocation}
                />
                 {/* <TextInput style={{ height:50, width: "100%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
                  placeholder = "Enter Incident Details"
                  value={incidentDetails}
                  onChangeText={setIncidentDetails}
                />
                 <TextInput style={{ height:50, width: "100%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
                  placeholder = "Enter Incident Location"
                  value={incidentLocation}
                  onChangeText={setIncidentLocation}
                /> */}
                <TouchableOpacity 
                    onPress={saveDetails}
                    style={{
                        backgroundColor:"#841584",
                        padding: 10,
                        borderRadius: 5,
                        marginBottom: 20,
                        alignItems: "center",
                    }}
                >
                    <Text style={{color: "white", fontSize: 22, fontWeight: "bold", }}>
                        Save Details
                    </Text>

                </TouchableOpacity>
        </View>
    );

}

