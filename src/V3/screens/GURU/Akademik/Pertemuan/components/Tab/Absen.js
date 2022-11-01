import React, {useCallback} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import Checkbox from '../Checkbox';

import {windowWidth} from '../../../../../../utils';

export default function Absen({item, onChange}) {
  const handleCheckBox = useCallback(
    (absen, namaSiswa) => {
      onChange(prev =>
        prev.map((prevItem, index) => {
          if (index === 0) {
            return {
              ...prevItem,
              absenSiswa: prevItem.absenSiswa.map(data => {
                if (data.nama === namaSiswa) {
                  if (absen === 'hadir') {
                    return {
                      ...data,
                      absen: {
                        hadir: true,
                        sakit: false,
                        izin: false,
                        alfa: false,
                      },
                    };
                  } else if (absen === 'sakit') {
                    return {
                      ...data,
                      absen: {
                        hadir: false,
                        sakit: true,
                        izin: false,
                        alfa: false,
                      },
                    };
                  } else if (absen === 'izin') {
                    return {
                      ...data,
                      absen: {
                        hadir: false,
                        sakit: false,
                        izin: true,
                        alfa: false,
                      },
                    };
                  } else {
                    return {
                      ...data,
                      absen: {
                        hadir: false,
                        sakit: false,
                        izin: false,
                        alfa: true,
                      },
                    };
                  }
                } else {
                  return data;
                }
              }),
            };
          } else {
            return prevItem;
          }
        }),
      );
    },
    [onChange],
  );

  return (
    <FlatList
      data={item.absenSiswa}
      nestedScrollEnabled
      ListHeaderComponent={
        <View style={styles.checkboxHeaderContainer}>
          <View style={styles.leftCheckboxHeader} />
          <View style={styles.rigthCheckboxheader}>
            <Text style={styles.checkBoxLabel}>H</Text>
            <Text style={styles.checkBoxLabel}>S</Text>
            <Text style={styles.checkBoxLabel}>I</Text>
            <Text style={styles.checkBoxLabel}>A</Text>
          </View>
        </View>
      }
      renderItem={({item: {nama, absen, nisn}}) => (
        <View style={styles.absenItem}>
          <Text style={styles.absenNamaSiswa}>
            {nama}
            {'\n'}
            <Text
              style={{
                ...styles.absenNamaSiswa,
                fontSize: windowWidth * 0.03,
                fontStyle: 'italic',
              }}>
              0001232132
            </Text>
          </Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('hadir', nama)}
                checked={absen.hadir}
              />
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('sakit', nama)}
                checked={absen.sakit}
              />
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('izin', nama)}
                checked={absen.izin}
              />
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('alfa', nama)}
                checked={absen.alfa}
              />
            </View>
          </View>
        </View>
      )}
      contentContainerStyle={styles.absenContainer}
    />
  );
}

const styles = StyleSheet.create({
  absenContainer: {
    paddingVertical: '4%',
    paddingHorizontal: '4%',
  },
  absenItem: {
    padding: '4%',
    paddingHorizontal: '3%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: windowWidth * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  absenNamaSiswa: {
    flex: 1,
    color: 'black',
    fontSize: windowWidth * 0.032,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftCheckboxHeader: {
    flex: 1,
  },
  rigthCheckboxheader: {
    flex: 1 / 2,
    flexDirection: 'row',
  },
  checkBoxLabel: {
    flex: 1,
    color: 'black',
    fontSize: windowWidth * 0.03,
  },
  checkBox: {
    flex: 1,
  },
});
