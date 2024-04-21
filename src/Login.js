import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");
    const [confirm, setConfirm] = useState(null);
    const navigation = useNavigation();


    const SignInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log("Error sending code", error);
        }
    };

    const confirmCode = async () => {
        try {
            const userCredential = await confirm.confirm(code);
            const user = userCredential.user;

            //check if user is new or existing

            const userDocument = await firestore()
                .collection('users')
                .doc(user.uid)
                .get();

            if (userDocument.exists) {
                //user is existing, navigate to Dashboard
                navigation.navigate("Dashboard");
            } else {
                //user is new , navigate to Detail
                navigation.navigate("Detail", { uid: user.uid });
            }

        } catch (error) {
            console.log("Invalid code", error);
        }
    };


    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: "#2023" }}>
             <Text
                style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    marginBottom: 40,
                    marginTop: 70,
                    textAlign: "center",
                    color: "#1565c0",
                }}
            >
                iSafeButuan
            </Text>
            <Text
                style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    marginBottom: 20,
                    textAlign: "center",
                    color: "#1565c0",
                }}
            >
                Login
            </Text>
           
            {!confirm ? (
                <>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontSize: 18,
                        }}
                    >
                        Enter Phone Number:
                    </Text>
                    <TextInput
                        style={{
                            height: 50,
                            width: "100%",
                            borderColor: "black",
                            borderWidth: 1,
                            marginBottom: 30,
                            paddingHorizontal: 10,
                        }}

                        placeholder="e.g., +639193806113"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    <TouchableOpacity
                        onPress={SignInWithPhoneNumber}
                        style={{
                            backgroundColor: "darkblue",
                            padding: 10,
                            borderRadius: 5,
                            marginBottom: 20,
                            alignItems: "center",
                        }}
                    >

                        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
                            Send Code
                        </Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontSize: 18,
                        }}
                    >
                        Enter the code sent to your phone:
                    </Text>
                    <TextInput
                        style={{
                            height: 50,
                            width: "100%",
                            borderColor: "black",
                            borderWidth: 1,
                            marginBottom: 30,
                            paddingHorizontal: 10,
                        }}
                        placeholder="Enter Code"
                        value={code}
                        onChangeText={setCode}
                    />
                    <TouchableOpacity
                        onPress={confirmCode}
                        style={{
                            backgroundColor: "#1565c0",
                            padding: 10,
                            borderRadius: 5,
                            marginBottom: 20,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }} >
                            Confirm Code
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}


// // if device is already logged in then go directly to the dashboard//
// import React, { useState, useEffect } from "react";
// import { TouchableOpacity, View, Text, TextInput } from "react-native";
// import auth from "@react-native-firebase/auth";
// import firestore from "@react-native-firebase/firestore";
// import { useNavigation } from "@react-navigation/native";

// export default function Login() {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [code, setCode] = useState("");
//     const [confirm, setConfirm] = useState(null);
//     const navigation = useNavigation();

//     useEffect(() => {
//         const checkAuthStatus = async () => {
//             const user = auth().currentUser;
//             if (user) {
//                 // User is already authenticated, navigate to Dashboard
//                 navigation.navigate("Dashboard");
//             }
//         };
//         checkAuthStatus();
//     }, []);

//     const SignInWithPhoneNumber = async () => {
//         try {
//             const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//             setConfirm(confirmation);
//         } catch (error) {
//             console.log("Error sending code", error);
//         }
//     };

//     const confirmCode = async () => {
//         try {
//             const userCredential = await confirm.confirm(code);
//             const user = userCredential.user;

//             // Check if user is new or existing
//             const userDocument = await firestore()
//                 .collection('users')
//                 .doc(user.uid)
//                 .get();

//             if (userDocument.exists) {
//                 // User is existing, navigate to Dashboard
//                 navigation.navigate("Dashboard");
//             } else {
//                 // User is new, navigate to Detail
//                 navigation.navigate("Detail", { uid: user.uid });
//             }

//         } catch (error) {
//             console.log("Invalid code", error);
//         }
//     };

//     return (
//         <View style={{ flex: 1, padding: 10, backgroundColor: "#2023" }}>
//             <Text
//                 style={{
//                     fontSize: 30,
//                     fontWeight: "bold",
//                     marginBottom: 40,
//                     marginTop: 150,
//                     textAlign: "center",
//                 }}
//             >
//                 Phone Number Authentication
//             </Text>
//             {!confirm ? (
//                 <>
//                     <Text
//                         style={{
//                             marginBottom: 20,
//                             fontSize: 18,
//                         }}
//                     >
//                         Enter Phone Number:
//                     </Text>
//                     <TextInput
//                         style={{
//                             height: 50,
//                             width: "100%",
//                             borderColor: "black",
//                             borderWidth: 1,
//                             marginBottom: 30,
//                             paddingHorizontal: 10,
//                         }}

//                         placeholder="e.g., +639193806113"
//                         value={phoneNumber}
//                         onChangeText={setPhoneNumber}
//                     />
//                     <TouchableOpacity
//                         onPress={SignInWithPhoneNumber}
//                         style={{
//                             backgroundColor: "darkblue",
//                             padding: 10,
//                             borderRadius: 5,
//                             marginBottom: 20,
//                             alignItems: "center",
//                         }}
//                     >

//                         <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
//                             Send Code
//                         </Text>
//                     </TouchableOpacity>
//                 </>
//             ) : (
//                 <>
//                     <Text
//                         style={{
//                             marginBottom: 20,
//                             fontSize: 18,
//                         }}
//                     >
//                         Enter the code sent to your phone:
//                     </Text>
//                     <TextInput
//                         style={{
//                             height: 50,
//                             width: "100%",
//                             borderColor: "black",
//                             borderWidth: 1,
//                             marginBottom: 30,
//                             paddingHorizontal: 10,
//                         }}
//                         placeholder="Enter Code"
//                         value={code}
//                         onChangeText={setCode}
//                     />
//                     <TouchableOpacity
//                         onPress={confirmCode}
//                         style={{
//                             backgroundColor: "#841584",
//                             padding: 10,
//                             borderRadius: 5,
//                             marginBottom: 20,
//                             alignItems: "center",
//                         }}
//                     >
//                         <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }} >
//                             Confirm Code
//                         </Text>
//                     </TouchableOpacity>
//                 </>
//             )}
//         </View>
//     );
// }
