import {View, Text, ImageBackground, Dimensions, Image} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
const App = () => {
  const ImageComponent = Animated.createAnimatedComponent(Image);
  const scale = useSharedValue(0);
  const doubleTap = useCallback(() => {
    scale.value = withSpring(
      1,
      undefined,
      isFinished => {
        if (isFinished) {
          scale.value = withDelay(100, withSpring(0));
        }
      },
      [],
    );
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TapGestureHandler onActivated={doubleTap}>
          <Animated.View>
            <ImageBackground
              source={require('./src/assets/night.jpg')}
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageComponent
                source={require('./src/assets/heart.png')}
                style={[
                  {width: 100, height: 100, tintColor: 'red'},
                  animatedStyle,
                ]}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
