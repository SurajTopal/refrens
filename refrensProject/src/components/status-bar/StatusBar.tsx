import { View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';

import styles from './statusBar-styles';

interface IStatusBar {
  //statusType : is a required prop that tell status of Species like Dead , Alive
  statusType: string;
}

const StatusBar: FC<IStatusBar> = (props: IStatusBar) => {
  const { statusType } = props;
  const [containerStyle, setContainerStyle] = useState({
    backgroundColor: 'green',
  });

  //setstyle of status bar
  useEffect(() => {
    switch (statusType) {
      case 'Dead':
        setContainerStyle({ backgroundColor: 'red' });
        break;
      case 'unknown':
        setContainerStyle({ backgroundColor: 'grey' });
        break;
      default:
        setContainerStyle({ backgroundColor: 'green' });
    }
  }, []);

  return <View style={[styles.container, containerStyle]}/>;
};

export default StatusBar;
