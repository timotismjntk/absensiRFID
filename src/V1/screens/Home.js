/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Image, StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {DetailsHeaderScrollView} from 'react-native-sticky-parallax-header';

import Menu from '../components/Menu';

import Roles from '../components/Roles';
import Slider from '../components/Slider';

import {horizontalTransition, windowWidth, windowHeight} from '../utils';

export default function Home({navigation}) {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3281ff" />
      <View
        style={{
          padding: '8%',
          position: 'absolute',
          width: '100%',
          backgroundColor: '#3281ff',
        }}>
        <View
          style={{
            width: windowWidth * 0.5,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            // height: windowHeight * 0.1,
            overflow: 'hidden',
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'center',
            }}
            source={require('../assets/logo.png')}
          />
        </View>
      </View>
      {/* <DetailsHeaderScrollView
        // leftTopIcon={iconCloseWhite}
        // leftTopIconOnPress={goBack}
        // leftTopIconTestID={detailsHeaderTestIDs.headerLeftTopIcon}
        // rightTopIcon={IconMenu}
        // rightTopIconTestID={detailsHeaderTestIDs.headerRightTopIcon}
        contentContainerStyle={[
          isDarkTheme ? screenStyles.darkBackground : screenStyles.lightBackground,
        ]}
        containerStyle={screenStyles.stretchContainer}
        contentIcon={CardsBlack}
        contentIconNumber={10}
        contentIconNumberTestID={detailsHeaderTestIDs.contentIconNumber}
        backgroundColor={Brandon.color}
        hasBorderRadius
        image={Brandon.image}
        tag={Brandon.type}
        tagTestID={detailsHeaderTestIDs.tag}
        title={Brandon.author}
        titleStyle={screenStyles.text}
        titleTestID={detailsHeaderTestIDs.title}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {Brandon.cards.map((data, i, arr) => (
            <QuizCard data={data} num={i} key={data.question} cardsAmount={arr.length} />
          ))}
        </View>
      </DetailsHeaderScrollView> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}>
        <Roles
          data={[
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/guru.png'),
              title: 'Guru',
            },
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/konseling.png'),
              title: 'Guru BK',
            },
            {
              fn: () => navigation.navigate('BottomTabsSiswa'),
              icon: require('../assets/siswa_wali.png'),
              title: 'Siswa / Wali',
            },
            {
              fn: () => navigation.navigate('MesinAbsenNavigator'),
              icon: require('../assets/mesin.png'),
              title: 'RFID',
            },
          ]}
        />
        {/* <Roles
          data={[
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/guru.png'),
              title: 'Guru / Wali Kelas',
            },
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/konseling.png'),
              title: 'Guru BK',
            },
            {
              fn: () => navigation.navigate('BottomTabsSiswa'),
              icon: require('../assets/siswa_wali.png'),
              title: 'Siswa / Orang Tua',
            },
            {
              fn: () => navigation.navigate('MesinAbsenNavigator'),
              icon: require('../assets/mesin.png'),
              title: 'Mesin Absen',
            },
          ]}
          theme="default2"
        />
        <Roles
          data={[
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/guru.png'),
              title: 'Guru / Wali Kelas',
            },
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/konseling.png'),
              title: 'Guru BK',
            },
            {
              fn: () => navigation.navigate('BottomTabsSiswa'),
              icon: require('../assets/siswa_wali.png'),
              title: 'Siswa / Orang Tua',
            },
            {
              fn: () => navigation.navigate('MesinAbsenNavigator'),
              icon: require('../assets/mesin.png'),
              title: 'Mesin Absen',
            },
          ]}
          theme="rounded"
        />
        <Roles
          data={[
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/guru.png'),
              title: 'Guru / Wali Kelas',
            },
            {
              fn: () => navigation.navigate('GuruNavigator'),
              icon: require('../assets/konseling.png'),
              title: 'Guru BK',
            },
            {
              fn: () => navigation.navigate('BottomTabsSiswa'),
              icon: require('../assets/siswa_wali.png'),
              title: 'Siswa / Orang Tua',
            },
            {
              fn: () => navigation.navigate('MesinAbsenNavigator'),
              icon: require('../assets/mesin.png'),
              title: 'Mesin Absen',
            },
          ]}
          theme="diamond"
        /> */}
        <Slider data={10} />
        <Menu data={100} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    paddingVertical: '30%',
  },
});
