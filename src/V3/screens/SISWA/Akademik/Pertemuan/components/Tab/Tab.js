import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {FlatList as GestureFlatlist} from 'react-native-gesture-handler';

import Absen from './Absen';
import Catatan from './Catatan';
import Materi from './Materi';

import {windowWidth, windowHeight} from '../../../../../../utils';

export default function Tab() {
  const tabRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [tabBars, setTabBars] = useState([
    {
      id: 1,
      tabLabel: 'Absen',
      fn: () => {
        tabRef?.current?.scrollToIndex({index: 0, animated: false});
        setActiveTab(0);
      },
      absenSiswa: [
        {
          nama: 'Adam Kurniawan Margolang',
          nisn: '111111111',
          absen: {hadir: true, sakit: false, izin: false, alfa: false},
        },
        {
          nama: 'Ayu Ida Komang',
          nisn: '22222222',
          absen: {hadir: true, sakit: false, izin: false, alfa: false},
        },
        {
          nama: 'Neneng Sureneng',
          nisn: '3333333',
          absen: {hadir: true, sakit: false, izin: false, alfa: false},
        },
        {
          nama: 'Indra Bekti',
          nisn: '4444444',
          absen: {hadir: true, sakit: false, izin: false, alfa: false},
        },
        {
          nama: 'Syamsul Bahri',
          nisn: '55555555',
          absen: {hadir: true, sakit: false, izin: false, alfa: false},
        },
      ],
      catatan: null,
    },
    {
      id: 2,
      tabLabel: 'Materi',
      fn: () => {
        tabRef?.current?.scrollToIndex({index: 1, animated: false});
        setActiveTab(1);
      },
      absenSiswa: null,
      catatan: null,
    },
    {
      id: 3,
      tabLabel: 'Catatan',
      fn: () => {
        tabRef?.current?.scrollToIndex({index: 2, animated: false});
        setActiveTab(2);
      },
      absenSiswa: null,
      catatan: '',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.tabBarsContainer}>
        {tabBars?.map((tabBar, index) => (
          <TouchableOpacity
            key={tabBar.id}
            activeOpacity={0.9}
            onPress={tabBar?.fn}
            disabled={activeTab === index}
            style={activeTab === index ? styles.activeTabBars : styles.tabBars}>
            <Text style={styles.tabBarsLabel}>{tabBar.tabLabel}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <GestureFlatlist
        data={tabBars}
        ref={tabRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        nestedScrollEnabled
        renderItem={({item, index}) => (
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              {activeTab === 0 && <Absen item={item} onChange={setTabBars} />}
              {activeTab === 1 && <Materi />}
              {activeTab === 2 && (
                <Catatan value={item.catatan} onChangeText={setTabBars} />
              )}
            </View>
          </View>
        )}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  tabBarsContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: '7%',
  },
  tabBars: {
    padding: '2%',
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#61A2F9',
    borderTopRightRadius: windowWidth * 0.02,
    borderTopLeftRadius: windowWidth * 0.02,
  },
  activeTabBars: {
    padding: '2%',
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#009A0F',
    borderTopRightRadius: windowWidth * 0.02,
    borderTopLeftRadius: windowWidth * 0.02,
  },
  tabBarsLabel: {
    color: 'white',
    fontSize: windowWidth * 0.034,
    fontWeight: '700',
  },
  tabItemContainer: {
    width: windowWidth,
  },
  tabItem: {
    width: windowWidth * 0.86,
    alignSelf: 'center',
    justifyContent: 'center',
    minHeight: windowHeight * 0.1,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.02,
    elevation: 5,
  },
  flatlistContainer: {
    paddingBottom: '5%',
  },
});
