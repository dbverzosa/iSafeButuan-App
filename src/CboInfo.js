import { View, Text, Modal, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const CboInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Taguibo CBO Contacts" onPress={() => setModalVisible(true)} style={styles.modalButton} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.sectionTitle}>Emergency Contacts:</Text>
          <View style={styles.contact}>
            <Text>Name: SAMPLE NAME</Text>
            <Text>Phone Number: 9283</Text>
            <Text>Details: SDFSDG</Text>
          </View>
          <View style={styles.contact}>
            <Text>Name: SAMPLE NAME</Text>
            <Text>Phone Number: 9283</Text>
            <Text>Details: SDFSDG</Text>
          </View>
          <View style={styles.contact}>
            <Text>Name: SAMPLE NAME</Text>
            <Text>Phone Number: 9283</Text>
            <Text>Details: SDFSDG</Text>
          </View>
          <View style={styles.contact}>
            <Text>Name: SAMPLE NAME</Text>
            <Text>Phone Number: 9283</Text>
            <Text>Details: SDFSDG</Text>
          </View>
          <View style={styles.contact}>
            <Text>Name: SAMPLE NAME</Text>
            <Text>Phone Number: 9283</Text>
            <Text>Details: SDFSDG</Text>
          </View>
          <View style={styles.contact}>
            <Text>Name: SAMPLE NAME</Text>
            <Text>Phone Number: 9283</Text>
            <Text>Details: SDFSDG</Text>
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
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 250,
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

export default CboInfo
