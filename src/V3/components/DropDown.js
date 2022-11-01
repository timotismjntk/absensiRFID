import React, {useMemo} from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomTextInput from './CustomTextInput';

import {windowWidth} from '../utils';

export default function Dropdown({
  list,
  type,
  selectedValue,
  setValue,
  placeholder,
  openDate,
  setOpenDate,
  selectedDate,
  setSelectedDate,
  arrowUpFn,
  arrowDownFn,
}) {
  const generatedYears = useMemo(() => {
    return Array.from({length: 5}, (_, idx) =>
      String(new Date().getFullYear() - idx),
    );
  }, []);

  const generatedMonths = useMemo(() => {
    const month = new Intl.DateTimeFormat(['id'], {month: 'long'});
    return Array.from({length: 12}, (_, idx) =>
      String(
        month.format(new Date(`${new Date().getFullYear()}-${idx + 1}-01`)),
      ),
    );
  }, []);

  const generatedDays = useMemo(() => {
    return ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  }, []);

  const memoizedList = useMemo(() => {
    if (type === 'year') {
      return generatedYears;
    } else if (type === 'month') {
      return generatedMonths;
    } else if (type === 'day') {
      return generatedDays;
    } else {
      return list;
    }
  }, [generatedDays, generatedMonths, generatedYears, list, type]);

  if (type === 'date') {
    return (
      <Pressable style={styles.container} onPress={() => setOpenDate(true)}>
        <Text style={styles.datePlaceholder}>
          {selectedDate || placeholder}
        </Text>
        <DatePicker
          modal
          open={openDate}
          date={new Date()}
          locale="id"
          androidVariant="iosClone"
          title="Pilih Tanggal"
          mode="date"
          onConfirm={date => {
            setOpenDate(false);
            setSelectedDate(
              date.toLocaleDateString('id')?.split('/')?.reverse()?.join('-'),
            );
          }}
          onCancel={() => {
            setOpenDate(false);
            setSelectedDate('');
          }}
        />
      </Pressable>
    );
  }

  if (type === 'number') {
    return (
      <View style={styles.numberContainer}>
        <CustomTextInput
          value={selectedValue}
          setValue={setValue}
          placeholder={placeholder}
          keyboardType="numeric"
          style={styles.numberInput}
        />
        <View style={styles.numberLeftContainer}>
          <MaterialIcons
            name="arrow-drop-up"
            size={windowWidth * 0.05}
            color="black"
            onPress={arrowUpFn}
          />
          <MaterialIcons
            name="arrow-drop-down"
            size={windowWidth * 0.05}
            color="black"
            onPress={arrowDownFn}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        mode="dropdown"
        dropdownIconColor="white"
        onValueChange={itemValue => {
          if (placeholder !== itemValue) {
            setValue(itemValue);
          } else {
            setValue('');
          }
        }}>
        {type !== 'year' && (
          <Picker.Item
            label={placeholder}
            style={styles.titlePlaceHolder}
            value={placeholder}
          />
        )}
        {memoizedList?.length > 0 &&
          memoizedList.map((item, index) => (
            <Picker.Item
              key={index}
              label={item}
              style={styles.item}
              value={item}
            />
          ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: windowWidth * 0.12,
    justifyContent: 'center',
    marginTop: '3%',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.02,
    paddingVertical: '2.5%',
    marginBottom: '3%',
    borderWidth: 0.8,
  },
  titlePlaceHolder: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Regular',
  },
  item: {
    color: 'black',
    width: '100%',
    flex: 1,
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Regular',
  },
  datePlaceholder: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: '4%',
  },
  numberContainer: {
    width: '100%',
    height: windowWidth * 0.12,
    marginTop: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.02,
    marginBottom: '3%',
    borderWidth: 0.8,
    flexDirection: 'row',
  },
  numberInput: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: '4%',
    flex: 1,
  },
  numberLeftContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: '2%',
    paddingVertical: '2.5%',
  },
  arrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
