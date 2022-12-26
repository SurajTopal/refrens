import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import { Card } from '../../components';

import { styles } from './home-styles';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //fetching characters data
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      setData(response.data.results);
      setIsLoading(false);
    });
  }, []);

  //render header of flatlist
  const renderHeader = () => (
    <View style={styles.subContainer}>
      <Text style={styles.title}>The Rick and Morty API </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(id: number) => id.toString()}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }: any) => {
            const { gender, image, location, name, origin, species, status } =
              item;
            return (
              <Card
                gender={gender}
                image={image}
                location={location}
                name={name}
                origin={origin}
                species={species}
                status={status}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator size="large" style={styles.loadingContainer} />
      )}
    </View>
  );
};

export default Home;
