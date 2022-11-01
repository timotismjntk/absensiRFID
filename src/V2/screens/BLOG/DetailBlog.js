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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DetailBlog() {
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
            source={require('../../assets/icons/beritaHeader.png')}
          />
        </View>
        <View style={styles.contentWrapper}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.publishedAt}>
              Senin, 1 September 2022
            </Text>
          </View>
          <Text numberOfLines={3} style={styles.title}>
            Harga iPhone 14, iPhone 14 Pro dan iPhone 14 Pro Max yang Dijual
            Hari Ini
          </Text>
          <Text style={styles.author}>
            Penulis: Adam Kurniawan Margolang (Kelas XI MIA 1)
          </Text>
          <RenderHTML
            baseStyle={{
              color: 'black',
              fontSize: windowWidth * 0.04,
              lineHeight: 30,
              marginTop: '5%',
            }}
            contentWidth={windowWidth}
            source={{
              html: `Phone 14, iPhone 14 Pro dan iPhone 14 Pro Max mulai dijual hari ini, 16 September 2022, setelah sepekan dibuka preorder. Untuk iPhone 14 Plus sendiri baru akan dilempar ke pasaran awal Oktober.
            Kendati iPhone 14, iPhone 14 Pro dan iPhone 14 Pro Max belum hadir resmi di Indonesia, kamu bisa membeli ketiga HP tersebut di sejumlah negara yang sudah mulai menjual.
            
            Tapi setibanya di Indonesia wajib membayar pajak IMEI di Bea Cukai. Ini supaya iPhone 14 series yang dibeli dapat menerima jaringan milik operator seluler di Tanah Air. Berikut daftar harga ketiga ponsel anyar Apple itu jika berniat membelinya.
            
            Harga iPhone 14 dan iPhone 14 Pro di AS
            
            Harga iPhone 14 dan iPhone 14 Pro di AS
            iPhone 14 128GB - USD 829 atau Rp 12,4 juta
            iPhone 14 256GB - USD 929 atau Rp 13,8 juta
            iPhone 14 512GB - USD 1.129 atau Rp 16,8 juta
            
            iPhone 14 Pro 128GB- USD 999 atau Rp 14,9 juta
            iPhone 14 Pro 256GB- USD 1.099 atau Rp 16,4 juta
            iPhone 14 Pro 512GB - USD 1.299 atau Rp 19,3 juta
            iPhone 14 Pro 1TB - USD 1.499 atau Rp 22,3 juta
            
            iPhone 14 Pro Max 128GB- USD 1.099 atau Rp 16,4 juta
            iPhone 14 Pro Max 256GB- USD 1.199 atau Rp 17,9 juta
            iPhone 14 Pro Max 512GB - USD 1.399 atau Rp 20,8 juta
            iPhone 14 Pro Max 1TB - USD 1.599 atau Rp. 23,8 juta
            
            Harga iPhone 14 dan iPhone 14 Pro di Singapura
            
            Harga iPhone 14 dan iPhone 14 Pro di Singapura
            iPhone 14 128 GB SGD 1.299 atau Rp 13,8 juta
            iPhone 14 256 GB SGD 1.469 atau Rp 15,6 juta
            iPhone 14 512 GB SGD 1.799 atau Rp 19,1 juta
            
            iPhone 14 Pro 128 GB SGD 1.649 atau Rp 17,5 juta
            iPhone 14 Pro 256 GB SGD 1.819 atau Rp 19,3 juta
            iPhone 14 Pro 512 GB SGD 2.149 atau Rp 22,8 juta
            iPhone 14 Pro 1TB SGD 2.479 atau Rp 26,3 juta
            
            iPhone 14 Pro Max 128 GB SGD 1.799 atau Rp 19,08 juta
            iPhone 14 Pro Max 256 GB SGD 1.969 atau Rp 20,8 juta
            iPhone 14 Pro Max 512 GB SGD 2.299 atau Rp 24,3 juta
            iPhone 14 Pro Max 1TB SGD 2.629 atau Rp 27,9 juta`,
            }}
            renderersProps={renderersProps}
            domVisitors={{
              onElement: onElement,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: windowHeight,
    paddingBottom: '15%',
    paddingTop: '30%',
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
