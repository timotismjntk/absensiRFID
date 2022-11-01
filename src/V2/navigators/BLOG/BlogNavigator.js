/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import HomeBlog from '../../screens/BLOG/Home';
import Blog from '../../screens/BLOG/Blog';
import DetailBlog from '../../screens/BLOG/DetailBlog';

const Stack = createStackNavigator();
import {horizontalTransition, windowWidth, windowHeight} from '../../utils';

export default function BlogNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'BLOG',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
            top: -windowHeight * 0.01,
            fontSize: windowWidth * 0.042,
          },
          headerLeftContainerStyle: {
            top: -windowHeight * 0.01,
          },
          headerStyle: {
            backgroundColor: '#3B3B3B',
            borderBottomLeftRadius: windowWidth * 0.1,
            borderBottomRightRadius: windowWidth * 0.1,
          },
          headerStatusBarHeight: windowHeight * 0.05,
        }}
        name="HomeBlog"
        component={HomeBlog}
      />
      <Stack.Screen
        options={({route}) => ({
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: route?.params?.title || 'BLOG',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
            top: -windowHeight * 0.01,
            fontSize: windowWidth * 0.042,
          },
          headerLeftContainerStyle: {
            top: -windowHeight * 0.01,
          },
          headerStyle: {
            backgroundColor: '#3B3B3B',
            borderBottomLeftRadius: windowWidth * 0.1,
            borderBottomRightRadius: windowWidth * 0.1,
          },
          headerStatusBarHeight: windowHeight * 0.05,
        })}
        name="Blog"
        component={Blog}
      />
      <Stack.Screen
        options={({route}) => ({
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: route?.params?.title || 'DETAIL BLOG',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
            top: -windowHeight * 0.01,
            fontSize: windowWidth * 0.042,
          },
          headerLeftContainerStyle: {
            top: -windowHeight * 0.01,
          },
          headerShadowVisible: false,
          headerTransparent: true,
          headerBackgroundContainerStyle: {
            overflow: 'hidden',
            backgroundColor: '#3B3B3B',
            borderBottomLeftRadius: windowWidth * 0.1,
            borderBottomRightRadius: windowWidth * 0.1,
            height: windowHeight * 0.1,
            position: 'absolute',
            top: windowHeight * 0.03,
          },
          headerStatusBarHeight: windowHeight * 0.05,
        })}
        name="DetailBlog"
        component={DetailBlog}
      />
    </Stack.Navigator>
  );
}
