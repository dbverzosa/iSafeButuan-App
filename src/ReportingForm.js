// // ReportingForm.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const ReportingForm = ({ isVisible, onClose }) => {
//   const [aliasName, setAliasName] = useState('');
//   const [reportType, setReportType] = useState('');
//   const [details, setDetails] = useState('');
//   const [location, setLocation] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [video, setVideo] = useState('');

//   const handleSubmit = () => {
//     // Implement your logic to submit the report here
//     // You can use the state values (aliasName, reportType, etc.) to send the report data
//     // Reset the form fields
//     setAliasName('');
//     setReportType('');
//     setDetails('');
//     setLocation('');
//     setPhoto('');
//     setVideo('');

//     // Close the modal
//     onClose();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Submit Anonymous Report</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Alias Name"
//         value={aliasName}
//         onChangeText={setAliasName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type of Report"
//         value={reportType}
//         onChangeText={setReportType}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Further Details"
//         value={details}
//         onChangeText={setDetails}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Location"
//         value={location}
//         onChangeText={setLocation}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Photo"
//         value={photo}
//         onChangeText={setPhoto}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Video"
//         value={video}
//         onChangeText={setVideo}
//       />
//       <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//         <Text style={styles.buttonText}>Close</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     marginHorizontal: 20,
//     padding: 20,
//     borderRadius: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   submitButton: {
//     backgroundColor: '#841584',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   closeButton: {
//     backgroundColor: '#cccccc',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ReportingForm;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ReportingForm = ({ isVisible, onClose }) => {
  const [aliasName, setAliasName] = useState('');
  const [reportType, setReportType] = useState('');
  const [details, setDetails] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
  const [video, setVideo] = useState('');

  const handleSubmit = async () => {
    try {
      // Add the report to the 'anonymous-reports' collection
      await firestore().collection('anonymous-reports').add({
        aliasName,
        reportType,
        details,
        location,
        photo,
        video,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      // Reset the form fields
      setAliasName('');
      setReportType('');
      setDetails('');
      setLocation('');
      setPhoto('');
      setVideo('');

      // Close the modal
      onClose();

      // Show success message
      Alert.alert('Success', 'Report submitted successfully');

    } catch (error) {
      console.error('Error submitting report:', error);
      // Handle error, e.g., show an alert to the user
      Alert.alert('Error', 'Failed to submit report. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Submit Anonymous Report</Text>
      <TextInput
        style={styles.input}
        placeholder="Alias Name"
        value={aliasName}
        onChangeText={setAliasName}
      />
      <TextInput
        style={styles.input}
        placeholder="Type of Report"
        value={reportType}
        onChangeText={setReportType}
      />
      <TextInput
        style={styles.input}
        placeholder="Further Details"
        value={details}
        onChangeText={setDetails}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Photo"
        value={photo}
        onChangeText={setPhoto}
      />
      <TextInput
        style={styles.input}
        placeholder="Video"
        value={video}
        onChangeText={setVideo}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportingForm;
