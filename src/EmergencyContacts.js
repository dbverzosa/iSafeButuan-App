// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';

// const contacts = [

//   { name: 'BCPO', number: '09985987292', location: 'Butuan City Police Station', barangays: ['no barangay'] },

//   { name: 'BCMFC', number: '09302970041', location: 'BCMFC Police Station', barangays: ['no barangay'] },

//   { name: 'Butuan City Police Station 1', number: '09985987294', location: 'Urduja', barangays: [
//     'Agao', 'Datu Silongan', 'Diego Silangan', 'Humabon', 'Leon Kilat', 'Sikatuna', 'Rajah Soliman', 'Urduja',
//     'Dagohoy', 'Golden Ribbon', 'JP Rizal', 'Lapu-Lapu', 'Pangabugan', 'New Society Village', 'Baan Km3', 'Baan Riverside',
//     'Banza', 'Mahogany', 'Maug', 'Maon', 'San Vicente', 'Bit-os', 'Villa kanangga', 'Imadejas', 'Tandang Sora',
//     'Mahay', 'Buhangin', 'San Ignacio'
//   ] },

//   { name: 'Butuan City Police Station 2', number: '09985987295', location: 'Langihan', barangays: [
//     'Holy Redeemer', 'Limaha', 'Agusan Pequeño', 'Babag', 'Bading', 'Fort Poyohon', 'Doongan', 'Obrero', 'Ong Yiu', 'Pagatpatan'
//   ] },
//   { name: 'Butuan City Police Station 3', number: '09985987297', location: ' Libertad', barangays: [
//     'Ambago', 'Bayanihan', 'Lumbocan', 'Bancasi', 'Dumalagan', 'Libertad', 'Masao', 'Pinamanculan', 'Bonbon', 'Kinamlutan'
//   ] },
//   { name: 'Butuan City Police Station 4', number: '09985987299', location: 'Ampayon', barangays: [
//     'Ampayon', 'Anticala', 'Antongalon', 'Aupagan', 'Baobaoan', 'Basag', 'Bilay', 'Bobon', 'Bugsukan', 'Cabcabon', 'Camahayan', 'De Oro', 'Don Francisco', 'Lemon', 'Los Angeles', 'Maguinda', 'Maibu', 'Pianing', 'Pigdaulan', 'Salvacion', 'Sto. Niño', 'Sumile', 'Sumilihon', 'Tagabaca', 'Taguibo', 'Taligaman', 'Tiniwisan'
//   ] },
//   { name: 'Butuan City Police Station 5', number: '09302977301', location: ' San Mateo', barangays: [
//     'Amparo', 'Bitan-agan', 'Dankias', 'Florida', 'Mandamo', 'Manila de Bugabos', 'MJ Santos', 'Nongnong', 'San Mateo', 'Tungao'
//   ] },
// ];

// const EmergencyContacts = ({ onClose }) => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const filteredContacts = contacts.filter(contact =>
//     contact.barangays.some(barangay => barangay.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>BCPO HOTLINE NUMBERS</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Search Barangay"
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//       />
//       {filteredContacts.map((contact, index) => (
//         <TouchableOpacity key={index} style={styles.contact} activeOpacity={0.7}>
//            <Text>Designated Station: {contact.name}</Text>
//           <Text>Location: {contact.location}</Text>
//           <Text>Contact Number: {contact.number}</Text>
//         </TouchableOpacity>
//       ))}
//       <Button title="Close" onPress={onClose} color="#841584" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   contact: {
//     marginBottom: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     width: '100%',
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
// });

// export default EmergencyContacts;


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Linking, ScrollView } from 'react-native';

const contacts = [
  { name: 'BCPO', number: '09985987292', location: 'Butuan City Police Station', barangays: ['no barangay'] },
  { name: 'BCMFC', number: '09302970041', location: 'BCMFC Police Station', barangays: ['no barangay'] },
  { name: 'Butuan City Police Station 1', number: '09985987294', location: 'Urduja', barangays: [
    'Agao', 'Datu Silongan', 'Diego Silangan', 'Humabon', 'Leon Kilat', 'Sikatuna', 'Rajah Soliman', 'Urduja',
    'Dagohoy', 'Golden Ribbon', 'JP Rizal', 'Lapu-Lapu', 'Pangabugan', 'New Society Village', 'Baan Km3', 'Baan Riverside',
    'Banza', 'Mahogany', 'Maug', 'Maon', 'San Vicente', 'Bit-os', 'Villa kanangga', 'Imadejas', 'Tandang Sora',
    'Mahay', 'Buhangin', 'San Ignacio'
  ] },
  { name: 'Butuan City Police Station 2', number: '09985987295', location: 'Langihan', barangays: [
    'Holy Redeemer', 'Limaha', 'Agusan Pequeño', 'Babag', 'Bading', 'Fort Poyohon', 'Doongan', 'Obrero', 'Ong Yiu', 'Pagatpatan'
  ] },
  { name: 'Butuan City Police Station 3', number: '09985987297', location: ' Libertad', barangays: [
    'Ambago', 'Bayanihan', 'Lumbocan', 'Bancasi', 'Dumalagan', 'Libertad', 'Masao', 'Pinamanculan', 'Bonbon', 'Kinamlutan'
  ] },
  { name: 'Butuan City Police Station 4', number: '09985987299', location: 'Ampayon', barangays: [
    'Ampayon', 'Anticala', 'Antongalon', 'Aupagan', 'Baobaoan', 'Basag', 'Bilay', 'Bobon', 'Bugsukan', 'Cabcabon', 'Camahayan', 'De Oro', 'Don Francisco', 'Lemon', 'Los Angeles', 'Maguinda', 'Maibu', 'Pianing', 'Pigdaulan', 'Salvacion', 'Sto. Niño', 'Sumile', 'Sumilihon', 'Tagabaca', 'Taguibo', 'Taligaman', 'Tiniwisan'
  ] },
  { name: 'Butuan City Police Station 5', number: '09302977301', location: ' San Mateo', barangays: [
    'Amparo', 'Bitan-agan', 'Dankias', 'Florida', 'Mandamo', 'Manila de Bugabos', 'MJ Santos', 'Nongnong', 'San Mateo', 'Tungao'
  ] },
];

const EmergencyContacts = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredContacts = contacts.filter(contact =>
    contact.barangays.some(barangay => barangay.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleMessage = (number) => {
    Linking.openURL(`sms:${number}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Emergency Contacts</Text>
      <TextInput
        style={styles.input}
        placeholder="Search Barangay"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <ScrollView style={styles.scrollContainer}>
        {filteredContacts.map((contact, index) => (
          <TouchableOpacity key={index} style={styles.contact} activeOpacity={0.7}>
            <Text>Designated Station: {contact.name}</Text>
            <Text>Location: {contact.location}</Text>
            <Text>Contact Number: {contact.number}</Text>
            <View style={styles.buttons}>
              <Button title="Call" onPress={() => handleCall(contact.number)} />
              <Button title="Message" onPress={() => handleMessage(contact.number)} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button title="Close" onPress={onClose} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contact: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    width: '100%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
});

export default EmergencyContacts;

