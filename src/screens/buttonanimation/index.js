import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const App = () => {
  const width = useSharedValue(0);
  const yValue = useSharedValue(60);
  const iconScale = useSharedValue(0);
  const closeIcon = useSharedValue(30);
  const uploadIcon = useSharedValue(0);

  const menuStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      transform: [{translateY: yValue.value}],
    };
  });
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconScale.value}],
    };
  });
  const closeStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: closeIcon.value}],
    };
  });
  const uploadStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: uploadIcon.value}],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={{height: 50, width: '100%'}}>
        <Animated.View
          style={[
            {
              width: 300,
              height: 70,
              backgroundColor: 'black',
              alignSelf: 'center',
              borderRadius: 35,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            },
            menuStyle,
          ]}>
          <Animated.Image
            source={require('./src/assets/home.png')}
            style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
          />
          <Animated.Image
            source={require('./src/assets/cart.png')}
            style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
          />
          <Animated.Image
            source={require('./src/assets/favourite.png')}
            style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
          />
          <Animated.Image
            source={require('./src/assets/profile.png')}
            style={[{width: 30, height: 30, tintColor: 'white'}, iconStyle]}
          />
        </Animated.View>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'black',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (width.value == 0) {
              width.value = withTiming(300, {duration: 300});
              yValue.value = withTiming(-50, {duration: 300});
              iconScale.value = withTiming(1, {duration: 400});
            } else {
              yValue.value = withTiming(0, {duration: 100});
              width.value = withTiming(0, {duration: 300});
              yValue.value = withTiming(70, {duration: 300});
            }
          }}>
          <Image
            source={require('./src/assets/upload.png')}
            style={{width: 30, height: 30, tintColor: 'white'}}
          />
          <Image
            source={require('./src/assets/cross.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
              position: 'absolute',
              bottom: -30,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
