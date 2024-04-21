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





// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const ReportingForm = ({ isVisible, onClose }) => {
//   const [aliasName, setAliasName] = useState('');
//   const [reportType, setReportType] = useState('');
//   const [details, setDetails] = useState('');
//   const [location, setLocation] = useState('');

// const handleSubmit = async () => {
//   try {
//     await firestore().collection('anonymous-reports').add({
//       aliasName,
//       reportType,
//       details,
//       location,
//       timestamp: firestore.FieldValue.serverTimestamp(),
//       status: 'pending', 
//     });
    
//     setAliasName('');
//     setReportType('');
//     setDetails('');
//     setLocation('');

//     onClose();


//     Alert.alert('Success', 'Report submitted successfully. The report is subject for approval.');

//   } catch (error) {
//     console.error('Error submitting report:', error);
//     Alert.alert('Error', 'Failed to submit report. Please try again later.');
//   }
// };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Tip Report</Text>
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
//         placeholder="Further Specific Details"
//         value={details}
//         onChangeText={setDetails}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Location"
//         value={location}
//         onChangeText={setLocation}
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





////-----------------------ORIGINAL------------------//////////////
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// // Mapping of barangays to police station numbers
// const barangayToStation = {
//   'Agao': 1, 'Datu Silongan': 1, 'Diego Silangan': 1, 'Humabon': 1, 'Leon Kilat': 1, 'Sikatuna': 1, 'Rajah Soliman': 1, 'Urduja': 1,
//   'Dagohoy': 1, 'Golden Ribbon': 1, 'JP Rizal': 1, 'Lapu-Lapu': 1, 'Pangabugan': 1, 'New Society Village': 1, 'Baan Km3': 1, 'Baan Riverside': 1,
//   'Banza': 1, 'Mahogany': 1, 'Maug': 1, 'Maon': 1, 'San Vicente': 1, 'Bit-os': 1, 'Villa kanangga': 1, 'Imadejas': 1, 'Tandang Sora': 1,
//   'Mahay': 1, 'Buhangin': 1, 'San Ignacio': 1,
//   'Holy Redeemer': 2, 'Limaha': 2, 'Agusan Pequeño': 2, 'Babag': 2, 'Bading': 2, 'Fort Poyohon': 2, 'Doongan': 2, 'Obrero': 2, 'Ong Yiu': 2, 'Pagatpatan': 2,
//   'Ambago': 3, 'Bayanihan': 3, 'Lumbocan': 3, 'Bancasi': 3, 'Dumalagan': 3, 'Libertad': 3, 'Masao': 3, 'Pinamanculan': 3, 'Bonbon': 3, 'Kinamlutan': 3,
//   'Ampayon': 4, 'Anticala': 4, 'Antongalon': 4, 'Aupagan': 4, 'Baobaoan': 4, 'Basag': 4, 'Bilay': 4, 'Bobon': 4, 'Bugsukan': 4, 'Cabcabon': 4, 'Camahayan': 4, 'De Oro': 4, 'Don Francisco': 4, 'Lemon': 4, 'Los Angeles': 4, 'Maguinda': 4, 'Maibu': 4, 'Pianing': 4, 'Pigdaulan': 4, 'Salvacion': 4, 'Sto. Niño': 4, 'Sumile': 4, 'Sumilihon': 4, 'Tagabaca': 4, 'Taguibo': 4, 'Taligaman': 4, 'Tiniwisan': 4,
//   'Amparo': 5, 'Bitan-agan': 5, 'Dankias': 5, 'Florida': 5, 'Mandamo': 5, 'Manila de Bugabos': 5, 'MJ Santos': 5, 'Nongnong': 5, 'San Mateo': 5, 'Tungao': 5,
// };

// const ReportingForm = ({ isVisible, onClose }) => {
//   const [aliasName, setAliasName] = useState('');
//   const [reportType, setReportType] = useState('');
//   const [details, setDetails] = useState('');
//   const [locationDetails, setLocationDetails] = useState('');
//   const [selectedBarangay, setSelectedBarangay] = useState('');
//   const [location, setLocation] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [report, setReport] = useState(false); // Added state for report flag
  

//   const barangays = Object.keys(barangayToStation);

//   const handleSelectBarangay = (barangay) => {
//     setSelectedBarangay(barangay);
//     setShowDropdown(false);
//   };

//   const handleSubmit = async () => {

//     if (!aliasName || !reportType || !details || !locationDetails || !selectedBarangay) {
//       Alert.alert('Error', 'All fields are required.');
//       return;
//     }
  
//     try {
//       const stationNumber = barangayToStation[selectedBarangay];
//       if (stationNumber) {
//         await firestore().collection('anonymous-reports').add({
//           aliasName,
//           reportType,
//           details,
//           locationDetails,
//           location: stationNumber.toString(),
//           timestamp: firestore.FieldValue.serverTimestamp(),
//           status: false,
//           report,
//         });

//         setAliasName('');
//         setReportType('');
//         setDetails('');
//         setLocationDetails('');
//         setSelectedBarangay('');
//         setLocation('');
//         setReport(false);

//         onClose();

//         Alert.alert('Success', 'Report submitted successfully. The report is subject for approval.');
//       } else {
//         Alert.alert('Error', 'Please select a barangay.');
//       }
//     } catch (error) {
//       console.error('Error submitting report:', error);
//       Alert.alert('Error', 'Failed to submit report. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Tip Report</Text>
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
//         placeholder="Location Details ( Street / Landmark )"
//         value={locationDetails}
//         onChangeText={setLocationDetails}
//       />
//       <View style={styles.dropdownContainer}>
//         <Text style={styles.label}>Select Barangay:</Text>
//         <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)} style={styles.dropdown}>
//           <Text>{selectedBarangay || 'Select a barangay'}</Text>
//           <Text>▼</Text>
//         </TouchableOpacity>
//         {showDropdown && (
//           <FlatList
//           data={barangays.sort()}
//             renderItem={({ item }) => (
//               <TouchableOpacity onPress={() => handleSelectBarangay(item)}>
//                 <Text style={styles.barangayItem}>{item}</Text>
//               </TouchableOpacity>
//             )}
//             keyExtractor={(item) => item}
//             style={styles.dropdownList}
//           />
//         )}
//       </View>

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
//   dropdownContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   barangayItem: {
//     marginVertical: 5,
//     fontSize: 16,
//   },
//   label: {
//     marginBottom: 5,
//   },
//   dropdown: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: 40,
//     width: '100%',
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   dropdownList: {
//     marginTop: 5,
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 5,
//     maxHeight: 150,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#1565c0',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   closeButton: {
//     backgroundColor: 'gray',
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
////-----------------------ORIGINAL------------------//////////////








import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

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

const ReportingForm = ({ isVisible, onClose }) => {
  const [aliasName, setAliasName] = useState('');
  const [reportType, setReportType] = useState('');
  const [details, setDetails] = useState('');
  const [locationDetails, setLocationDetails] = useState('');
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const [location, setLocation] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [report, setReport] = useState(false); // Added state for report flag
  

  const barangays = Object.keys(barangayToStation);

  const handleSelectBarangay = (barangay) => {
    setSelectedBarangay(barangay);
    setShowDropdown(false);
  };

  const handleSubmit = async () => {

    if (!aliasName || !reportType || !details || !locationDetails || !selectedBarangay) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
  
    try {
      const stationNumber = barangayToStation[selectedBarangay];
      if (stationNumber) {
        await firestore().collection('anonymous-reports').add({
          aliasName,
          reportType,
          details,
          locationDetails,
          location: stationNumber.toString(),
          timestamp: firestore.FieldValue.serverTimestamp(),
          status: false,
          report,
        });

        setAliasName('');
        setReportType('');
        setDetails('');
        setLocationDetails('');
        setSelectedBarangay('');
        setLocation('');
        setReport(false);

        onClose();

        Alert.alert('Success', 'Report submitted successfully. The report is subject for approval.');
      } else {
        Alert.alert('Error', 'Please select a barangay.');
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      Alert.alert('Error', 'Failed to submit report. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tip Report</Text>
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
        placeholder="Location Details ( Street / Landmark )"
        value={locationDetails}
        onChangeText={setLocationDetails}
      />
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Select Barangay:</Text>
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
  submitButton: {
    backgroundColor: '#1565c0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'gray',
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
