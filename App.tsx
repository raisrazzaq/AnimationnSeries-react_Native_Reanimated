import {View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);

  const animated1Y = useSharedValue(0);
  const animated2Y = useSharedValue(0);
  const animated3Y = useSharedValue(0);
  const animated4Y = useSharedValue(0);
  useEffect(() => {
    if (selectedTab == 0) {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(0, {duration: 500});
      }, 500);
      setTimeout(() => {
        animated1Y.value = withTiming(-100, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animated1Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    } else if (selectedTab == 1) {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(100, {duration: 500});
      }, 500);
      setTimeout(() => {
        animated2Y.value = withTiming(-100, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animated2Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    } else if (selectedTab == 2) {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(200, {duration: 500});
      }, 500);
      setTimeout(() => {
        animated3Y.value = withTiming(-100, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animated3Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    } else {
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(300, {duration: 500});
      }, 500);
      setTimeout(() => {
        animated4Y.value = withTiming(-100, {duration: 500});
        animatedY.value = withTiming(-100, {duration: 500});
        setTimeout(() => {
          animated4Y.value = withTiming(0, {duration: 500});
          animatedY.value = withTiming(0, {duration: 500});
        }, 500);
      }, 1000);
    }
  }, [selectedTab]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });
  const animateBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animated1Y.value}],
    };
  });

  const animateBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animated2Y.value}],
    };
  });
  const animateBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animated3Y.value}],
    };
  });
  const animateBtnStyle4 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animated4Y.value}],
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <View
        style={{
          width: '100%',
          height: 80,
          elevation: 5,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
          alignContent: 'center',
          bottom: 0,
        }}>
        <Animated.View
          style={[
            {
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'orange',
              position: 'absolute',
            },
            animatedStyle,
          ]}></Animated.View>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animateBtnStyle1,
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('./src/assets/home.png')}
            style={{height: 40, width: 40}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animateBtnStyle2,
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('./src/assets/cart.png')}
            style={{height: 40, width: 40, tintColor: 'gray'}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animateBtnStyle3,
          ]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('./src/assets/favourite.png')}
            style={{height: 40, width: 40, tintColor: 'gray'}}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[
            {
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animateBtnStyle4,
          ]}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('./src/assets/profile.png')}
            style={{height: 40, width: 40, tintColor: 'gray'}}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default App;
