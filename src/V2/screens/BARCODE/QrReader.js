/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useCallback} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

// import component
import StatusAbsen from '../../components/StatusAbsen';

import {windowWidth, windowHeight} from '../../utils';

export default function QrReader({route, navigation}) {
  const cameraRef = useRef(null);
  const [output, setOutput] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');

  const onBarCodeRead = useCallback(
    async camera => {
      try {
        if (output.length === 0) {
          setOutput(camera.data.split('\n')[0]);
          if (image.length === 0) {
            const data = await cameraRef.current.takePictureAsync({
              quality: 1,
              fixOrientation: true,
              forceUpOrientation: true,
              pauseAfterCapture: true,
            });
            setImage(data.uri);
            setShowModal(true);
            setStatus('berhasil');
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    [image, output],
  );

  return (
    <RNCamera
      ref={cameraRef}
      captureAudio={false}
      style={{flex: 1}}
      type={RNCamera.Constants.Type.back}
      autoFocus={RNCamera.Constants.AutoFocus.on}
      onBarCodeRead={onBarCodeRead}
      rectOfInterest={{x: 0.25, y: 0.25, width: 0.5, height: 0.5}}
      cameraViewDimensions={{
        width: windowWidth,
        height: windowHeight,
      }}
      onGoogleVisionBarcodesDetected
      detectedImageInEvent={true}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      <StatusAbsen
        open={showModal}
        close={() => {
          if (status === 'berhasil') {
            navigation.goBack();
            setShowModal(false);
          } else {
            setShowModal(false);
          }
        }}
        jenis={route.params.jenis}
        status={status}
      />
      {!showModal ? (
        <BarcodeMask
          width={windowWidth * 0.8}
          height={windowWidth * 0.7}
          showAnimatedLine={true}
          outerMaskOpacity={0.8}
          edgeBorderWidth={4}
          edgeWidth={35}
          lineAnimationDuration={800}
          edgeHeight={35}
        />
      ) : (
        <BarcodeMask
          width={windowWidth * 0.8}
          height={windowWidth * 0.7}
          showAnimatedLine={false}
          outerMaskOpacity={0.8}
          edgeBorderWidth={4}
          edgeWidth={35}
          lineAnimationDuration={800}
          edgeHeight={35}
        />
      )}
    </RNCamera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topChild: {
    height: '45%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  centerChild: {
    height: '38%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftCenterChild: {
    height: '100%',
    width: '15%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  rightCenterChild: {
    height: '100%',
    width: '15%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  bottomChild: {
    height: '36%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 70,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  barcodeArea: {
    height: '100%',
    width: '60%',
    overflow: 'hidden',
    borderRadius: 15, // center box
  },
});
