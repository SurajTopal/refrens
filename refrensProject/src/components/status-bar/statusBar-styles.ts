import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 4,
    height: 8,
    marginRight:3,
    width: 8,
  },
});

export default styles;
