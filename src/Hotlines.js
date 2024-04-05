import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import { StatusBar } from "expo-status-bar";
// import { openURL, canOpenURL } from "expo-linking";
// import { useState } from "react";



const Hotlines = ({ onClose }) => {



    // const [canOpenEmail, setCanOpenEmail] = useState(false);
    // canOpenURL("mailto:verzosadebby@gmail.com").then((canOpen) => {
    //   setCanOpenEmail(canOpen);
    // });
  
    // const [canOpenTelephone, setCanOpenTelephone] = useState(false);
    // canOpenURL("tel:+15555555").then((canOpen) => setCanOpenTelephone(canOpen));
  
  return (


    
   
    <View style={styles.modalView}>
      <Text style={styles.sectionTitle}>EMERGENCY HOTLINE NUMBERS</Text>
      <View style={styles.contact}>
        <Text>BCPO</Text>
        
        <Text>09985987292</Text>
      </View>
      {/* <View>
      <Button
        onPress={() => openURL("https://docs.expo.dev/guides/linking")}
        title="Linking Guide"
      />
      <Button
        onPress={() => openURL("mailto:chelsea@tripwiretech.com")}
        title="Email"
        disabled={!canOpenEmail}
      />
      <Button
        onPress={() => openURL("tel:+15555555")}
        title="Call Fake Number"
        disabled={!canOpenTelephone}
      />
      <Button
        onPress={() => openURL("sms:+15555555")}
        title="Text Fake Number"
      />
      <StatusBar style="auto" />
      </View> */}
      <View style={styles.contact}>
        <Text>BCMFC</Text>
        <Text>09302970041</Text>
      </View>
      <View style={styles.contact}>
        <Text>BCPS1</Text>
        <Text>09985987294</Text>
      </View>
      <View style={styles.contact}>
        <Text>BCPS2</Text>
        <Text>09985987295</Text>
      </View>
      <View style={styles.contact}>
        <Text>BCPS3</Text>
        <Text>09985987297</Text>
      </View>
      <View style={styles.contact}>
        <Text>BCPS4</Text>
        <Text>09985987299</Text>
      </View>
      <View style={styles.contact}>
        <Text>BCPS5</Text>
        <Text>09302977301</Text>
      </View>
      <Button title="Close Modal" onPress={onClose} color="#841584"/>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
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
  },
});

export default Hotlines;
