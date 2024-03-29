import {View, Text, Dimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
const SliderItem = ({image, index, currentIndex}) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = currentIndex;
  }, [currentIndex]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value == index ? withSpring(1.5) : withSpring(0.5)},
      ],
    };
  });

  return (
    <Animated.Views
      style={[
        {
          width: Dimensions.get('screen').width - 40,
          height: Dimensions.get('screen').height,
          justifyContent: 'center',
          alignItems: 'center',
        },
        animatedStyle,
      ]}>
      <Image source={image} style={{height: '50%', width: '50%'}} />
    </Animated.Views>
  );
};

export default SliderItem;
