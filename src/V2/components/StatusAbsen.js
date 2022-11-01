import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Modal as ReactModal,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

import {windowWidth} from '../utils';

export default function StatusAbsen({open, close, jenis, status}) {
  return (
    <ReactModal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={close}>
      <StatusBar animated={true} backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.modalHeader}>
            {jenis} {status}
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/icons/berhasil.png')}
              style={styles.image}
            />
          </View>
          <Pressable style={styles.buttonBack} onPress={close}>
            <Text style={styles.buttonBackLabel}>Kembali</Text>
          </Pressable>
        </View>
      </View>
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modal: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.9,
    backgroundColor: '#EAEAEA',
    borderRadius: windowWidth * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  modalHeader: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-SemiBold',
    marginBottom: '4%',
  },
  imageContainer: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.28,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonBack: {
    paddingVertical: '3%',
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#BB902C',
    borderRadius: windowWidth * 0.01,
    marginTop: '6%',
  },
  buttonBackLabel: {
    color: 'white',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-SemiBold',
  },
});
