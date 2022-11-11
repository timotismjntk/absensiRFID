/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useCallback, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// import component
import StatusAbsen from '../../components/StatusAbsen';

import {windowWidth, windowHeight} from '../../utils';

import {
  clearMulaiAbsenSiswa,
  mulaiAbsen_QRCODE_Siswa,
} from '../../redux/reducer/SISWA/absen';
import {
  clearMulaiAbsenGuru,
  mulaiAbsen_QRCODE_Guru,
} from '../../redux/reducer/GURU/absen';

export default function QrReader({route, navigation}) {
  const dispatch = useDispatch();
  const cameraRef = useRef(null);
  const [output, setOutput] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isFocused = useIsFocused();

  const {authSiswa = {}} = useSelector(state => state.authSiswa) || {};
  const {authGuru = {}} = useSelector(state => state.authGuru) || {};

  const {absenGuru = {}, isLoadingAbsenGuru = false} =
    useSelector(state => state.absenGuru) || {};
  const {absenSiswa = {}, isLoadingAbsenSiswa = false} =
    useSelector(state => state.absenSiswa) || {};

  const onBarCodeRead = useCallback(
    async camera => {
      try {
        if (output.length === 0) {
          setOutput(camera.data);
          if (image.length === 0) {
            const data = await cameraRef.current.takePictureAsync({
              quality: 0.1,
              fixOrientation: true,
              forceUpOrientation: true,
              pauseAfterCapture: true,
            });
            setImage(data.uri);
            setShowModal(true);
            if (authSiswa?.status === 'berhasil') {
              dispatch(
                mulaiAbsen_QRCODE_Siswa({
                  pengguna_id: authSiswa?.data?.siswa?.siswa_id,
                  jenis_absen: route?.params?.jenis || '',
                  kategori: 'Siswa',
                  url: camera.data,
                }),
              );
            }
            if (authGuru?.status === 'berhasil') {
              dispatch(
                mulaiAbsen_QRCODE_Guru({
                  pengguna_id: authGuru?.data?.guru?.sdm_id,
                  jenis_absen: route?.params?.jenis || '',
                  kategori: 'Guru',
                  url: camera.data,
                }),
              );
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    [image, route, output, authGuru, authSiswa],
  );

  if (isFocused) {
    return (
      <RNCamera
        ref={cameraRef}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        onBarCodeRead={onBarCodeRead}
        detectedImageInEvent
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <StatusAbsen
          open={showModal}
          close={() => {
            if (
              absenGuru?.status === 'berhasil' ||
              absenSiswa?.status === 'berhasil'
            ) {
              navigation.goBack();
              setShowModal(false);
              dispatch(clearMulaiAbsenGuru());
              dispatch(clearMulaiAbsenSiswa());
            } else {
              setShowModal(false);
              dispatch(clearMulaiAbsenGuru());
              dispatch(clearMulaiAbsenSiswa());
              setOutput('');
              setImage('');
            }
          }}
          isLoading={isLoadingAbsenGuru || isLoadingAbsenSiswa}
          jenis={route?.params?.jenis || ''}
          status={
            absenGuru?.status?.length > 0
              ? absenGuru?.status
              : absenSiswa?.status?.length > 0
              ? absenSiswa?.status
              : ''
          }
          qrRef={cameraRef}
        />
        <BarcodeMask
          width={windowWidth * 0.8}
          height={windowWidth * 0.8}
          showAnimatedLine={true}
          outerMaskOpacity={0.3}
          edgeBorderWidth={4}
          edgeWidth={35}
          lineAnimationDuration={800}
          edgeHeight={35}
        />
      </RNCamera>
    );
  } else {
    return null;
  }
}
