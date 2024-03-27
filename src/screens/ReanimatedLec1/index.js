import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    // return {transform: [{translateX: animation.value}]};
    // return {transform: [{rotate: `${animation.value}deg`}]};
    return {transform: [{scale: animation.value}]};
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'pink'},
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
            animation.value = withTiming(1, {duration: 600});
          } else {
            animation.value = withTiming(0.5, {duration: 600});
          }
          setClicked(!clicked);
        }}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
