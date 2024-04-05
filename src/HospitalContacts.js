import { View, Text, Modal, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const HospitalContacts = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="HOSPITAL CONTACTS" onPress={() => setModalVisible(true)} style={styles.modalButton} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.sectionTitle}>BCPO HOTLINE NUMBERS</Text>
          <View style={styles.contact}>
            <Text>BCPO</Text>
            <Text>09985987292</Text>
          </View>
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
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center', // Center align horizontally
        marginTop: 50,
        marginLeft: 0, // Adjust as needed
      },
      modalButton: {
        alignSelf: 'flex-start',
      },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contact: {
    marginBottom: 10,
  },
})

export default HospitalContacts
