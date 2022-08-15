/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

import {windowWidth} from '../../utils';

import {setUser} from '../../store/reducer/auth';

export default function LogAbsen({navigation}) {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={Array.from({length: 10})}
            renderItem={({item}) => <View style={styles.item} />}
            contentContainerStyle={styles.flatlist}
          />
        </View>
        <RectButton onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonTitle}>Kembali</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172B36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: windowWidth * 0.05,
    paddingBottom: '8%',
    paddingTop: '3%',
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  flatlistWrapper: {
    height: '85%',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.05,
    overflow: 'hidden',
  },
  flatlist: {
    backgroundColor: 'white',
    padding: '4%',
    paddingVertical: '7%',
  },
  item: {
    height: windowWidth * 0.12,
    backgroundColor: '#D9D9D9',
    borderRadius: windowWidth * 0.03,
    marginBottom: '4%',
  },
  button: {
    backgroundColor: '#E3A400',
    padding: '3.5%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginTop: '4%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-Bold',
  },
});
