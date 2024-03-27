import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.StartX = x.value;
      c.StartY = y.value;
    },
    onActive: (e, c) => {
      x.value = c.StartX + e.translationX;
      y.value = c.StartY + e.translationY;
    },
    onEnd: (e, c) => {
      x.value = withTiming(0, {duration: 2000});
      y.value = withTiming(0, {duration: 2000});
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <GestureHandlerRootView>
      <View style={{flex: 1, marginTop: 50, marginLeft: 10}}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'pink',
              },
              animatedStyle,
            ]}></Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
