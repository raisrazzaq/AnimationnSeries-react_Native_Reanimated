import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';

const SearchPlaces = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
    // Perform your search or update search results based on the query
    console.log('Perform search for:', query);
  };

  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
            }}
            placeholder="Search"
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPlaces;
