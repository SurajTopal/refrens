import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  header: TextStyle;
  text: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems:'center',
    flexDirection: 'row',
  },
  header: {
    color: 'white',
    fontSize: 20,
    lineHeight: 22,
    maxWidth:180,
  },
  text: {
    color: 'white',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 2,
  },
  title: {
    color: 'grey',
    fontSize: 12,
    lineHeight: 14,
  },
});

export default styles;
