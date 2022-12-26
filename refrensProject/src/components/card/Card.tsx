import React, { FC } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

import TextContainer from '../text-container/TextContainer';

import styles from './Card-styles';

interface ICard {
  //gender : is a required prop that gives gender of a species
  gender: string;
  //image : is a required prop that gives image url
  image: string;
  //location: is a required prop that give last location
  location: { name: string };
  //name : is a required prop that gives name
  name: string;
  //origin : is  a required prop that gives first seeen
  origin: { name: string };
  //species : is a required prop that gives species type
  species: string;
  //status : is a required prop that tell status about species like : dead , alive
  status: string;
}

const Card: FC<ICard> = (props: ICard) => {
  const { gender, image, location, status, name, origin, species } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => Alert.alert(name)}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <TextContainer
          header={true}
          title={name}
          subTitle={`${status}-${species}`}
        />
        <TextContainer title="Last Known Location:" subTitle={location.name} />
        <TextContainer title="First seen in:" subTitle={origin.name} />
        <Text style={styles.text}>Gender - {gender}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
