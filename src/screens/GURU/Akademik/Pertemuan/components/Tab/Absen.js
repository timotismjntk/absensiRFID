import React, {useCallback} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import Checkbox from '../Checkbox';

import {windowWidth} from '../../../../../../utils';

export default function Absen({data, onChange}) {
  const handleCheckBox = useCallback(
    (kehadiran, namaSiswa) => {
      onChange(prev =>
        prev.map((prevItem, index) => {
          if (index === 0) {
            return {
              ...prevItem,
              absenSiswa: prevItem.absenSiswa.map(item => {
                if (item?.nama === namaSiswa) {
                  if (kehadiran === 'H') {
                    return {
                      ...item,
                      kehadiran: {
                        ...item.kehadiran,
                        H: true,
                        S: false,
                        I: false,
                        A: false,
                      },
                    };
                  } else if (kehadiran === 'S') {
                    return {
                      ...item,
                      kehadiran: {
                        ...item.kehadiran,
                        H: false,
                        S: true,
                        I: false,
                        A: false,
                      },
                    };
                  } else if (kehadiran === 'I') {
                    return {
                      ...item,
                      kehadiran: {
                        ...item.kehadiran,
                        H: false,
                        S: false,
                        I: true,
                        A: false,
                      },
                    };
                  } else if (kehadiran === 'A') {
                    return {
                      ...item,
                      kehadiran: {
                        ...item.kehadiran,
                        H: false,
                        S: false,
                        I: false,
                        A: true,
                      },
                    };
                  }
                } else {
                  return item;
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
      data={data}
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
      renderItem={({item: {nama, kehadiran, nisn}}) => (
        <View style={styles.absenItem}>
          <Text style={styles.absenNamaSiswa}>
            {nama || ''}
            {'\n'}
            <Text style={[styles.absenNamaSiswa, styles.nisn]}>
              {nisn || ''}
            </Text>
          </Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('H', nama)}
                checked={kehadiran?.H}
              />
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('S', nama)}
                checked={kehadiran?.S}
              />
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('I', nama)}
                checked={kehadiran?.I}
              />
            </View>
            <View style={styles.checkBox}>
              <Checkbox
                onChange={() => handleCheckBox('A', nama)}
                checked={kehadiran?.A}
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
  nisn: {
    fontSize: windowWidth * 0.03,
    fontStyle: 'italic',
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
