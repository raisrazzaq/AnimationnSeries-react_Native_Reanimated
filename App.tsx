import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const animatedImgWidth = useSharedValue(70);
  const animatedImgHeight = useSharedValue(70);
  const animatedImgY = useSharedValue(0);
  const animatedScale = useSharedValue(0);
  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [{translateY: animatedImgY.value}],
    };
  });
  const animatedBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedScale.value}],
    };
  });
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
  return (
    <View style={{flex: 1, backgroundColor: '#1c1c1c'}}>
      <AnimatedBtn
        style={[
          {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          },
          animatedBtnStyle,
        ]}
        onPress={() => {
          animatedScale.value = withTiming(0, {duration: 500});
          animatedImgWidth.value = withTiming(70, {duration: 500});
          animatedImgHeight.value = withTiming(70, {duration: 500});
          animatedImgY.value = withTiming(0, {duration: 500});
        }}>
        <Image
          source={require('./src/assets/cross.png')}
          style={{tintColor: 'white', width: 24, height: 24}}
        />
      </AnimatedBtn>
      <TouchableOpacity
        onPress={() => {
          if (animatedImgWidth.value == 70) {
            animatedScale.value = withTiming(1, {duration: 500});
            animatedImgWidth.value = withTiming(300, {duration: 500});
            animatedImgHeight.value = withTiming(300, {duration: 500});
            animatedImgY.value = withTiming(150, {duration: 500});
          }
        }}>
        <AnimatedImage
          source={require('./src/assets/search.png')}
          style={[
            {
              width: 70,
              height: 70,
              tintColor: 'white',
              marginTop: 50,
              marginLeft: 10,
              resizeMode: 'contain',
            },
            animatedImgStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
