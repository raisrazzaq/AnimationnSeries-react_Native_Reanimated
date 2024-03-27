import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const borderRadius = interpolate(animation.value, [1, 0], [0, 100]);
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 0],
      ['pink', 'purple'],
    );
    return {
      width: width,
      height: width,
      backgroundColor,
      borderRadius,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'pink',
          },
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          if (clicked) {
            animation.value = withTiming(1, {duration: 1000});
          } else {
            animation.value = withTiming(0, {duration: 1000});
          }
          setClicked(!clicked);
        }}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
