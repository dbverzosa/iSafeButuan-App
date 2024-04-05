import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import ReportingForm from './ReportingForm';
import EmergencyContacts from './EmergencyContacts';
import Hotlines from './Hotlines';


const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emergencyModalVisible, setEmergencyModalVisible] = useState(false);
  const [hotlinesModalVisible, setHotlinesModalVisible] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to iSafeButuan App</Text>
      <TouchableOpacity onPress={() => setHotlinesModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Emergency Hotlines</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setEmergencyModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Police Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Submit Anonymous Report</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={hotlinesModalVisible}
        onRequestClose={() => setHotlinesModalVisible(false)}
      >
      
        <Hotlines onClose={() => setHotlinesModalVisible(false)} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={emergencyModalVisible}
        onRequestClose={() => setEmergencyModalVisible(false)}
      >
       
        <EmergencyContacts onClose={() => setEmergencyModalVisible(false)} />
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ReportingForm isVisible={modalVisible} onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEBDB8',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 50,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;

// //-------------orig home--------




// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// import ReportingForm from './ReportingForm';
// import EmergencyContacts from './EmergencyContacts';
// import Hotlines from './Hotlines';
// import Maps from './Maps'; // Import the Maps component

// const Home = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [emergencyModalVisible, setEmergencyModalVisible] = useState(false);
//   const [hotlinesModalVisible, setHotlinesModalVisible] = useState(false);
//   const [showMap, setShowMap] = useState(false); // State to toggle the map view
//   const navigation = useNavigation(); // Get the navigation object

//   const handleLogin = () => {
//     navigation.navigate('Login');
//   };

//   const handleFindNearestPoliceStation = () => {
//     setShowMap(true); // Show the map when the button is clicked
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Welcome to iSafeButuan App</Text>
//       <TouchableOpacity onPress={() => setHotlinesModalVisible(true)} style={styles.button}>
//         <Text style={styles.buttonText}>Emergency Hotlines</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => setEmergencyModalVisible(true)} style={styles.button}>
//         <Text style={styles.buttonText}>Police Contacts</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
//         <Text style={styles.buttonText}>Submit Anonymous Report</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleFindNearestPoliceStation} style={styles.button}>
//         <Text style={styles.buttonText}>Find Nearest Police Station</Text>
//       </TouchableOpacity>
//       {showMap && <Maps />} 
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={hotlinesModalVisible}
//         onRequestClose={() => setHotlinesModalVisible(false)}
//       >
//         {/* Render your hotline component inside modal */}
//         <Hotlines onClose={() => setHotlinesModalVisible(false)} />
//       </Modal>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={emergencyModalVisible}
//         onRequestClose={() => setEmergencyModalVisible(false)}
//       >
//         {/* Render EmergencyContacts component inside modal */}
//         <EmergencyContacts onClose={() => setEmergencyModalVisible(false)} />
//       </Modal>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <ReportingForm isVisible={modalVisible} onClose={() => setModalVisible(false)} />
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#BEBDB8',
//   },
//   heading: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     marginTop: 50,
//   },
//   button: {
//     backgroundColor: '#841584',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
// });

// export default Home;
