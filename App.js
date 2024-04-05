



//-------v3 current--------
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home"; 
import Login from "./src/Login";
import Detail from "./src/Detail";
import Dashboard from "./src/Dashboard";
import EmergencyContacts from "./src/EmergencyContacts";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen
          name="Home"
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmergencyContacts"
          component={EmergencyContacts}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}








////------v2
// import "react-native-gesture-handler";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./src/Login";
// import Detail from "./src/Detail";
// import Dashboard from "./src/Dashboard";
// import EmergencyContacts from "./src/EmergencyContacts";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//         <NavigationContainer>
//         {/* <EmergencyContacts/> */}
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={Detail}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Dashboard"
//           component={Dashboard}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
  

//   );

// }
/////------------end of v2


//--------original-----------


// import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import EmergencyContacts from "./src/EmergencyContacts";
// import HospitalContacts from "./src/HospitalContacts";
// import BFireProtection from "./src/BFireProtection";
// import Home from "./src/Home";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello</Text>
//       <EmergencyContacts/>
//       <HospitalContacts/>
//       <BFireProtection/>
//       <Home/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
