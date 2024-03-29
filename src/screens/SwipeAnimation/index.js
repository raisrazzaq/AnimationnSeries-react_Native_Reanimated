/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const App = () => {
  const animation = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.StartX = animation.value;
    },
    onActive: (event, ctx) => {
      animation.value = ctx.StartX + event.translationX;
    },
    onEnd: (event, ctx) => {
      animation.value = withSpring(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  const animatedIconLeft = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value > 60 ? withSpring(2) : withSpring(1)},
      ],
    };
  });
  const animatedIconRight = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value > -50 ? withSpring(2) : withSpring(1)},
      ],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={{
              backgroundColor: 'green',
              width: '100%',
              height: 100,
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 10,
            }}>
            <Animated.View
              style={[
                {width: 14, height: 14, marginLeft: 20},
                animatedIconLeft,
              ]}>
              <Image
                source={require('./src/assets/drop.png')}
                style={{width: '100%', height: '100%', tintColor: 'white'}}
              />
            </Animated.View>
            <Animated.View
              style={[
                {width: 14, height: 14, marginRight: 20},
                animatedIconRight,
              ]}>
              <Image
                source={require('./src/assets/drop.png')}
                style={{width: '100%', height: '100%', tintColor: 'white'}}
              />
            </Animated.View>
            <Animated.View
              style={[
                {
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'pink',
                  position: 'absolute',
                  borderRadius: 10,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
                animatedStyle,
              ]}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'purple',
                  borderRadius: 25,
                  marginLeft: 20,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32,
                  }}>
                  R
                </Text>
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 30, fontWeight: '700'}}>
                  Demo Title
                </Text>
                <Text style={{fontSize: 16}}>Demo Title</Text>
              </View>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
