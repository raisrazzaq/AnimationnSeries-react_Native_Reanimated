import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <SafeAreaView>
      <View>
        <MapView
          style={{height: '100%', width: '100%'}}
          initialRegion={{
            latitude: 31.52466960851165,
            longitude: 74.3569886968406,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Map;
