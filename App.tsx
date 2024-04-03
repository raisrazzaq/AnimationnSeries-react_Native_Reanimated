import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const App = () => {
  const spin = useSharedValue(0);
  const frontStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [{rotateY: withTiming(`${spinValue}deg`)}],
    };
  });
  const backStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [{rotateY: withTiming(`${spinValue}deg`)}],
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Animated.View
          style={[
            {
              height: 400,
              width: 250,
              borderRadius: 16,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            },
            frontStyle,
          ]}>
          <Image
            source={require('./src/assets/night.jpg')}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              height: 400,
              width: 250,
              backgroundColor: '#FF8787',
              borderRadius: 16,
              alignItems: 'baseline',
              justifyContent: 'center',
              backfaceVisibility: 'hidden',
            },
            backStyle,
          ]}>
          <Image
            source={require('./src/assets/sofa3.jpg')}
            style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </Animated.View>
        <Text
          style={{
            marginTop: 50,
            borderWidth: 1,
            padding: 10,
            color: 'black',
            borderRadius: 10,
          }}
          onPress={() => {
            spin.value = spin.value == 0 ? 1 : 0;
          }}>
          Flip Card
        </Text>
      </View>
    </View>
  );
};

export default App;
