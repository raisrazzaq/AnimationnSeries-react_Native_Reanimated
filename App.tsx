import {View, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import SliderItem from './src/screens/sliderItem';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal
        onScroll={e => {
          const X = e.nativeEvent.contentOffset.x;
          setCurrentIndex((X / Dimensions.get('screen').width).toFixed(0));
        }}
        data={[
          require('./src/assets/night.jpg'),
          require('./src/assets/table.jpg'),
          require('./src/assets/sofa3.jpg'),
          require('./src/assets/modernroom.jpg'),
        ]}
        renderItem={({item, index}) => {
          return (
            <SliderItem
              image={item}
              index={index}
              currentIndex={currentIndex}
            />
          );
        }}
      />
    </View>
  );
};

export default App;
