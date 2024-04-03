import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const [count, setCount] = useState(0);
  const animatedY = useSharedValue(0);
  const animateX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(0);
  const [btnClicked, setBtnClicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animateX.value},
        {translateY: animatedY.value},
        {scale: scale.value},
      ],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale2.value}],
    };
  });
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('./src/assets/sofa3.jpg')}
        style={{height: 400, width: '100%'}}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
          marginTop: 10,
          marginLeft: 10,
        }}>
        Comfy Sofa
      </Text>
      <Text style={{fontSize: 16, padding: 7}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio dolore
        voluptatum iste ipsam aperiam aspernatur minus voluptate temporibus
        porro laboriosam eos voluptas, illo nam unde dolorem quam reprehenderit
        recusandae? Distinctio pariatur commodi exercitationem quia. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Ex impedit repellendus
        consectetur at sint facilis voluptatibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae magni quam optio ut vero soluta
        obcaecati minus quae ipsum quisquam, cupiditate maiores distinctio.
      </Text>
      <Animated.View
        style={[
          {
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
          animatedStyle,
        ]}>
        <Text style={{color: 'white', fontSize: 16}}>+1</Text>
      </Animated.View>
      <TouchableOpacity
        disabled={btnClicked}
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          if (animateX.value == 0) {
            setBtnClicked(true);
            scale.value = 1;
            animateX.value = withTiming(150, {duration: 1500});
            animatedY.value = withTiming(-620, {duration: 1500});
            setTimeout(() => {
              scale2.value = withSpring(1.5);
              setCount(count + 1);
              scale.value = 0;
              animateX.value = withTiming(0, {duration: 1500});
              animatedY.value = withTiming(0, {duration: 1500});
              setTimeout(() => {
                scale2.value = withSpring(1);
                setBtnClicked(false);
              }, 150);
            }, 1500);
          }
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          Add To Cart
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 70,
          width: 70,
          backgroundColor: 'white',
          borderRadius: 35,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 15,
          right: 15,
        }}>
        <Image
          source={require('./src/assets/bag.png')}
          style={{width: 40, height: 40}}
        />
        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              backgroundColor: 'red',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              right: 0,
            },
            animatedStyle2,
          ]}>
          <Text style={{color: 'white', fontSize: 16}}>{count}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default App;
