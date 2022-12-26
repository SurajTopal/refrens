import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#474E68',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 15,
  },
  subContainer: {
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
  image: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 145,
    width: 130,
  },
  text: {
    color: 'white',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 1,
  },
});

export default styles;
