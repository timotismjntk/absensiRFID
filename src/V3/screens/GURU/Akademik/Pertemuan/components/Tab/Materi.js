import React, {useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth} from '../../../../../../utils';

export default function Materi() {
  const [uploadFile, setUploadFile] = useState([
    {
      id: 1,
      nama_file: 'Jenis Trigonometri (PDF)',
      pelajaran: 'Matematika',
      pengajar: 'Budi Santoso, S.Pd',
      pertemuan_ke: 2,
      hari: 'Senin, 3 Oktober 2022',
    },
  ]);

  return (
    <FlatList
      data={uploadFile}
      renderItem={({item}) => (
        <View style={styles.item}>
          <View style={styles.itemWrapper}>
            <Text style={styles.nama_file}>{item.nama_file}</Text>
            <Text style={styles.pelajaran}>Pelajaran: {item.pelajaran}</Text>
            <Text style={styles.pengajar}>Pengajar: {item.pengajar}</Text>
            <Text style={styles.pertemuan_ke}>
              Pertemuan ke: {item.pertemuan_ke}
            </Text>
            <Text style={styles.hari}>Hari: {item.hari}</Text>
          </View>
          <View style={styles.itemIconContainer}>
            <RectButton style={styles.iconDownload}>
              <MaterialIcons
                name="cloud-download"
                size={windowWidth * 0.06}
                color="white"
              />
            </RectButton>
            <RectButton style={styles.iconDelete}>
              <MaterialIcons
                name="delete"
                size={windowWidth * 0.06}
                color="white"
              />
            </RectButton>
          </View>
        </View>
      )}
      ListFooterComponent={
        <RectButton style={styles.buttonUpload}>
          <MaterialIcons
            name="file-upload"
            size={windowWidth * 0.07}
            color="white"
          />
          <Text style={styles.buttonUploadLabel}>Upload File Materi</Text>
        </RectButton>
      }
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    paddingVertical: '5%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: windowWidth * 0.01,
    marginBottom: '5%',
  },
  itemWrapper: {
    flex: 1,
    paddingRight: '3%',
  },
  nama_file: {
    color: 'black',
    fontSize: windowWidth * 0.042,
    fontWeight: 'bold',
  },
  pelajaran: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  pengajar: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  pertemuan_ke: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  hari: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  itemIconContainer: {
    justifyContent: 'space-around',
  },
  iconDownload: {
    backgroundColor: '#009A0F',
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.014,
    elevation: 5,
  },
  iconDelete: {
    backgroundColor: '#C60000',
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.014,
    elevation: 5,
  },
  buttonUploadLabel: {
    color: 'white',
    fontSize: windowWidth * 0.036,
    fontFamily: 'OpenSans-SemiBold',
  },
  buttonUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '2%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: windowWidth * 0.02,
    backgroundColor: '#E36D00',
    elevation: 10,
    marginTop: '8%',
  },
});
