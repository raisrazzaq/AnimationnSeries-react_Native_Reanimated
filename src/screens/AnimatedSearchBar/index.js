import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const [value, setValue] = useState(0);
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 1
          ? withTiming(300, {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 300,
            height: 50,
            backgroundColor: '#E7E7E7',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            // padding: 5,
          },
          animatedStyle,
        ]}>
        <TextInput style={{width: '85%'}} placeholder={'Search here...'} />
        <TouchableOpacity
          onPress={() => {
            if (animation.value == 1) {
              animation.value = 0;
              setValue(0);
            } else {
              animation.value = 1;
              setValue(1);
            }
          }}>
          <Image
            source={
              value == 1
                ? require('./src/assets/cross.png')
                : require('./src/assets/search.png')
            }
            style={{width: value == 1 ? 20 : 30, height: value == 1 ? 20 : 30}}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default App;
