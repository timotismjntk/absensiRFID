/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Linking} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';
import {replaceElement} from 'domutils';
import {Element} from 'domhandler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth, windowHeight} from '../../utils';

export default function DetailBerita({route}) {
  const scrollRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    }, []),
  );

  const onElement = useCallback(element => {
    if (element.tagName === 'font') {
      const fontFace = element.attribs.face;
      const p = new Element(
        'p',
        {
          style: `font-family: ${fontFace}`,
        },
        element.children,
      );
      replaceElement(element, p);
    }
    if (element.tagName === 'img') {
      const cover = element.attribs.src;
      if (cover) {
        const img = new Element('img', {
          src: `https://diskominfo.labura.go.id/${cover}`,
        });
        replaceElement(element, img);
      }
    }
  }, []);

  const renderersProps = {
    a: {
      onPress(event, url, htmlAttribs, target) {
        // Do stuff
        Linking.openURL(url);
      },
    },
  };

  return (
    <SafeAreaView>
      <ScrollView
        ref={scrollRef}
        //   refreshControl={
        //     <RefreshControl refreshing={isLoading} onRefresh={() => null} />
        //   }
        contentContainerStyle={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageHeader}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              source={
                route.params.thumbnail
                  ? {uri: route.params.thumbnail}
                  : require('../../assets/icons2/exampleBerita.png')
              }
            />
          </View>
          <View style={styles.contentWrapper}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{color: 'grey', fontSize: windowWidth * 0.036}}>
                {route?.params?.haritanggal_formated || ''}
              </Text>
            </View>
            <Text
              style={{
                color: 'black',
                marginTop: '2%',
                fontSize: windowWidth * 0.05,
                fontWeight: '500',
              }}>
              {route?.params?.judul ||
                'Harga iPhone 14, iPhone 14 Pro dan iPhone 14 Pro Max yang Dijual Hari Ini'}
            </Text>
            <RenderHTML
              baseStyle={{
                color: 'black',
                fontSize: windowWidth * 0.038,
                lineHeight: 30,
                marginTop: '5%',
                fontFamily: 'OpenSans-Regular',
              }}
              contentWidth={windowWidth}
              source={{
                html: route.params?.cuplikan || '',
              }}
              renderersProps={renderersProps}
              domVisitors={{
                onElement: onElement,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: windowHeight,
    paddingBottom: '15%',
    paddingTop: '25%',
    paddingHorizontal: '4%',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: windowWidth * 0.02,
    overflow: 'hidden',
    width: '100%',
    paddingBottom: '3%',
  },
  imageHeader: {
    width: windowWidth * 0.95,
    height: windowWidth * 0.7,
    overflow: 'hidden',
  },
  contentWrapper: {
    paddingHorizontal: '3.5%',
    paddingVertical: '2%',
    flex: 1,
  },
});
