import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
  const animatedWith = useSharedValue(250);
  const animatedRadius = useSharedValue(20);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWith.value,
      borderRadius: animatedRadius.value,
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedBtn
        style={[
          {
            width: 250,
            height: 50,
            backgroundColor: 'purple',
            borderRadius: 20,
          },
          animatedStyle,
        ]}
        onPress={() => {
          // Toggle animation
          if (animatedWith.value == 250) {
            animatedWith.value = withTiming(50, {duration: 500});
            animatedRadius.value = withTiming(25, {duration: 500});
          } else {
            animatedWith.value = withTiming(250, {duration: 500});
            animatedRadius.value = withTiming(20, {duration: 500});
          }
        }}></AnimatedBtn>
    </View>
  );
};

export default App;
