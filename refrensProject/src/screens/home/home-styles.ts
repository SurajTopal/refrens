import { TextStyle, StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  loadingContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  subContainer: {
    alignItems:'center',
    backgroundColor: 'white',
    justifyContent:'center',
    marginTop:10,
    paddingVertical:10,
  },
  title: {
    color:'black',
    fontSize:24,
  },
  loadingContainer: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
  },
});

export { styles };
