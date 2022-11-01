import {Dimensions} from 'react-native';
import {
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import PushNotification from 'react-native-push-notification';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const windowHeight = height > width ? height : width;
const windowWidth = width < height ? width : height;

const horizontalTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, layouts, next}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.1],
        }),
      },
    };
  },
};

const cancelAllLocalNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};

const removeAllDeliveredNotifications = () => {
  PushNotification.removeAllDeliveredNotifications();
};

const subscribeFromTopic = topics => {
  PushNotification.subscribeToTopic(topics);
};

const unsubscribeFromTopic = topics => {
  PushNotification.unsubscribeFromTopic(topics);
};

module.exports = {
  windowHeight,
  windowWidth,
  horizontalTransition,
  cancelAllLocalNotifications,
  removeAllDeliveredNotifications,
  subscribeFromTopic,
  unsubscribeFromTopic,
  scale,
  verticalScale,
  moderateScale,
};
