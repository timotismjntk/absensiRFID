/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  RefreshControl,
  Linking,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';
import {replaceElement} from 'domutils';
import {Element} from 'domhandler';
import {SafeAreaView} from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailBlog({route}) {
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
          {/* <View style={styles.imageHeader}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              source={
                route?.params.image
                  ? {uri: route.params.image}
                  : require('../../assets/icons/beritaHeader.png')
              }
            />
          </View> */}
          <View style={styles.contentWrapper}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.publishedAt}>
                {route?.params?.createdAt || 'Senin, 1 September 2022'}
              </Text>
            </View>
            <Text numberOfLines={3} style={styles.title}>
              {route.params.judul ||
                'Harga iPhone 14, iPhone 14 Pro dan iPhone 14 Pro Max yang Dijual Hari Ini'}
            </Text>
            <Text style={styles.author}>
              Penulis: Adam Kurniawan Margolang (Kelas XI MIA 1)
            </Text>
            <RenderHTML
              baseStyle={{
                color: 'black',
                fontSize: windowWidth * 0.038,
                lineHeight: 26,
                marginTop: '5%',
                fontFamily: 'OpenSans-Regular',
              }}
              contentWidth={windowWidth}
              source={{
                html: route.params?.konten || '',
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
  publishedAt: {
    color: 'black',
    fontSize: windowWidth * 0.036,
    fontFamily: 'OpenSans-Regular',
  },
  title: {
    color: 'black',
    marginTop: '2%',
    fontSize: windowWidth * 0.05,
    fontFamily: 'OpenSans-Bold',
  },
  author: {
    color: 'black',
    fontSize: windowWidth * 0.03,
    marginTop: '4%',
    fontFamily: 'OpenSans-Regular',
  },
});
