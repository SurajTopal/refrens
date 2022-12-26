import React, { FC } from 'react';
import { View, Text } from 'react-native';

import StatusBar from '../status-bar/StatusBar';

import styles from './textContainer-styles';

interface ITextContainer {
  //header : is an optional prop that give header  
  header?: boolean;
  //subTitle : is a required prop that give subTitle
  subTitle: string;
  //title : is a required prop that give title
  title: string;
}

const TextContainer: FC<ITextContainer> = (props: ITextContainer) => {
  const { header = false, subTitle, title } = props;
  const status = subTitle.split('-');

  const renderHeader = () => (
    <>
      <Text numberOfLines={1} style={styles.header}>{title}</Text>
      <View style={styles.container}>
        <StatusBar statusType={status[0]} />
        <Text style={styles.text}>{subTitle}</Text>
      </View>
    </>
  );

  const renderTitle = () => (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{subTitle}</Text>
    </>
  );

  return <View>{header ? renderHeader() : renderTitle()}</View>;
};

export default TextContainer;
